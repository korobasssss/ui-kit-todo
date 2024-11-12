import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    children: ReactNode;
    theme: 'primary' | 'secondary' | 'none';
}
export declare const Button: FC<IButton>;
