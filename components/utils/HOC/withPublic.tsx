import { useRouter } from 'next/router'
import React, { ComponentType, useEffect } from 'react'
import { useCookies } from 'react-cookie'

const withPublic = <T extends any,>(Component : ComponentType<T>) : React.FC<T> | null => {
    return (props : any) => {
        const Router = useRouter()
        const [cookies] = useCookies(['jwtDasbora'])

        useEffect(() => {
            console.log(cookies.jwtDasbora)
            if(cookies.jwtDasbora) {
                Router.push('/')
            }
        })

        if(!cookies.jwtDasbora) {
            return(
                <Component {...props} />
            )
        }else{
            return null
        }
    }
}

export default withPublic
