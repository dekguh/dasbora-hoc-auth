import { ChangeEventHandler, MouseEventHandler, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface IInputTextField {
    classesInput?: string;
    classesWrap?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    defaultValue?: string;
    Icon?: IconType;
    onChange?: ChangeEventHandler;
}

export interface IInputPassword {
    classesInput?: string;
    classesWrap?: string;
    placeholder?: string;
    defaultValue?: string;
    Icon?: IconType;
    onChange?: ChangeEventHandler;
}

export interface IButton {
    classes?: string;
    typeButton?: 'primary' | 'facebook' | 'google' | 'primary-outline' | 'transparent';
    text?: string;
    onClick?: MouseEventHandler;
    type?: 'button' | 'submit';
    Icon?: IconType;
}

export interface ITextLabel {
    classes?: string;
    text?: string;
}

export interface IFormGroup {
    classes?: string;
    formType?: 'text' | 'email' | 'password' | 'button';
    Icon?: IconType;
    onChange?: ChangeEventHandler;
    onClick?: MouseEventHandler;
    defaultValue?: string;
    placeholder?: string;
    textLabel?: string;
    typeButton?: 'primary' | 'facebook' | 'google' | 'primary-outline' | 'transparent';
}

export interface IImageWrap {
    backgroundUrl?: string;
    classes?: string;
    children?: ReactNode | ReactElement;
}