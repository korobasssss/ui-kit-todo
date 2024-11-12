import { FC, TextareaHTMLAttributes, useMemo } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'
import { ScrollWrapper } from "../ScrollWrapper"
import { LabelWrapper } from "../LabelWrapper"

export interface ITextarea
extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    classnames?: string
    label?: string
    error?: string
    isRequired?: boolean
}

export const Textarea: FC<ITextarea> = ({
    placeholder,
    value,
    label,
    error,
    onChange,
    isRequired,
    ...restProps
}) => {

    const stylesTextarea = useMemo(() => {
        return (
            cx(
                styles.STextarea,
                {
                    [styles['STextarea_error']]: error
                }
            )
        )
    }, [])

    return (
        <LabelWrapper
            label={label}
            error={error}
            isRequired={isRequired}
            bottom='65px'
        >
            <ScrollWrapper>
                <textarea
                    value={value}
                    className={stylesTextarea}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                </ScrollWrapper>
        </LabelWrapper>
    )
}