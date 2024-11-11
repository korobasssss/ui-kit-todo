import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';
import { ErrorText } from "../ErrorText";
export const LabelWrapper = ({ bottom, label, error, isRequired, children }) => {
    const stylesLabelWrapper = useMemo(() => {
        return (cx(styles.SElementWrapper, {
            [styles['SElementWrapper_error']]: error
        }));
    }, [error]);
    const stylesLabel = useMemo(() => {
        return (cx(styles.SLabel, {
            [styles['SLabel_required']]: isRequired
        }));
    }, [error]);
    return (_jsxs("div", { children: [_jsxs("div", { className: stylesLabelWrapper, children: [label && (_jsx("span", { className: styles.ILabelWrapper, style: { bottom }, children: _jsx("label", { className: stylesLabel, children: label }) })), children] }), error && (_jsx(ErrorText, { classNames: styles.SError, message: error }))] }));
};
