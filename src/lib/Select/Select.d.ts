import { IClassName, ISelectOptions } from "../../interfaces";
export interface ISelect<V extends string | number, K extends string> extends IClassName {
    label?: string;
    value: ISelectOptions<V, K> | null;
    placeholder?: string;
    options: ISelectOptions<V, K>[];
    setSelected: (value: ISelectOptions<V, K> | null) => void;
    error?: string;
    isRequired?: boolean;
}
export declare const Select: <V extends string | number, K extends string>({ classNames, label, error, isRequired, placeholder, options, setSelected, value }: ISelect<V, K>) => JSX.Element;
