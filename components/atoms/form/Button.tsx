import React from 'react'
import { IButton } from '../../utils/types'

const Button : React.FC<IButton> = ({
    classes,
    type = 'button',
    typeButton = 'primary',
    Icon,
    text,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`text-sm py-3 px-6 w-full rounded flex flex-row justify-center items-center 
                ${typeButton === 'primary' && 'bg-primary-purple'}
                ${typeButton === 'google' && 'bg-google'}
                ${typeButton === 'facebook' && 'bg-facebook'}
                ${typeButton === 'primary-outline' && 'bg-transparent border border-primary-purple'} 
                ${classes && ` ${classes}`}
            `}
            type={type}
        >
            {Icon && (
            <i
                className={`text-base mr-2 
                    ${typeButton === 'primary-outline' ? 'text-primary-purple' : 'text-white'}
                `}
            >
                <Icon />
            </i>
            )}
            <span
                className={`text-sm 
                    ${typeButton === 'primary-outline' ? 'text-primary-purple' : 'text-white'}
                `}
            >
                {text}
            </span>
        </button>
    )
}

export default Button
