import { FC } from "react"

export interface IICon {
    classNames?: string
    icon: string
    alt?: string
}

export const Icon: FC<IICon> = (
    {
        icon,
        alt = icon,
        classNames
    }
) => {
    return (
        <img
            className={classNames} 
            src={icon} 
            alt={alt}
        />
    )
}