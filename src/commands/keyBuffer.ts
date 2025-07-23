let buffer: string[] = [];

export const keyBuffer = {
  addKey: (key: string) => {
    buffer.push(key);
    return [...buffer];
  },
  clear: () => {
    buffer = [];
  },
  get: () => [...buffer],
};
