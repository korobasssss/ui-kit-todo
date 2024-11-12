import { FC } from "react";
import { IClassName } from "../interfaces";
export interface IICon extends IClassName {
    icon: string;
    alt?: string;
}
export declare const Icon: FC<IICon>;
