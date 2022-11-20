import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';

import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';
import { ADMIN_ROLE } from './utils/consts';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(data)
      user.setIsAdmin(data.roles.includes(ADMIN_ROLE))
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className='d-flex justify-content-center'>
        <Spinner style={{ width: '3em', height: '3em', margin: '15% auto'}} animation={'border'}/>
      </div>
    )
  }

  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter />
    </BrowserRouter>
  );
})

export default App;
