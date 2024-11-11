import { FC } from "react";
import { IClassName } from "../../shared/interfaces";
export interface IErrorText extends IClassName {
    message: string;
}
export declare const ErrorText: FC<IErrorText>;
