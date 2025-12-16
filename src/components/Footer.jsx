import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>A&S Bauservice</h3>
            <p>Garten & Landschaftsbau</p>
            <p className="footer-text">
              Ihr zuverlässiger Partner für professionelle Bauarbeiten und Gartenpflege
            </p>
          </div>

          <div className="footer-section">
            <h4>Leistungen</h4>
            <ul>
              <li>Asphalt Arbeiten</li>
              <li>Pflaster Arbeiten</li>
              <li>Gartenpflege</li>
              <li>Hausmeister Service</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <li>Tel: +49 123 456 789</li>
              <li>E-Mail: info@aunds-bauservice.de</li>
              <li>Mo - Fr: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} A&S Bauservice und Garten Landschaftsbau. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
