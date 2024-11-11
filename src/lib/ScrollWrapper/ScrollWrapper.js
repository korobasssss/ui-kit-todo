import { jsx as _jsx } from "react/jsx-runtime";
import styles from './styles.module.scss';
import cx from 'classnames';
export const ScrollWrapper = ({ classNames, children }) => {
    return (_jsx("div", { className: cx(styles.scroll_wrapper, classNames), children: children }));
};
