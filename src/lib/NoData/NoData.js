import { jsx as _jsx } from "react/jsx-runtime";
import styles from './styles.module.scss';
export const NoData = ({ message }) => {
    return (_jsx("p", { className: styles.SMessage, children: message }));
};
