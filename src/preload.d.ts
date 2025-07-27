import { User } from "@/types/user";

export {};

declare global {
  interface Window {
    vimap: {
      onNoUser: (callback: () => void) => void;
    };
  }
}
