import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { HomePage } from './pages'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
