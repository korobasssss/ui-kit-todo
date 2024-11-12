import { FC, ReactNode } from "react";
import { IClassName } from "../../interfaces";
export interface IScrollWrapper extends IClassName {
    children: ReactNode;
}
export declare const ScrollWrapper: FC<IScrollWrapper>;
