import { ButtonHTMLAttributes, FC } from "react";
export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    icon: string;
    alt: string;
}
export declare const ButtonIcon: FC<IButtonIcon>;
