import { jsx as _jsx } from "react/jsx-runtime";
import cx from 'classnames';
import styles from './styles.module.scss';
import { Icon } from "../Icon";
export const ButtonIcon = ({ classNames, icon, alt, onClick, disabled, ...restProps }) => {
    return (_jsx("button", { className: cx(classNames, styles.SButtonIcon), onClick: onClick, disabled: disabled, ...restProps, children: _jsx(Icon, { icon: icon, alt: alt }) }));
};
