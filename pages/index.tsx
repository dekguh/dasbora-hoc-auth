import type { NextPage } from 'next'
import { useCookies } from 'react-cookie'
import Button from '../components/atoms/form/Button'
import withAuth from '../components/utils/HOC/withAuth'

const Home: NextPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies()

  return (
    <div>
      <Button
        text='Remove Cookies'
        onClick={() => removeCookie('jwtDasbora')}
      />
    </div>
  )
}

export default withAuth(Home)
