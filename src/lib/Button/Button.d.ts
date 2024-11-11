import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { IClassName } from '../../shared/interfaces';
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {
    children: ReactNode;
    theme: 'primary' | 'secondary' | 'none';
}
export declare const Button: FC<IButton>;