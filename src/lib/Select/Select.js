import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import cx from 'classnames';
import { Input } from "../Input";
import { NoData } from "../NoData";
import { ScrollWrapper } from "../ScrollWrapper";
import styles from './styles.module.scss';
import { SelectArrowIcon } from '../../assets';
export const Select = ({ classNames, label, error, isRequired, placeholder, options, setSelected, value }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setInputValue(value?.label ?? '');
    }, [value]);
    const handleSetInputValue = (value) => {
        setInputValue(value);
        setSelected(null);
    };
    const handleSetSelected = (option) => {
        setSelected(option);
        setInputValue(option.label);
        setIsFocused(false);
    };
    const stylesOptionsWrapper = useMemo(() => {
        return (cx(styles.SOptionsWrapper, {
            [styles['SOptionsWrapper_error']]: error
        }));
    }, [error]);
    return (_jsxs("div", { className: cx(styles.SSelectWrapper, classNames), onClick: () => setIsFocused(!isFocused), children: [_jsx(Input, { label: label, value: inputValue, onChange: (event) => handleSetInputValue(event.target.value), error: error, isRequired: isRequired, placeholder: placeholder, rightIcon: SelectArrowIcon, isFocused: isFocused }), isFocused && (_jsx(ScrollWrapper, { children: _jsx("ul", { className: stylesOptionsWrapper, children: options && options.length > 0 ?
                        options.map(option => {
                            return (_jsx("li", { className: cx(styles.SOption, {
                                    [styles.SOption_selected]: option.value === value?.value,
                                }), onClick: () => handleSetSelected(option), children: _jsx("span", { className: styles.SOptionTitle, children: option.label }) }, option.value));
                        })
                        : _jsx(NoData, { message: "\u041D\u0435\u0442 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439..." }) }) }))] }));
};
