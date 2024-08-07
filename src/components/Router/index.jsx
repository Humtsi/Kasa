import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from '../../components/Error'
import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'
import Hebergements from '../../pages/Hebergements'

function Routers () {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
            <Route path="/hebergement/:id" element={<Hebergements />} />
        </Routes>
    </Router>
  )
}

export default Routers