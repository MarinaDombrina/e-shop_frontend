import React, { useContext } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import {REGISTRATION_ROUTE} from '../utils/consts'
import { Context } from '..'

import Admin from '../pages/Admin'
import Basket from '../pages/Basket'
import Auth from '../pages/Auth'
import Product from '../pages/Product'
import Shop from '../pages/Shop'

const AppRouter = () => {

  const {user} = useContext(Context)

  return (
    <Routes>
      <Route key='/' path='/' element={<Shop/>} />
      <Route key='/product/:id' path='/product/:id' element={<Product/>} />
      <Route key='/login' path='/login' element={<Auth/>} />
      <Route key='/registration' path={REGISTRATION_ROUTE} element={<Auth/>} />
      {user.isAdmin && <Route key='/admin' path='/admin' element={<Admin/>} />}
      {user.isAuth && <Route key='/basket' path='/basket' element={<Basket/>} />}
      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  )
}

export default AppRouter
