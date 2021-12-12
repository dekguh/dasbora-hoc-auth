import React, { useState } from 'react'
import { IInputPassword } from '../../utils/types'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const InputPassword : React.FC<IInputPassword> = ({
    classesWrap,
    classesInput,
    placeholder,
    defaultValue,
    onChange,
    Icon
}) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    return (
        <div className={`relative ${classesWrap && ` ${classesWrap}`}`}>
            {Icon && (
            <i className='text-primary-purple absolute top-2/4 left-3 transform -translate-y-2/4 text-base'>
                <Icon />
            </i>
            )}
            <input
                type={isShow ? 'text' : 'password'}
                className={`block w-full text-input-placeholder border border-color-input-border rounded text-sm ${Icon ? 'pl-9' : 'pl-5'} pr-9 py-3 font-normal outline-none duration-200 focus:border-primary-purple ${classesInput && ` ${classesInput}`}`}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
            <i
                className='text-primary-purple absolute top-2/4 right-3 transform -translate-y-2/4 text-base cursor-pointer'
                onClick={() => setIsShow(!isShow)}
            >
                {isShow && <AiOutlineEye />}
                {!isShow && <AiOutlineEyeInvisible />}
            </i>
        </div>
    )
}

export default InputPassword
