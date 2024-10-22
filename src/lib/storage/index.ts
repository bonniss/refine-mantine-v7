export interface Storage {
  engine?: any;
  get: (key: string) => any;
  set: (key: string, value: any) => void;
  remove: (key: string) => void;
}

/**
 * Khởi tạo phương thức lưu trữ theo môi trường
 * @param config Cấu hình cho lưu trữ, dùng cho môi trường không phải browser (như trên mobile)
 * @returns
 */
function initStorage(config?: Storage): Storage {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    return {
      engine: window.localStorage,
      get: (key) => {
        try {
          return JSON.parse(window.localStorage.getItem(key)!);
        } catch (error) {
          console.error(error);
        }
        return undefined;
      },
      set: (key, value) => {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error(error);
        }
      },
      // Assign only `remove: window.localStorage.removeItem` raise `Illegal Invocation` error
      // Ref: https://stackoverflow.com/a/41126225
      remove: (key) => window.localStorage.removeItem(key),
    };
  }

  if (!config) {
    throw new Error('Non-browser environment detected. Please specify storage methods.');
  }

  return config;
}

export const storage = initStorage();

export default initStorage;
