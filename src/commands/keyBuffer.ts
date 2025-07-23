let buffer: string[] = [];
let bufferTimeout: NodeJS.Timeout | null = null;

export const keyBuffer = {
  addKey: (key: string) => {
    if (bufferTimeout) clearTimeout(bufferTimeout);

    buffer.push(key);

    bufferTimeout = setTimeout(() => {
      buffer = [];
    }, 500);

    return [...buffer];
  },
  clear: () => {
    buffer = [];
  },
  get: () => [...buffer],
};
