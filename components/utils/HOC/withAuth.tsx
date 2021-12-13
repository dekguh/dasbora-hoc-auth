import React from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { useCookies } from 'react-cookie'

const withAuth = <T extends any,>(Component : React.ComponentType<T> | NextPage) : React.FC<T> => {
    return (props : any) => {
        const Router = useRouter()
        const [cookies, setCookie, removeCookie] = useCookies(['jwtDasbora'])

        React.useEffect(() => {
            // if cookie not valid, remove it
            cookies.jwtDasbora !== '123456789' && removeCookie('jwtDasbora')

            // if cookie empty, redirect to auth page
            if(!cookies.jwtDasbora) {
                Router.push('/auth')
            }
        })

        if(cookies.jwtDasbora) {
            return <Component {...props}/>
        }else{
            return null
        }
    }
}

export default withAuth
