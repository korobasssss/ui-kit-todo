import { FC, TextareaHTMLAttributes } from "react";
export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    classnames?: string;
    label?: string;
    error?: string;
    isRequired?: boolean;
}
export declare const Textarea: FC<ITextarea>;
