import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import QRLanding from './components/qr-ordering/QR-Landing'
import KDSLanding from './components/kds/KDS-Landing'
import KIOSKLanding from './components/kiosk/KIOSK-Landing'
import About from './components/about/About-Landing'
import ContactPage from './components/contact/ContactPage'
import Services from './components/service/Landing-Services'
import Customer from './components/customer/Landing-Customer'
import PrivacyPolicy from './components/shared/PrivacyPolicy'
import Termsandcondition from './components/shared/TermsOfService'
import BookDemo from './components/shared/BookDemo';
// import ScrollToTop from './ScrollToTop'
import ScrollRestoration from './ScrollRestoration'
import POSLanding from './components/pos/POS-Landing'
import ComingSoonPage from './components/comingsoon/comingsoon'


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}

        <ScrollRestoration />

        {/* Note: PopupForm was removed here as requested because its recurring timer was annoying visitors.
            Visitors can book a demo via the navigation bar or dedicated /book-a-demo page. */}

        <Routes>
          {/* Default Home Landing: Point of Sale (POS) */}
          <Route path="/" element={<POSLanding />} />

          {/* QR Landing */}
          <Route path="/products/qr-ordering" element={<QRLanding />} />

          {/* KDS Landing */}
          <Route path="/products/kds" element={<KDSLanding />} />

          {/* KIOSK Landing */}
          <Route path="/products/kiosk" element={<KIOSKLanding />} />

          {/* POS Landing */}
          <Route path="/products/pos" element={<POSLanding />} />

          {/* Coming Soon */}
          <Route path="/products/coming-soon" element={<ComingSoonPage />} />

          {/* About */}
          <Route path="/about-us" element={<About />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Customers */}
          <Route path="/customers" element={<Customer />} />

          {/* Contact */}
          <Route path="/contact-us" element={<ContactPage />} />

          {/* Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Terms of Service */}
          <Route path="/terms-of-service" element={<Termsandcondition />} />

          {/* Book a Demo */}
          <Route path="/book-a-demo" element={<BookDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App