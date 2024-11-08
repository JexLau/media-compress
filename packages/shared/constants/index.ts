// 应用常量
export const APP_CONSTANTS = {
  APP_NAME: 'Resource Compressor',
  FILE_TYPES: {
    IMAGE: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    VIDEO: ['mp4', 'mov', 'avi', 'mkv']
  },
  MAX_FILE_SIZE: 10000 * 1024 * 1024 // 10000MB
};

// IPC 通道常量
export const IPC_CHANNELS = {
  FILE_UPLOAD: 'file:upload',
  FILE_COMPRESS: 'file:compress',
  COMPRESSION_PROGRESS: 'compression:progress',
  COMPRESSION_COMPLETE: 'compression:complete'
};