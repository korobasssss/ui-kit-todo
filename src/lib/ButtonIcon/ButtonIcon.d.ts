import { ButtonHTMLAttributes, FC } from "react";
import { IClassName } from "../../interfaces";
export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {
    icon: string;
    alt: string;
}
export declare const ButtonIcon: FC<IButtonIcon>;
