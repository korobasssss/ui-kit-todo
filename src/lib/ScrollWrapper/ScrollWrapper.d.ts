import { FC, ReactNode } from "react";
export interface IScrollWrapper {
    classNames?: string;
    children: ReactNode;
}
export declare const ScrollWrapper: FC<IScrollWrapper>;
