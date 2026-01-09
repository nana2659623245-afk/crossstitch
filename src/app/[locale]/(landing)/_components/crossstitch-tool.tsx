
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import type { Section } from '@/shared/types/blocks/landing';
import { Cta, Faq, Features, Testimonials } from '@/themes/default/blocks';

type RGB = { r: number; g: number; b: number };

type PaletteColor = RGB & {
  hex: string;
  symbol: string;
  count: number;
};

type GridResult = {
  width: number;
  height: number;
  cells: Uint16Array;
  palette: PaletteColor[];
};

type ImageInfo = { width: number; height: number };

const GRID_MIN = 50;
const GRID_MAX = 150;
const HEIGHT_MIN = 20;
const COLOR_MIN = 32;
const COLOR_MAX = 128;
const DEFAULT_GRID = 80;

const SYMBOL_SEED =
  'ABCDEFGHJKLMNPQRSTUVWXYZ' +
  'abcdefghijkmnopqrstuvwxyz' +
  '23456789' +
  '!#$%&()*+,-./:;<=>?@[]^_{|}~';
const BASE_SYMBOLS = SYMBOL_SEED.split('');

const featuresSection: Section = {
  id: 'features',
  title: 'Features',
  description: '这里展示核心功能与优势的结构占位。',
  items: [
    {
      title: '智能量化',
      description: '自动减少颜色数量，保留清晰细节。',
      icon: 'Palette',
    },
    {
      title: '网格映射',
      description: '按比例生成十字绣网格图案。',
      icon: 'LayoutGrid',
    },
    {
      title: '符号标记',
      description: '颜色与符号一一对应，便于快速刺绣。',
      icon: 'Type',
    },
    {
      title: '颜色清单',
      description: '统计用色和针数，便于准备材料。',
      icon: 'ListChecks',
    },
    {
      title: '导出打印',
      description: '一键导出 PNG / PDF 或打印。',
      icon: 'Printer',
    },
    {
      title: '纯前端',
      description: '图片处理全部在浏览器端完成。',
      icon: 'Sparkles',
    },
  ],
};

const testimonialsSection: Section = {
  id: 'testimonials',
  title: 'Testimonials',
  description: '这里展示用户反馈的结构占位。',
  items: [
    {
      name: '用户 A',
      role: '手工爱好者',
      quote: '工具使用感受占位文案。',
      avatar: { src: '/imgs/avatars/1.png', alt: 'avatar-1' },
    },
    {
      name: '用户 B',
      role: '十字绣玩家',
      quote: '工具使用感受占位文案。',
      avatar: { src: '/imgs/avatars/2.png', alt: 'avatar-2' },
    },
    {
      name: '用户 C',
      role: '设计师',
      quote: '工具使用感受占位文案。',
      avatar: { src: '/imgs/avatars/3.png', alt: 'avatar-3' },
    },
  ],
};

const faqSection: Section = {
  id: 'faq',
  title: 'FAQ',
  description: '这里展示常见问题的结构占位。',
  items: [
    {
      question: '常见问题 1',
      answer: '常见问题解答占位文案。',
    },
    {
      question: '常见问题 2',
      answer: '常见问题解答占位文案。',
    },
    {
      question: '常见问题 3',
      answer: '常见问题解答占位文案。',
    },
  ],
};

const ctaSection: Section = {
  id: 'cta',
  title: 'Call To Action',
  description: '这里展示行动按钮区域的结构占位。',
  buttons: [
    {
      title: '开始体验',
      url: '#tool',
      variant: 'default',
      size: 'lg',
    },
    {
      title: '了解更多',
      url: '#features',
      variant: 'outline',
      size: 'lg',
    },
  ],
};

const midFeatureRows = [
  {
    title: '高质量图纸输出',
    description: '这里放置功能说明的占位文字，可替换成真实描述。',
    bullets: ['支持 PDF/PNG 导出', '符号标记清晰', '适合打印使用'],
    imageSrc: '/imgs/features/1.png',
    imageAlt: 'feature-1',
    reverse: false,
  },
  {
    title: '颜色统计与清单',
    description: '这里放置功能说明的占位文字，可替换成真实描述。',
    bullets: ['自动统计针数', '颜色占比直观', '便于准备材料'],
    imageSrc: '/imgs/features/2.png',
    imageAlt: 'feature-2',
    reverse: true,
  },
  {
    title: '移动端也能使用',
    description: '这里放置功能说明的占位文字，可替换成真实描述。',
    bullets: ['响应式布局', '操作流畅', '随时生成图纸'],
    imageSrc: '/imgs/features/3.png',
    imageAlt: 'feature-3',
    reverse: false,
  },
];
class ImageCompressor {
  private maxDimension: number;
  private quality: number;
  private minCompressSize: number;
  private compressibleTypes: string[];

  constructor(options?: {
    maxDimension?: number;
    quality?: number;
    minCompressSize?: number;
  }) {
    this.maxDimension = options?.maxDimension ?? 1600;
    this.quality = options?.quality ?? 0.75;
    this.minCompressSize = options?.minCompressSize ?? 300 * 1024;
    this.compressibleTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  }

  async compressImage(file: File): Promise<File> {
    if (!this.compressibleTypes.includes(file.type)) {
      return file;
    }

    if (file.size < this.minCompressSize) {
      return file;
    }

    const img = await loadImageFromFile(file);
    let { width, height } = img;
    const scale = Math.min(1, this.maxDimension / Math.max(width, height));
    width = Math.round(width * scale);
    height = Math.round(height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return file;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    const outputType = file.type === 'image/webp' ? 'image/webp' : 'image/jpeg';
    const quality = outputType === 'image/jpeg' ? this.quality : undefined;
    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((result) => resolve(result), outputType, quality);
    });

    if (!blob) return file;

    const baseName = file.name.replace(/\.[^/.]+$/, '');
    const nextName =
      outputType === 'image/webp' ? `${baseName}.webp` : `${baseName}.jpg`;
    return new File([blob], nextName, {
      type: outputType,
      lastModified: Date.now(),
    });
  }
}

function buildSymbols(count: number) {
  if (count <= BASE_SYMBOLS.length) {
    return BASE_SYMBOLS.slice(0, count);
  }

  const symbols: string[] = [...BASE_SYMBOLS];
  for (let i = 0; i < BASE_SYMBOLS.length && symbols.length < count; i += 1) {
    for (let j = 0; j < BASE_SYMBOLS.length && symbols.length < count; j += 1) {
      symbols.push(`${BASE_SYMBOLS[i]}${BASE_SYMBOLS[j]}`);
    }
  }

  return symbols.slice(0, count);
}

function rgbToHex({ r, g, b }: RGB) {
  const toHex = (value: number) => value.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getContrastColor({ r, g, b }: RGB) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#0b0b0b' : '#ffffff';
}

function colorDistance(a: RGB, b: RGB) {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return dr * dr + dg * dg + db * db;
}

function pickNearestColorIndex(color: RGB, palette: RGB[]) {
  let bestIndex = 0;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (let i = 0; i < palette.length; i += 1) {
    const distance = colorDistance(color, palette[i]);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = i;
    }
  }

  return bestIndex;
}

function loadImageFromFile(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('图片加载失败'));
    };
    img.src = url;
  });
}

function getPaletteFromPixels(pixels: RGB[], colorCount: number) {
  if (pixels.length === 0) {
    return [{ r: 255, g: 255, b: 255 }];
  }

  const targetCount = Math.min(colorCount, pixels.length);
  let boxes: RGB[][] = [pixels];

  while (boxes.length < targetCount) {
    let splitIndex = -1;
    let splitRange = -1;

    for (let i = 0; i < boxes.length; i += 1) {
      const box = boxes[i];
      if (box.length < 2) continue;

      let rMin = 255;
      let rMax = 0;
      let gMin = 255;
      let gMax = 0;
      let bMin = 255;
      let bMax = 0;

      for (const pixel of box) {
        if (pixel.r < rMin) rMin = pixel.r;
        if (pixel.r > rMax) rMax = pixel.r;
        if (pixel.g < gMin) gMin = pixel.g;
        if (pixel.g > gMax) gMax = pixel.g;
        if (pixel.b < bMin) bMin = pixel.b;
        if (pixel.b > bMax) bMax = pixel.b;
      }

      const range = Math.max(rMax - rMin, gMax - gMin, bMax - bMin);
      if (range > splitRange) {
        splitRange = range;
        splitIndex = i;
      }
    }

    if (splitIndex === -1) break;

    const boxToSplit = boxes[splitIndex];
    let rMin = 255;
    let rMax = 0;
    let gMin = 255;
    let gMax = 0;
    let bMin = 255;
    let bMax = 0;

    for (const pixel of boxToSplit) {
      if (pixel.r < rMin) rMin = pixel.r;
      if (pixel.r > rMax) rMax = pixel.r;
      if (pixel.g < gMin) gMin = pixel.g;
      if (pixel.g > gMax) gMax = pixel.g;
      if (pixel.b < bMin) bMin = pixel.b;
      if (pixel.b > bMax) bMax = pixel.b;
    }

    const rRange = rMax - rMin;
    const gRange = gMax - gMin;
    const bRange = bMax - bMin;
    const channel: keyof RGB =
      rRange >= gRange && rRange >= bRange ? 'r' : gRange >= bRange ? 'g' : 'b';

    const sorted = [...boxToSplit].sort((a, b) => a[channel] - b[channel]);
    const mid = Math.max(1, Math.floor(sorted.length / 2));
    const left = sorted.slice(0, mid);
    const right = sorted.slice(mid);

    boxes = [
      ...boxes.slice(0, splitIndex),
      left,
      right,
      ...boxes.slice(splitIndex + 1),
    ];
  }

  return boxes.map((box) => {
    const total = box.length || 1;
    const sum = box.reduce(
      (acc, pixel) => ({
        r: acc.r + pixel.r,
        g: acc.g + pixel.g,
        b: acc.b + pixel.b,
      }),
      { r: 0, g: 0, b: 0 }
    );

    return {
      r: Math.round(sum.r / total),
      g: Math.round(sum.g / total),
      b: Math.round(sum.b / total),
    };
  });
}

function buildPalette(image: HTMLImageElement, colorCount: number) {
  const sampleWidth = Math.min(300, image.width);
  const sampleHeight = Math.max(
    1,
    Math.round((image.height / image.width) * sampleWidth)
  );
  const canvas = document.createElement('canvas');
  canvas.width = sampleWidth;
  canvas.height = sampleHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return [{ r: 255, g: 255, b: 255 }];

  ctx.drawImage(image, 0, 0, sampleWidth, sampleHeight);
  const data = ctx.getImageData(0, 0, sampleWidth, sampleHeight).data;
  const totalPixels = sampleWidth * sampleHeight;
  const step = Math.max(1, Math.floor(totalPixels / 40000));
  const pixels: RGB[] = [];

  for (let i = 0; i < data.length; i += 4 * step) {
    const alpha = data[i + 3];
    if (alpha < 60) continue;
    pixels.push({ r: data[i], g: data[i + 1], b: data[i + 2] });
  }

  return getPaletteFromPixels(pixels, colorCount);
}

function buildGrid(
  image: HTMLImageElement,
  gridWidth: number,
  gridHeight: number,
  palette: RGB[]
): GridResult {
  const canvas = document.createElement('canvas');
  canvas.width = gridWidth;
  canvas.height = gridHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return {
      width: gridWidth,
      height: gridHeight,
      cells: new Uint16Array(),
      palette: [],
    };
  }

  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(image, 0, 0, gridWidth, gridHeight);
  const data = ctx.getImageData(0, 0, gridWidth, gridHeight).data;
  const cells = new Uint16Array(gridWidth * gridHeight);
  const symbols = buildSymbols(palette.length);
  const paletteWithSymbols: PaletteColor[] = palette.map((color, index) => ({
    ...color,
    hex: rgbToHex(color),
    symbol: symbols[index] ?? '?',
    count: 0,
  }));

  for (let i = 0; i < data.length; i += 4) {
    const cellIndex = i / 4;
    const alpha = data[i + 3];
    const pixel =
      alpha < 60
        ? { r: 255, g: 255, b: 255 }
        : { r: data[i], g: data[i + 1], b: data[i + 2] };
    const paletteIndex = pickNearestColorIndex(pixel, palette);
    cells[cellIndex] = paletteIndex;
    paletteWithSymbols[paletteIndex].count += 1;
  }

  return {
    width: gridWidth,
    height: gridHeight,
    cells,
    palette: paletteWithSymbols,
  };
}

function calculateGridHeight(width: number, info: ImageInfo | null) {
  if (!info || info.width === 0) {
    return width;
  }
  return Math.max(1, Math.round((info.height / info.width) * width));
}
export function CrossstitchTool() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [maxColors, setMaxColors] = useState(48);
  const [gridWidth, setGridWidth] = useState(DEFAULT_GRID);
  const [gridHeight, setGridHeight] = useState(DEFAULT_GRID);
  const [lockAspect, setLockAspect] = useState(true);
  const [gridResult, setGridResult] = useState<GridResult | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const compressorRef = useRef(new ImageCompressor());
  const cellSize = 10;

  useEffect(() => {
    if (!lockAspect) return;
    setGridHeight(calculateGridHeight(gridWidth, imageInfo));
  }, [gridWidth, imageInfo, lockAspect]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!gridResult || !canvasRef.current) return;
    renderPattern(canvasRef.current, gridResult, cellSize);
  }, [gridResult, cellSize]);

  const colorList = useMemo(() => {
    if (!gridResult) return [];
    return [...gridResult.palette].sort((a, b) => b.count - a.count);
  }, [gridResult]);

  const totalStitches = gridResult?.cells.length ?? 0;
  const threadLengthCm = totalStitches * 0.8;
  const threadLengthMeters = threadLengthCm / 100;

  const handleFile = async (file: File) => {
    setProcessing(true);
    setError(null);
    setGridResult(null);

    try {
      const compressed = await compressorRef.current.compressImage(file);
      const img = await loadImageFromFile(compressed);
      setImageFile(compressed);
      setImageInfo({ width: img.width, height: img.height });
      if (lockAspect) {
        setGridHeight(
          calculateGridHeight(gridWidth, { width: img.width, height: img.height })
        );
      }
      const nextUrl = URL.createObjectURL(compressed);
      setImageUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return nextUrl;
      });
    } catch (err) {
      setError('图片处理失败，请重试。');
    } finally {
      setProcessing(false);
    }
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await handleFile(file);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    await handleFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClearImage = () => {
    setImageFile(null);
    setImageInfo(null);
    setGridResult(null);
    setError(null);
    setImageUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleGenerate = async () => {
    if (!imageFile) {
      setError('请先上传图片。');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const image = await loadImageFromFile(imageFile);
      const nextGridHeight = lockAspect
        ? calculateGridHeight(gridWidth, { width: image.width, height: image.height })
        : Math.max(1, gridHeight);

      if (lockAspect) {
        setGridHeight(nextGridHeight);
      }

      const palette = buildPalette(image, maxColors);
      const result = buildGrid(image, gridWidth, nextGridHeight, palette);
      setGridResult(result);
    } catch (err) {
      setError('生成失败，请尝试更换图片或降低参数。');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.href = canvasRef.current.toDataURL('image/png');
    link.download = 'crossstitch-pattern.png';
    link.click();
  };

  const handleDownloadPdf = async () => {
    if (!canvasRef.current || !gridResult) return;
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.text('十字绣图纸', margin, margin);

    const imgData = canvasRef.current.toDataURL('image/png');
    const maxImgWidth = pageWidth - margin * 2;
    const imgHeight = (canvasRef.current.height / canvasRef.current.width) * maxImgWidth;
    const finalImgHeight = Math.min(imgHeight, pageHeight - margin * 3 - 10);

    pdf.addImage(imgData, 'PNG', margin, margin + 6, maxImgWidth, finalImgHeight);

    pdf.addPage();
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.text('颜色清单', margin, margin);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);

    const columnWidth = (pageWidth - margin * 2) / 2;
    let y = margin + 8;
    const rowHeight = 8;

    colorList.forEach((color, index) => {
      const col = index % 2;
      if (col === 0 && index !== 0) {
        y += rowHeight;
      }

      if (y > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }

      const x = margin + col * columnWidth;
      pdf.setFillColor(color.r, color.g, color.b);
      pdf.rect(x, y - 4, 6, 6, 'F');
      pdf.setTextColor(20);
      pdf.text(
        `${color.symbol}  ${color.hex.toUpperCase()}  ${color.count}针`,
        x + 8,
        y
      );
    });

    pdf.save('crossstitch-pattern.pdf');
  };

  const handlePrint = () => {
    if (!canvasRef.current || !gridResult) return;
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) return;

    const imgData = canvasRef.current.toDataURL('image/png');
    const rows = colorList
      .map(
        (color) => `
        <tr>
          <td><span class="swatch" style="background:${color.hex}"></span></td>
          <td>${color.symbol}</td>
          <td>${color.hex.toUpperCase()}</td>
          <td>${color.count}</td>
        </tr>`
      )
      .join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>十字绣图纸打印</title>
          <style>
            body { font-family: "Fira Sans", "Noto Sans SC", sans-serif; margin: 24px; color: #1b1b1b; }
            h1 { font-size: 20px; margin-bottom: 12px; }
            h2 { font-size: 16px; margin: 24px 0 8px; }
            img { width: 100%; max-width: 900px; border: 1px solid #ddd; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 12px; }
            td { border-bottom: 1px solid #ddd; padding: 6px 4px; }
            .swatch { display: inline-block; width: 16px; height: 16px; border-radius: 4px; border: 1px solid #ccc; }
          </style>
        </head>
        <body>
          <h1>十字绣图纸</h1>
          <img src="${imgData}" alt="pattern" />
          <h2>颜色清单</h2>
          <table>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const heightMax = lockAspect ? Math.max(GRID_MAX, gridHeight) : GRID_MAX;

  return (
    <main className="bg-background">
      <section
        id="tool"
        className="relative overflow-hidden bg-gradient-to-br from-[#fff7ea] via-[#f7efe7] to-[#f2fbff]"
      >
        <div className="absolute -right-12 -top-20 h-60 w-60 rounded-full bg-[#ffd7a1]/60 blur-3xl" />
        <div className="absolute -bottom-24 left-12 h-64 w-64 rounded-full bg-[#b7e3ff]/60 blur-3xl" />
        <div className="container pb-16 pt-24">
          <h1 className="sr-only">十字绣图纸生成器</h1>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.7fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg">
                <div
                  className={`rounded-2xl border-2 border-dashed px-6 py-8 text-center transition ${
                    isDragging
                      ? 'border-[#2b1b0f] bg-[#fff2e4]'
                      : 'border-[#e5d9ce] bg-white'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {!imageUrl && (
                    <div className="space-y-2">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5ede4]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-8 w-8 text-[#b49a86]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v6m0 0l-3-3m3 3l3-3"
                          />
                        </svg>
                      </div>
                      <p className="text-base font-medium text-[#2b1b0f]">
                        点击上传或拖拽图片到这里
                      </p>
                      <p className="text-xs text-[#8b7a6b]">
                        支持 JPG、PNG、GIF 格式
                      </p>
                    </div>
                  )}
                  {imageUrl && (
                    <div className="space-y-3">
                      <img
                        src={imageUrl}
                        alt="上传预览"
                        className="mx-auto max-h-48 w-full rounded-xl object-cover"
                      />
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleClearImage();
                        }}
                        className="text-sm font-medium text-[#c7472c] hover:text-[#a63a23]"
                      >
                        清除图片
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg">
                <div className="mb-5 flex items-center gap-2 text-lg font-semibold text-[#2b1b0f]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-[#8b7a6b]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  参数设置
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="text-sm font-medium text-[#2b1b0f]">
                        网格尺寸
                      </label>
                      <label className="flex items-center gap-2 text-xs text-[#8b7a6b]">
                        <input
                          type="checkbox"
                          checked={lockAspect}
                          onChange={(event) => setLockAspect(event.target.checked)}
                          className="h-4 w-4 accent-[#2b1b0f]"
                        />
                        等比例缩放
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-[#8b7a6b]">宽度</label>
                        <input
                          type="range"
                          min={GRID_MIN}
                          max={GRID_MAX}
                          value={gridWidth}
                          onChange={(event) =>
                            setGridWidth(Number(event.target.value))
                          }
                          className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#e6dad0] accent-[#2b1b0f]"
                        />
                        <div className="mt-1 text-center text-sm text-[#5c4637]">
                          {gridWidth}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-[#8b7a6b]">高度</label>
                        <input
                          type="range"
                          min={HEIGHT_MIN}
                          max={heightMax}
                          value={gridHeight}
                          disabled={lockAspect}
                          onChange={(event) =>
                            setGridHeight(Number(event.target.value))
                          }
                          className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#e6dad0] accent-[#2b1b0f] disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <div className="mt-1 text-center text-sm text-[#5c4637]">
                          {gridHeight}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#2b1b0f]">
                      颜色数量
                    </label>
                    <input
                      type="range"
                      min={COLOR_MIN}
                      max={COLOR_MAX}
                      value={maxColors}
                      onChange={(event) =>
                        setMaxColors(Number(event.target.value))
                      }
                      className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#e6dad0] accent-[#2b1b0f]"
                    />
                    <div className="mt-1 text-center text-sm text-[#5c4637]">
                      {maxColors} 种颜色
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={!imageFile || processing}
                    className="w-full rounded-lg bg-[#2b1b0f] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1f140b] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {processing ? '处理中...' : '生成十字绣图纸'}
                  </button>

                  {error && <p className="text-sm text-[#c7472c]">{error}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#2b1b0f]">
                    十字绣图纸
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadPng}
                      disabled={!gridResult}
                      className="rounded-lg border border-[#d8cabf] px-3 py-1.5 text-xs font-medium text-[#2b1b0f] transition hover:border-[#bfa99a] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      下载 PNG
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      disabled={!gridResult}
                      className="rounded-lg border border-[#d8cabf] px-3 py-1.5 text-xs font-medium text-[#2b1b0f] transition hover:border-[#bfa99a] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      导出 PDF
                    </button>
                    <button
                      type="button"
                      onClick={handlePrint}
                      disabled={!gridResult}
                      className="rounded-lg border border-[#d8cabf] px-3 py-1.5 text-xs font-medium text-[#2b1b0f] transition hover:border-[#bfa99a] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      打印
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-[#e6dad0] bg-[#faf6f0] p-4">
                  {!gridResult && (
                    <div className="py-12 text-center text-sm text-[#8b7a6b]">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                        <div className="h-6 w-6 rounded border border-[#d8cabf]" />
                      </div>
                      上传图片并设置参数，然后点击生成按钮
                    </div>
                  )}
                  {gridResult && (
                    <div className="max-h-[52vh] overflow-auto">
                      <canvas ref={canvasRef} className="mx-auto block" />
                    </div>
                  )}
                </div>
              </div>

              {gridResult && (
                <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-[#2b1b0f]">
                      颜色清单
                    </h3>
                    <span className="text-xs text-[#8b7a6b]">
                      共 {colorList.length} 色
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    {colorList.map((color) => (
                      <div
                        key={`${color.hex}-${color.symbol}`}
                        className="flex items-center justify-between rounded-xl border border-[#f0e6dc] bg-[#fbf7f2] px-3 py-2 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="h-7 w-7 rounded-lg border border-black/10"
                            style={{ background: color.hex }}
                          />
                          <div>
                            <div className="font-semibold text-[#2b1b0f]">
                              {color.symbol}
                            </div>
                            <div className="text-[11px] text-[#8b7a6b]">
                              {color.hex.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-[#2b1b0f]">
                          <div className="font-semibold">{color.count} 针</div>
                          <div className="text-[11px] text-[#8b7a6b]">
                            {totalStitches
                              ? `${((color.count / totalStitches) * 100).toFixed(1)}%`
                              : '0%'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-[#e6dad0] bg-[#faf6f0] px-4 py-3 text-xs text-[#5c4637]">
                    <div>总针数：{totalStitches.toLocaleString()}</div>
                    <div>预计线长：约 {threadLengthMeters.toFixed(2)} 米</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="feature-rows" className="py-16 md:py-24">
        <div className="container space-y-12">
          {midFeatureRows.map((item) => (
            <div
              key={item.title}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div
                className={`order-1 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-lg ${
                  item.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`order-2 space-y-4 ${
                  item.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <h2 className="text-2xl font-semibold text-[#2b1b0f]">
                  {item.title}
                </h2>
                <p className="text-sm text-[#5c4637]">
                  {item.description}
                </p>
                <div className="space-y-2 text-sm text-[#5c4637]">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2b1b0f]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Features section={featuresSection} />
      <Testimonials section={testimonialsSection} />
      <Faq section={faqSection} />
      <Cta section={ctaSection} />
    </main>
  );
}
function renderPattern(
  canvas: HTMLCanvasElement,
  gridResult: GridResult,
  cellSize: number
) {
  const { width, height, cells, palette } = gridResult;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  canvas.width = width * cellSize;
  canvas.height = height * cellSize;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      const paletteIndex = cells[index];
      const color = palette[paletteIndex];
      const left = x * cellSize;
      const top = y * cellSize;

      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      ctx.fillRect(left, top, cellSize, cellSize);

      ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.strokeRect(left, top, cellSize, cellSize);

      const fontSize =
        color.symbol.length > 1
          ? Math.max(6, Math.floor(cellSize * 0.45))
          : Math.max(6, Math.floor(cellSize * 0.6));

      ctx.fillStyle = getContrastColor(color);
      ctx.font = `${fontSize}px "IBM Plex Mono", "Fira Mono", ui-monospace, monospace`;
      ctx.fillText(color.symbol, left + cellSize / 2, top + cellSize / 2);
    }
  }
}
