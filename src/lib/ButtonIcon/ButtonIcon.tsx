import { ButtonHTMLAttributes, FC } from "react"
import cx from 'classnames'

import styles from './styles.module.scss'
import { Icon } from "../Icon"

export interface IButtonIcon 
extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    icon: string
    alt: string
}

export const ButtonIcon: FC<IButtonIcon> = (
    {
        classNames,
        icon,
        alt,
        onClick,
        disabled,
        ...restProps
    }
) => {
    return (
        <button
            className={cx(
                classNames,
                styles.SButtonIcon
            )}
            onClick={onClick}
            disabled={disabled}
            {...restProps}
        >
            <Icon 
                icon={icon}
                alt={alt}
            />
        </button>
    )
}