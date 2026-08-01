// src/data/curia/educationDepartmentData.js

export const educationDepartmentData = {
  header: {
    title: "Education Department",
    subtitle: "Catholic Schools & Academic Formation",
    description: "The Education Department oversees Catholic schools, teacher training, and educational programs across the Diocese of Malakal, ensuring quality education rooted in Catholic values.",
    image: "/images/curia/education/school1.jpeg",
    badge: "Curia"
  },
  // Overview of all education levels (no images, just text)
  educationOverview: {
    title: "Our Educational Programs",
    description: `The Diocese of Malakal is committed to providing quality Catholic education at all levels, from early childhood to university. Our educational programs are designed to nurture the whole person - intellectually, spiritually, and morally - in the light of the Gospel.`,
    levels: [
      {
        id: 1,
        name: "ECDE - Early Childhood Development Education",
        description: "Providing a strong foundation for children aged 3-6 years through play-based learning, moral formation, and holistic development in a safe, nurturing, and faith-filled environment."
      },
      {
        id: 2,
        name: "Primary School Education",
        description: "Offering comprehensive education from P1 to P8, integrating faith and learning, with qualified teachers and a focus on academic excellence, character formation, and community engagement."
      },
      {
        id: 3,
        name: "Secondary School Education",
        description: "Preparing students from S1 to S4 for higher learning and responsible citizenship through academic excellence, leadership development, career guidance, and moral integrity."
      },
      {
        id: 4,
        name: "Vocational & Technical Education",
        description: "Equipping young people with practical skills in carpentry, tailoring, agriculture, IT, plumbing, and business for employment and self-reliance, promoting economic independence."
      },
      {
        id: 5,
        name: "University Education",
        description: "Supporting Catholic university students through scholarships, mentorship, and partnerships with higher education institutions, investing in skilled professionals for South Sudan."
      }
    ]
  },
  // Photo Gallery - 20 photos
  galleryImages: [
    // ECDE Photos (4)
    { id: 1, src: "/images/curia/gallery/school7.jpeg", alt: "ECDE children learning", category: "ECDE" },
    { id: 2, src: "/images/curia/gallery/school8.jpeg", alt: "ECDE classroom activity", category: "ECDE" },
    { id: 3, src: "/images/curia/gallery/school9.jpeg", alt: "ECDE play-based learning", category: "ECDE" },
    { id: 4, src: "/images/curia/gallery/school10.jpeg", alt: "ECDE students", category: "ECDE" },
    
    // Primary Photos (4)
    { id: 5, src: "/images/curia/gallery/school2.jpeg", alt: "Primary school classroom", category: "Primary" },
    { id: 6, src: "/images/curia/gallery/school3.jpeg", alt: "Primary school assembly", category: "Primary" },
    { id: 7, src: "/images/curia/gallery/school4.jpeg", alt: "Primary school students", category: "Primary" },
    { id: 8, src: "/images/curia/gallery/school5.jpeg", alt: "Primary school learning", category: "Primary" },
    
    // Secondary Photos (4)
    { id: 9, src: "/images/curia/gallery/school6.jpeg", alt: "Secondary school classroom", category: "Secondary" },
    { id: 10, src: "/images/curia/gallery/school11.jpeg", alt: "Secondary school students", category: "Secondary" },
    { id: 11, src: "/images/curia/gallery/school12.jpeg", alt: "Secondary school event", category: "Secondary" },
    { id: 12, src: "/images/curia/gallery/school13.jpeg", alt: "Secondary school graduation", category: "Secondary" },
    
    // Vocational Photos (4)
    { id: 13, src: "/images/curia/gallery/tech1.JPG", alt: "Vocational training workshop", category: "Vocational" },
    { id: 14, src: "/images/curia/gallery/tech2.JPG", alt: "Tailoring class", category: "Vocational" },
    { id: 15, src: "/images/curia/gallery/tech3.JPG", alt: "Carpentry workshop", category: "Vocational" },
    { id: 16, src: "/images/curia/gallery/tech5.JPG", alt: "Agriculture training", category: "Vocational" },
    
    // University Photos (4)
    { id: 17, src: "/images/curia/gallery/university-1.jpg", alt: "University students", category: "University" },
    { id: 18, src: "/images/curia/gallery/university-2.jpg", alt: "University graduation", category: "University" },
    { id: 19, src: "/images/curia/gallery/university-3.jpg", alt: "University lecture", category: "University" },
    { id: 20, src: "/images/curia/gallery/university-4.jpg", alt: "University campus life", category: "University" }
  ],
  contact: {
    email: "education@malakaldiocese.org",
    phone: "+211 912 345 685",
    location: "Education Department, Curia, Malakal",
    officeHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  }
};