import { Route, Routes } from 'react-router'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route element={<RegisterLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
