import { FC, InputHTMLAttributes } from "react";
import { IClassName } from "../../shared/interfaces";
export interface IInput extends InputHTMLAttributes<HTMLInputElement>, IClassName {
    label?: string;
    error?: string;
    isRequired?: boolean;
    rightIcon?: string;
    leftIcon?: string;
    isFocused?: boolean;
}
export declare const Input: FC<IInput>;
