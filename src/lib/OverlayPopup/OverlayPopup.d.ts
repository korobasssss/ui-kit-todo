import { FC, ReactNode } from "react";
import { IClassName } from "../interfaces";
export interface IOverlayPopup extends IClassName {
    handlerCLose?: () => void;
    children: ReactNode;
    isOpen?: boolean;
}
export declare const OverlayPopup: FC<IOverlayPopup>;
