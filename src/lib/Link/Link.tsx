import { FC, LinkHTMLAttributes, ReactNode, useMemo } from "react"
import cx from 'classnames'

import styles from './styles.module.scss'

export interface ILink
extends LinkHTMLAttributes<HTMLLinkElement> {
    classNames?: string
    url: string
    isSelected: boolean
    children: ReactNode
}

export const Link: FC<ILink> = (
    {
        classNames,
        url,
        isSelected,
        children
    }
) => {
    const stylesLink = useMemo(() => {
        return (
            cx(
                classNames,
                styles.SLink,
                {
                    [styles['SLink_selected']]: isSelected
                }
            )
        )
    }, [])

    return (
        <a
            className={stylesLink}
            href={url}
        >
            {children}
        </a>
    )
}