/**
 * DKFile 统一图片压缩服务
 * 供所有业务模块调用，解决大图片上传超时问题
 * 
 * 使用方法：
 *   const compressor = new DKFileImageCompressor();
 *   const compressedFile = await compressor.compressImage(file);
 * 
 * 或使用默认实例：
 *   const compressedFile = await DKFileImageCompressor.compress(file);
 */

class DKFileImageCompressor {
    constructor(options = {}) {
        // 默认配置
        this.maxDimension = options.maxDimension || 1600;  // 最大边长（px）
        this.quality = options.quality || 0.75;  // 压缩质量 0-1
        this.minCompressSize = options.minCompressSize || 300 * 1024;  // 小于此大小不压缩（300KB）
        this.maxFileSize = options.maxFileSize || 5 * 1024 * 1024;  // 最大文件大小（5MB）
        
        // 支持的压缩类型
        this.compressibleTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        // 跳过的类型（动图等）
        this.skipTypes = ['image/gif', 'image/bmp'];
    }

    /**
     * 压缩单个图片文件
     * @param {File} file - 原始图片文件
     * @returns {Promise<File>} - 压缩后的文件（如果压缩失败或不需要压缩，返回原文件）
     */
    async compressImage(file) {
        return new Promise((resolve) => {
            // 检查文件类型
            if (!this.compressibleTypes.includes(file.type) || this.skipTypes.includes(file.type)) {
                console.log('[DKFileImageCompressor] 不支持的文件类型，跳过压缩:', file.type);
                resolve(file);
                return;
            }

            // 如果文件已经很小，跳过压缩
            if (file.size < this.minCompressSize) {
                console.log('[DKFileImageCompressor] 文件大小合适，跳过压缩:', this.formatFileSize(file.size));
                resolve(file);
                return;
            }

            const img = new Image();
            
            img.onload = () => {
                try {
                    // 计算新尺寸
                    let { width, height } = img;
                    const scale = Math.min(1, this.maxDimension / Math.max(width, height));
                    width = Math.round(width * scale);
                    height = Math.round(height * scale);

                    // 即使尺寸没有变化，如果文件很大，也需要进行质量压缩
                    // 只有当文件既小（小于minCompressSize）且尺寸合适时，才跳过压缩
                    if (width === img.width && height === img.height && file.size < this.minCompressSize) {
                        console.log('[DKFileImageCompressor] 图片尺寸和大小都合适，跳过压缩');
                        resolve(file);
                        return;
                    }
                    
                    // 如果文件很大，即使尺寸合适，也要进行质量压缩
                    if (width === img.width && height === img.height && file.size >= this.minCompressSize) {
                        console.log('[DKFileImageCompressor] 图片尺寸合适但文件较大，进行质量压缩');
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d', { willReadFrequently: true });
                    
                    // PNG/BMP 等可能带透明背景，先填充白色以免转为 JPEG 后出现黑底
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);

                    // 确定输出格式
                    let outputType = 'image/jpeg';
                    if (file.type === 'image/webp') {
                        outputType = 'image/webp';
                    }
                    
                    const supportsQuality = outputType === 'image/jpeg' || outputType === 'image/webp';
                    const quality = supportsQuality ? this.quality : undefined;
                    
                    // 生成新文件名
                    const newFileName = (() => {
                        const base = file.name.replace(/\.[^/.]+$/, '');
                        if (outputType === 'image/jpeg') return `${base}.jpg`;
                        if (outputType === 'image/webp') return `${base}.webp`;
                        return file.name;
                    })();

                    // 转换为 Blob
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const compressedFile = new File([blob], newFileName, { 
                                type: outputType,
                                lastModified: Date.now()
                            });

                            const originalSize = file.size;
                            const compressedSize = compressedFile.size;
                            const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

                            console.log(`[DKFileImageCompressor] 图片压缩完成: ${this.formatFileSize(originalSize)} -> ${this.formatFileSize(compressedSize)} (压缩率: ${compressionRatio}%)`);
                            console.log(`[DKFileImageCompressor] 原始尺寸: ${img.width}x${img.height}, 压缩后尺寸: ${width}x${height}`);

                            // 重要：只要进行了压缩处理（尺寸缩小或质量压缩），就使用压缩后的文件
                            // 这样可以避免大图片上传超时问题
                            const sizeReduced = compressedSize < originalSize;
                            const dimensionReduced = width < img.width || height < img.height;
                            
                            if (sizeReduced || dimensionReduced) {
                                console.log(`[DKFileImageCompressor] 使用压缩后的文件 (大小减少: ${sizeReduced}, 尺寸减少: ${dimensionReduced})`);
                                resolve(compressedFile);
                            } else {
                                // 即使压缩效果不明显，只要文件很大，也使用压缩后的文件（至少进行了质量处理）
                                if (originalSize >= this.minCompressSize) {
                                    console.log('[DKFileImageCompressor] 压缩效果不明显，但原文件较大，使用压缩后的文件（已进行质量处理）');
                                    resolve(compressedFile);
                                } else {
                                    console.log('[DKFileImageCompressor] 压缩效果不明显且原文件较小，返回原文件');
                                    resolve(file);
                                }
                            }
                        } else {
                            console.error('[DKFileImageCompressor] 图片压缩失败，返回原文件');
                            resolve(file);
                        }
                        URL.revokeObjectURL(img.src);
                    }, outputType, quality);

                } catch (error) {
                    console.error('[DKFileImageCompressor] 图片处理错误:', error);
                    URL.revokeObjectURL(img.src);
                    resolve(file); // 出错时返回原文件
                }
            };

            img.onerror = () => {
                console.error('[DKFileImageCompressor] 图片加载失败');
                URL.revokeObjectURL(img.src);
                resolve(file); // 加载失败时返回原文件
            };

            img.src = URL.createObjectURL(file);
        });
    }

    /**
     * 批量压缩图片
     * @param {File[]} files - 图片文件数组
     * @returns {Promise<File[]>} - 压缩后的文件数组
     */
    async compressMultipleImages(files) {
        const results = [];
        for (const file of files) {
            const compressedFile = await this.compressImage(file);
            results.push(compressedFile);
        }
        return results;
    }

    /**
     * 格式化文件大小显示
     * @param {number} bytes - 字节数
     * @returns {string} - 格式化后的大小字符串
     */
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// 创建默认实例，提供静态方法方便调用
DKFileImageCompressor.default = new DKFileImageCompressor();

/**
 * 静态方法：快速压缩单个图片
 * @param {File} file - 原始图片文件
 * @param {Object} options - 可选配置
 * @returns {Promise<File>} - 压缩后的文件
 */
DKFileImageCompressor.compress = async function(file, options = {}) {
    const compressor = options.maxDimension || options.quality 
        ? new DKFileImageCompressor(options) 
        : DKFileImageCompressor.default;
    return await compressor.compressImage(file);
};

/**
 * 静态方法：快速批量压缩图片
 * @param {File[]} files - 图片文件数组
 * @param {Object} options - 可选配置
 * @returns {Promise<File[]>} - 压缩后的文件数组
 */
DKFileImageCompressor.compressMultiple = async function(files, options = {}) {
    const compressor = options.maxDimension || options.quality 
        ? new DKFileImageCompressor(options) 
        : DKFileImageCompressor.default;
    return await compressor.compressMultipleImages(files);
};

// 导出供外部使用
if (typeof window !== 'undefined') {
    window.DKFileImageCompressor = DKFileImageCompressor;
}

// 兼容 CommonJS 模块系统
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DKFileImageCompressor;
}

