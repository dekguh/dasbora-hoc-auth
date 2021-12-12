import React from 'react'
import { ImageWrap } from '../../molecules/ImageWrap'

const CoverAuth = () => {
    return (
        <ImageWrap
            backgroundUrl='/images/cover-auth.png'
            classes='bg-cover bg-center bg-no-repeat w-full h-100vh p-5'
        >
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <img src='/images/flat-auth.png' alt='flat' className='max-w-650px w-full' />
                <div className='max-w-650px w-full mt-10'>
                    <span className='text-white mb-1 block'>start your journey</span>
                    <h1 className='text-white text-size-h3 md:text-size-h2 leading-tight font-bold'>
                        The setting of the sun turns into the night
                    </h1>
                </div>
            </div>
        </ImageWrap>
    )
}

export default CoverAuth
