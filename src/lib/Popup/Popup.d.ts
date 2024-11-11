import { FC, ReactNode } from "react";
export interface IPopup {
    title: string;
    isOpen: boolean;
    handlerSubmit?: () => Promise<boolean>;
    buttonSubmitName?: string;
    handlerCancel: () => void;
    buttonCancelName?: string;
    children: ReactNode;
    isLoading?: boolean;
    size: 's' | 'm';
}
export declare const Popup: FC<IPopup>;
