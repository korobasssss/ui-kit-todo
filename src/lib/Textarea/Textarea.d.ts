import { FC, TextareaHTMLAttributes } from "react";
import { IClassName } from "../../interfaces";
export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement>, IClassName {
    label?: string;
    error?: string;
    isRequired?: boolean;
}
export declare const Textarea: FC<ITextarea>;
