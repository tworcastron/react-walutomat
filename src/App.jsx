import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route, } from 'react-router'
import Regulations from './pages/Regulations'
import Home from './pages/Home'

function App() {

  const content = (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/regulamin' element={<Regulations />} />
    </Routes>
  )

  return (
    <BrowserRouter>
      <Layout
        header={<Header />}
        content={content}
        footer={<Footer />}
      />
    </BrowserRouter>
  )
}

export default App
