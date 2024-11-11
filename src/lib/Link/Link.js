import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';
export const Link = ({ classNames, url, isSelected, children }) => {
    const stylesLink = useMemo(() => {
        return (cx(classNames, styles.SLink, {
            [styles['SLink_selected']]: isSelected
        }));
    }, []);
    return (_jsx("a", { className: stylesLink, href: url, children: children }));
};
