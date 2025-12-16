import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Kontakt</h2>
        <p className="contact-subtitle">
          Nehmen Sie Kontakt mit uns auf für ein unverbindliches Angebot
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">TEL</div>
              <div>
                <h3>Telefon</h3>
                <p>Rufen Sie uns an</p>
                <a href="tel:+49123456789" className="contact-link">
                  +49 123 456 789
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">@</div>
              <div>
                <h3>E-Mail</h3>
                <p>Schreiben Sie uns</p>
                <a href="mailto:info@aunds-bauservice.de" className="contact-link">
                  info@aunds-bauservice.de
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">PIN</div>
              <div>
                <h3>Standort</h3>
                <p>Deutschland</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">UHR</div>
              <div>
                <h3>Öffnungszeiten</h3>
                <p>Mo - Fr: 08:00 - 18:00</p>
                <p>Sa: 09:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ihr Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ihre@email.de"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ihre Telefonnummer"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                ></textarea>
              </div>

              <button type="submit" className="form-button">
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
