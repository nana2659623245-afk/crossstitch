<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- 基础SEO信息 -->
    <title>十字绣图纸生成器 - DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting</title>
    <meta name="description" content="将任何图片转换为精美的十字绣图纸 支持 JPG PNG GIF 格式 上传图片并设置参数 然后点击生成按钮 提示：建议使用对比度高 细节清晰的图片获得更好效果">
    <meta name="keywords" content="将任何图片转换为精美的十字绣图纸, 上传图片并设置参数, 然后点击生成按钮, 建议使用对比度高, 细节清晰的图片获得更好效果, DKFile, 免费网页托管, HTML托管, 静态网站托管, 网页发布, 免费建站">
    <meta name="author" content="sparkle">
    <meta name="generator" content="DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    <meta name="rating" content="general">
    <meta name="revisit-after" content="7 days">
    <meta name="distribution" content="global">
    <meta name="language" content="zh-CN">
    <meta name="geo.region" content="CN">
    <meta name="geo.country" content="China">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#007bff">
    <meta name="msapplication-TileColor" content="#007bff">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="十字绣图纸生成器">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">
    
    <!-- 反馈弹窗样式 -->
    <style>
        #feedbackModal .modal-content {
            border-radius: 16px;
            overflow: hidden;
            border: none;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        #feedbackModal .modal-header {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            border-bottom: none;
            padding: 1.5rem 1.5rem 1rem;
        }
        
        #feedbackModal .modal-header .btn-close {
            filter: invert(1);
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        #feedbackModal .modal-header .btn-close:hover {
            opacity: 1;
        }
        
        #feedbackModal .modal-title {
            color: white;
            font-weight: 600;
            font-size: 1.25rem;
        }
        
        #feedbackModal .modal-title i {
            color: rgba(255, 255, 255, 0.9);
        }
        
        #feedbackModal .modal-body {
            padding: 1.5rem;
        }
        
        #feedbackModal .modal-footer {
            padding: 1rem 1.5rem 1.5rem;
            border-top: none;
        }
        
        .feedback-type-btn {
            transition: all 0.3s ease;
            border-radius: 8px;
            font-weight: 500;
        }
        
        .feedback-type-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .feedback-textarea {
            transition: border-color 0.3s ease;
        }
        
        .feedback-textarea:focus {
            border-color: #28a745;
            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
        }
        
        @media (max-width: 768px) {
            .feedback-type-btn {
                min-height: 40px;
                font-size: 0.85rem;
            }
        }
        
        /* 右下角浮动反馈按钮样式 */
        .floating-feedback-btn {
            position: fixed;
            bottom: 100px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
            transition: all 0.3s ease;
            z-index: 1000;
            border: none;
            text-decoration: none;
        }
        
        .floating-feedback-btn:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
            color: white;
            text-decoration: none;
        }
        
        .floating-feedback-btn:active {
            transform: translateY(0) scale(0.95);
        }
        
        .floating-feedback-btn i {
            font-size: 20px;
            margin-bottom: 2px;
        }
        
        .floating-btn-text {
            font-size: 10px;
            font-weight: 500;
            line-height: 1;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
            .floating-feedback-btn {
                bottom: 80px;
                right: 15px;
                width: 50px;
                height: 50px;
            }
            
            .floating-feedback-btn i {
                font-size: 18px;
            }
            
            .floating-btn-text {
                font-size: 9px;
            }
        }
        
        /* 手机端主菜单按钮样式 - 默认隐藏（桌面端不显示），手机端在媒体查询中显示 */
        /* 注意：手机端显示规则在 @media (max-width: 768px) 中定义 */
        @media (min-width: 769px) {
            #floatingMenuBtn,
            #dkfile-floating-buttons > #floatingMenuBtn,
            body > #dkfile-floating-buttons > #floatingMenuBtn,
            html > body > #dkfile-floating-buttons > #floatingMenuBtn,
            .floating-menu-btn {
                display: none !important;
            }
        }
        
        /* 手机端展开状态遮罩层 */
        #floatingButtonsOverlay,
        .floating-buttons-overlay {
            display: none;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: rgba(0, 0, 0, 0.3) !important;
            z-index: 9999 !important;
            backdrop-filter: blur(2px) !important;
            pointer-events: none !important;
        }
        
        #floatingButtonsOverlay.active,
        .floating-buttons-overlay.active {
            display: block !important;
            pointer-events: auto !important;
        }
        
        /* 右下角固定浮层按钮组 - 优化版本 */
        /* 浮动按钮容器 - 使用最高优先级，防止用户覆盖 */
        body > .floating-action-buttons,
        html > body > .floating-action-buttons,
        body:last-child > .floating-action-buttons,
        .content-wrapper ~ .floating-action-buttons,
        #dkfile-floating-buttons {
            position: fixed !important;
            bottom: 80px !important;
            right: 20px !important;
            left: auto !important;
            top: auto !important;
            z-index: 10000 !important;
            display: flex !important;
            flex-direction: column-reverse !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 8px !important;
            margin: 0 !important;
            padding: 0 !important;
            width: auto !important;
            height: auto !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
        }
        
        /* 平台标识按钮 - 集成到浮动按钮组下方，使用相同的fixed定位机制 */
        body > #dkfile-platform-footer-in-buttons,
        html > body > #dkfile-platform-footer-in-buttons,
        body:last-child > #dkfile-platform-footer-in-buttons,
        .content-wrapper ~ #dkfile-platform-footer-in-buttons,
        #dkfile-platform-footer-in-buttons {
            position: fixed !important;
            bottom: 10px !important;
            right: 20px !important;
            left: auto !important;
            top: auto !important;
            z-index: 10000 !important;
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
            visibility: visible !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            margin: 0 !important;
            padding: 6px 12px !important;
            width: auto !important;
            box-sizing: border-box !important;
            transform: none !important;
            background: rgba(255, 255, 255, 0.9) !important;
            backdrop-filter: blur(10px) !important;
            border-radius: 8px !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
            font-size: 11px !important;
            color: #666 !important;
            line-height: 1.4 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
        
        #dkfile-platform-footer-in-buttons a {
            color: #28a745 !important;
            text-decoration: none !important;
            margin: 0 2px !important;
            transition: color 0.2s ease !important;
        }
        
        #dkfile-platform-footer-in-buttons a:hover {
            color: #218838 !important;
            text-decoration: underline !important;
        }
        
        @media (max-width: 768px) {
            /* 手机端隐藏平台标识，避免遮挡用户内容 - 使用 display: none 确保 SEO 友好（内容保留在 HTML 中） */
            /* 使用最高优先级选择器，确保覆盖内联样式 */
            html body #dkfile-platform-footer-in-buttons,
            html > body > #dkfile-platform-footer-in-buttons,
            body > #dkfile-platform-footer-in-buttons,
            body:last-child > #dkfile-platform-footer-in-buttons,
            .content-wrapper ~ #dkfile-platform-footer-in-buttons,
            #dkfile-platform-footer-in-buttons {
                display: none !important;
            }
        }
        
        /* 浮动按钮 - 使用ID选择器确保最高优先级，防止用户覆盖 */
        #dkfile-floating-buttons > .floating-btn,
        #dkfile-floating-buttons .floating-btn,
        body > #dkfile-floating-buttons > .floating-btn,
        html > body > #dkfile-floating-buttons > .floating-btn,
        body > .floating-action-buttons > .floating-btn,
        html > body > .floating-action-buttons > .floating-btn,
        .floating-action-buttons .floating-btn {
            width: 40px !important;
            height: 40px !important;
            min-width: 40px !important;
            min-height: 40px !important;
            max-width: 40px !important;
            max-height: 40px !important;
            border-radius: 10px !important;
            border: none !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 14px !important;
            color: white !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
            position: relative !important;
            backdrop-filter: blur(10px) !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
            overflow: visible !important;
        }
        
        /* 按钮标签样式 - 手机端展开时显示 */
        .floating-btn::after {
            content: attr(data-label);
            position: absolute;
            right: calc(100% + 12px);
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.85);
            color: white;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 10001;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            line-height: 1.4;
        }
        
        /* 手机端展开状态时显示标签 */
        @media (max-width: 768px) {
            .floating-action-buttons.expanded .floating-btn:not(.floating-menu-btn)::after,
            #dkfile-floating-buttons.expanded .floating-btn:not(.floating-menu-btn)::after {
                opacity: 1 !important;
                visibility: visible !important;
                pointer-events: auto !important;
            }
            
            /* 确保按钮容器在展开时有足够空间显示标签 */
            .floating-action-buttons.expanded,
            #dkfile-floating-buttons.expanded {
                align-items: center !important; /* 保持垂直居中对齐 */
                gap: 8px !important; /* 展开时恢复间距 */
            }
        }
        
        .floating-btn:hover {
            transform: translateY(-1px) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
        
        .floating-btn:active,
        .floating-btn:focus {
            transform: translateY(0) !important;
            outline: none !important;
            -webkit-tap-highlight-color: transparent !important;
        }
        
        .floating-btn.like-btn {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
        }
        
        /* 已点赞状态 - 红色选中效果（行业通用：红色背景+白色实心图标） */
        #dkfile-floating-buttons .floating-btn.like-btn.liked,
        .floating-action-buttons .floating-btn.like-btn.liked,
        .floating-btn.like-btn.liked {
            background: #ff4757 !important;
            color: white !important;
        }
        
        #dkfile-floating-buttons .floating-btn.like-btn.liked i,
        .floating-action-buttons .floating-btn.like-btn.liked i,
        .floating-btn.like-btn.liked i {
            color: white !important;
        }
        
        .floating-btn.favorite-btn {
            background: linear-gradient(135deg, #20c997 0%, #28a745 100%) !important;
        }
        
        /* 已收藏状态 - 红色选中效果（行业通用：红色背景+白色实心图标） */
        #dkfile-floating-buttons .floating-btn.favorite-btn.favorited,
        .floating-action-buttons .floating-btn.favorite-btn.favorited,
        .floating-btn.favorite-btn.favorited {
            background: #ff4757 !important;
            color: white !important;
        }
        
        #dkfile-floating-buttons .floating-btn.favorite-btn.favorited i,
        .floating-action-buttons .floating-btn.favorite-btn.favorited i,
        .floating-btn.favorite-btn.favorited i {
            color: white !important;
        }
        
        .floating-btn.feedback-btn {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
        }
        
        .floating-btn.share-btn {
            background: linear-gradient(135deg, #20c997 0%, #28a745 100%) !important;
        }
        
        .floating-btn.my-tools-btn {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
        }
        
        /* 已登录状态 - 红色选中效果（类似已收藏） */
        #dkfile-floating-buttons .floating-btn.my-tools-btn.logged-in,
        .floating-action-buttons .floating-btn.my-tools-btn.logged-in,
        .floating-btn.my-tools-btn.logged-in {
            background: #ff4757 !important;
            color: white !important;
        }
        
        #dkfile-floating-buttons .floating-btn.my-tools-btn.logged-in i,
        .floating-action-buttons .floating-btn.my-tools-btn.logged-in i,
        .floating-btn.my-tools-btn.logged-in i {
            color: white !important;
        }
        
        /* 浮层弹窗样式 - 使用最高优先级确保不被用户内容覆盖 */
        #shareOverlay,
        #feedbackOverlay,
        .floating-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: rgba(0, 0, 0, 0.5) !important;
            backdrop-filter: blur(4px) !important;
            z-index: 2147483646 !important; /* 仅次于平台标识，确保最高优先级 */
            display: none !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 20px !important;
            animation: fadeIn 0.3s ease !important;
            margin: 0 !important;
            pointer-events: auto !important;
        }
        
        /* 分享弹窗特殊保护 - 确保最高优先级 */
        #shareOverlay {
            z-index: 2147483646 !important;
        }
        
        #shareOverlay.floating-overlay {
            z-index: 2147483646 !important;
        }
        
        /* 确保分享弹窗面板也有最高优先级 */
        #shareOverlay .floating-panel,
        #shareOverlay .share-menu {
            position: relative !important;
            z-index: 2147483647 !important;
        }
        
        /* 二维码区域样式 */
        .qr-code-section {
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
            margin: 16px 0;
        }
        
        .qr-code-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100px;
            margin-bottom: 16px;
        }
        
        .qr-loading {
            color: #666;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .qr-actions {
            display: flex;
            gap: 12px;
            justify-content: center;
        }
        
        .qr-action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px 16px;
            border: none;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .qr-action-btn.download-btn {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            box-shadow: 0 2px 8px rgba(40, 167, 69, 0.3);
        }
        
        .qr-action-btn.download-btn:hover {
            background: linear-gradient(135deg, #218838 0%, #1ea085 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
        }
        
        .qr-action-btn.copy-btn {
            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
            color: white;
            box-shadow: 0 2px 8px rgba(108, 117, 125, 0.3);
        }
        
        .qr-action-btn.copy-btn:hover {
            background: linear-gradient(135deg, #5a6268 0%, #343a40 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(108, 117, 125, 0.4);
        }
        
        .qr-code-image {
            text-align: center;
        }
        
        .qr-code-text {
            margin-top: 8px;
            font-size: 0.8rem;
            color: #666;
        }
        
        .qr-error {
            color: #dc3545;
            font-size: 0.9rem;
        }
        
        /* 浮层面板样式 - 使用ID选择器确保最高优先级 */
        #shareOverlay .floating-panel,
        #feedbackOverlay .floating-panel,
        .floating-panel {
            background: white !important;
            border-radius: 20px !important;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
            max-width: 500px !important;
            width: 100% !important;
            max-height: 90vh !important;
            overflow-y: auto !important;
            animation: slideUp 0.3s ease !important;
            margin: 0 auto !important;
            position: relative !important;
            z-index: 2147483647 !important;
        }
        
        .floating-header {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            padding: 12px 20px 10px;
            border-radius: 20px 20px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .floating-title {
            margin: 0;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .floating-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }
        
        .floating-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .floating-body {
            padding: 16px 20px;
            max-height: calc(90vh - 140px);
            overflow-y: auto;
            color: #333 !important; /* 确保文字颜色不被用户内容影响 */
        }
        
        /* 增强反馈弹窗样式隔离，防止用户内容影响 */
        #feedbackOverlay .floating-body,
        #feedbackOverlay .floating-body * {
            color: #333 !important;
        }
        
        #feedbackOverlay .floating-body label,
        #feedbackOverlay .floating-body .feedback-label,
        #feedbackOverlay .floating-body .feedback-section,
        #feedbackOverlay .floating-body .feedback-tool-info {
            color: #333 !important;
        }
        
        #feedbackOverlay .floating-body strong {
            color: #333 !important;
        }
        
        #feedbackOverlay .floating-body .text-muted {
            color: #6c757d !important;
        }
        
        .floating-footer {
            padding: 12px 20px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            border-top: 1px solid #f0f0f0;
        }
        
        .floating-btn-action {
            padding: 6px 12px;
            border-radius: 6px;
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
        }
        
        .floating-btn-secondary {
            background: #f8f9fa;
            color: #666;
        }
        
        .floating-btn-secondary:hover {
            background: #e9ecef;
            transform: translateY(-1px);
        }
        
        .floating-btn-primary {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
        }
        
        .floating-btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
        }
        
        /* 反馈表单样式 */
        .feedback-tool-info {
            background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(32, 201, 151, 0.1) 100%);
            border: 1px solid rgba(40, 167, 69, 0.2);
            border-radius: 8px;
            padding: 10px 12px;
            margin-bottom: 14px;
            font-size: 13px;
            color: #333;
            line-height: 1.4;
        }
        
        .feedback-section {
            margin-bottom: 14px;
        }
        
        .feedback-label {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 6px;
            display: block;
            color: #333;
        }
        
        .feedback-type-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 6px;
        }
        
        .feedback-type-item {
            position: relative;
        }
        
        .feedback-type-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .feedback-type-btn {
            display: block;
            width: 100%;
            padding: 6px 10px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            background: white;
            color: #666;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
            font-weight: 500;
        }
        
        .feedback-type-input:checked + .feedback-type-btn {
            border-color: #28a745;
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }
        
        .feedback-type-btn:hover {
            border-color: #28a745;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
        }
        
        .feedback-textarea-wrapper {
            position: relative;
        }
        
        .feedback-textarea {
            width: 100%;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 10px;
            font-size: 14px;
            line-height: 1.4;
            resize: none;
            transition: border-color 0.3s ease;
            font-family: inherit;
        }
        
        .feedback-textarea:focus {
            outline: none;
            border-color: #28a745;
            box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
        }
        
        .feedback-char-count {
            position: absolute;
            bottom: 8px;
            right: 12px;
            font-size: 12px;
            color: #999;
            background: rgba(255, 255, 255, 0.9);
            padding: 2px 6px;
            border-radius: 4px;
        }
        
        .feedback-hint {
            margin-top: 6px;
            font-size: 12px;
            color: #666;
            line-height: 1.4;
        }
        
        .feedback-notice {
            margin-top: 10px;
            padding: 8px 12px;
            background: rgba(40, 167, 69, 0.1);
            border-radius: 6px;
            font-size: 12px;
            color: #666;
            line-height: 1.4;
        }
        
        .feedback-link {
            color: #28a745;
            text-decoration: none;
            font-weight: 500;
        }
        
        .feedback-link:hover {
            text-decoration: underline;
        }
        
        /* 分享菜单样式 */
        .share-menu {
            background: white;
            border-radius: 20px;
            padding: 32px;
            text-align: center;
            max-width: 480px;
            width: 100%;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
        }
        
        .share-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 8px;
            color: #1a1a1a;
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .share-subtitle {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 32px;
            font-weight: 400;
        }
        
        /* 分享渠道标题样式 */
        .share-channels-header {
            text-align: center;
            margin: 24px 0 16px 0;
        }
        
        .share-channels-title {
            color: #2c3e50;
            font-weight: 600;
            font-size: 1rem;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .share-channels-title i {
            color: #28a745;
            font-size: 1.1rem;
        }
        
        .share-buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-bottom: 20px;
            padding: 16px;
            background: #f8f9fa;
            border-radius: 12px;
            border: 1px solid #e9ecef;
        }
        
        .share-buttons .share-btn {
            padding: 8px 12px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            position: relative;
            overflow: hidden;
            min-height: 36px;
        }
        
        .share-buttons .share-btn i {
            font-size: 14px;
            flex-shrink: 0;
        }
        
        .share-buttons .share-btn span {
            white-space: nowrap;
        }
        

        
        .share-btn.x-twitter {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .share-btn.x-twitter:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        

        
        /* X 图标样式 */
        .x-icon-container {
            background: #000000;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            min-width: 18px;
            min-height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0;
            flex-shrink: 0;
        }
        
        .x-icon {
            color: white;
            width: 12px;
            height: 12px;
        }
        
        .share-btn.weibo {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.weibo:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        

        
        
        /* GitHub 分享按钮 */
        .share-btn.github {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.github:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        
        /* Reddit 分享按钮 */
        .share-btn.reddit {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.reddit:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        
        /* LinkedIn 分享按钮 */
        .share-btn.linkedin {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.linkedin:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        

        
        /* WhatsApp 分享按钮 */
        .share-btn.whatsapp {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.whatsapp:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        
        /* Telegram 分享按钮 */
        .share-btn.telegram {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.telegram:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        
        /* 微信分享按钮 */
        .share-btn.wechat {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .share-btn.wechat:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
        }
        
        /* QQ分享按钮 */
        .share-btn.qq {
            background: linear-gradient(135deg, #12B7F5 0%, #0084FF 100%);
            box-shadow: 0 4px 15px rgba(18, 183, 245, 0.3);
        }
        
        .share-btn.qq:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(18, 183, 245, 0.4);
        }
        
        .share-btn i {
            font-size: 12px;
        }
        
        .share-divider {
            margin: 16px 0 8px 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #e9ecef, transparent);
        }
        
        .share-close-section {
            text-align: center;
            padding: 4px 0;
        }
        
        .share-info {
            background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(32, 201, 151, 0.05) 100%);
            border: 1px solid rgba(40, 167, 69, 0.1);
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 24px;
            text-align: left;
        }
        
        .share-info-title {
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .share-info-content {
            color: #666;
            font-size: 13px;
            line-height: 1.4;
        }
        

        
        /* 动画效果 */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to { 
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        
        /* 响应式优化 */
        @media (max-width: 768px) {
            /* 浮动按钮样式已在上面统一定义，这里不再重复 */
            
            .share-channels-header {
                margin: 20px 0 12px 0;
            }
            
            .share-channels-title {
                font-size: 0.9rem;
            }
            
            .share-buttons {
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                padding: 12px;
            }
            
            .share-buttons .share-btn {
                padding: 6px 8px;
                font-size: 9px;
                gap: 4px;
                min-height: 32px;
            }
            
            .share-buttons .share-btn i {
                font-size: 10px;
            }
            
            .share-buttons .share-btn .x-icon-container {
                width: 14px;
                height: 14px;
                min-width: 14px;
                min-height: 14px;
            }
            
            .share-buttons .share-btn .x-icon {
                width: 10px;
                height: 10px;
            }
            
            .floating-overlay {
                padding: 10px;
            }
            
            .floating-panel {
                max-height: 95vh;
            }
            
            .floating-header {
                padding: 16px 20px 12px;
            }
            
            .floating-body {
                padding: 20px;
            }
            
            .floating-footer {
                padding: 16px 20px 20px;
            }
            
            .feedback-type-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
            
            .share-menu {
                padding: 24px;
                max-width: 90vw;
            }
            
            .share-title {
                font-size: 1.25rem;
            }
            
            .share-subtitle {
                font-size: 0.9rem;
                margin-bottom: 24px;
            }
            
            
            .share-info {
                padding: 12px;
                margin-bottom: 20px;
            }
            
            .share-close-section {
                padding: 2px 0;
            }
            
            .floating-btn-action {
                padding: 4px 8px;
                font-size: 11px;
            }
        }
    </style>
    
    <!-- 性能优化 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="referrer" content="origin-when-cross-origin">
    
    <!-- DNS 预解析优化 -->
    <!-- <link rel="dns-prefetch" href="//www.googletagmanager.com"> -->
    <!-- <link rel="dns-prefetch" href="//pagead2.googlesyndication.com"> -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    
    <!-- 资源预连接 -->
    <!-- <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin> -->
    <!-- <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossorigin> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://deepseek.idoxu.com/sparkle/shizixiu.html">
    <meta property="og:title" content="十字绣图纸生成器">
    <meta property="og:description" content="将任何图片转换为精美的十字绣图纸 支持 JPG PNG GIF 格式 上传图片并设置参数 然后点击生成按钮 提示：建议使用对比度高 细节清晰的图片获得更好效果">
    
    <meta property="og:image" content="http://deepseek.idoxu.com/static/dkfile-logo.png">
    
    <meta property="og:site_name" content="DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:updated_time" content="2025-09-18T12:14:23.467896">
    <meta property="article:author" content="sparkle">
    <meta property="article:published_time" content="2025-09-18T12:14:23.467896">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="http://deepseek.idoxu.com/sparkle/shizixiu.html">
    <meta property="twitter:title" content="十字绣图纸生成器">
    <meta property="twitter:description" content="将任何图片转换为精美的十字绣图纸 支持 JPG PNG GIF 格式 上传图片并设置参数 然后点击生成按钮 提示：建议使用对比度高 细节清晰的图片获得更好效果">
    
    <meta property="twitter:image" content="http://deepseek.idoxu.com/static/dkfile-logo.png">
    <meta property="twitter:image:alt" content="DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting Logo">
    
    <meta property="twitter:creator" content="@sparkle">
    <meta property="twitter:site" content="@DKFile">
    
    <!-- 结构化数据 -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "十字绣图纸生成器",
        "description": "将任何图片转换为精美的十字绣图纸 支持 JPG PNG GIF 格式 上传图片并设置参数 然后点击生成按钮 提示：建议使用对比度高 细节清晰的图片获得更好效果",
        "url": "http://deepseek.idoxu.com/sparkle/shizixiu.html",
        "headline": "十字绣图纸生成器",
        "wordCount": 536,
        "author": {
            "@type": "Person",
            "name": "sparkle",
            "url": "http://deepseek.idoxu.com/#user-sparkle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting",
            "url": "http://deepseek.idoxu.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "http://deepseek.idoxu.com/static/dkfile-logo.png",
                "width": 200,
                "height": 200
            }
        },
        "datePublished": "2025-09-18T12:14:23.467896",
        "dateModified": "2025-09-18T12:14:23.467896",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "http://deepseek.idoxu.com/sparkle/shizixiu.html"
        },
        "isPartOf": {
            "@type": "WebSite",
            "name": "DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting",
            "url": "http://deepseek.idoxu.com/",
            "description": "DKFile是专业的免费HTML网页托管平台，支持AI编程和DeepSeek代码生成。无需域名和服务器，手机上随时随地编程，一键上传HTML文件即可获得公网访问链接。DKFile为开发者、学生和设计师提供零门槛的网页发布服务，集成AI编程助手，让您的项目瞬间展示给全世界。"
        },
        "inLanguage": "zh-CN",
        "potentialAction": {
            "@type": "ReadAction",
            "target": "http://deepseek.idoxu.com/sparkle/shizixiu.html"
        }
    }
    </script>
    
    <!-- 面包屑导航结构化数据 -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting",
                "item": "http://deepseek.idoxu.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "sparkle",
                "item": "http://deepseek.idoxu.com/#user-sparkle"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "十字绣图纸生成器",
                "item": "http://deepseek.idoxu.com/sparkle/shizixiu.html"
            }
        ]
    }
    </script>
    
    <!-- 网站图标 -->
    <link rel="icon" href="/static/dkfile-logo.png" type="image/png">
    <link rel="apple-touch-icon" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/static/dkfile-logo.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/static/dkfile-logo.png">
    <link rel="shortcut icon" href="/static/dkfile-logo.png" type="image/png">
    
    <!-- 规范链接 -->
    <link rel="canonical" href="http://deepseek.idoxu.com/sparkle/shizixiu.html">
    
    <!-- 平台链接 -->
    <link rel="alternate" type="text/html" href="http://deepseek.idoxu.com/" title="DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting">
    
    <!-- 预加载关键资源 -->
    <link rel="preconnect" href="http://deepseek.idoxu.com/">
    
    <!-- Google AdSense 已禁用 -->
    
    <style>
        /* 平台标识隔离容器 - 固定在视口底部右下角 */
        /* 使用fixed定位，相对于视口，不受任何父元素影响 */
        /* 使用最高优先级选择器，确保即使body有transform等属性也能正确定位 */
        /* 平台标识容器 - 使用与浮动按钮相同的选择器模式，确保优先级一致 */
        /* 参考浮动按钮的成功实现：body > .floating-action-buttons, html > body > .floating-action-buttons, body:last-child > .floating-action-buttons, .content-wrapper ~ .floating-action-buttons */
        /* 旧的平台标识容器样式已删除 - 已改用 #dkfile-platform-footer-in-buttons 方案 */
        
        /* 平台标识内部样式 - 保留用于向后兼容（如果存在旧的平台标识元素） */
        #dkfile-platform-footer,
        .platform-footer {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            left: auto !important;
            top: auto !important;
            padding: 8px 12px !important;
            background: transparent !important;
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 0 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            text-align: right !important;
            z-index: 2147483645 !important; /* 使用非常高的z-index，仅次于弹窗，确保不被用户内容遮挡 */
            margin: 0 !important; /* 移除margin，让容器控制对齐 */
            width: auto !important;
            max-width: none !important;
            min-width: auto !important;
            height: auto !important;
            min-height: auto !important;
            max-height: none !important;
            font-size: 12px !important;
            color: #999 !important;
            line-height: 1.5 !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
            overflow: visible !important;
            box-sizing: border-box !important;
            clear: both !important;
            float: none !important;
            flex-shrink: 0 !important; /* 防止被压缩 */
        }
        
        /* 防止用户内容覆盖平台标识样式 - 使用最高优先级 */
        .content-wrapper .platform-footer,
        .content-wrapper #dkfile-platform-footer,
        #dkfile-platform-footer,
        body > #dkfile-platform-footer,
        html > body > #dkfile-platform-footer,
        body > .platform-footer,
        html > body > .platform-footer,
        body:last-child > .platform-footer,
        body body ~ .platform-footer,
        .content-wrapper ~ .platform-footer,
        .content-wrapper ~ #dkfile-platform-footer,
        div.platform-footer,
        .platform-footer[class="platform-footer"] {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            left: auto !important;
            top: auto !important;
            z-index: 2147483645 !important; /* 使用非常高的z-index，仅次于弹窗，确保不被用户内容遮挡 */
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            transform: none !important;
            margin: 20px 0 10px 0 !important;
            padding: 8px 12px !important;
            width: auto !important;
            max-width: none !important;
            justify-content: flex-end !important;
            text-align: right !important;
            align-items: center !important;
        }
        
        /* 平台标识文字样式 - 使用高优先级选择器防止用户覆盖 */
        #dkfile-platform-footer span,
        .content-wrapper #dkfile-platform-footer span,
        .platform-footer[id*="dkfile-platform-footer"] span {
            color: #999 !important;
            font-size: 12px !important;
            font-weight: 400 !important;
        }
        
        #dkfile-platform-footer a,
        .content-wrapper #dkfile-platform-footer a,
        .platform-footer[id*="dkfile-platform-footer"] a {
            color: #999 !important;
            text-decoration: none !important;
            font-weight: 400 !important;
            font-size: 12px !important;
            transition: color 0.2s ease !important;
            margin: 0 2px !important;
        }
        
        #dkfile-platform-footer a:hover,
        .content-wrapper #dkfile-platform-footer a:hover,
        .platform-footer[id*="dkfile-platform-footer"] a:hover {
            color: #666 !important;
        }
        
        #dkfile-platform-footer a:active,
        .content-wrapper #dkfile-platform-footer a:active,
        .platform-footer[id*="dkfile-platform-footer"] a:active {
            color: #999 !important;
        }
        
        /* 技术支持链接 - 智能配色：根据背景自动调整 */
        /* 采用现代UI设计规范，确保对比度和可访问性 */
        .platform-footer a.tech-support-link {
            /* 默认绿色，但会被JavaScript动态覆盖 */
            color: #28a745 !important;
            transition: color 0.3s ease !important;
        }
        
        .platform-footer a.tech-support-link:hover {
            /* hover颜色会在JavaScript中动态计算 */
            transition: color 0.3s ease !important;
        }
        
        .platform-footer a.tech-support-link:active {
            color: inherit !important;
        }
        
        /* 浅色背景模式 - 深色文字（专业配色方案） */
        /* 符合WCAG AA级对比度标准，确保良好的可读性 */
        .platform-footer.adaptive-light {
            color: #333 !important; /* 深灰色，在浅色背景上清晰易读 */
        }
        
        .platform-footer.adaptive-light span {
            color: #666 !important; /* 中等灰色，营造视觉层次 */
        }
        
        .platform-footer.adaptive-light a {
            color: #28a745 !important; /* 品牌绿色，保持一致性 */
        }
        
        .platform-footer.adaptive-light a.tech-support-link {
            color: #28a745 !important; /* 标准绿色，与品牌色一致 */
        }
        
        .platform-footer.adaptive-light a.tech-support-link:hover {
            color: #218838 !important; /* 深绿色hover状态，提供清晰反馈 */
        }
        
        /* 深色背景模式 - 浅色文字（专业配色方案） */
        .platform-footer.adaptive-dark {
            /* 使用柔和的白色，避免过强对比 */
            color: rgba(255, 255, 255, 0.85) !important;
        }
        
        .platform-footer.adaptive-dark span {
            /* 次要文字使用稍低的透明度，营造层次感 */
            color: rgba(255, 255, 255, 0.75) !important;
        }
        
        .platform-footer.adaptive-dark a {
            /* 链接文字保持较高的可读性 */
            color: rgba(255, 255, 255, 0.9) !important;
        }
        
        .platform-footer.adaptive-dark a.tech-support-link {
            /* 在深色背景上使用亮绿色，既醒目又与背景色调和谐 */
            color: #6ee7b7 !important; /* 柔和的亮绿色，符合现代UI设计规范 */
        }
        
        .platform-footer.adaptive-dark a.tech-support-link:hover {
            /* hover时使用更亮的绿色，提供清晰的交互反馈 */
            color: #a7f3d0 !important; /* 更亮的绿色，确保可访问性 */
        }
        
        /* 保留原有样式以兼容其他可能的引用 */
        .footer-brand a {
            color: #999;
            text-decoration: none;
            font-weight: 400;
            font-size: 13px;
            letter-spacing: 0.2px;
            transition: color 0.2s ease;
        }
        
        .footer-brand a:hover {
            color: #666;
        }
        
        .footer-divider {
            width: 1px;
            height: 14px;
            background: rgba(0, 0, 0, 0.1);
        }
        
        .footer-support {
            position: relative;
        }
        
        .footer-support a {
            color: #999;
            text-decoration: none;
            font-size: 12px;
            font-weight: 400;
            padding: 0;
            background: transparent;
            border: none;
            transition: color 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }
        
        .footer-support a::before {
            content: "🛠️";
            font-size: 11px;
            opacity: 0.6;
        }
        
        .footer-support a:hover {
            color: #666;
        }
        
        .footer-support a:active {
            color: #999;
        }
        
        /* 我的收藏链接样式 */
        .footer-favorites a {
            color: #999;
            text-decoration: none;
            font-size: 12px;
            font-weight: 400;
            padding: 0;
            background: transparent;
            border: none;
            transition: color 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }
        
        .footer-favorites a::before {
            content: "❤️";
            font-size: 11px;
            opacity: 0.6;
        }
        
        .footer-favorites a:hover {
            color: #666;
        }
        
        .footer-favorites a:active {
            color: #999;
        }
        
        /* 覆盖base.html中的padding-bottom设置 */
        /* 注意：body的position不能是fixed或absolute，否则会影响子元素的fixed定位 */
        body {
            padding-bottom: 0 !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            /* 移除position: relative，避免影响fixed定位 */
            /* position: relative !important; */
        }
        
        /* 确保html标签不会阻止fixed定位 */
        html {
            overflow-x: visible !important;
            overflow-y: visible !important;
        }
        
        /* 样式隔离：确保平台标识在content-wrapper内部，固定在内容底部右下角 */
        /* 使用最高优先级选择器，防止用户代码覆盖 */
        .content-wrapper > #dkfile-platform-footer,
        .content-wrapper > .platform-footer,
        html > body > .content-wrapper > #dkfile-platform-footer,
        html > body > .content-wrapper > .platform-footer,
        body > .content-wrapper > #dkfile-platform-footer,
        body > .content-wrapper > .platform-footer {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            left: auto !important;
            top: auto !important;
            z-index: 2147483645 !important; /* 使用非常高的z-index，仅次于弹窗，确保不被用户内容遮挡 */
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            transform: none !important;
            margin: 20px 0 10px 0 !important;
            padding: 8px 12px !important;
            width: auto !important;
            max-width: none !important;
            justify-content: flex-end !important;
            text-align: right !important;
            align-items: center !important;
        }
        
        /* 旧的平台标识容器相关样式已删除 - 已改用 #dkfile-platform-footer-in-buttons 方案 */
        
        /* 响应式设计 - 手机端 */
        @media (max-width: 768px) {
            .content-wrapper {
                padding-bottom: 50px;
            }
            
            /* 旧的手机端平台标识样式已删除 - 已改用 #dkfile-platform-footer-in-buttons 方案 */
            
            /* 手机端浮动按钮容器 - 默认收起状态 */
            body > .floating-action-buttons,
            html > body > .floating-action-buttons,
            body:last-child > .floating-action-buttons,
            .content-wrapper ~ .floating-action-buttons,
            #dkfile-floating-buttons {
                bottom: 70px !important;
                right: 10px !important;
                left: auto !important;
                top: auto !important;
                gap: 0 !important; /* 收起时无间距 */
                flex-direction: column-reverse !important; /* 主菜单按钮在底部，展开时功能按钮在上方 */
                align-items: center !important; /* 确保所有按钮垂直居中对齐 */
                justify-content: flex-start !important;
            }
            
            /* 手机端主菜单按钮 - 显示（使用更高优先级选择器确保覆盖全局隐藏规则） */
            html body #floatingMenuBtn,
            html body #dkfile-floating-buttons > #floatingMenuBtn,
            html body body > #dkfile-floating-buttons > #floatingMenuBtn,
            html body html > body > #dkfile-floating-buttons > #floatingMenuBtn,
            html body .floating-menu-btn,
            #floatingMenuBtn,
            #dkfile-floating-buttons > #floatingMenuBtn,
            body > #dkfile-floating-buttons > #floatingMenuBtn,
            html > body > #dkfile-floating-buttons > #floatingMenuBtn,
            .floating-menu-btn {
                display: flex !important;
                width: 40px !important;
                height: 40px !important;
                min-width: 40px !important;
                min-height: 40px !important;
                max-width: 40px !important;
                max-height: 40px !important;
                aspect-ratio: 1 !important;
                border-radius: 50% !important;
                background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
                border: none !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 18px !important;
                color: white !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 2px 8px rgba(40, 167, 69, 0.4) !important;
                position: relative !important;
                z-index: 10001 !important;
                margin: 0 !important;
                padding: 0 !important;
                box-sizing: border-box !important;
                outline: none !important;
                -webkit-tap-highlight-color: transparent !important;
            }
            
            #floatingMenuBtn:hover,
            .floating-menu-btn:hover {
                transform: translateY(-1px) scale(1.05) !important;
                box-shadow: 0 4px 12px rgba(40, 167, 69, 0.5) !important;
            }
            
            #floatingMenuBtn:active,
            #floatingMenuBtn:focus,
            .floating-menu-btn:active,
            .floating-menu-btn:focus {
                transform: translateY(0) rotate(45deg) !important;
                box-shadow: 0 2px 8px rgba(40, 167, 69, 0.4) !important;
                outline: none !important;
                -webkit-tap-highlight-color: transparent !important;
            }
            
            #floatingMenuBtn.active,
            .floating-menu-btn.active {
                transform: rotate(45deg) !important;
                background: linear-gradient(135deg, #ff4757 0%, #ff6348 100%) !important;
                box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4) !important;
            }
            
            /* 手机端功能按钮 - 默认隐藏 */
            #dkfile-floating-buttons > .floating-btn:not(.floating-menu-btn),
            #dkfile-floating-buttons .floating-btn:not(.floating-menu-btn),
            body > #dkfile-floating-buttons > .floating-btn:not(.floating-menu-btn),
            html > body > #dkfile-floating-buttons > .floating-btn:not(.floating-menu-btn),
            body > .floating-action-buttons > .floating-btn:not(.floating-menu-btn),
            html > body > .floating-action-buttons > .floating-btn:not(.floating-menu-btn),
            .floating-action-buttons .floating-btn:not(.floating-menu-btn) {
                width: 40px !important;
                height: 40px !important;
                min-width: 40px !important;
                min-height: 40px !important;
                max-width: 40px !important;
                max-height: 40px !important;
                font-size: 14px !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transform: translateY(20px) scale(0.5) !important;
                pointer-events: none !important;
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
            }
            
            /* 手机端功能按钮 - 展开状态 */
            .floating-action-buttons.expanded > .floating-btn:not(.floating-menu-btn),
            #dkfile-floating-buttons.expanded > .floating-btn:not(.floating-menu-btn) {
                opacity: 1 !important;
                visibility: visible !important;
                transform: translateY(0) scale(1) !important;
                pointer-events: auto !important;
            }
            
            /* 展开时按钮间距 */
            .floating-action-buttons.expanded,
            #dkfile-floating-buttons.expanded {
                gap: 8px !important;
                align-items: flex-end !important;
            }
            
            /* 按钮展开动画延迟 */
            .floating-action-buttons.expanded > .floating-btn:nth-child(2),
            #dkfile-floating-buttons.expanded > .floating-btn:nth-child(2) {
                transition-delay: 0.05s !important;
            }
            
            .floating-action-buttons.expanded > .floating-btn:nth-child(3),
            #dkfile-floating-buttons.expanded > .floating-btn:nth-child(3) {
                transition-delay: 0.1s !important;
            }
            
            .floating-action-buttons.expanded > .floating-btn:nth-child(4),
            #dkfile-floating-buttons.expanded > .floating-btn:nth-child(4) {
                transition-delay: 0.15s !important;
            }
            
            .floating-action-buttons.expanded > .floating-btn:nth-child(5),
            #dkfile-floating-buttons.expanded > .floating-btn:nth-child(5) {
                transition-delay: 0.2s !important;
            }
            
            .floating-action-buttons.expanded > .floating-btn:nth-child(6),
            #dkfile-floating-buttons.expanded > .floating-btn:nth-child(6) {
                transition-delay: 0.25s !important;
            }
        }
        
        /* PC端隐藏主菜单按钮 */
        @media (min-width: 769px) {
            #floatingMenuBtn,
            #dkfile-floating-buttons > #floatingMenuBtn,
            body > #dkfile-floating-buttons > #floatingMenuBtn,
            html > body > #dkfile-floating-buttons > #floatingMenuBtn,
            .floating-menu-btn {
                display: none !important;
            }
            
            /* PC端始终显示所有功能按钮 */
            #dkfile-floating-buttons > .floating-btn:not(.floating-menu-btn),
            #dkfile-floating-buttons .floating-btn:not(.floating-menu-btn) {
                opacity: 1 !important;
                visibility: visible !important;
                transform: scale(1) translateY(0) !important;
                pointer-events: auto !important;
            }
        }
        
        @media (max-width: 768px) {
            
            #dkfile-floating-buttons > .floating-btn,
            #dkfile-floating-buttons .floating-btn,
            body > #dkfile-floating-buttons > .floating-btn,
            html > body > #dkfile-floating-buttons > .floating-btn,
            body > .floating-action-buttons > .floating-btn,
            html > body > .floating-action-buttons > .floating-btn,
            .floating-action-buttons .floating-btn {
                width: 36px !important;
                height: 36px !important;
                min-width: 36px !important;
                min-height: 36px !important;
                max-width: 36px !important;
                max-height: 36px !important;
                font-size: 12px !important;
            }
            
            /* 手机端已点赞和已收藏状态 - 红色选中效果 */
            #dkfile-floating-buttons .floating-btn.like-btn.liked,
            .floating-action-buttons .floating-btn.like-btn.liked {
                background: #ff4757 !important;
                color: white !important;
            }
            
            #dkfile-floating-buttons .floating-btn.like-btn.liked i,
            .floating-action-buttons .floating-btn.like-btn.liked i {
                color: white !important;
            }
            
            #dkfile-floating-buttons .floating-btn.favorite-btn.favorited,
            .floating-action-buttons .floating-btn.favorite-btn.favorited {
                background: #ff4757 !important;
                color: white !important;
            }
            
            #dkfile-floating-buttons .floating-btn.favorite-btn.favorited i,
            .floating-action-buttons .floating-btn.favorite-btn.favorited i {
                color: white !important;
            }
            
            .platform-footer span {
                font-size: 11px;
            }
            
            .platform-footer a {
                font-size: 11px;
            }
            
            .footer-brand a {
                font-size: 12px;
            }
            
            .footer-support a {
                font-size: 11px;
                gap: 3px;
            }
            
            .footer-support a::before {
                font-size: 10px;
            }
            
            .footer-favorites a {
                font-size: 11px;
                gap: 3px;
            }
            
            .footer-favorites a::before {
                font-size: 10px;
            }
        }
        
        /* 功能按钮样式 */
        .action-buttons-container {
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .action-btn {
            width: 48px;
            height: 48px;
            border: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
        
        .action-btn i {
            font-size: 16px;
            margin-bottom: 3px;
        }
        
        .action-btn .btn-text {
            font-size: 9px;
            font-weight: 600;
            line-height: 1;
        }
        
        .like-btn {
            color: #ff4757;
            background: rgba(255, 71, 87, 0.05);
        }
        
        .like-btn:hover {
            background: rgba(255, 71, 87, 0.1);
            color: #ff4757;
        }
        
        .like-btn.liked {
            background: #ff4757;
            color: white;
        }
        
        .favorite-btn {
            color: #ffa502;
            background: rgba(255, 165, 2, 0.05);
        }
        
        .favorite-btn:hover {
            background: rgba(255, 165, 2, 0.1);
            color: #ffa502;
        }
        
        .favorite-btn.favorited {
            background: #ffa502;
            color: white;
        }
        
        .share-buttons .share-btn {
            color: #28a745;
            background: rgba(40, 167, 69, 0.1);
        }
        
        .share-buttons .share-btn:hover {
            transform: translateY(-2px);
            background: rgba(40, 167, 69, 0.2);
        }
        
        .feedback-btn {
            color: #a55eea;
            background: rgba(165, 94, 234, 0.05);
        }
        
        .feedback-btn:hover {
            background: rgba(165, 94, 234, 0.1);
            color: #a55eea;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .action-buttons-container {
                bottom: 100px;
                right: 15px;
            }
            
            .action-btn {
                width: 38px;
                height: 38px;
            }
            
            .action-btn i {
                font-size: 14px;
            }
            
            .action-btn .btn-text {
                font-size: 8px;
            }
        }
        

        

    </style>
    
    <!-- 关键数据初始化 - 在用户内容加载前初始化，确保即使用户内容有错误也能正常工作 -->
    
    <script>
        // 在head中初始化pageData，确保即使用户内容有错误也能正常工作
        try {
            window.pageData = {"author": "sparkle", "fileId": 10342, "fileName": "shizixiu.html", "projectName": "\u5341\u5b57\u7ee3\u56fe\u7eb8\u751f\u6210\u5668"};
            window.currentUserAuthenticated = false;
        } catch (error) {
            window.pageData = window.pageData || {};
            window.currentUserAuthenticated = window.currentUserAuthenticated || false;
        }
    </script>
    
    <!-- 关键函数定义 - 在用户内容加载前定义，防止被覆盖 -->
    <!-- 使用独立的script标签和错误隔离，确保即使用户内容有错误，平台功能也能正常工作 -->
    <script>
        // 使用立即执行函数表达式（IIFE）和错误隔离，保护平台关键功能
        (function() {
            'use strict';
            
            // 定义基础工具函数（在用户内容加载前就可用）
            window.logClick = window.logClick || function(type) {
                try {
                    console.log('点击记录:', type);
                    // 实际的日志记录会在页面加载完成后实现
                } catch (e) {
                    console.debug('日志记录失败:', e);
                }
            };
            
            window.showToast = window.showToast || function(message) {
                try {
                    const toast = document.createElement('div');
                    toast.style.cssText = 'position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0, 0, 0, 0.9); color: white; padding: 12px 24px; border-radius: 8px; z-index: 9999999999; font-size: 14px; font-weight: 500; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); pointer-events: auto;';
                    toast.textContent = message;
                    document.body.appendChild(toast);
                    setTimeout(() => toast.remove(), 3000);
                } catch (e) {
                    console.error('Toast显示失败:', e);
                    alert(message);
                }
            };
            
            // 定义关键函数的完整实现（在用户内容加载前就定义好）
            // 这样即使用户内容有语法错误，这些函数也能正常工作
            window.handleLike = function() {
                try {
                    logClick('like_click');
                    
                    // 检查是否登录（优先使用window上的变量）
                    const isAuthenticated = typeof window.currentUserAuthenticated !== 'undefined' 
                        ? window.currentUserAuthenticated 
                        : (typeof currentUserAuthenticated !== 'undefined' ? currentUserAuthenticated : false);
                    
                    if (!isAuthenticated) {
                        showToast('请先登录后再点赞');
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 1500);
                        return;
                    }
                    
                    // 获取文件ID（优先使用head中初始化的pageData）
                    const getFileId = function() {
                        // 优先使用全局pageData（已在head中初始化）
                        if (typeof window.pageData !== 'undefined' && window.pageData && window.pageData.fileId) {
                            return window.pageData.fileId;
                        }
                        // 兼容旧版本（如果pageData不在window上）
                        if (typeof pageData !== 'undefined' && pageData && pageData.fileId) {
                            return pageData.fileId;
                        }
                        // 尝试使用getValidPageData函数（如果存在）
                        if (typeof getValidPageData === 'function') {
                            try {
                                const validData = getValidPageData();
                                if (validData && validData.fileId) {
                                    return validData.fileId;
                                }
                            } catch (e) {
                                console.debug('getValidPageData调用失败:', e);
                            }
                        }
                        // 尝试从URL解析（作为最后手段）
                        try {
                            const pathParts = window.location.pathname.split('/').filter(p => p);
                            if (pathParts.length >= 2) {
                                // 格式: /username/filename.html
                                // 需要通过API获取文件ID，这里先返回null
                                return null;
                            }
                        } catch (e) {
                            console.debug('URL解析失败:', e);
                        }
                        return null;
                    };
                    
                    const fileId = getFileId();
                    if (!fileId) {
                        showToast('文件信息异常，无法执行点赞操作');
                        return;
                    }
                    
                    fetch('/api/like', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ file_id: fileId })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            const likeBtn = document.querySelector('.floating-btn.like-btn');
                            if (likeBtn) {
                                if (data.action === 'liked') {
                                    likeBtn.classList.add('liked');
                                    likeBtn.innerHTML = '<i class="bi bi-heart-fill"></i>';
                                } else {
                                    likeBtn.classList.remove('liked');
                                    likeBtn.innerHTML = '<i class="bi bi-heart"></i>';
                                }
                            }
                            showToast(data.message);
                        } else {
                            showToast('操作失败：' + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('点赞请求失败:', error);
                        showToast('操作失败，请稍后重试');
                    });
                } catch (error) {
                    console.error('handleLike执行错误:', error);
                    showToast('点赞功能暂时不可用，请刷新页面重试');
                }
            };
            
            window.handleFavorite = function() {
                try {
                    logClick('favorite_click');
                    
                    // 检查是否登录（优先使用window上的变量）
                    const isAuthenticated = typeof window.currentUserAuthenticated !== 'undefined' 
                        ? window.currentUserAuthenticated 
                        : (typeof currentUserAuthenticated !== 'undefined' ? currentUserAuthenticated : false);
                    
                    if (!isAuthenticated) {
                        showToast('请先登录后再收藏');
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 1500);
                        return;
                    }
                    
                    const getFileId = function() {
                        // 优先使用全局pageData（已在head中初始化）
                        if (typeof window.pageData !== 'undefined' && window.pageData && window.pageData.fileId) {
                            return window.pageData.fileId;
                        }
                        // 兼容旧版本（如果pageData不在window上）
                        if (typeof pageData !== 'undefined' && pageData && pageData.fileId) {
                            return pageData.fileId;
                        }
                        // 尝试使用getValidPageData函数（如果存在）
                        if (typeof getValidPageData === 'function') {
                            try {
                                const validData = getValidPageData();
                                if (validData && validData.fileId) {
                                    return validData.fileId;
                                }
                            } catch (e) {
                                console.debug('getValidPageData调用失败:', e);
                            }
                        }
                        return null;
                    };
                    
                    const fileId = getFileId();
                    if (!fileId) {
                        showToast('文件信息异常，无法执行收藏操作');
                        return;
                    }
                    
                    fetch('/api/favorite', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ file_id: fileId })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            const favoriteBtn = document.querySelector('.floating-btn.favorite-btn');
                            if (favoriteBtn) {
                                if (data.action === 'favorited') {
                                    favoriteBtn.classList.add('favorited');
                                    favoriteBtn.innerHTML = '<i class="bi bi-bookmark-fill"></i>';
                                } else {
                                    favoriteBtn.classList.remove('favorited');
                                    favoriteBtn.innerHTML = '<i class="bi bi-bookmark"></i>';
                                }
                            }
                            showToast(data.message);
                        } else {
                            showToast('操作失败：' + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('收藏请求失败:', error);
                        showToast('操作失败，请稍后重试');
                    });
                } catch (error) {
                    console.error('handleFavorite执行错误:', error);
                    showToast('收藏功能暂时不可用，请刷新页面重试');
                }
            };
            
            window.handleFeedback = function() {
                try {
                    logClick('feedback_click');
                    const feedbackBtn = document.querySelector('.floating-btn.feedback-btn');
                    if (feedbackBtn) {
                        feedbackBtn.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            feedbackBtn.style.transform = '';
                        }, 150);
                    }
                    const feedbackOverlay = document.getElementById('feedbackOverlay');
                    if (feedbackOverlay) {
                        // 强制设置最高优先级样式（与分享弹窗一致）
                        feedbackOverlay.style.setProperty('display', 'flex', 'important');
                        feedbackOverlay.style.setProperty('z-index', '2147483646', 'important');
                        feedbackOverlay.style.setProperty('position', 'fixed', 'important');
                        feedbackOverlay.style.setProperty('pointer-events', 'auto', 'important');
                        feedbackOverlay.style.setProperty('visibility', 'visible', 'important');
                        feedbackOverlay.style.setProperty('opacity', '1', 'important');
                        feedbackOverlay.style.setProperty('top', '0', 'important');
                        feedbackOverlay.style.setProperty('left', '0', 'important');
                        feedbackOverlay.style.setProperty('right', '0', 'important');
                        feedbackOverlay.style.setProperty('bottom', '0', 'important');
                        document.body.style.overflow = 'hidden';
                        
                        // 确保反馈弹窗内的面板也可见
                        const feedbackPanel = feedbackOverlay.querySelector('.floating-panel');
                        if (feedbackPanel) {
                            feedbackPanel.style.setProperty('display', 'block', 'important');
                            feedbackPanel.style.setProperty('z-index', '2147483647', 'important');
                            feedbackPanel.style.setProperty('position', 'relative', 'important');
                            feedbackPanel.style.setProperty('visibility', 'visible', 'important');
                            feedbackPanel.style.setProperty('opacity', '1', 'important');
                        }
                        
                    } else {
                        showToast('反馈功能暂时不可用，请刷新页面重试');
                    }
                } catch (error) {
                    console.error('handleFeedback执行错误:', error);
                    showToast('反馈功能暂时不可用，请刷新页面重试');
                }
            };
            
            // 关闭反馈浮层 - 在head中定义，确保即使用户内容有错误也能正常工作
            window.closeFeedback = function() {
                try {
                    const feedbackOverlay = document.getElementById('feedbackOverlay');
                    if (feedbackOverlay) {
                        feedbackOverlay.style.setProperty('display', 'none', 'important');
                        document.body.style.overflow = '';
                    } else {
                    }
                } catch (error) {
                    // 即使出错，也尝试恢复body的overflow
                    try {
                        document.body.style.overflow = '';
                    } catch (e) {
                    }
                }
            };
            
            window.handleShare = function() {
                try {
                    logClick('share_click');
                    
                    // 不修改用户内容，只显示平台分享弹窗
                    
                    const shareBtn = document.querySelector('.floating-btn.share-btn');
                    if (shareBtn) {
                        shareBtn.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            shareBtn.style.transform = '';
                        }, 150);
                    }
                    
                    const shareOverlay = document.getElementById('shareOverlay');
                    if (shareOverlay) {
                        // 强制设置最高优先级样式（立即执行）
                        shareOverlay.style.setProperty('display', 'flex', 'important');
                        shareOverlay.style.setProperty('z-index', '2147483646', 'important');
                        shareOverlay.style.setProperty('position', 'fixed', 'important');
                        shareOverlay.style.setProperty('pointer-events', 'auto', 'important');
                        shareOverlay.style.setProperty('visibility', 'visible', 'important');
                        shareOverlay.style.setProperty('opacity', '1', 'important');
                        shareOverlay.style.setProperty('top', '0', 'important');
                        shareOverlay.style.setProperty('left', '0', 'important');
                        shareOverlay.style.setProperty('right', '0', 'important');
                        shareOverlay.style.setProperty('bottom', '0', 'important');
                        document.body.style.overflow = 'hidden';
                        
                        // 确保分享弹窗内的所有元素也可见
                        const sharePanel = shareOverlay.querySelector('.floating-panel');
                        if (sharePanel) {
                            sharePanel.style.setProperty('display', 'block', 'important');
                            sharePanel.style.setProperty('z-index', '2147483647', 'important');
                            sharePanel.style.setProperty('position', 'relative', 'important');
                            sharePanel.style.setProperty('visibility', 'visible', 'important');
                            sharePanel.style.setProperty('opacity', '1', 'important');
                        }
                        
                        const shareMenu = shareOverlay.querySelector('.share-menu');
                        if (shareMenu) {
                            shareMenu.style.setProperty('display', 'block', 'important');
                            shareMenu.style.setProperty('z-index', '2147483647', 'important');
                        }
                        
                        // 验证弹窗是否真的可见
                        setTimeout(() => {
                            const computedStyle = window.getComputedStyle(shareOverlay);

                            if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {

                                shareOverlay.style.setProperty('display', 'flex', 'important');
                                shareOverlay.style.setProperty('visibility', 'visible', 'important');
                            }
                        }, 100);

                        // 生成二维码（如果函数存在）
                        if (typeof window.generateShareQRCode === 'function') {
                            window.generateShareQRCode();
                        }
                    } else {

                        showToast('分享功能暂时不可用，请刷新页面重试');
                    }
                } catch (error) {
                    console.error('handleShare执行错误:', error);
                    showToast('分享功能暂时不可用，请刷新页面重试');
                }
            };
            
            // 关闭分享浮层 - 在head中定义
            window.closeShare = function() {
                try {

                    const shareOverlay = document.getElementById('shareOverlay');
                    if (shareOverlay) {
                        shareOverlay.style.setProperty('display', 'none', 'important');
                        document.body.style.overflow = '';
                    }
                    
                    // 不修改用户内容，只关闭平台分享弹窗
                } catch (error) {

                    try {
                        document.body.style.overflow = '';
                    } catch (e) {
                        // 忽略
                    }
                }
            };
            
            // 生成分享二维码 - 在head中定义
            window.generateShareQRCode = function() {
                try {

                    const qrContainer = document.getElementById('shareQrCode');
                    if (!qrContainer) {

                        return;
                    }
                    
                    const currentUrl = window.location.href;
                    const apiUrl = `/api/qrcode?content=${encodeURIComponent(currentUrl)}&type=url&size=200&margin=2`;
                    
                    fetch(apiUrl)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`网络请求失败: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            if (data.success) {
                                qrContainer.innerHTML = `
                                    <div class="qr-code-image">
                                        <img src="${data.data}" alt="分享二维码" id="qrCodeImage" style="width: 120px; height: 120px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                                    </div>
                                `;
                            } else {
                                throw new Error(data.error || '二维码生成失败');
                            }
                        })
                        .catch(error => {

                            qrContainer.innerHTML = `
                                <div class="qr-error text-center text-muted">
                                    <i class="bi bi-exclamation-triangle me-1"></i>
                                    <small>二维码生成失败</small>
                                </div>
                            `;
                        });
                } catch (error) {

                }
            };
            
            // 分享到微博 - 在head中定义
            window.shareToWeibo = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
                    window.open(weiboUrl, '_blank', 'width=600,height=400');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到GitHub - 在head中定义
            window.shareToGithub = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const shareText = `Check out this awesome tool: ${projectName} - ${title}`;
                    const githubUrl = `https://github.com/new?description=${encodeURIComponent(shareText)}&filename=${encodeURIComponent(projectName)}.md`;
                    window.open(githubUrl, '_blank', 'width=800,height=600');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到Reddit - 在head中定义
            window.shareToReddit = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
                    window.open(redditUrl, '_blank', 'width=600,height=500');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到LinkedIn - 在head中定义
            window.shareToLinkedIn = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                    window.open(linkedinUrl, '_blank', 'width=600,height=500');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到WhatsApp - 在head中定义
            window.shareToWhatsApp = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const shareText = `${projectName} - ${title}\n\n${url}`;
                    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                    window.open(whatsappUrl, '_blank', 'width=400,height=600');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到Telegram - 在head中定义
            window.shareToTelegram = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const shareText = `${projectName} - ${title}\n\n${url}`;
                    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
                    window.open(telegramUrl, '_blank', 'width=400,height=600');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到微信 - 在head中定义
            window.shareToWeChat = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const shareText = `${projectName} - ${title}\n\n${url}`;
                    
                    // 微信分享需要特殊处理，这里提供复制链接的方式
                    if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(shareText).then(() => {
                            showToast('内容已复制到剪贴板，请打开微信粘贴分享');
                            if (typeof window.closeShare === 'function') {
                                window.closeShare();
                            }
                        }).catch(() => {
                            if (typeof window.fallbackCopyTextToClipboard === 'function') {
                                window.fallbackCopyTextToClipboard(shareText);
                            }
                        });
                    } else {
                        if (typeof window.fallbackCopyTextToClipboard === 'function') {
                            window.fallbackCopyTextToClipboard(shareText);
                        }
                    }
                } catch (error) {

                }
            };
            
            // 分享到QQ - 在head中定义
            window.shareToQQ = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const shareText = `${projectName} - ${title}`;
                    const qqUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareText)}&summary=${encodeURIComponent(shareText)}`;
                    window.open(qqUrl, '_blank', 'width=600,height=500');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 分享到Twitter/X - 在head中定义
            window.shareToTwitter = function() {
                try {
                    const url = window.location.href;
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const shareText = `${projectName} - ${title}`;
                    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}&via=IdoXu401`;
                    window.open(xUrl, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
                    logClick('x_twitter_share');
                    if (typeof window.closeShare === 'function') {
                        window.closeShare();
                    }
                } catch (error) {

                }
            };
            
            // 我的工具 - 在head中定义
            window.handleMyTools = function() {
                try {

                    logClick('my_tools_click');
                    
                    // 检查是否登录（优先使用window上的变量）
                    const isAuthenticated = typeof window.currentUserAuthenticated !== 'undefined' 
                        ? window.currentUserAuthenticated 
                        : (typeof currentUserAuthenticated !== 'undefined' ? currentUserAuthenticated : false);
                    
                    if (!isAuthenticated) {

                        showToast('请先登录后再访问用户中心');
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 1500);
                        return;
                    }
                    
                    // 跳转到用户中心
                    window.location.href = '/dashboard';
                } catch (error) {

                    showToast('跳转失败，请刷新页面重试');
                }
            };
            
            // 下载二维码 - 在head中定义
            window.downloadQRCode = function() {
                try {

                    const qrImage = document.getElementById('qrCodeImage');
                    if (!qrImage) {
                        showToast('二维码未生成');
                        return;
                    }
                    
                    // 创建一个临时的canvas来下载图片
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = qrImage.naturalWidth || 200;
                    canvas.height = qrImage.naturalHeight || 200;
                    
                    // 绘制白色背景
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // 绘制二维码
                    qrImage.onload = function() {
                        ctx.drawImage(qrImage, 0, 0);
                        
                        // 创建下载链接
                        canvas.toBlob(function(blob) {
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            const fileName = (window.pageData && window.pageData.projectName) || '工具';
                            a.download = `DKFile-${fileName}.png`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                            showToast('二维码下载成功');
                        }, 'image/png');
                    };
                    
                    // 如果图片已经加载完成
                    if (qrImage.complete) {
                        qrImage.onload();
                    }
                } catch (error) {

                    showToast('下载失败，请重试');
                }
            };
            
            // 复制链接 - 在head中定义
            window.copyLink = function() {
                try {

                    let url = window.location.href;
                    url = url.replace('http://', 'https://');
                    const title = document.title;
                    const projectName = (window.pageData && window.pageData.projectName) || '工具';
                    const textToCopy = `${projectName} - ${title}\n${url}`;
                    
                    if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            showToast('链接已复制到剪贴板');
                            if (typeof window.closeShare === 'function') {
                                window.closeShare();
                            }
                        }).catch(() => {
                            fallbackCopyTextToClipboard(textToCopy);
                        });
                    } else {
                        fallbackCopyTextToClipboard(textToCopy);
                    }
                } catch (error) {

                    showToast('复制失败，请手动复制链接');
                }
            };
            
            // 备用复制方法 - 在head中定义
            window.fallbackCopyTextToClipboard = function(text) {
                try {
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    try {
                        document.execCommand('copy');
                        showToast('链接已复制到剪贴板');
                        if (typeof window.closeShare === 'function') {
                            window.closeShare();
                        }
                    } catch (err) {
                        showToast('复制失败，请手动复制链接');
                    }
                    
                    document.body.removeChild(textArea);
                } catch (error) {

                }
            };
            
            // 检查并修复可能影响fixed定位的父元素样式（在head中定义）
            window.fixFixedPositioningAncestors = function(element) {
                if (!element || !element.parentElement) return false;
                
                let current = element.parentElement;
                const problematicProps = ['transform', 'perspective', 'filter', 'will-change'];
                
                while (current && current !== document.body && current !== document.documentElement) {
                    const computedStyle = window.getComputedStyle(current);
                    
                    // 检查是否有影响fixed定位的属性
                    for (const prop of problematicProps) {
                        const value = computedStyle.getPropertyValue(prop);
                        if (value && value !== 'none' && value !== 'auto' && value !== 'initial') {
                            // 如果父元素有这些属性，需要将容器移到body下

                            return true; // 需要移动容器
                        }
                    }
                    
                    // 检查position是否为fixed或absolute（这些也可能影响）
                    const position = computedStyle.position;
                    if (position === 'fixed' || position === 'absolute') {
                        // 如果父元素是fixed或absolute，检查是否有transform等属性
                        const transform = computedStyle.transform;
                        if (transform && transform !== 'none') {

                            return true; // 需要移动容器
                        }
                    }
                    
                    current = current.parentElement;
                }
                
                return false; // 不需要移动
            };
            
            // 强制修复平台标识位置 - 已简化，只检查新的 #dkfile-platform-footer-in-buttons
            window.forceFixPlatformFooter = function() {
                // 新的平台标识已集成到浮动按钮组中，无需额外修复
                // 保留此函数用于向后兼容，但不执行任何操作
                return;
            };
            
            // 手机端浮动按钮展开/收起控制 - 在head中定义，确保在用户内容加载前可用
            window.toggleFloatingButtons = function() {
                try {
                    const isMobile = window.innerWidth <= 768;
                    if (!isMobile) {
                        return; // 非手机端不执行
                    }
                    
                    const buttonsContainer = document.getElementById('dkfile-floating-buttons');
                    const menuBtn = document.getElementById('floatingMenuBtn');
                    const menuBtnIcon = document.getElementById('menuBtnIcon');
                    const overlay = document.getElementById('floatingButtonsOverlay');
                    
                    if (!buttonsContainer || !menuBtn || !menuBtnIcon) {

                        return;
                    }
                    
                    const isExpanded = buttonsContainer.classList.contains('expanded');
                    
                    // 记录收缩/展开按钮点击日志
                    logClick(isExpanded ? 'menu_collapse' : 'menu_expand');
                    
                    if (isExpanded) {
                        // 收起
                        buttonsContainer.classList.remove('expanded');
                        menuBtn.classList.remove('active');
                        menuBtnIcon.className = 'bi bi-plus-lg';
                        if (overlay) {
                            overlay.classList.remove('active');
                        }
                        document.body.style.overflow = '';

                    } else {
                        // 展开
                        buttonsContainer.classList.add('expanded');
                        menuBtn.classList.add('active');
                        menuBtnIcon.className = 'bi bi-x-lg';
                        if (overlay) {
                            overlay.classList.add('active');
                        }
                        document.body.style.overflow = 'hidden';

                    }
                } catch (error) {

                }
            };
            
            
            // 强制修复浮动按钮样式 - 确保固定在右下角（在head中定义，确保在用户内容加载前可用）
            window.forceFixFloatingButtons = function() {
                // 优先使用ID选择器，更精确，避免被用户内容中的.floating-action-buttons影响
                const floatingButtons = document.getElementById('dkfile-floating-buttons') || document.querySelector('.floating-action-buttons');
                if (!floatingButtons) {

                    // 如果元素还没加载，延迟重试
                    setTimeout(function() {
                        if (typeof window.forceFixFloatingButtons === 'function') {
                            window.forceFixFloatingButtons();
                        }
                    }, 500);
                    return;
                }
                
                try {
                    const isMobile = window.innerWidth <= 768;
                    // 强制设置关键样式属性，确保固定在右下角
                    floatingButtons.style.setProperty('position', 'fixed', 'important');
                    floatingButtons.style.setProperty('bottom', isMobile ? '70px' : '80px', 'important');
                    floatingButtons.style.setProperty('right', isMobile ? '10px' : '20px', 'important');
                    floatingButtons.style.setProperty('left', 'auto', 'important');
                    floatingButtons.style.setProperty('top', 'auto', 'important');
                    floatingButtons.style.setProperty('z-index', '10000', 'important');
                    floatingButtons.style.setProperty('display', 'flex', 'important');
                    floatingButtons.style.setProperty('flex-direction', 'column', 'important');
                    floatingButtons.style.setProperty('gap', isMobile ? '6px' : '8px', 'important');
                    floatingButtons.style.setProperty('visibility', 'visible', 'important');
                    floatingButtons.style.setProperty('opacity', '1', 'important');
                    floatingButtons.style.setProperty('pointer-events', 'auto', 'important');
                    floatingButtons.style.setProperty('transform', 'none', 'important');
                    floatingButtons.style.setProperty('margin', '0', 'important');
                    floatingButtons.style.setProperty('padding', '0', 'important');
                    
                    // 修复每个按钮的样式
                    const buttons = floatingButtons.querySelectorAll('.floating-btn');
                    buttons.forEach(function(btn) {
                        const btnSize = isMobile ? '36px' : '40px';
                        btn.style.setProperty('width', btnSize, 'important');
                        btn.style.setProperty('height', btnSize, 'important');
                        btn.style.setProperty('min-width', btnSize, 'important');
                        btn.style.setProperty('min-height', btnSize, 'important');
                        btn.style.setProperty('max-width', btnSize, 'important');
                        btn.style.setProperty('max-height', btnSize, 'important');
                        btn.style.setProperty('display', 'flex', 'important');
                        btn.style.setProperty('visibility', 'visible', 'important');
                        btn.style.setProperty('opacity', '1', 'important');
                        btn.style.setProperty('pointer-events', 'auto', 'important');
                    });

                } catch (e) {

                }
            };
            
        })();
    </script>
    
    <!-- 错误隔离：在用户内容加载前设置全局错误处理 -->
    <script>
        (function() {
            'use strict';
            
            // 记录原始的错误处理
            const originalError = window.onerror;
            const originalUnhandledRejection = window.onunhandledrejection;
            
            // 全局错误处理 - 捕获并静默处理语法错误，避免影响用户体验
            window.onerror = function(message, source, lineno, colno, error) {
                // 检查是否是语法错误（SyntaxError）
                const isSyntaxError = message && (
                    message.includes('SyntaxError') ||
                    message.includes('Unexpected token') ||
                    message.includes('Unexpected end') ||
                    message.includes('Unexpected identifier') ||
                    (error && error.name === 'SyntaxError')
                );
                
                // 如果是语法错误，静默处理，不抛出到控制台
                if (isSyntaxError) {
                    // 静默处理语法错误，避免影响用户体验
                    // 仅在开发模式下记录（通过检查是否有调试标志）
                    if (window.DKFILE_DEBUG_MODE) {
                        console.debug('语法错误已静默处理:', {
                            message: message,
                            source: source,
                            lineno: lineno,
                            colno: colno
                        });
                    }
                    return true; // 阻止错误传播到控制台
                }
                
                // 如果错误来自用户内容（content-wrapper），记录但不阻止执行
                if (source && (source.includes('content-wrapper') || !source.includes('view.html'))) {
                    // 错误来自用户内容，已隔离，不影响平台功能
                    if (typeof window.handleLike === 'undefined') {
                        // 平台关键函数可能被用户内容影响
                    }
                    return false; // 允许错误继续传播（用于调试）
                }
                
                // 如果是平台代码的错误，调用原始处理器
                if (originalError) {
                    return originalError.apply(this, arguments);
                }
                return false;
            };
            
            // 捕获未处理的Promise拒绝
            window.addEventListener('unhandledrejection', function(event) {
                // 不阻止默认行为
            });
            
        })();
    </script>
</head>
<body>
    
    <div class="content-wrapper">
        <!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>十字绣图纸生成器</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .drag-active {
            border-color: #3b82f6;
            background-color: rgba(59, 130, 246, 0.1);
        }
        .loading-spinner {
            border: 2px solid #f3f4f6;
            border-top: 2px solid #3b82f6;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .color-item {
            transition: all 0.2s ease;
        }
        .color-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .pattern-canvas {
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            max-width: 100%;
            height: auto;
        }
        .control-slider {
            -webkit-appearance: none;
            appearance: none;
            height: 6px;
            border-radius: 3px;
            background: #e5e7eb;
            outline: none;
        }
        .control-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .control-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body class="min-h-screen gradient-bg">
    <!-- Header -->
    <header class="glass-effect sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path>
                    </svg>
                </div>
                <div>
                    <h1 class="text-2xl font-bold text-white">
                        十字绣图纸生成器
                    </h1>
                    <p class="text-sm text-white/80">将任何图片转换为精美的十字绣图纸</p>
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- 左侧 - 上传和控制 -->
            <div class="lg:col-span-1 space-y-6">
                <!-- 图片上传区域 -->
                <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div id="upload-area" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                        <input type="file" id="file-input" accept="image/*" class="hidden">
                        <div id="upload-content">
                            <div class="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                            </div>
                            <p class="text-lg font-medium text-gray-700">点击上传或拖拽图片到这里</p>
                            <p class="text-sm text-gray-500 mt-1">支持 JPG、PNG、GIF 格式</p>
                        </div>
                        <div id="image-preview" class="hidden">
                            <img id="preview-img" class="max-w-full max-h-48 object-contain mx-auto rounded-lg">
                            <button id="clear-image" class="mt-2 text-red-500 hover:text-red-700 text-sm">清除图片</button>
                        </div>
                    </div>
                </div>

                <!-- 参数控制 -->
                <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h3 class="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                        <svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        参数设置
                    </h3>
                    
                    <div class="space-y-6">
                        <!-- 网格尺寸 -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-3">网格尺寸</label>

                            <!-- 等比例缩放 checkbox -->
                            <div class="mb-4">
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" id="aspect-ratio-lock" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                    <span class="text-sm text-gray-700">等比例缩放</span>
                                    <div class="text-xs text-gray-500 ml-1">(保持原图比例，避免变形)</div>
                                </label>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs text-gray-500 mb-1">宽度</label>
                                    <input type="range" id="grid-width" min="20" max="150" value="50" class="control-slider w-full">
                                    <div class="text-center text-sm text-gray-600 mt-1" id="width-value">50</div>
                                </div>
                                <div>
                                    <label class="block text-xs text-gray-500 mb-1">高度</label>
                                    <input type="range" id="grid-height" min="20" max="150" value="50" class="control-slider w-full">
                                    <div class="text-center text-sm text-gray-600 mt-1" id="height-value">50</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 颜色数量 -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-3">颜色数量</label>
                            <input type="range" id="max-colors" min="5" max="30" value="15" class="control-slider w-full">
                            <div class="text-center text-sm text-gray-600 mt-1" id="colors-value">15 种颜色</div>
                        </div>
                        
                        <!-- 生成按钮 -->
                        <button id="generate-btn" disabled class="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 bg-gray-300 text-gray-500 cursor-not-allowed">
                            生成十字绣图纸
                        </button>
                    </div>
                </div>
            </div>

            <!-- 右侧 - 结果显示 -->
            <div class="lg:col-span-2 space-y-6">
                <!-- 十字绣画布 -->
                <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-semibold text-gray-800" id="canvas-title">
                            十字绣图纸
                        </h3>
                        <div class="flex space-x-2" id="action-buttons" style="display: none;">
                            <button id="download-btn" class="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                <span>下载</span>
                            </button>
                            <button id="print-btn" class="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                                </svg>
                                <span>打印</span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="border rounded-lg overflow-auto max-h-96 bg-gray-50" id="canvas-container">
                        <div id="empty-state" class="text-center text-gray-500 py-16">
                            <div class="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <div class="w-8 h-8 border-2 border-gray-300 rounded-sm"></div>
                            </div>
                            <p>上传图片并设置参数，然后点击生成按钮</p>
                        </div>
                        <canvas id="pattern-canvas" class="pattern-canvas mx-auto" style="display: none;"></canvas>
                    </div>
                </div>
                
                <!-- 颜色清单 -->
                <div id="color-legend" class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg" style="display: none;">
                    <div class="flex items-center space-x-2 mb-6">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM17 3h-2a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                        </svg>
                        <h3 class="text-lg font-semibold text-gray-800">颜色清单</h3>
                        <span class="text-sm text-gray-500" id="color-summary"></span>
                    </div>
                    
                    <div id="color-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                        <!-- 颜色项将在这里动态生成 -->
                    </div>
                    
                    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 class="text-sm font-semibold text-blue-900 mb-2">用线估算</h4>
                        <div class="text-sm text-blue-700 space-y-1" id="thread-estimate">
                            <!-- 用线估算将在这里显示 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="glass-effect py-8 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <div class="flex items-center justify-center space-x-2 mb-2">
                    <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <p class="text-sm text-white">用心制作，让十字绣变得更简单</p>
                </div>
                <p class="text-xs text-white/70">提示：建议使用对比度高、细节清晰的图片获得更好效果</p>
            </div>
        </div>
    </footer>

    <template id="site-footer">
        <style>
            .footer {
            position: fixed;   /* 贴底 */
            bottom: 55px;
            left: 0;
            width: 100%;
            padding: .75rem 1rem;
            font-size: 14px;
            background: #fafafa;
            border-top: 1px solid #eaeaea;
            display: flex;
            flex-wrap: wrap;
            gap: .5rem;
            justify-content: center;
            align-items: center;
            z-index: 999;
            }

            @media (max-width: 768px) {
                    .footer {
                        bottom: 47px;
                    }
                }
            .footer a { color: #0077cc; text-decoration: none; }
            .footer a:hover { text-decoration: underline; }

            .qr-wrapper { position: relative; display: inline-block; }
            .qr-img {
            /* 初始隐藏 */
            display: none;
            position: absolute;
            bottom: 1.8rem;   /* 调整图片出现的位置 */
            left: 50%;
            transform: translateX(-50%);
            max-width: 140px;
            border: 1px solid #ddd;
            background: #fff;
            padding: 4px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,.15);
            }
            .qr-wrapper:hover .qr-img { display: block; }
        </style>

        <div class="footer card">
            Created&nbsp;by：
            <!-- 广告示例 1 -->
                <span class="qr-wrapper">
                <a class="qr-link"
                    href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0MzUzOTEwMw==&scene=124#wechat_redirect"
                    target="_blank"
                    data-img="https://raw.githubusercontent.com/anneeeee/programming_exercise/refs/heads/main/ad_pics/qrcode_for_gh_87351941139e_258%20(2).jpg">系统1与系统2</a>
                <img class="qr-img" alt="系统1与系统2公众号二维码">
                </span>
            &nbsp;||&nbsp;广告位：
            <!-- 广告示例 1 -->
            <span class="qr-wrapper">
            <a class="qr-link"
                href="https://t.zsxq.com/SjYuX"
                target="_blank"
                data-img="https://raw.githubusercontent.com/anneeeee/programming_exercise/refs/heads/main/ad_pics/AI_programming.pic.jpg">AI编程星球</a>
            <img class="qr-img" alt="AI编程星球二维码">
            </span> |
            <!-- 广告示例 2 -->
            <span class="qr-wrapper">
            <a class="qr-link"
                href="https://t.zsxq.com/VTCya"
                target="_blank"
                data-img="https://raw.githubusercontent.com/anneeeee/programming_exercise/refs/heads/main/ad_pics/laoxu.pic.jpg">副业避坑星球</a>
            <img class="qr-img" alt="副业避坑星球二维码">
            </span> |
            <!-- 广告示例 3（如果没有 data-img 就不会弹出图片） -->
            <span class="qr-wrapper">
            <a class="qr-link"
                href="https://www.xiaobot.net/p/ai08?refer=a9625ad2-ec04-4cc8-8549-7511079cb3b5"
                target="_blank"
                data-img="https://raw.githubusercontent.com/anneeeee/programming_exercise/refs/heads/main/ad_pics/hani-xiaobot-8.png">AI&nbsp;产品日报</a>
            <img class="qr-img" alt="AI产品日报二维码">
            </span> |
            <span class="qr-wrapper">
            <a class="qr-link"
                href="https://t.zsxq.com/jcaEa"
                target="_blank"
                data-img="https://raw.githubusercontent.com/anneeeee/programming_exercise/refs/heads/main/ad_pics/aipm.pic.jpg">AI&nbsp;产品经理大本营</a>
            <img class="qr-img" alt="AI产品经理大本营二维码">
            </span>
        </div>
    </template>

    <canvas id="temp-canvas" style="display: none;"></canvas>

    <script>
        // 十字绣符号列表
        const CROSS_STITCH_SYMBOLS = [
            '●', '■', '▲', '♦', '★', '▼', '◆', '♥',
            '○', '□', '△', '◇', '☆', '▽', '◊', '♡',
            '⬤', '⬛', '⬆', '⬜', '⭐', '⬇', '◯', '💖',
            '🔴', '🟦', '🟩', '🟨', '🟪', '🟫', '⚫', '⚪'
        ];

        // 全局变量
        let currentImage = null;
        let crossStitchData = null;
        let isProcessing = false;
        let imageAspectRatio = 1;

        // DOM 元素
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        const uploadContent = document.getElementById('upload-content');
        const imagePreview = document.getElementById('image-preview');
        const previewImg = document.getElementById('preview-img');
        const clearImageBtn = document.getElementById('clear-image');
        const gridWidthSlider = document.getElementById('grid-width');
        const gridHeightSlider = document.getElementById('grid-height');
        const maxColorsSlider = document.getElementById('max-colors');
        const aspectRatioLock = document.getElementById('aspect-ratio-lock');
        const widthValue = document.getElementById('width-value');
        const heightValue = document.getElementById('height-value');
        const colorsValue = document.getElementById('colors-value');
        const generateBtn = document.getElementById('generate-btn');
        const patternCanvas = document.getElementById('pattern-canvas');
        const emptyState = document.getElementById('empty-state');
        const colorLegend = document.getElementById('color-legend');
        const colorGrid = document.getElementById('color-grid');
        const colorSummary = document.getElementById('color-summary');
        const threadEstimate = document.getElementById('thread-estimate');
        const canvasTitle = document.getElementById('canvas-title');
        const actionButtons = document.getElementById('action-buttons');
        const downloadBtn = document.getElementById('download-btn');
        const printBtn = document.getElementById('print-btn');
        const tempCanvas = document.getElementById('temp-canvas');

        // 事件监听器
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('dragleave', handleDragLeave);
        uploadArea.addEventListener('drop', handleDrop);
        fileInput.addEventListener('change', handleFileSelect);
        clearImageBtn.addEventListener('click', clearImage);

        gridWidthSlider.addEventListener('input', (e) => {
            const width = parseInt(e.target.value);
            widthValue.textContent = width;

            // 如果启用了等比例缩放，同时调整高度
            if (aspectRatioLock.checked) {
                const height = Math.round(width / imageAspectRatio);
                const clampedHeight = Math.max(20, Math.min(150, height));
                gridHeightSlider.value = clampedHeight;
                heightValue.textContent = clampedHeight;
            }
        });

        gridHeightSlider.addEventListener('input', (e) => {
            const height = parseInt(e.target.value);
            heightValue.textContent = height;

            // 如果启用了等比例缩放，同时调整宽度
            if (aspectRatioLock.checked) {
                const width = Math.round(height * imageAspectRatio);
                const clampedWidth = Math.max(20, Math.min(150, width));
                gridWidthSlider.value = clampedWidth;
                widthValue.textContent = clampedWidth;
            }
        });

        maxColorsSlider.addEventListener('input', (e) => {
            colorsValue.textContent = `${e.target.value} 种颜色`;
        });

        // 等比例缩放 checkbox 事件监听器
        aspectRatioLock.addEventListener('change', (e) => {
            if (e.target.checked && currentImage) {
                // 勾选时，根据当前宽度调整高度以保持比例
                const width = parseInt(gridWidthSlider.value);
                const height = Math.round(width / imageAspectRatio);
                const clampedHeight = Math.max(20, Math.min(150, height));
                gridHeightSlider.value = clampedHeight;
                heightValue.textContent = clampedHeight;
            }
        });

        generateBtn.addEventListener('click', generateCrossStitch);
        downloadBtn.addEventListener('click', downloadPattern);
        printBtn.addEventListener('click', printPattern);

        // 拖拽处理
        function handleDragOver(e) {
            e.preventDefault();
            uploadArea.classList.add('drag-active');
        }

        function handleDragLeave(e) {
            e.preventDefault();
            uploadArea.classList.remove('drag-active');
        }

        function handleDrop(e) {
            e.preventDefault();
            uploadArea.classList.remove('drag-active');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFile(files[0]);
            }
        }

        // 文件选择处理
        function handleFileSelect(e) {
            const file = e.target.files[0];
            if (file) {
                handleFile(file);
            }
        }

        function handleFile(file) {
            if (!file.type.startsWith('image/')) {
                alert('请选择图片文件');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const ctx = tempCanvas.getContext('2d');

                    // 保存原图宽高比
                    imageAspectRatio = img.width / img.height;

                    // 限制最大尺寸以提高性能
                    const maxSize = 800;
                    let { width, height } = img;

                    if (width > maxSize || height > maxSize) {
                        const ratio = Math.min(maxSize / width, maxSize / height);
                        width *= ratio;
                        height *= ratio;
                    }

                    tempCanvas.width = width;
                    tempCanvas.height = height;

                    ctx.drawImage(img, 0, 0, width, height);
                    currentImage = tempCanvas;

                    // 显示预览
                    previewImg.src = e.target.result;
                    uploadContent.style.display = 'none';
                    imagePreview.style.display = 'block';

                    // 启用生成按钮
                    updateGenerateButton();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        function clearImage() {
            currentImage = null;
            uploadContent.style.display = 'block';
            imagePreview.style.display = 'none';
            fileInput.value = '';
            updateGenerateButton();
            
            // 隐藏结果
            emptyState.style.display = 'block';
            patternCanvas.style.display = 'none';
            colorLegend.style.display = 'none';
            actionButtons.style.display = 'none';
            canvasTitle.textContent = '十字绣图纸';
        }

        function updateGenerateButton() {
            if (currentImage && !isProcessing) {
                generateBtn.disabled = false;
                generateBtn.className = 'w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] shadow-md hover:shadow-lg';
                generateBtn.textContent = '生成十字绣图纸';
            } else {
                generateBtn.disabled = true;
                generateBtn.className = 'w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 bg-gray-300 text-gray-500 cursor-not-allowed';
                generateBtn.innerHTML = isProcessing ? 
                    '<div class="flex items-center justify-center space-x-2"><div class="loading-spinner"></div><span>生成中...</span></div>' :
                    '生成十字绣图纸';
            }
        }

        // K-means颜色量化
        function quantizeColors(imageData, maxColors) {
            const { data, width, height } = imageData;
            const pixels = [];
            
            // 采样像素（每4个像素取1个以提高性能）
            for (let i = 0; i < data.length; i += 16) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const a = data[i + 3];
                
                if (a > 128) { // 忽略透明像素
                    pixels.push([r, g, b]);
                }
            }
            
            if (pixels.length === 0) return [];
            
            // 初始化聚类中心
            const centers = [];
            for (let i = 0; i < Math.min(maxColors, pixels.length); i++) {
                const randomIndex = Math.floor(Math.random() * pixels.length);
                centers.push([...pixels[randomIndex]]);
            }
            
            // K-means迭代
            for (let iter = 0; iter < 20; iter++) {
                const clusters = Array(centers.length).fill(null).map(() => []);
                
                // 分配像素到最近的中心
                pixels.forEach(pixel => {
                    let minDist = Infinity;
                    let closestCenter = 0;
                    
                    centers.forEach((center, i) => {
                        const dist = Math.sqrt(
                            Math.pow(pixel[0] - center[0], 2) +
                            Math.pow(pixel[1] - center[1], 2) +
                            Math.pow(pixel[2] - center[2], 2)
                        );
                        
                        if (dist < minDist) {
                            minDist = dist;
                            closestCenter = i;
                        }
                    });
                    
                    clusters[closestCenter].push(pixel);
                });
                
                // 更新中心
                centers.forEach((center, i) => {
                    if (clusters[i].length > 0) {
                        const avgR = clusters[i].reduce((sum, p) => sum + p[0], 0) / clusters[i].length;
                        const avgG = clusters[i].reduce((sum, p) => sum + p[1], 0) / clusters[i].length;
                        const avgB = clusters[i].reduce((sum, p) => sum + p[2], 0) / clusters[i].length;
                        
                        centers[i] = [Math.round(avgR), Math.round(avgG), Math.round(avgB)];
                    }
                });
            }
            
            // 创建颜色对象
            return centers.map((center, index) => ({
                r: center[0],
                g: center[1],
                b: center[2],
                symbol: CROSS_STITCH_SYMBOLS[index % CROSS_STITCH_SYMBOLS.length],
                name: `颜色 ${index + 1}`,
                count: 0
            }));
        }

        // 找到最接近的颜色
        function findClosestColor(r, g, b, colors) {
            let minDist = Infinity;
            let closestColor = colors[0];
            
            colors.forEach(color => {
                const dist = Math.sqrt(
                    Math.pow(r - color.r, 2) +
                    Math.pow(g - color.g, 2) +
                    Math.pow(b - color.b, 2)
                );
                
                if (dist < minDist) {
                    minDist = dist;
                    closestColor = color;
                }
            });
            
            return closestColor;
        }

        // 生成十字绣图案
        function generateCrossStitch() {
            if (!currentImage || isProcessing) return;

            isProcessing = true;
            updateGenerateButton();
            
            setTimeout(() => {
                try {
                    const ctx = currentImage.getContext('2d');
                    const imageData = ctx.getImageData(0, 0, currentImage.width, currentImage.height);
                    
                    const gridWidth = parseInt(gridWidthSlider.value);
                    const gridHeight = parseInt(gridHeightSlider.value);
                    const maxColors = parseInt(maxColorsSlider.value);
                    
                    // 量化颜色
                    const quantizedColors = quantizeColors(imageData, maxColors);
                    
                    // 计算网格尺寸
                    const cellWidth = currentImage.width / gridWidth;
                    const cellHeight = currentImage.height / gridHeight;
                    
                    const cells = [];
                    const colorCounts = {};
                    
                    // 为每个网格单元分配颜色
                    for (let row = 0; row < gridHeight; row++) {
                        for (let col = 0; col < gridWidth; col++) {
                            const x = Math.floor(col * cellWidth + cellWidth / 2);
                            const y = Math.floor(row * cellHeight + cellHeight / 2);
                            
                            if (x >= 0 && x < currentImage.width && y >= 0 && y < currentImage.height) {
                                const pixelIndex = (y * currentImage.width + x) * 4;
                                const r = imageData.data[pixelIndex];
                                const g = imageData.data[pixelIndex + 1];
                                const b = imageData.data[pixelIndex + 2];
                                const a = imageData.data[pixelIndex + 3];
                                
                                if (a > 128) {
                                    const closestColor = findClosestColor(r, g, b, quantizedColors);
                                    cells.push({
                                        color: closestColor,
                                        x: col,
                                        y: row
                                    });
                                    
                                    const colorKey = `${closestColor.r},${closestColor.g},${closestColor.b}`;
                                    colorCounts[colorKey] = (colorCounts[colorKey] || 0) + 1;
                                }
                            }
                        }
                    }
                    
                    // 更新颜色计数
                    const colorsWithCount = quantizedColors.map(color => {
                        const colorKey = `${color.r},${color.g},${color.b}`;
                        return {
                            ...color,
                            count: colorCounts[colorKey] || 0
                        };
                    }).filter(color => color.count > 0);
                    
                    crossStitchData = {
                        cells,
                        colors: colorsWithCount,
                        width: gridWidth,
                        height: gridHeight
                    };
                    
                    renderCrossStitch();
                    renderColorLegend();
                    
                } catch (error) {
                    console.error('处理图片时出错:', error);
                    alert('处理图片时出错，请重试');
                } finally {
                    isProcessing = false;
                    updateGenerateButton();
                }
            }, 100);
        }

        // 渲染十字绣图案
        function renderCrossStitch() {
            if (!crossStitchData) return;

            const { cells, colors, width, height } = crossStitchData;
            const cellSize = Math.max(20, Math.min(600 / width, 600 / height));
            
            patternCanvas.width = width * cellSize;
            patternCanvas.height = height * cellSize;
            
            const ctx = patternCanvas.getContext('2d');
            
            // 清空画布
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
            
            // 绘制网格背景
            ctx.strokeStyle = '#e5e7eb';
            ctx.lineWidth = 1;
            
            for (let x = 0; x <= width; x++) {
                ctx.beginPath();
                ctx.moveTo(x * cellSize, 0);
                ctx.lineTo(x * cellSize, patternCanvas.height);
                ctx.stroke();
            }
            
            for (let y = 0; y <= height; y++) {
                ctx.beginPath();
                ctx.moveTo(0, y * cellSize);
                ctx.lineTo(patternCanvas.width, y * cellSize);
                ctx.stroke();
            }
            
            // 绘制颜色单元
            cells.forEach(cell => {
                const x = cell.x * cellSize;
                const y = cell.y * cellSize;
                
                // 填充背景色
                ctx.fillStyle = `rgb(${cell.color.r}, ${cell.color.g}, ${cell.color.b})`;
                ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
                
                // 绘制符号
                if (cellSize >= 16) {
                    ctx.fillStyle = getContrastColor(cell.color.r, cell.color.g, cell.color.b);
                    ctx.font = `${Math.min(cellSize * 0.6, 14)}px Arial, sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    ctx.fillText(
                        cell.color.symbol,
                        x + cellSize / 2,
                        y + cellSize / 2
                    );
                }
            });
            
            // 显示结果
            emptyState.style.display = 'none';
            patternCanvas.style.display = 'block';
            actionButtons.style.display = 'flex';
            canvasTitle.textContent = `十字绣图纸 (${width} × ${height})`;
        }

        // 渲染颜色清单
        function renderColorLegend() {
            if (!crossStitchData) return;

            const { colors } = crossStitchData;
            const totalStitches = colors.reduce((sum, color) => sum + color.count, 0);
            
            colorSummary.textContent = `(${colors.length} 种颜色，共 ${totalStitches} 针)`;
            
            colorGrid.innerHTML = '';
            colors.forEach((color, index) => {
                const colorItem = document.createElement('div');
                colorItem.className = 'color-item flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors';
                
                const percentage = ((color.count / totalStitches) * 100).toFixed(1);
                
                colorItem.innerHTML = `
                    <div class="w-8 h-8 rounded-md border-2 border-gray-200 flex items-center justify-center font-bold text-sm shadow-sm"
                         style="background-color: rgb(${color.r}, ${color.g}, ${color.b}); color: ${getContrastColor(color.r, color.g, color.b)}">
                        ${color.symbol}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm font-medium text-gray-900">${color.name}</div>
                        <div class="text-xs text-gray-500">${rgbToHex(color.r, color.g, color.b)} • ${color.count} 针</div>
                    </div>
                    <div class="text-right">
                        <div class="text-sm font-semibold text-gray-700">${color.count}</div>
                        <div class="text-xs text-gray-500">${percentage}%</div>
                    </div>
                `;
                
                colorGrid.appendChild(colorItem);
            });
            
            // 用线估算
            threadEstimate.innerHTML = `
                <p>• 总针数: ${totalStitches} 针</p>
                <p>• 预计用线: ${Math.ceil(totalStitches * 0.8)} 厘米</p>
                <p>• 建议多备 20% 用线以防不足</p>
            `;
            
            colorLegend.style.display = 'block';
        }

        // 获取对比色
        function getContrastColor(r, g, b) {
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#000000' : '#ffffff';
        }

        // RGB转十六进制
        function rgbToHex(r, g, b) {
            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }

        // 下载图案
        function downloadPattern() {
            if (!patternCanvas) return;
            
            const link = document.createElement('a');
            link.download = 'cross-stitch-pattern.png';
            link.href = patternCanvas.toDataURL();
            link.click();
        }

        // 打印图案
        function printPattern() {
            if (!patternCanvas || !crossStitchData) return;
            
            const printWindow = window.open('', '_blank');
            if (printWindow) {
                const imageUrl = patternCanvas.toDataURL();
                const { colors, width, height } = crossStitchData;
                
                printWindow.document.write(`
                    <html>
                        <head>
                            <title>十字绣图纸</title>
                            <style>
                                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                                img { max-width: 100%; height: auto; }
                                .header { text-align: center; margin-bottom: 20px; }
                                .color-legend { margin-top: 20px; }
                                .color-item { display: inline-block; margin: 5px; padding: 5px 10px; border: 1px solid #ccc; border-radius: 4px; }
                            </style>
                        </head>
                        <body>
                            <div class="header">
                                <h1>十字绣图纸</h1>
                                <p>尺寸: ${width} × ${height} 格</p>
                            </div>
                            <img src="${imageUrl}" alt="十字绣图纸" />
                            <div class="color-legend">
                                <h3>颜色列表:</h3>
                                ${colors.map(color => `
                                    <div class="color-item">
                                        <span style="background-color: rgb(${color.r}, ${color.g}, ${color.b}); color: ${getContrastColor(color.r, color.g, color.b)}; padding: 2px 6px; border-radius: 2px; font-weight: bold;">${color.symbol}</span>
                                        ${color.name} - ${color.count} 格
                                    </div>
                                `).join('')}
                            </div>
                        </body>
                    </html>
                `);
                printWindow.document.close();
                printWindow.print();
            }
        }
        // 把模板克隆到页面底部
  document.addEventListener('DOMContentLoaded', () => {
    const tpl = document.getElementById('site-footer');
    if (tpl && 'content' in tpl) {
      document.body.appendChild(tpl.content.cloneNode(true));
    }

    // 用 data-img 填充 <img src>
    document.querySelectorAll('.qr-wrapper').forEach(w => {
      const link = w.querySelector('.qr-link');
      const img  = w.querySelector('.qr-img');
      if (link && img && link.dataset.img) {
        img.src = link.dataset.img.trim();
      }
    });
  });
    </script>
</body>
</html>
    </div>
    
    <!-- 保护性script标签：确保用户内容中的未闭合script标签不会影响后续代码 -->
    <!-- 必须紧跟在用户内容之后，在浮动按钮HTML之前，确保正确闭合用户内容中可能存在的未闭合script标签 -->
    <script type="text/javascript"></script>
    
    <!-- 旧的平台标识容器已删除 - 已改用 #dkfile-platform-footer-in-buttons 方案 -->
    
    <!-- 用户内容加载后记录 -->
    <script>
        // 如果函数被覆盖或丢失，尝试恢复
        if (typeof window.handleLike !== 'function') {
            // 函数丢失，已在head中定义，不应该丢失
        }
        
        // 旧的Shadow DOM平台标识代码已完全删除 - 已改用 #dkfile-platform-footer-in-buttons 方案
    </script>
    

    
    <style>
        /* 内容容器 - 最小化样式，不影响用户内容 */
        .content-wrapper {
            position: relative !important;
            overflow-x: hidden !important;
        }
    </style>
    
    <!-- 手机端展开遮罩层 -->
    <div class="floating-buttons-overlay" id="floatingButtonsOverlay" onclick="if(typeof window.toggleFloatingButtons === 'function') { window.toggleFloatingButtons(); } else if(typeof toggleFloatingButtons === 'function') { toggleFloatingButtons(); }"></div>
    
    <!-- 右下角固定浮层按钮组 - 使用ID和内联样式确保样式不被用户内容覆盖 -->
    <div class="floating-action-buttons" id="dkfile-floating-buttons" style="position: fixed !important; bottom: 80px !important; right: 20px !important; left: auto !important; top: auto !important; z-index: 10000 !important; display: flex !important; flex-direction: column-reverse !important; gap: 8px !important; margin: 0 !important; padding: 0 !important; width: auto !important; height: auto !important; transform: none !important; opacity: 1 !important; visibility: visible !important; pointer-events: auto !important;">
        <!-- 手机端主菜单按钮（默认在底部，展开时在最上方） -->
        <button class="floating-btn floating-menu-btn" id="floatingMenuBtn" onclick="if(typeof window.toggleFloatingButtons === 'function') { window.toggleFloatingButtons(); } else if(typeof toggleFloatingButtons === 'function') { toggleFloatingButtons(); }" title="展开/收起功能按钮">
            <i class="bi bi-plus-lg" id="menuBtnIcon"></i>
        </button>
        
        <!-- 我的工具按钮 -->
        <button class="floating-btn my-tools-btn" id="myToolsBtn" data-label="我的工具" onclick="if(typeof handleMyTools === 'function') { handleMyTools(); } else { alert('我的工具功能暂时不可用'); }" title="我的工具">
            <i class="bi bi-person-circle"></i>
        </button>
        
        <!-- 分享按钮 -->
        <button class="floating-btn share-btn" data-label="分享" onclick="if(typeof handleShare === 'function') { handleShare(); } else { alert('分享功能暂时不可用'); }" title="分享到推特、微博">
            <i class="bi bi-share"></i>
        </button>
        
        <!-- 反馈按钮 -->
        <button class="floating-btn feedback-btn" data-label="反馈" onclick="if(typeof handleFeedback === 'function') { handleFeedback(); } else { alert('反馈功能暂时不可用'); }" title="反馈问题或建议">
            <i class="bi bi-chat-dots"></i>
        </button>
        
        <!-- 收藏按钮 -->
        <button class="floating-btn favorite-btn" data-label="收藏" onclick="if(typeof handleFavorite === 'function') { handleFavorite(); } else { alert('收藏功能暂时不可用'); }" title="在用户中心会展示，帮你更快速访问这些工具">
            <i class="bi bi-bookmark"></i>
        </button>
        
        <!-- 点赞按钮 -->
        <button class="floating-btn like-btn" data-label="点赞" onclick="if(typeof handleLike === 'function') { handleLike(); } else { alert('点赞功能暂时不可用'); }" title="你的点赞会把这个工具在工具库优先推荐给更多人">
            <i class="bi bi-heart"></i>
        </button>
    </div>
    
    <!-- 平台标识 - 集成到浮动按钮组下方，使用相同的fixed定位机制 -->
    <!-- PC端显示，手机端隐藏（避免遮挡用户内容） -->
    <div id="dkfile-platform-footer-in-buttons" style="position: fixed !important; bottom: 10px !important; right: 20px !important; left: auto !important; top: auto !important; z-index: 10000 !important; display: flex !important; justify-content: flex-end !important; align-items: center !important; visibility: visible !important; opacity: 1 !important; pointer-events: auto !important; margin: 0 !important; padding: 6px 12px !important; width: auto !important; box-sizing: border-box !important; transform: none !important; background: rgba(255, 255, 255, 0.9) !important; backdrop-filter: blur(10px) !important; border-radius: 8px !important; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important; font-size: 11px !important; color: #666 !important; line-height: 1.4 !important;">
        <span style="margin-right: 4px;">由作者发布在</span>
        <a href="/" style="color: #28a745 !important; text-decoration: none !important; margin: 0 2px !important;" title="DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting - 免费HTML网页托管平台" onclick="if(typeof logClick === 'function') { logClick('dkfile_link'); }" rel="nofollow">DKFile</a>
        <span style="margin: 0 4px;">平台，</span>
        <a href="/blog/idolaoxuzuixinbanjieshao" target="_blank" rel="noopener nofollow" style="color: #28a745 !important; text-decoration: none !important; margin: 0 2px !important;" title="技术支持，有任何问题，可以找我" onclick="if(typeof logClick === 'function') { logClick('tech_support'); }">技术支持 IDO老徐</a>
    </div>

    <!-- Google AdSense 广告位 - 已禁用 -->
    <!-- <div id="adsense-container" style="text-align: center; margin: 20px 0; padding: 10px; min-height: 100px; display: none;">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-1568926315655201"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
    </div>
    
    <script type="text/javascript">
        // 等待 Google AdSense 异步加载完成
        function initAdsenseAd() {
            // 检查是否已经初始化过
            if (window.adsenseAdInitialized) {
                console.log('⚠️ AdSense 广告已经初始化过，跳过重复初始化');
                return;
            }
            
            if (window.adsbygoogle && window.googleServicesLoader && window.googleServicesLoader.getServiceStatus().adsense) {
                try {
                    document.getElementById('adsense-container').style.display = 'block';
                    
                    // 使用更安全的广告初始化方式
                    if (window.adsbygoogle && window.adsbygoogle.push) {
                        window.adsbygoogle.push({});
                        window.adsenseAdInitialized = true;
                        console.log('✅ AdSense 广告初始化成功');
                    }
                } catch (error) {
                    console.warn('AdSense 广告初始化失败:', error);
                }
            } else {
                // 如果 AdSense 未加载，延迟重试
                setTimeout(initAdsenseAd, 1000);
            }
        }
        
        // 页面加载完成后尝试初始化广告
        document.addEventListener('DOMContentLoaded', function() {
            // 等待 google-services-loader 完成初始化
            setTimeout(initAdsenseAd, 3000); // 延迟3秒确保服务已加载
        });
    </script> -->
    
    <script>
        // 在body中再次初始化pageData（如果head中的初始化失败，这里作为备用）
        // 同时确保兼容性（定义局部变量）

        try {
            // 如果head中的初始化失败，这里重新初始化
            if (typeof window.pageData === 'undefined' || !window.pageData || !window.pageData.fileId) {
                
                window.pageData = {"author": "sparkle", "fileId": 10342, "fileName": "shizixiu.html", "projectName": "\u5341\u5b57\u7ee3\u56fe\u7eb8\u751f\u6210\u5668"};
                window.currentUserAuthenticated = false;

            } else {

            }
            
            // 为了兼容性，也定义局部变量（但优先使用window上的）
            const pageData = window.pageData;
            const currentUserAuthenticated = window.currentUserAuthenticated;
        
        // 调试信息

        } catch (error) {

            // 确保至少有一个空对象
            window.pageData = window.pageData || {};
            window.currentUserAuthenticated = window.currentUserAuthenticated || false;
        }
        
        // HTML文件完整性检测
        function validateHtmlFile() {
            const issues = [];
            
            // 检测是否有多个 DOCTYPE html
            const doctypeCount = document.querySelectorAll('html').length;
            if (doctypeCount > 1) {
                issues.push(`检测到 ${doctypeCount} 个HTML文档结构，文件可能包含重复内容`);
            }
            
            // 检测是否有多个 title 标签
            const titleCount = document.querySelectorAll('title').length;
            if (titleCount > 1) {
                issues.push(`检测到 ${titleCount} 个title标签，文件结构异常`);
            }
            
            // 检测是否有多个 body 标签
            const bodyCount = document.querySelectorAll('body').length;
            if (bodyCount > 1) {
                issues.push(`检测到 ${bodyCount} 个body标签，文件结构异常`);
            }
            
            // 检测是否有多个 pageData 对象（通过脚本内容检测）
            const scripts = document.querySelectorAll('script');
            let pageDataCount = 0;
            scripts.forEach(script => {
                if (script.textContent && script.textContent.includes('pageData')) {
                    pageDataCount++;
                }
            });
            if (pageDataCount > 1) {
                issues.push(`检测到 ${pageDataCount} 个pageData对象，可能导致功能异常`);
            }
            
            return issues;
        }
        
        // 智能 pageData 选择
        function getValidPageData() {
            console.log('getValidPageData 被调用');
            console.log('当前 pageData:', pageData);
            
            // 如果当前 pageData 有效，直接使用
            if (pageData && pageData.fileId && pageData.fileId !== 'null' && pageData.fileId !== null) {
                console.log('使用当前 pageData:', pageData);
                return pageData;
            }
            
            console.log('当前 pageData 无效，尝试查找其他数据源');
            
            // 尝试从页面中查找其他 pageData 对象
            const scripts = document.querySelectorAll('script');
            let foundPageData = null;
            
            for (let script of scripts) {
                if (script.textContent && script.textContent.includes('pageData')) {
                    try {
                        // 尝试提取 pageData 对象
                        const match = script.textContent.match(/const\s+pageData\s*=\s*({[^}]+})/);
                        if (match) {
                            const dataStr = match[1];
                            // 简单的对象解析
                            const fileIdMatch = dataStr.match(/fileId:\s*(\d+)/);
                            if (fileIdMatch) {
                                foundPageData = {
                                    fileId: parseInt(fileIdMatch[1]),
                                    fileName: 'auto-detected',
                                    projectName: 'auto-detected',
                                    author: 'auto-detected'
                                };
                                console.log('找到其他 pageData:', foundPageData);
                                break;
                            }
                        }
                    } catch (e) {
                        console.warn('解析pageData失败:', e);
                    }
                }
            }
            
            const result = foundPageData || pageData;
            console.log('getValidPageData 返回结果:', result);
            return result;
        }
        
        // 页面加载完成后进行完整性检查（仅记录到控制台，不显示给用户）
        document.addEventListener('DOMContentLoaded', function() {
            const issues = validateHtmlFile();
            
            if (issues.length > 0) {
                // 仅在控制台记录，不显示给用户
                console.debug('HTML文件完整性检查发现问题:', issues);
                // 移除用户界面警告显示
            }
        });
        
        // 调试信息
        console.log('用户登录状态:', currentUserAuthenticated);
        console.log('当前用户:', '');
        console.log('页面数据:', pageData);
        console.log('文件ID:', pageData.fileId);
        
        // 全局错误处理 - 增强版，静默处理语法错误
        window.addEventListener('error', function(event) {
            // 检查是否是语法错误
            const isSyntaxError = event.message && (
                event.message.includes('SyntaxError') ||
                event.message.includes('Unexpected token') ||
                event.message.includes('Unexpected end') ||
                event.message.includes('Unexpected identifier') ||
                (event.error && event.error.name === 'SyntaxError')
            );
            
            // 如果是语法错误，静默处理
            if (isSyntaxError) {
                event.preventDefault(); // 阻止默认错误处理
                if (window.DKFILE_DEBUG_MODE) {
                    console.debug('语法错误已静默处理:', {
                        message: event.message,
                        filename: event.filename,
                        lineno: event.lineno,
                        colno: event.colno
                    });
                }
                return;
            }
            
            // 其他错误正常记录
            console.error('全局错误:', {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                error: event.error
            });
        });
        
        // 未处理的Promise拒绝处理
        window.addEventListener('unhandledrejection', function(event) {
            // 检查是否是语法错误相关的Promise拒绝
            const reason = event.reason;
            const isSyntaxError = reason && (
                (typeof reason === 'string' && reason.includes('SyntaxError')) ||
                (reason instanceof Error && reason.name === 'SyntaxError')
            );
            
            if (isSyntaxError) {
                event.preventDefault(); // 阻止默认错误处理
                if (window.DKFILE_DEBUG_MODE) {
                    console.debug('Promise语法错误已静默处理:', reason);
                }
                return;
            }
            
            console.error('未处理的Promise拒绝:', {
                reason: event.reason,
                promise: event.promise
            });
        });
        
        // 点击记录函数
        function logClick(action) {
            try {
                // 使用智能 pageData 选择
                const validPageData = getValidPageData();
                const fileId = validPageData && validPageData.fileId ? validPageData.fileId : null;
                
                // 即使没有file_id也记录日志（用于菜单展开/收起等操作）
                const logData = {
                    log_type: 'footer_click',
                    action: action,
                    extra_data: JSON.stringify({
                        page_url: window.location.href,
                        page_title: document.title,
                        timestamp: new Date().toISOString(),
                        file_name: validPageData ? validPageData.fileName : null,
                        project_name: validPageData ? validPageData.projectName : null,
                        author: validPageData ? validPageData.author : null
                    })
                };
                
                // 如果有file_id，添加到日志数据中
                if (fileId) {
                    logData.file_id = fileId;
                }
                
                // 发送点击记录请求
                fetch('/api/log_click', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(logData)
                }).then(response => {
                    if (!response.ok) {
                        console.debug('Click logging failed:', response.status, response.statusText);
                    } else {
                        console.debug('Click logged successfully:', action);
                    }
                }).catch(error => {
                    // 静默处理错误，不影响用户体验
                    console.debug('Click logging error:', error);
                });
            } catch (error) {
                // 静默处理错误
                console.debug('Click logging error:', error);
            }
        }
        
        // 旧的平台标识检测函数已删除 - 已改用 #dkfile-platform-footer-in-buttons 方案
        
        // 检测浮动按钮样式是否正常
        function checkFloatingButtonsStyle() {
            // 优先使用ID选择器，更精确
            const floatingButtons = document.getElementById('dkfile-floating-buttons') || document.querySelector('.floating-action-buttons');
            if (!floatingButtons) return false;
            
            try {
                const computedStyle = window.getComputedStyle(floatingButtons);
                const rect = floatingButtons.getBoundingClientRect();
                const isMobile = window.innerWidth <= 768;
                
                // 检查基本可见性
                if (computedStyle.display === 'none' || 
                    computedStyle.visibility === 'hidden' ||
                    parseFloat(computedStyle.opacity) < 0.1 ||
                    floatingButtons.offsetParent === null) {
                    return false;
                }
                
                // 检查位置：应该在右下角
                const expectedRight = isMobile ? 10 : 20;
                const expectedBottom = isMobile ? 70 : 80;
                const actualRight = window.innerWidth - rect.right;
                const actualBottom = window.innerHeight - rect.bottom;
                
                // 允许10px的误差
                if (Math.abs(actualRight - expectedRight) > 50 || 
                    Math.abs(actualBottom - expectedBottom) > 50) {
                    return false;
                }
                
                // 检查position
                if (computedStyle.position !== 'fixed') {
                    return false;
                }
                
                // 检查按钮数量（应该有4个）
                const buttons = floatingButtons.querySelectorAll('.floating-btn');
                if (buttons.length < 3) {
                    return false;
                }
                
                // 检查按钮样式是否正常
                let validButtons = 0;
                buttons.forEach(btn => {
                    const btnStyle = window.getComputedStyle(btn);
                    const btnRect = btn.getBoundingClientRect();
                    const expectedSize = isMobile ? 36 : 40;
                    
                    // 检查尺寸
                    if (Math.abs(btnRect.width - expectedSize) < 10 && 
                        Math.abs(btnRect.height - expectedSize) < 10 &&
                        btnStyle.display !== 'none' &&
                        btnStyle.visibility !== 'hidden') {
                        validButtons++;
                    }
                });
                
                // 至少要有3个按钮正常
                return validButtons >= 3;
            } catch (error) {

                return false;
            }
        }
        
        // 检查并修复可能影响fixed定位的父元素样式（使用全局函数如果存在）
        function fixFixedPositioningAncestors(element) {
            // 优先使用head中定义的全局函数
            if (typeof window.fixFixedPositioningAncestors === 'function') {
                return window.fixFixedPositioningAncestors(element);
            }
            
            // 降级方案：本地实现
            if (!element || !element.parentElement) return false;
            
            let current = element.parentElement;
            const problematicProps = ['transform', 'perspective', 'filter', 'will-change'];
            
            while (current && current !== document.body && current !== document.documentElement) {
                const computedStyle = window.getComputedStyle(current);
                
                // 检查是否有影响fixed定位的属性
                for (const prop of problematicProps) {
                    const value = computedStyle.getPropertyValue(prop);
                    if (value && value !== 'none' && value !== 'auto' && value !== 'initial') {
                        // 如果父元素有这些属性，需要将容器移到body下

                        return true; // 需要移动容器
                    }
                }
                
                // 检查position是否为fixed或absolute（这些也可能影响）
                const position = computedStyle.position;
                if (position === 'fixed' || position === 'absolute') {
                    // 如果父元素是fixed或absolute，检查是否有transform等属性
                    const transform = computedStyle.transform;
                    if (transform && transform !== 'none') {

                        return true; // 需要移动容器
                    }
                }
                
                current = current.parentElement;
            }
            
            return false; // 不需要移动
        }
        
        // 强制修复平台标识位置 - 已简化，只检查新的 #dkfile-platform-footer-in-buttons
        function forceFixPlatformFooter() {
            // 新的平台标识已集成到浮动按钮组中，无需额外修复
            // 保留此函数用于向后兼容，但不执行任何操作
            return;
            
            try {
                // 第一步：强制确保容器在body的直接子元素位置（最高优先级）
                const currentParent = container.parentElement;
                if (currentParent && currentParent !== document.body) {
                    // 如果父元素不是body，强制移到body下
                    const nextSibling = container.nextSibling;
                    container.remove();
                    if (nextSibling && nextSibling.parentElement === document.body) {
                        document.body.insertBefore(container, nextSibling);
                    } else {
                        document.body.appendChild(container);
                    }

                }
                
                // 第二步：检查父元素是否有影响fixed定位的样式
                const needsMove = fixFixedPositioningAncestors(container);
                if (needsMove && container.parentElement === document.body) {
                    // 即使已经在body下，但如果检测到有问题的祖先元素，重新添加到body下
                    const nextSibling = container.nextSibling;
                    container.remove();
                    if (nextSibling && nextSibling.parentElement === document.body) {
                        document.body.insertBefore(container, nextSibling);
                    } else {
                        document.body.appendChild(container);
                    }

                }
                
                // 第三步：强制设置所有关键样式属性
                const isMobile = window.innerWidth <= 768;
                
                // 使用setProperty和!important确保最高优先级
                const criticalStyles = {
                    'position': 'fixed',
                    'bottom': isMobile ? '8px' : '10px',
                    'right': isMobile ? '10px' : '20px',
                    'left': 'auto',
                    'top': 'auto',
                    'z-index': '2147483645',
                    'display': 'flex',
                    'justify-content': 'flex-end',
                    'align-items': 'center',
                    'visibility': 'visible',
                    'opacity': '1',
                    'pointer-events': 'auto',
                    'margin': '0',
                    'padding': '0',
                    'width': 'auto',
                    'max-width': 'none',
                    'min-width': 'auto',
                    'box-sizing': 'border-box',
                    'transform': 'none',
                    'will-change': 'auto',
                    'contain': 'none'
                };
                
                // 批量设置样式
                Object.keys(criticalStyles).forEach(prop => {
                    container.style.setProperty(prop, criticalStyles[prop], 'important');
                });
                
                // 第四步：验证位置（使用多种方式确保执行）
                function verifyAndFixPosition() {

                    try {
                        if (!container) {

                            return;
                        }
                        
                        const computedStyle = window.getComputedStyle(container);
                        const rect = container.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        const viewportWidth = window.innerWidth;
                        const expectedBottom = isMobile ? 8 : 10;
                        const expectedRight = isMobile ? 10 : 20;
                        const actualBottom = viewportHeight - rect.bottom;
                        const actualRight = viewportWidth - rect.right;
                        
                        // 详细日志：显示所有位置信息

                        // 如果position不是fixed，强制修复
                        if (computedStyle.position !== 'fixed') {

                            container.style.setProperty('position', 'fixed', 'important');
                            container.style.setProperty('bottom', isMobile ? '8px' : '10px', 'important');
                            container.style.setProperty('right', isMobile ? '10px' : '20px', 'important');
                            
                            // 再次验证
                            setTimeout(function() {
                                verifyAndFixPosition();
                            }, 100);
                            return;
                        }
                        
                        // 如果位置偏差超过5px，强制修复
                        const bottomDiff = Math.abs(actualBottom - expectedBottom);
                        const rightDiff = Math.abs(actualRight - expectedRight);
                        if (bottomDiff > 5 || rightDiff > 5) {

                            container.style.setProperty('bottom', isMobile ? '8px' : '10px', 'important');
                            container.style.setProperty('right', isMobile ? '10px' : '20px', 'important');
                            container.style.setProperty('left', 'auto', 'important');
                            container.style.setProperty('top', 'auto', 'important');
                            
                            // 再次验证
                            setTimeout(function() {
                                verifyAndFixPosition();
                            }, 100);
                        } else {

                        }
                    } catch (e) {

                    }
                }
                
                // 立即执行一次验证（同步执行，不依赖异步）

                try {

                    verifyAndFixPosition();

                } catch (e) {

                }
                
                // 使用requestAnimationFrame和setTimeout双重保障（异步执行）
                try {
                    if (typeof requestAnimationFrame === 'function') {
                        requestAnimationFrame(function() {
                            try {
                                verifyAndFixPosition();
                            } catch (e) {

                            }
                        });
                    } else {
                        setTimeout(function() {
                            try {
                                verifyAndFixPosition();
                            } catch (e) {

                            }
                        }, 0);
                    }
                } catch (e) {

                }
                
                // 延迟再次验证，确保位置正确
                setTimeout(function() {
                    try {
                        verifyAndFixPosition();
                    } catch (e) {

                    }
                }, 100);
                
                setTimeout(function() {
                    try {
                        verifyAndFixPosition();
                    } catch (e) {

                    }
                }, 500);
                
            } catch (e) {

                // 降级方案：至少确保容器在body下
                try {
                    if (container.parentElement !== document.body) {
                        container.remove();
                        document.body.appendChild(container);
                    }
                } catch (e2) {

                }
            }
            
            // 旧的内部footer样式修复代码已删除 - 已改用 #dkfile-platform-footer-in-buttons 方案
        }
        
        // 兜底方案：如果样式异常，隐藏平台元素 - 已简化
        function applyFallbackStyle() {
            // 新的平台标识已集成到浮动按钮组中，只需检查浮动按钮
            const floatingButtons = document.getElementById('dkfile-floating-buttons') || document.querySelector('.floating-action-buttons');
            const buttonsStyleOk = checkFloatingButtonsStyle();
            
            if (!buttonsStyleOk && floatingButtons) {
                floatingButtons.style.setProperty('display', 'none', 'important');
            } else if (floatingButtons) {
                floatingButtons.style.setProperty('display', 'flex', 'important');
            }
        }
        
        // 启动样式检测和保护机制（兜底方案）- 已简化
        function startStyleProtection() {
            // 新的平台标识已集成到浮动按钮组中，只需检查浮动按钮
            // 初始检测
            applyFallbackStyle();
            
            // 持续监控浮动按钮样式（已简化，不再监控旧的容器）
            // 旧的容器监控代码已完全删除
        }
        
        // 智能配色系统 - 根据页面背景自动调整平台标识文字颜色
        function applyAdaptiveColorScheme() {
            try {

                const platformFooter = document.getElementById('dkfile-platform-footer') || document.querySelector('.platform-footer');
                if (!platformFooter) {

                    return;
                }
                
                // 获取content-wrapper元素（用户内容区域）
                const contentWrapper = document.querySelector('.content-wrapper');
                if (!contentWrapper) {

                    return;
                }
                
                // 获取content-wrapper的计算样式（包括继承的背景色）
                const computedStyle = window.getComputedStyle(contentWrapper);
                let backgroundColor = computedStyle.backgroundColor;
                
                // 如果背景色是透明或rgba，尝试向上查找父元素的背景色
                if (!backgroundColor || backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
                    // 检查body的背景色
                    const bodyStyle = window.getComputedStyle(document.body);
                    backgroundColor = bodyStyle.backgroundColor;
                    
                    // 如果body也是透明，检查html
                    if (!backgroundColor || backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
                        const htmlStyle = window.getComputedStyle(document.documentElement);
                        backgroundColor = htmlStyle.backgroundColor;
                    }
                }

                // 如果仍然没有检测到有效的背景色，使用默认浅色模式
                if (!backgroundColor || backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {

                    platformFooter.classList.remove('adaptive-dark');
                    platformFooter.classList.add('adaptive-light');
                    return;
                }
                
                // 解析RGB颜色值
                function parseRGB(rgbString) {
                    // 匹配 rgb(r, g, b) 或 rgba(r, g, b, a) 格式
                    const match = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
                    if (match) {
                        return {
                            r: parseInt(match[1]),
                            g: parseInt(match[2]),
                            b: parseInt(match[3])
                        };
                    }
                    return null;
                }
                
                // 计算颜色的相对亮度（WCAG标准）
                function getLuminance(rgb) {
                    // 转换为0-1范围
                    const [r, g, b] = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
                    
                    // 应用gamma校正
                    const adjust = (val) => {
                        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
                    };
                    
                    // 计算相对亮度
                    return 0.2126 * adjust(r) + 0.7152 * adjust(g) + 0.0722 * adjust(b);
                }
                
                // 计算亮度（简单的亮度计算，0-255）
                function getBrightness(rgb) {
                    // 使用加权平均值计算亮度
                    return (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114);
                }
                
                const rgb = parseRGB(backgroundColor);
                if (!rgb) {

                    platformFooter.classList.remove('adaptive-dark');
                    platformFooter.classList.add('adaptive-light');
                    return;
                }
                
                // 计算亮度和对比度
                const brightness = getBrightness(rgb);
                const luminance = getLuminance(rgb);

                // 判断是浅色还是深色背景
                // 使用两个标准：亮度阈值和相对亮度阈值
                // 如果亮度 < 128 或相对亮度 < 0.5，认为是深色背景
                const isDarkBackground = brightness < 128 || luminance < 0.5;

                // 应用对应的配色方案
                if (isDarkBackground) {
                    platformFooter.classList.remove('adaptive-light');
                    platformFooter.classList.add('adaptive-dark');

                } else {
                    platformFooter.classList.remove('adaptive-dark');
                    platformFooter.classList.add('adaptive-light');

                }
                
            } catch (error) {

                // 出错时使用默认浅色模式
                const platformFooter = document.getElementById('dkfile-platform-footer') || document.querySelector('.platform-footer');
                if (platformFooter) {
                    platformFooter.classList.remove('adaptive-dark');
                    platformFooter.classList.add('adaptive-light');
                }
            }
        }
        
        // 初始化手机端按钮合并功能
        function initMobileButtonMerge() {
            try {
                const floatingButtons = document.getElementById('dkfile-floating-buttons');
                if (!floatingButtons) {

                    return;
                }
                
                const isMobile = window.innerWidth <= 768;
                const menuBtn = document.getElementById('floatingMenuBtn');
                
                if (isMobile) {
                    // 手机端：默认收起状态
                    floatingButtons.classList.remove('expanded');
                    if (menuBtn) {
                        // 强制显示菜单按钮（使用多种方式确保生效）
                        menuBtn.style.setProperty('display', 'flex', 'important');
                        menuBtn.style.display = 'flex';
                        menuBtn.style.visibility = 'visible';
                        menuBtn.style.opacity = '1';
                    }
                    
                    // 点击其他按钮时，如果是手机端且已展开，自动收起
                    const actionButtons = floatingButtons.querySelectorAll('.floating-btn:not(.floating-menu-btn)');
                    actionButtons.forEach(btn => {
                        // 移除旧的事件监听器（如果存在）
                        const newBtn = btn.cloneNode(true);
                        btn.parentNode.replaceChild(newBtn, btn);
                        
                        // 添加新的事件监听器
                        newBtn.addEventListener('click', function() {
                            // 延迟一下再收起，让用户看到点击效果
                            setTimeout(function() {
                                if (typeof window.toggleFloatingButtons === 'function') {
                                    window.toggleFloatingButtons();
                                }
                            }, 300);
                        });
                    });

                } else {
                    // PC端：始终展开
                    floatingButtons.classList.add('expanded');
                    if (menuBtn) {
                        menuBtn.style.display = 'none';
                    }

                }
            } catch (error) {

            }
        }
        
        // 页面加载完成后启动样式检测
        document.addEventListener('DOMContentLoaded', function() {
            // 使用try-catch确保即使有用户内容错误也能执行
            try {
                // 立即强制修复平台标识位置（最高优先级）
                if (typeof forceFixPlatformFooter === 'function') {
                    forceFixPlatformFooter();
                } else if (typeof window.forceFixPlatformFooter === 'function') {
                    window.forceFixPlatformFooter();
                }
            } catch (e) {

                // 降级方案已删除 - 旧的容器已不再使用
            }
            
            // 初始化手机端按钮合并功能
            initMobileButtonMerge();
            
            // 检查登录状态并设置"我的工具"按钮样式
            const isAuthenticated = typeof window.currentUserAuthenticated !== 'undefined' 
                ? window.currentUserAuthenticated 
                : (typeof currentUserAuthenticated !== 'undefined' ? currentUserAuthenticated : false);
            const myToolsBtn = document.getElementById('myToolsBtn');
            if (myToolsBtn && isAuthenticated) {
                myToolsBtn.classList.add('logged-in');

            }
            
            // 监听窗口大小变化，重新初始化
            window.addEventListener('resize', function() {
                initMobileButtonMerge();
                forceFixPlatformFooter(); // 窗口大小变化时也修复位置
            });
            
            // 立即启动样式保护机制
            startStyleProtection();
            
            // 延迟检测，等待用户内容加载完成
            setTimeout(function() {
                forceFixPlatformFooter();
                startStyleProtection();
                
                // 应用智能配色（延迟执行，确保用户内容已完全加载）
                applyAdaptiveColorScheme();
            }, 100);
            
            // 多次修复，确保位置正确
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 500);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 1000);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 2000);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 3000);
            
            // 记录页面访问（可选）
            logClick('page_view');
        });
        
        // window.onload时也启动检测
        window.addEventListener('load', function() {
            // 立即强制修复（最高优先级）
            forceFixPlatformFooter();
            
            // 初始化手机端按钮合并功能
            initMobileButtonMerge();
            
            // 立即启动样式保护
            startStyleProtection();
            
            // 多次修复，确保位置正确
            setTimeout(function() {
                forceFixPlatformFooter();
                startStyleProtection();
                
                // 再次应用智能配色（确保在完全加载后）
                applyAdaptiveColorScheme();
                
                // 再次初始化合并按钮（确保DOM完全加载）
                initMobileButtonMerge();
            }, 100);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 500);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 1000);
            
            // 更多修复时机，确保位置正确
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 2000);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 3000);
            
            setTimeout(function() {
                forceFixPlatformFooter();
            }, 5000);
        });
        
        // 监听页面可见性变化，当页面重新可见时修复位置
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                // 页面重新可见时，立即修复位置
                setTimeout(function() {
                    forceFixPlatformFooter();
                }, 100);
            }
        });
        
        // 监听页面滚动 - 已简化，新的平台标识已集成到浮动按钮组中，无需额外监控
        
        // 监听页面内容变化，如果背景色改变，重新应用配色
        // 使用MutationObserver监听content-wrapper的变化
        if (typeof MutationObserver !== 'undefined') {
            const colorObserver = new MutationObserver(function(mutations) {
                let shouldRecalculate = false;
                mutations.forEach(function(mutation) {
                    // 如果样式属性改变，重新计算配色
                    if (mutation.type === 'attributes' && 
                        (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                        const target = mutation.target;
                        // 检查是否是content-wrapper或其子元素
                        if (target.closest && target.closest('.content-wrapper')) {
                            shouldRecalculate = true;
                        }
                    }
                    // 如果子元素添加或移除，也可能影响背景
                    if (mutation.type === 'childList') {
                        const target = mutation.target;
                        if (target.classList && target.classList.contains('content-wrapper')) {
                            shouldRecalculate = true;
                        }
                    }
                });
                
                if (shouldRecalculate) {
                    // 防抖处理，避免频繁重新计算
                    clearTimeout(window.colorRecalculateTimer);
                    window.colorRecalculateTimer = setTimeout(function() {
                        applyAdaptiveColorScheme();
                    }, 300);
                }
            });
            
            // 等待DOM加载完成后开始观察
            document.addEventListener('DOMContentLoaded', function() {
                const contentWrapper = document.querySelector('.content-wrapper');
                if (contentWrapper) {
                    colorObserver.observe(contentWrapper, {
                        attributes: true,
                        attributeFilter: ['style', 'class'],
                        childList: true,
                        subtree: true
                    });

                }
            });
        }
        
        // 防止用户通过Object.defineProperty修改style对象
        (function() {
            const platformFooter = document.querySelector('.platform-footer');
            if (platformFooter && platformFooter.style) {
                try {
                    // 尝试锁定style对象的某些属性（如果可能）
                    const originalSetProperty = platformFooter.style.setProperty;
                    platformFooter.style.setProperty = function(property, value, priority) {
                        // 如果是关键属性，强制使用important
                        const criticalProps = ['position', 'bottom', 'right', 'left', 'top', 'z-index', 'display', 'visibility', 'opacity'];
                        if (criticalProps.includes(property.toLowerCase())) {
                            return originalSetProperty.call(this, property, value, 'important');
                        }
                        return originalSetProperty.call(this, property, value, priority);
                    };
                } catch (e) {
                    // 如果无法修改，忽略错误
                    console.debug('无法锁定style对象，使用其他保护机制');
                }
            }
        })();
            
                    // SEO 性能监控
        monitorSeoPerformance();
        

            
            // 检查用户登录状态和收藏点赞状态
            if (typeof currentUserAuthenticated !== 'undefined' && currentUserAuthenticated) {
                console.log('用户已登录，开始检查收藏点赞状态');
                
                // 设置"我的工具"按钮为已登录状态（红色效果）
                const myToolsBtn = document.getElementById('myToolsBtn');
                if (myToolsBtn) {
                    myToolsBtn.classList.add('logged-in');
                    console.log('我的工具按钮已设置为已登录状态（红色效果）');
                }
                
                // 使用智能 pageData 选择
                const validPageData = getValidPageData();
                console.log('状态检查 - 获取到的有效数据:', validPageData);
                
                if (validPageData && validPageData.fileId) {
                    console.log('开始检查收藏状态，文件ID:', validPageData.fileId);
                    
                    // 检查收藏状态
                    fetch('/api/check_favorite/' + validPageData.fileId)
                        .then(response => {
                            console.log('检查收藏状态API响应状态:', response.status);
                            return response.json();
                        })
                        .then(data => {
                            console.log('检查收藏状态API响应数据:', data);
                            if (data.success && data.is_favorited) {
                                const favoriteBtn = document.querySelector('.floating-btn.favorite-btn');
                                if (favoriteBtn) {
                                    favoriteBtn.classList.add('favorited');
                                    favoriteBtn.innerHTML = '<i class="bi bi-bookmark-fill"></i>';
                                    console.log('收藏状态已更新为已收藏');
                                } else {
                                    console.warn('未找到收藏按钮元素');
                                }
                            }
                        })
                        .catch(error => {
                            console.error('检查收藏状态失败:', error);
                        });
                    
                    console.log('开始检查点赞状态，文件ID:', validPageData.fileId);
                    
                    // 检查点赞状态
                    fetch('/api/check_like/' + validPageData.fileId)
                        .then(response => {
                            console.log('检查点赞状态API响应状态:', response.status);
                            return response.json();
                        })
                        .then(data => {
                            console.log('检查点赞状态API响应数据:', data);
                            if (data.success && data.is_liked) {
                                const likeBtn = document.querySelector('.floating-btn.like-btn');
                                if (likeBtn) {
                                    likeBtn.classList.add('liked');
                                    likeBtn.innerHTML = '<i class="bi bi-heart-fill"></i>';
                                    console.log('点赞状态已更新为已点赞');
                                } else {
                                    console.warn('未找到点赞按钮元素');
                                }
                            }
                        })
                        .catch(error => {
                            console.error('检查点赞状态失败:', error);
                        });
                } else {
                    console.warn('无法获取有效的文件数据，跳过状态检查');
                }
            } else {
                console.log('用户未登录，跳过收藏点赞状态检查');
            }
        });
    </script>

    <!-- 反馈浮层弹窗 -->
    <div id="feedbackOverlay" class="floating-overlay" onclick="if(event.target === this) closeFeedback()">
        <div class="floating-panel">
            <div class="floating-header">
                <h5 class="floating-title">
                    <i class="bi bi-chat-dots me-2"></i>问题反馈
                </h5>
                <button type="button" class="floating-close" onclick="closeFeedback()" aria-label="Close">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <form id="feedbackForm" enctype="multipart/form-data">
                <div class="floating-body">
                    <!-- 工具信息 -->
                    <div class="feedback-tool-info">
                        <i class="bi bi-info-circle me-2"></i>
                        <strong>反馈来源：</strong>十字绣图纸生成器
                        <br><small class="text-muted">工具链接：http://deepseek.idoxu.com/sparkle/shizixiu.html</small>
                    </div>
                    
                    <!-- 反馈类型 -->
                    <div class="feedback-section">
                        <label class="feedback-label">反馈类型</label>
                        <div class="feedback-type-grid">
                            <div class="feedback-type-item">
                                <input type="radio" class="feedback-type-input" name="feedback_type" id="feedback_bug" value="bug">
                                <label class="feedback-type-btn" for="feedback_bug">
                                    问题反馈
                                </label>
                            </div>
                            <div class="feedback-type-item">
                                <input type="radio" class="feedback-type-input" name="feedback_type" id="feedback_feature" value="feature">
                                <label class="feedback-type-btn" for="feedback_feature">
                                    功能建议/需求
                                </label>
                            </div>
                            <div class="feedback-type-item">
                                <input type="radio" class="feedback-type-input" name="feedback_type" id="feedback_support" value="technical_support">
                                <label class="feedback-type-btn" for="feedback_support">
                                    技术支持
                                </label>
                            </div>
                            <div class="feedback-type-item">
                                <input type="radio" class="feedback-type-input" name="feedback_type" id="feedback_support" value="technical_support">
                                <label class="feedback-type-btn" for="feedback_support">
                                    技术支持
                                </label>
                            </div>
                            <div class="feedback-type-item">
                                <input type="radio" class="feedback-type-input" name="feedback_type" id="feedback_business" value="business_cooperation">
                                <label class="feedback-type-btn" for="feedback_business">
                                    商务合作
                                </label>
                            </div>
                            <div class="feedback-type-item">
                                <input type="radio" class="feedback-type-input" name="feedback_type" id="feedback_other" value="other" checked>
                                <label class="feedback-type-btn" for="feedback_other">
                                    其他
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 反馈内容 -->
                    <div class="feedback-section">
                        <label for="feedbackContent" class="feedback-label">反馈内容</label>
                        <div class="feedback-textarea-wrapper">
                            <textarea class="feedback-textarea" 
                                      id="feedbackContent" 
                                      name="description" 
                                      rows="4" 
                                      placeholder="请详细描述您的问题或建议..." 
                                      maxlength="1000" 
                                      required></textarea>
                            <div class="feedback-char-count" id="charCount">0/1000</div>
                        </div>
                        <div class="feedback-hint">
                            <i class="bi bi-info-circle me-1"></i>请尽可能详细地描述，这有助于我们更好地理解和解决问题
                        </div>
                        <div class="feedback-notice">
                            <i class="bi bi-envelope me-1"></i>
                            问题解决后，会通过你的帐号邮箱给你回复，也能在 
                            <a href="/my_feedbacks" class="feedback-link">我的反馈</a> 
                            查看问题处理进度。
                        </div>
                    </div>
                    
                    <!-- 图片上传区域 -->
                    <div class="feedback-section">
                        <label class="feedback-label">上传图片（可选，最多9张）</label>
                        <div class="border rounded p-2" style="background-color: #f8f9fa; min-height: 70px;">
                            <input type="file" id="feedback_images" name="images" multiple accept="image/*" style="display: none;" />
                            <div id="feedback_image_preview" class="d-flex flex-wrap gap-2 mb-2"></div>
                            <div class="mb-1">
                                <button type="button" class="btn btn-outline-success btn-sm" onclick="document.getElementById('feedback_images').click();" style="font-size: 0.8rem; padding: 0.2rem 0.6rem;">
                                    <i class="bi bi-image me-1"></i>选择图片
                                </button>
                            </div>
                            <small class="d-block" style="font-size: 11px; color: #333;">
                                <i class="bi bi-info-circle me-1"></i>支持 jpg、png、gif、webp、bmp 格式，单张最大 5MB
                            </small>
                        </div>
                    </div>
                </div>
                <div class="floating-footer">
                    <button type="button" class="floating-btn-action floating-btn-secondary" onclick="closeFeedback()">
                        取消
                    </button>
                    <button type="submit" class="floating-btn-action floating-btn-primary" id="submitFeedback">
                        <i class="bi bi-send me-1"></i>提交反馈
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- 分享浮层弹窗 - 使用内联样式确保最高优先级，防止被用户内容覆盖 -->
    <div id="shareOverlay" class="floating-overlay" onclick="if(event.target === this) closeShare()" style="position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; z-index: 2147483646 !important; display: none !important; pointer-events: auto !important; visibility: visible !important; opacity: 1 !important;">
        <div class="floating-panel" style="position: relative !important; z-index: 2147483647 !important; display: block !important;">
            <div class="share-menu" style="position: relative !important; z-index: 2147483647 !important;">

                
                <!-- 工具信息 -->
                <div class="share-info">
                    <div class="share-info-title">
                        <i class="bi bi-info-circle me-1"></i>分享内容
                    </div>
                    <div class="share-info-content">
                        <strong>十字绣图纸生成器</strong><br>
                        <small>来自 DKFile 免费HTML网页托管平台</small>
                    </div>
                </div>
                
                <!-- 二维码区域 -->
                <div class="qr-code-section mb-4">
                    <div id="shareQrCode" class="qr-code-container">
                        <div class="qr-loading">
                            <i class="bi bi-hourglass-split"></i> 生成二维码中...
                        </div>
                    </div>
                    
                    <!-- 分享操作按钮组 -->
                    <div class="qr-actions" style="position: relative !important; z-index: 2147483647 !important;">
                        <button class="qr-action-btn download-btn" onclick="if(typeof downloadQRCode === 'function') { downloadQRCode(); } else { void(0); }" style="position: relative !important; z-index: 2147483647 !important; pointer-events: auto !important;">
                            <i class="bi bi-download me-1"></i>
                            <span>下载二维码</span>
                        </button>
                        <button class="qr-action-btn copy-btn" onclick="if(typeof copyLink === 'function') { copyLink(); } else { void(0); }" style="position: relative !important; z-index: 2147483647 !important; pointer-events: auto !important;">
                            <i class="bi bi-link-45deg me-1"></i>
                            <span>复制链接</span>
                        </button>
                    </div>
                </div>
                
                <!-- 分享渠道标题 -->
                <div class="share-channels-header">
                    <h6 class="share-channels-title">
                        <i class="bi bi-share me-2"></i>一键分享到这些平台
                    </h6>
                </div>
                
                <div class="share-buttons">
                    <!-- 主要社交平台 -->
                    <button class="share-btn x-twitter" onclick="if(typeof shareToTwitter === 'function') { shareToTwitter(); } else { void(0); }">
                        <!-- X (Twitter) 图标 - 使用黑色背景 -->
                        <div class="x-icon-container">
                            <svg class="x-icon" viewBox="0 0 24 24" fill="white">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </div>
                        <span>X (Twitter)</span>
                    </button>
                    
                    <!-- 中文平台 -->
                    <button class="share-btn weibo" onclick="if(typeof shareToWeibo === 'function') { shareToWeibo(); } else { void(0); }">
                        <i class="bi bi-weibo"></i>
                        <span>微博</span>
                    </button>
                    
                    <!-- 全球开发者平台 -->
                    <button class="share-btn github" onclick="if(typeof shareToGithub === 'function') { shareToGithub(); } else { void(0); }">
                        <i class="bi bi-github"></i>
                        <span>GitHub</span>
                    </button>
                    
                    <button class="share-btn reddit" onclick="if(typeof shareToReddit === 'function') { shareToReddit(); } else { void(0); }">
                        <i class="bi bi-reddit"></i>
                        <span>Reddit</span>
                    </button>
                    
                    <!-- 专业平台 -->
                    <button class="share-btn linkedin" onclick="if(typeof shareToLinkedIn === 'function') { shareToLinkedIn(); } else { void(0); }">
                        <i class="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </button>
                    
                    <!-- 即时通讯 -->
                    <button class="share-btn whatsapp" onclick="if(typeof shareToWhatsApp === 'function') { shareToWhatsApp(); } else { void(0); }">
                        <i class="bi bi-whatsapp"></i>
                        <span>WhatsApp</span>
                    </button>
                    
                    <button class="share-btn telegram" onclick="if(typeof shareToTelegram === 'function') { shareToTelegram(); } else { void(0); }">
                        <i class="bi bi-telegram"></i>
                        <span>Telegram</span>
                    </button>
                    
                    <!-- 国内平台 -->
                    <button class="share-btn wechat" onclick="if(typeof shareToWeChat === 'function') { shareToWeChat(); } else { void(0); }">
                        <i class="bi bi-wechat"></i>
                        <span>微信</span>
                    </button>
                    
                    <button class="share-btn qq" onclick="if(typeof shareToQQ === 'function') { shareToQQ(); } else { void(0); }">
                        <i class="bi bi-qq"></i>
                        <span>QQ</span>
                    </button>
                </div>
                
                <div class="share-divider"></div>
                
                <div class="share-close-section" style="position: relative !important; z-index: 2147483647 !important;">
                    <button class="floating-btn-action floating-btn-secondary" onclick="if(typeof closeShare === 'function') { closeShare(); } else { void(0); }" style="position: relative !important; z-index: 2147483647 !important; pointer-events: auto !important;">
                        <i class="bi bi-x-lg me-1"></i>关闭
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- 统一图片压缩服务 -->
    <script src="./stateic/js/dkfile-image-compressor.js"></script>
    
    <!-- 移除重复的 Google 服务加载器，因为 base.html 已经包含 -->
    <!-- <script src="/static/js/google-services-loader.js"></script> -->

    <script>
        // 使用IIFE包装，防止用户内容中的语法错误影响此代码块
        // 图片上传和压缩相关变量
        var selectedFeedbackImages = [];
        var feedbackImageCompressor = null;
        try {
            if (typeof DKFileImageCompressor !== 'undefined') {
                feedbackImageCompressor = new DKFileImageCompressor({
                    maxDimension: 1600,
                    quality: 0.75,
                    minCompressSize: 300 * 1024
                });
            }
        } catch (error) {
            console.error('初始化反馈图片压缩器失败:', error);
            selectedFeedbackImages = [];
            feedbackImageCompressor = null;
        }
        
        // 字符计数功能
        document.addEventListener('DOMContentLoaded', function() {
            const textarea = document.getElementById('feedbackContent');
            const charCount = document.getElementById('charCount');
            
            if (textarea && charCount) {
                textarea.addEventListener('input', function() {
                    const length = this.value.length;
                    charCount.textContent = length + '/1000';
                    
                    if (length > 900) {
                        charCount.style.color = '#dc3545';
                    } else if (length > 800) {
                        charCount.style.color = '#ffc107';
                    } else {
                        charCount.style.color = '#999';
                    }
                });
            }
            
            // 初始化图片上传功能
            initializeFeedbackImageUpload();
        });
        
        // 初始化图片上传功能
        function initializeFeedbackImageUpload() {
            const feedbackImagesInput = document.getElementById('feedback_images');
            const feedbackImagePreview = document.getElementById('feedback_image_preview');
            
            if (!feedbackImagesInput || !feedbackImagePreview) return;
            
            // 文件选择事件
            feedbackImagesInput.addEventListener('change', async function(e) {
                const files = Array.from(e.target.files);
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
                const maxSize = 5 * 1024 * 1024; // 5MB
                const maxImages = 9;
                
                // 验证图片数量和总数量
                if (selectedFeedbackImages.length + files.length > maxImages) {
                    showToast('最多只能上传 ' + maxImages + ' 张图片', 'error');
                    return;
                }
                
                const invalidFile = files.find(file => {
                    if (!allowedTypes.includes(file.type)) {
                        showToast('图片 ' + file.name + ' 格式不支持，仅支持 jpg、png、gif、webp、bmp 格式', 'error');
                        return true;
                    }
                    if (file.size > maxSize) {
                        showToast('图片 ' + file.name + ' 过大，单张图片最大支持 5MB', 'error');
                        return true;
                    }
                    return false;
                });
                
                if (invalidFile) {
                    return;
                }
                
                showToast('图片压缩中，请稍候...', 'info');
                
                try {
                    // 检查压缩服务是否可用
                    if (!feedbackImageCompressor) {
                        console.warn('[View] 图片压缩服务未加载，使用原文件');
                        files.forEach(file => selectedFeedbackImages.push(file));
                    } else {
                        console.log('[View] 开始压缩 ' + files.length + ' 张图片...');
                        files.forEach((file, index) => {
                            console.log('[View] 原始文件 ' + (index + 1) + ': ' + file.name + ', 大小: ' + (file.size / 1024).toFixed(2) + ' KB');
                        });
                        
                        // 使用统一压缩服务的批量压缩方法
                        const compressedFiles = await feedbackImageCompressor.compressMultipleImages(files);
                        
                        console.log('[View] 压缩完成，共 ' + compressedFiles.length + ' 张图片');
                        compressedFiles.forEach((file, index) => {
                            console.log('[View] 压缩后文件 ' + (index + 1) + ': ' + file.name + ', 大小: ' + (file.size / 1024).toFixed(2) + ' KB');
                        });
                        
                        compressedFiles.forEach(file => selectedFeedbackImages.push(file));
                    }
                    
                    showToast('图片已压缩完成。', 'success');
                } catch (err) {
                    console.error('[View] 图片压缩失败:', err);
                    showToast('图片处理失败，请重试。', 'error');
                    return;
                }
                
                updateFeedbackImageInput();
                previewFeedbackImages();
            });
        }
        
        // 更新input中的文件
        function updateFeedbackImageInput() {
            const feedbackImagesInput = document.getElementById('feedback_images');
            if (!feedbackImagesInput) return;
            
            const dt = new DataTransfer();
            selectedFeedbackImages.forEach(file => dt.items.add(file));
            feedbackImagesInput.files = dt.files;
        }
        
        // 预览图片
        function previewFeedbackImages() {
            const feedbackImagePreview = document.getElementById('feedback_image_preview');
            if (!feedbackImagePreview) return;
            
            feedbackImagePreview.innerHTML = '';
            
            // 如果没有图片，清空预览区域（保持显示，但不占用额外空间）
            if (selectedFeedbackImages.length === 0) {
                return;
            }
            
            selectedFeedbackImages.forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'position-relative';
                    imgContainer.style.cssText = 'width: 120px; height: 120px; margin-bottom: 10px;';
                    
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 8px;';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.type = 'button';
                    removeBtn.className = 'btn btn-sm btn-danger position-absolute';
                    removeBtn.style.cssText = 'top: -5px; right: -5px; width: 24px; height: 24px; padding: 0; border-radius: 50%; font-size: 12px; line-height: 1;';
                    removeBtn.innerHTML = '×';
                    removeBtn.onclick = function() {
                        selectedFeedbackImages.splice(index, 1);
                        updateFeedbackImageInput();
                        previewFeedbackImages();
                    };
                    
                    imgContainer.appendChild(img);
                    imgContainer.appendChild(removeBtn);
                    feedbackImagePreview.appendChild(imgContainer);
                };
                reader.readAsDataURL(file);
            });
        }

        // 反馈表单提交
        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitFeedback');
            const originalText = submitBtn.innerHTML;
            
            // 确保使用压缩后的图片（更新input中的文件）
            if (selectedFeedbackImages.length > 0) {
                updateFeedbackImageInput();
                console.log('[View] 已更新input中的压缩图片，数量:', selectedFeedbackImages.length);
            }
            
            const formData = new FormData(this);
            
            // 添加工具信息
            formData.append('tool_url', 'http://deepseek.idoxu.com/sparkle/shizixiu.html');
            formData.append('tool_title', '十字绣图纸生成器');
            formData.append('tool_id', '10342');
            
            // 调试：检查FormData中的文件
            if (selectedFeedbackImages.length > 0) {
                const formFiles = formData.getAll('images');
                console.log('[View] FormData中的文件数量:', formFiles.length);
                formFiles.forEach((file, index) => {
                    console.log('[View] 文件 ' + (index + 1) + ': ' + file.name + ', 大小: ' + (file.size / 1024).toFixed(2) + ' KB');
                });
            }
            
            // 显示提交中状态
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>提交中...';
            
            fetch('/submit_feedback', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showToast('反馈提交成功！我们会尽快处理您的反馈。');
                    // 关闭浮层
                    if (typeof window.closeFeedback === 'function') {
                        window.closeFeedback();
                    } else if (typeof closeFeedback === 'function') {
                    closeFeedback();
                    }
                    // 重置表单
                    this.reset();
                    document.getElementById('charCount').textContent = '0/1000';
                    // 清空图片
                    selectedFeedbackImages = [];
                    updateFeedbackImageInput();
                    previewFeedbackImages();
                } else {
                    showToast('提交失败：' + (data.message || '未知错误'));
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showToast('提交失败，请检查网络连接后重试');
            })
            .finally(() => {
                // 恢复按钮状态
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            });
        });
        
        // 移动端隐藏平台标识（确保覆盖内联样式）
        (function() {
            function hidePlatformFooterOnMobile() {
                const footer = document.getElementById('dkfile-platform-footer-in-buttons');
                if (footer && window.innerWidth <= 768) {
                    footer.style.setProperty('display', 'none', 'important');
                } else if (footer && window.innerWidth > 768) {
                    footer.style.setProperty('display', 'flex', 'important');
                }
            }
            
            // 页面加载时执行
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', hidePlatformFooterOnMobile);
            } else {
                hidePlatformFooterOnMobile();
            }
            
            // 窗口大小改变时重新检查
            window.addEventListener('resize', hidePlatformFooterOnMobile);
        })();
        
    </script>
</body>
</html>
