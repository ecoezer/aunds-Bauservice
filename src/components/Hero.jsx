import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">A&S Bauservice</h1>
        <h2 className="hero-subtitle">Garten & Landschaftsbau</h2>
        <p className="hero-text">
          Ihr zuverlässiger Partner für professionelle Bauarbeiten und Gartenpflege
        </p>
        <button className="hero-button" onClick={scrollToContact}>
          Jetzt Kontakt aufnehmen
        </button>
      </div>
    </section>
  )
}

export default Hero
