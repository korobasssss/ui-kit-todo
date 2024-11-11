import { FC, ReactNode } from "react";
export interface ILabelWrapper {
    label?: string;
    error?: string;
    isRequired?: boolean;
    children: ReactNode;
    bottom?: string;
}
export declare const LabelWrapper: FC<ILabelWrapper>;
