import LT from '../assets/liturgy2.jpeg';
import LT1 from '../assets/liturgy4.jpeg';
import LT2 from '../assets/liturgy3.jpeg';
import jm from '../assets/map2.webp';
import bor from '../assets/liturgy3.jpeg';
import nm from '../assets/health.jpeg';

const focusCards = [
  {
    title: 'Who We Are',
    image: jm,
    description:
      'The Catholic Diocese of Malakal is a Latin Rite diocese within the Metropolitan Archdiocese of Juba, serving communities across 200,164 square kilometers of northeastern South Sudan.',
  },
  {
    title: 'Our Mission',
    image: bor,
    description:
      'We proclaim the Gospel, administer the sacraments, promote human development, and work for peace, justice, and reconciliation in a region marked by hardship.',
  },
  {
    title: 'Our Vision',
    image: nm,
    description:
      'We envision a thriving Catholic community where every person has access to education, healthcare, dignity, and lasting peace.',
  },
];

const milestones = [
  '1933: Established as the Mission Sui Iuris of Kodok',
  '1938: Promoted to Apostolic Prefecture of Kodok',
  '1949: Renamed Apostolic Prefecture of Malaka',
  '1974: Elevated to Diocese of Malakal',
  '2024: Lost territory to the new Diocese of Bentiu',
];

const stats = [
  { label: 'Area', value: '200,164 km²' },
  { label: 'Catholics', value: '920,537' },
  { label: 'Parishes', value: '14' },
  { label: 'Priests', value: '23' },
  { label: 'Sisters', value: '3' },
  { label: 'Seminarians', value: '13' },
];

const galleryItems = [
  { image: LT, title: 'Faith in Action' },
  { image: LT1, title: 'Community Celebration' },
  { image: LT2, title: 'Renewal and Hope' },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-eyebrow">About Our Diocese</p>
          <h1>Serving Christ, healing communities, and building hope in Catholic Diocese of Malakal.</h1>
          <p>
            The Catholic Diocese of Malakal continues to stand as a beacon of faith, service, and resilience for the people of South Sudan.
          </p>
        </div>
        <div className="about-hero-card">
          <h3>Our Reach</h3>
          <ul>
            <li>Nearly one-third of the Diocese's population is Catholic</li>
            <li>Serving families across rural and urban communities</li>
            <li>Committed to integral human development</li>
          </ul>
        </div>
      </section>

      <section className="about-cards-grid">
        {focusCards.map((card) => (
          <article className="about-card" key={card.title}>
            <img src={card.image} alt={card.title} />
            <div className="about-card-body">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="about-content-grid">
        <article className="about-panel">
          <h2>Brief History</h2>
          <div className="timeline-list">
            {milestones.map((item) => (
              <div className="timeline-item" key={item}>
                <span className="timeline-dot"></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel">
          <h2>Our Journey</h2>
          <p>
            For over 90 years, missionaries and local clergy have served this region with courage and devotion. Despite civil war, displacement, and loss, the Diocese continues to rebuild with faith, unity, and hope.
          </p>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="about-gallery">
        <div className="section-heading">
          <p className="about-eyebrow">Jubilee Celebration</p>
          <h2>Moments of faith, unity, and renewal</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-card-body">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About