import { FC, LinkHTMLAttributes, ReactNode } from "react";
export interface ILink extends LinkHTMLAttributes<HTMLLinkElement> {
    classNames?: string;
    url: string;
    isSelected: boolean;
    children: ReactNode;
}
export declare const Link: FC<ILink>;
