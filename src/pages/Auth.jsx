import React, {useContext, useState} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Container, Card, Row } from 'react-bootstrap'
import { ADMIN_ROLE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { registration, login } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sign = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)

      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      user.setIsAdmin(data.roles.includes(ADMIN_ROLE))

      navigate(SHOP_ROUTE)
    } catch (error) {
      
      alert(error.response.data.message)
    }
  }

  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: '40%'}} className='p-5' >
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-4'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-4'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <Row className='m-auto flex-column'>
            {isLogin ? 
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
              </div>
            }
            <Button 
              variant={'outline-primary'}
              className='mt-4'
              onClick={sign}
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Row>
          

        </Form>
      </Card>

    </Container>
    
  )
})

export default Auth
