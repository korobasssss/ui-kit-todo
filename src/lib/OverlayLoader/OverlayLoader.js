import { jsx as _jsx } from "react/jsx-runtime";
import { Loader } from "../Loader";
import { OverlayPopup } from "../OverlayPopup";
import { Portal } from "../Portal";
import styles from './styles.module.scss';
export const OverlayLoader = () => {
    return (_jsx(Portal, { children: _jsx(OverlayPopup, { isOpen: true, classNames: styles.SOverflow, children: _jsx("div", { className: styles.SOLoader, children: _jsx(Loader, {}) }) }) }));
};
