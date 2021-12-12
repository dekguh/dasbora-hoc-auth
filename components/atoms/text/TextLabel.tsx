import React from 'react'
import { ITextLabel } from '../../utils/types'

const TextLabel : React.FC<ITextLabel> = ({
    classes,
    text
}) => {
    return (
        <label
            className={`block text-sm text-body-black${classes && ` ${classes}`}`}
        >
            {text}
        </label>
    )
}

export default TextLabel
