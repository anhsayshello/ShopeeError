import React from 'react'
import { Outlet } from 'react-router'
import RegisterHeader from '../../../components/RegisterHeader'
import Footer from '../../../components/Footer'

export default function RegisterLayout() {
  return (
    <>
      <RegisterHeader />
      <Outlet />
      <Footer />
    </>
  )
}
