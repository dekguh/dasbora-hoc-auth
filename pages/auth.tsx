import { NextPage } from 'next'
import React from 'react'
import AuthTemplate from '../components/template/AuthTemplate'
import withPublic from '../components/utils/HOC/withPublic'

const auth : NextPage = () => {
    return (
        <AuthTemplate />
    )
}

export default withPublic(auth)
