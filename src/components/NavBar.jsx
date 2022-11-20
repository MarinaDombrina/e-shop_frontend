import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

import { Context } from '..'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts'

import logo from '../assets/logo.png'

const NavBar = observer(() => {
  const navigate = useNavigate()
  const { user } = useContext(Context)

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate(LOGIN_ROUTE)
  }


  return (
    <Navbar bg="light" variant="light" style={{ fontSize: '1.5em' }}>
      <Container>
        <NavLink to={SHOP_ROUTE}><img src={logo} alt="" width='60em' height='auto' /></NavLink>
        {user.isAuth ?
          <Nav>
            <Button style={{ marginLeft: '1em' }} size='lg' variant={'outline-dark'} onClick={() => navigate(SHOP_ROUTE)}>Каталог</Button>
            {user.isAdmin &&
              <Button
                style={{ marginLeft: '1em' }}
                size='lg' variant={'outline-dark'}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
            }

            <Button
              style={{ marginLeft: '1em' }}
              size='lg' variant={'outline-dark'}
              onClick={() => navigate(BASKET_ROUTE)}
            >
              Корзина
            </Button>

            <Button
              style={{ marginLeft: '1em' }}
              size='lg' variant={'outline-dark'}
              onClick={() => logOut()}
            >
              Выйти
            </Button>
            <span style={{ marginLeft: '1em', alignSelf: 'center' }}>{user.user.username}</span>
          </Nav>
          :
          <Nav>
            <Button style={{ marginLeft: '1em' }} size='lg' variant={'outline-dark'} onClick={() => navigate(SHOP_ROUTE)}>Каталог</Button>
            <Button style={{ marginLeft: '1em' }} size='lg' variant={'outline-dark'} onClick={() => navigate(LOGIN_ROUTE)} >Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})


export default NavBar
