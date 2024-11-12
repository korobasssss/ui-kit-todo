import { FC, ReactNode } from "react";
import styles from './styles.module.scss'
import cx from 'classnames'

export interface IScrollWrapper {
    classNames?: string
    children: ReactNode;
}

export const ScrollWrapper: FC<IScrollWrapper> = (
    {
        classNames,
        children
    }
) => {

    return (
        <div className={cx(
            styles.scroll_wrapper,
            classNames
        )}>
            {children}
        </div>
    )
}