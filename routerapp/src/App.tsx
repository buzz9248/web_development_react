import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// 만든 컴포넌트들을 import
import Home from './components/Home'
import Contact from './components/Contact'
import PageNotFound from './components/pageNotFound'
import ContactSeoul from './components/ContactSeoul'
import ContactLondon from './components/ContactLondon'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} >
            <Route path='seoul' element={<ContactSeoul />} />
            <Route path='london' element={<ContactLondon />} />
          </Route>

          <Route path='*' element={<PageNotFound />}></Route >
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
