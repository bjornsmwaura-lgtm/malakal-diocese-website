import john from '../assets/chruch2.jpeg';
import stv from '../assets/stephen.webp';
import jm from '../assets/map2.webp';
import bor from '../assets/liturgy3.jpeg';
import nm from '../assets/health.jpeg';
import LT from '../assets/liturgy2.jpeg';
import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DonationSection from '../components/ui/DonationSection';

const heroSlides = [
  {
    image: john,
    title: 'WELCOME TO CATHOLIC DIOCESE OF MALAKAL',
    subtitle: 'Building a future of faith, hope, and love in Catholic Diocese of Malakal, South Sudan',
    position: 'center center',
  },
  {
    image: stv,
    title: 'Faith, Leadership, and Hope',
    subtitle: 'Guided by Bishop Stephen Nyodho and a committed clergy',
    position: 'center top',
  },
  {
    image: jm,
    title: 'Serving Communities Across Upper Nile Region, South Sudan',
    subtitle: 'Reaching families through pastoral care and development',
    position: 'center center',
  },
  {
    image: bor,
    title: 'Celebrating Worship and Renewal',
    subtitle: 'A vibrant life of prayer, sacraments, and unity',
    position: 'center center',
  },
  {
    image: LT,
    title: 'A Diocese of Compassion',
    subtitle: 'Supporting education, health, and reconciliation',
    position: 'center center',
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroSlides[activeSlide].image})`,
          backgroundPosition: heroSlides[activeSlide].position,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{heroSlides[activeSlide].title}</h1>
          <p className="hero-subtitle">{heroSlides[activeSlide].subtitle}</p>
          <Link to="/About" className="cta-button">
            Learn More
          </Link>
             </div>
        <div className="hero-dots" aria-label="Hero slideshow indicators">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === activeSlide ? 'dot active' : 'dot'}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bishop Welcome Section */}
      <section className="bishop-welcome">
        <div className="welcome-container">
          <div className="welcome-text">
            <h2 className="section-title">
              Welcome Message from <br />
              <span className="bishop-name">Rt Rev. Bishop Stephen Nyodho Ador Majwok</span>
            </h2>
            <p className="welcome-message">
              Peace be with you. As Bishop of the Catholic Diocese of Malakal, I extend a warm
              welcome to all who visit our diocese, whether in person or through this digital platform.
              Our diocese is situated in one of the most challenging yet hope-filled regions of South Sudan.
              For nearly a century, the Catholic faith has taken root here, growing through wars, floods, and displacement.
              Today, we stand as a people of Spiritual renewal,Faith, Hope and Love through reconciliation and integral human development.
              May God bless you.
            </p>
            <Link to="/About" className="learn-more-btn">
              Learn More About our Diocese →
            </Link>
          </div>
          <div className="bishop-image-section">
            <div className="bishop-image-wrapper">
              <img src={stv} alt="Bishop Stephen Nyodho" />
            </div>
            <h3 className="bishop-title">Rt Rev. Bishop Stephen Nyodho</h3>
            <p className="bishop-subtitle">Bishop, Catholic Diocese of Malakal</p>
          </div>
        </div>
      </section>
      
    </>
  );
}
   



export default Home;