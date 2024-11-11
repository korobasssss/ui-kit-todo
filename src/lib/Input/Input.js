import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './style.module.scss';
import { LabelWrapper } from "../LabelWrapper";
import { Icon } from "../Icon";
export const Input = ({ classNames, type, placeholder, value, label, error, onChange, isRequired, rightIcon, leftIcon, isFocused, ...restProps }) => {
    const stylesInput = useMemo(() => {
        return (cx(styles.SInput, {
            [styles['SInput_error']]: error,
            [styles['SInput_rightIcon']]: rightIcon,
            [styles['SInput_leftIcon']]: leftIcon,
        }, classNames));
    }, [error, rightIcon, leftIcon]);
    const stylesRightIcon = useMemo(() => {
        return (cx(styles.SRightIcon, {
            [styles[`SRightIcon_rotate`]]: isFocused
        }));
    }, [isFocused]);
    return (_jsx(LabelWrapper, { label: label, error: error, isRequired: isRequired, children: _jsxs("div", { className: styles.SInputWrapper, children: [leftIcon && (_jsx(Icon, { icon: leftIcon, classNames: styles.SLeftIcon })), _jsx("input", { value: value, className: stylesInput, placeholder: placeholder, onChange: onChange, ...restProps }), rightIcon && (_jsx(Icon, { icon: rightIcon, classNames: stylesRightIcon }))] }) }));
};
