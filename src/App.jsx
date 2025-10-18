import './App.css'
import Currencies from './components/Currencies/Currencies'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <Layout
      header={<Header />}
      content={<Currencies />}
      footer={<Footer />}
    />
  )
}

export default App
