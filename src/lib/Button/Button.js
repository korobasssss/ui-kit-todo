import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
export const Button = ({ classNames, theme, type, children, disabled, onClick, ...restProps }) => {
    const stylesButton = useMemo(() => {
        return (cx(classNames, styles.SButton, styles[`SButton_${theme}`]));
    }, [theme]);
    return (_jsx("button", { type: type, className: stylesButton, disabled: disabled, onClick: onClick, ...restProps, children: children }));
};
