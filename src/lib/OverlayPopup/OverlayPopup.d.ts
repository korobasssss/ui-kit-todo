import { FC, ReactNode } from "react";
export interface IOverlayPopup {
    classNames?: string;
    handlerCLose?: () => void;
    children: ReactNode;
    isOpen?: boolean;
}
export declare const OverlayPopup: FC<IOverlayPopup>;
