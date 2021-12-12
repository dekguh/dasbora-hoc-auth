import React from 'react'
import { IInputTextField } from '../../utils/types'

const InputTextField : React.FC<IInputTextField> = ({
    classesWrap,
    classesInput,
    placeholder,
    type,
    defaultValue,
    onChange,
    Icon
}) => {
    return (
        <div className={`relative ${classesWrap && ` ${classesWrap}`}`}>
            {Icon && (
            <i className='text-primary-purple absolute top-2/4 left-3 transform -translate-y-2/4 text-base'>
                <Icon />
            </i>
            )}
            <input
                type={type}
                className={`block w-full border border-color-input-border rounded text-sm ${Icon ? 'pl-9' : 'pl-5'} pr-5 py-3 font-normal outline-none duration-200 focus:border-primary-purple ${classesInput && ` ${classesInput}`}`}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
    )
}

export default InputTextField
