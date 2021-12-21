/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, fireEvent } from  '@testing-library/react'
import AuthTemplate from '../components/template/AuthTemplate'

const AuthTemplateSetup = () => {
    const utils = render(<AuthTemplate />)
    const input = utils.getByPlaceholderText(/enter email/i)
    return {
      input,
      ...utils,
    }
}

describe('Auth Template Testing', () => {
    test('is rendered', () => {
        const { getByText } = render(<AuthTemplate />)
        expect(getByText(/Welcome/i)).toBeInTheDocument()
    })
})