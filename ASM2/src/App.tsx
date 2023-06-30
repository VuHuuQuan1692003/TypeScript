import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './component/userLayout'

import Home from './page/home'
import ProductDetail from './page/product'
import SignIn from './page/sign-in'
import SignUp from './page/sign-up'
import DashBoard from './page/dashboard'
import AdminLayout from './component/adminLayout'
import Update from './page/update'
import AddProduct from './page/add'



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />

      <Route path='/admin/' element={< AdminLayout />} >
        < Route index element={<DashBoard />} />
        <Route path='product/:id' element={<Update />} />
        <Route path='add' element={<AddProduct />} />
      </Route>

      <Route path='/' element={<UserLayout />} >
        <Route index element={<Home />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Route>
    </Routes>
  </BrowserRouter >
}

export default App
