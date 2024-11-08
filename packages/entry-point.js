import {initApp} from '@mk-compress/main';
import {fileURLToPath} from 'node:url';

/**
 * We resolve '@mk-compress/renderer' and '@mk-compress/preload'
 * here and not in '@mk-compress/main'
 * to observe good practices of modular design.
 * This allows fewer dependencies and better separation of concerns in '@mk-compress/main'.
 * Thus,
 * the main module remains simplistic and efficient
 * as it receives initialization instructions rather than direct module imports.
 */
initApp(
  {
    renderer: (process.env.MODE === 'development' && !!process.env.VITE_DEV_SERVER_URL) ?
      new URL(process.env.VITE_DEV_SERVER_URL)
      : {
        path: fileURLToPath(import.meta.resolve('@mk-compress/renderer')),
      },

    preload: {
      path: fileURLToPath(import.meta.resolve('@mk-compress/preload/exposed.mjs')),
    },
  },
);
