import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';
import { ScrollWrapper } from "../ScrollWrapper";
import { LabelWrapper } from "../LabelWrapper";
export const Textarea = ({ placeholder, value, label, error, onChange, isRequired, ...restProps }) => {
    const stylesTextarea = useMemo(() => {
        return (cx(styles.STextarea, {
            [styles['STextarea_error']]: error
        }));
    }, []);
    return (_jsx(LabelWrapper, { label: label, error: error, isRequired: isRequired, bottom: '65px', children: _jsx(ScrollWrapper, { children: _jsx("textarea", { value: value, className: stylesTextarea, placeholder: placeholder, onChange: onChange, ...restProps }) }) }));
};
