import { FC, LinkHTMLAttributes, ReactNode } from "react";
import { IClassName } from "../interfaces";
export interface ILink extends LinkHTMLAttributes<HTMLLinkElement>, IClassName {
    url: string;
    isSelected: boolean;
    children: ReactNode;
}
export declare const Link: FC<ILink>;
