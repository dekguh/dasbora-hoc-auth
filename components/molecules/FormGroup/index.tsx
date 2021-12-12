import React from 'react'
import Button from '../../atoms/form/Button'
import InputPassword from '../../atoms/form/InputPassword'
import InputTextField from '../../atoms/form/InputTextField'
import TextLabel from '../../atoms/text/TextLabel'
import { IFormGroup } from '../../utils/types'

const FormGroup : React.FC<IFormGroup> = ({
    classes,
    formType = 'text',
    Icon,
    onChange,
    onClick,
    placeholder,
    textLabel,
    typeButton
}) => {
    return (
        <div className={classes}>
            {(textLabel && formType !== 'button') && (
            <TextLabel
                text={textLabel}
                classes='mb-2'
            />)}

            {formType === 'text' && (
            <InputTextField
                placeholder={placeholder}
                type='text'
                Icon={Icon}
                onChange={onChange}
            />)}

            {formType === 'email' && (
            <InputTextField
                placeholder={placeholder}
                type='email'
                Icon={Icon}
                onChange={onChange}
            />)}

            {formType === 'password' && (
            <InputPassword
                placeholder={placeholder}
                Icon={Icon}
                onChange={onChange}
            />)}

            {formType === 'button' && (
            <Button
                Icon={Icon}
                onClick={onClick}
                text={textLabel}
                typeButton={typeButton}
            />)}
        </div>
    )
}

export default FormGroup
