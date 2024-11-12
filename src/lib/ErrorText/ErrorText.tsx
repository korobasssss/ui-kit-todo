import { FC } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'

export interface IErrorText {
    classNames?: string
    message: string
}

export const ErrorText: FC<IErrorText> = (
    {
        classNames,
        message
    }
) => {
    return (
        <p className={cx(
            styles.SError, 
            classNames
        )}>
            {message}
        </p>
    )
}