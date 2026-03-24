import { Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { Home } from './page/HomePage'
import { BookPage } from './page/BookPage'
import { WishlistPage } from './page/WishListPage'
import { RegisterPage } from './page/RegisterPage'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='books/:id'element={<BookPage/>} />
        <Route path='wish-list' element={<WishlistPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='checkout' element={<h1>Checkout</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App