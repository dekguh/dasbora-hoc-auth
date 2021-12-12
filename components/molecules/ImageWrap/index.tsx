import React from 'react'
import { IImageWrap } from '../../utils/types'

export const ImageWrap : React.FC<IImageWrap> = ({
    backgroundUrl,
    classes,
    children
}) => {
    return (
        <div
            className={classes}
            style={{
                backgroundImage: `url('${backgroundUrl}')`
            }}
        >
            {children}
        </div>
    )
}
