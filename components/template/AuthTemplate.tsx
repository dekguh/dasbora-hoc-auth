import React from 'react'
import CoverAuth from '../organisms/CoverAuth'
import FormLogin from '../organisms/FormLogin'

const AuthTemplate = () => {
    return (
        <div className='flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink md:max-w-500px w-full p-5'>
                <FormLogin />
            </div>

            <div className='flex-grow flex-shrink w-full hidden md:block'>
                <CoverAuth />
            </div>
        </div>
    )
}

export default AuthTemplate
