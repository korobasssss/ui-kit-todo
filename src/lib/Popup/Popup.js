import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './style.module.scss';
import { CloseIcon } from '../../shared/assets';
import { ButtonIcon } from "../ButtonIcon";
import { Button } from "../Button";
import { OverlayPopup } from "../OverlayPopup";
import { Portal } from "../Portal";
import { OverlayLoader } from "../OverlayLoader";
export const Popup = ({ title, isOpen, handlerSubmit, buttonSubmitName, handlerCancel, buttonCancelName, children, isLoading, size }) => {
    const submit = async () => {
        if (handlerSubmit) {
            if (await handlerSubmit()) {
                handlerCancel();
            }
        }
    };
    const stylesPopup = useMemo(() => {
        return (cx(styles.SPopup, styles[`SPopup_size_${size}`]));
    }, [size]);
    return (_jsxs(Portal, { children: [_jsx(OverlayPopup, { isOpen: isOpen, children: _jsxs("section", { className: stylesPopup, children: [_jsxs("header", { className: styles.SPHeader, children: [_jsx("h1", { className: styles.SPTitle, children: title }), _jsx(ButtonIcon, { icon: CloseIcon, alt: 'close', onClick: handlerCancel })] }), children, (buttonSubmitName || buttonCancelName) && (_jsxs("footer", { className: styles.SPFooter, children: [buttonSubmitName && (_jsx(Button, { theme: 'primary', type: 'submit', onClick: submit, children: buttonSubmitName })), buttonCancelName && (_jsx(Button, { theme: 'secondary', onClick: handlerCancel, children: buttonCancelName }))] }))] }) }), isLoading && (_jsx(OverlayLoader, {}))] }));
};
