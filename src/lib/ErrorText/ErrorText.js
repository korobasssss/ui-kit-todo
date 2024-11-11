import { jsx as _jsx } from "react/jsx-runtime";
import cx from 'classnames';
import styles from './styles.module.scss';
export const ErrorText = ({ classNames, message }) => {
    return (_jsx("p", { className: cx(styles.SError, classNames), children: message }));
};
