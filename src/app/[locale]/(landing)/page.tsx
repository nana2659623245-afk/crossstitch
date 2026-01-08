import { setRequestLocale } from 'next-intl/server';

import { getMetadata } from '@/shared/lib/seo';

import { CrossstitchTool } from './_components/crossstitch-tool';

export const revalidate = 3600;

export const generateMetadata = getMetadata({
  title: '十字绣图纸生成器 - DKFile - 免费HTML网页托管平台 | Free HTML Website Hosting',
  description:
    '将任何图片转换为精美的十字绣图纸 支持 JPG PNG GIF 格式 上传图片并设置参数 然后点击生成按钮 提示：建议使用对比度高 细节清晰的图片获得更好效果',
  keywords:
    '将任何图片转换为精美的十字绣图纸, 上传图片并设置参数, 然后点击生成按钮, 建议使用对比度高, 细节清晰的图片获得更好效果, DKFile, 免费网页托管, HTML托管, 静态网站托管, 网页发布, 免费建站',
  canonicalUrl: '/',
});

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CrossstitchTool />;
}
