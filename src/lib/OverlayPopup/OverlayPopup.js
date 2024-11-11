import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import styles from './styles.module.scss';
import cx from 'classnames';
export const OverlayPopup = ({ classNames, handlerCLose, children, isOpen }) => {
    const styleOverlayWrapper = useMemo(() => {
        return (cx(styles.SOverlayWrapper, {
            [styles[`SOverlayWrapper_opened`]]: isOpen,
            [styles[`SOverlayWrapper_closed`]]: !isOpen
        }));
    }, [isOpen]);
    return (_jsxs("div", { className: styleOverlayWrapper, children: [_jsx("div", { className: cx(classNames, styles.SOverlay), onClick: handlerCLose }), children] }));
};
