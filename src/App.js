// RICORDIAMOCI DI INCLUDERE IN APP.JS IL FILE CSS DI BOOTSTRAP PRESENTE IN NODE_MODULES
// !!!
import 'bootstrap/dist/css/bootstrap.min.css'
// !!!
// INCLUDIAMO ANCHE LE BOOTSTRAP-ICONS
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import TableBooking from './components/TableBooking'
import BookingList from './components/BookingList'
// importo i 3 componenti necessari
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

// BrowserRouter è un componente che permette l'utilizzo degli altri
// elementi di routing al suo interno
// Route deve andare dentro un Routes, e Routes deve andare dentro un BrowserRouter

// Routes andrà montato dove si desidera montare condizionalmente dei componenti
// sulla base della rotta corrente

function App() {
  return (
    <BrowserRouter>
      {/* la sezione header è FUORI da un Routes, quindi sarà sempre visibile */}
      <header>
        <CustomNavbar />
      </header>
      <main>
        {/* la sezione centrale CAMBIERÀ a seconda della rotta, quindi
        la inserisco dentro un Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* / */}

          <Route path="/admin" element={<BookingList />} />
          {/* /admin */}

          <Route path="/booking" element={<TableBooking />} />
          {/* /booking */}

          <Route path="/menu" element={<Menu />} />
          {/* /menu */}

          {/* rotta parametrica, dinamica */}
          <Route path="/details/:pastaId" element={<PastaDetails />} />
          {/* /details/0 */}
          {/* /details/4 */}
          {/* /details/stefano */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* la sezione footer è FUORI da un Routes, quindi sarà sempre visibile */}
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
