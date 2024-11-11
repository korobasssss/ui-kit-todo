import { FC } from "react";
import { IClassName } from "../../shared/interfaces";
export interface IICon extends IClassName {
    icon: string;
    alt?: string;
}
export declare const Icon: FC<IICon>;
