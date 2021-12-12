import React, { ChangeEvent } from 'react'
import Button from '../../atoms/form/Button'
import { AiOutlineUserAdd, AiOutlineLock, AiOutlineUser, AiOutlineGoogle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import FormGroup from '../../molecules/FormGroup'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

const FormLogin = () => {
    const [cookies, setCookie] = useCookies()
    const Router = useRouter()

    return (
        <div>
            {/* auth heading */}
            <div className='flex flex-row flex-nowrap items-center mb-8'>
                <div className='flex-grow flex-shrink w-full pr-2'>
                    <img
                        src='/images/logo.png'
                        alt='logo'
                        className='w-full max-w-170px'
                    />
                </div>
                <div className='flex-grow-0 flex-shrink'>
                    <Button
                        text='Register'
                        Icon={AiOutlineUserAdd}
                        typeButton='primary-outline'
                    />
                </div>
            </div>

            {/* auth content */}
            <div>
                <div className='mb-70px'>
                    <h2
                        className='text-heading-black text-size-h3 font-semibold leading-tight'
                    >
                            Welcome,
                    </h2>
                    <h3
                        className='text-primary-purple text-size-h4 font-normal mt-1'
                    >
                        Back
                    </h3>
                </div>

                <form>
                    <FormGroup
                        classes='mb-4'
                        textLabel='E-mail'
                        Icon={HiOutlineMail}
                        formType='email'
                        placeholder='enter email'
                        onChange={(E : ChangeEvent) => console.log('changed')}
                    />

                    <FormGroup
                        classes='mb-4'
                        textLabel='Password'
                        Icon={AiOutlineLock}
                        formType='password'
                        placeholder='enter password'
                        onChange={(e : ChangeEvent) => console.log('changed')}
                    />

                    <FormGroup
                        textLabel='Login'
                        Icon={AiOutlineUser}
                        formType='button'
                        typeButton='primary'
                        onClick={() => {
                            setCookie('jwtDasbora', '123456789')
                            Router.push('/')
                        }}
                    />
                </form>

                <div className='border-t border-gray-200 pt-5 mt-5 flex flex-row flex-nowrap'>
                    <div className='w-2/4 pr-2'>
                        <Button
                            text='Facebook'
                            Icon={FiFacebook}
                            typeButton='facebook'
                        />
                    </div>

                    <div className='w-2/4 pl-2'>
                        <Button
                            text='Google'
                            Icon={AiOutlineGoogle}
                            typeButton='google'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin
