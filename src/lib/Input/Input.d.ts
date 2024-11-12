import { FC, InputHTMLAttributes } from "react";
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    classNames?: string;
    label?: string;
    error?: string;
    isRequired?: boolean;
    rightIcon?: string;
    leftIcon?: string;
    isFocused?: boolean;
}
export declare const Input: FC<IInput>;
