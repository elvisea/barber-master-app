import { theme } from "@/theme";
import { ErrorCode, SuccessCode } from "@/enums";

export type Errors = {
  [key in ErrorCode]: { title: string; description: string; text?: string; };
};

export type Success = {
  [key in SuccessCode]: { title: string; description: string; text?: string; };
};

export type Fonts = keyof typeof theme.fonts;
export type Colors = keyof typeof theme.colors;
