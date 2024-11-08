// 文件相关类型
export interface FileInfo {
  id: string;
  name: string;
  path: string;
  size: number;
  type: string;
}

// 压缩选项
export interface CompressionOptions {
  quality: number;
  format: 'jpg' | 'png' | 'webp';
  maintainAspectRatio: boolean;
}

// 压缩结果
export interface CompressionResult {
  fileId: string;
  originalSize: number;
  compressedSize: number;
  outputPath: string;
  success: boolean;
  error?: string;
}

// 进度更新
export interface ProgressUpdate {
  fileId: string;
  progress: number;
  status: 'processing' | 'complete' | 'error';
}