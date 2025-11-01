import './Works.css';

function Works() {
  const books = [
    {
      title: "The Silent Echo",
      year: "2023",
      genre: "Mystery/Thriller",
      description: "In the misty Scottish Highlands, detective Sarah Morrison must unravel a decades-old mystery that threatens to destroy everything she holds dear. A gripping tale of secrets, betrayal, and ultimate redemption.",
      status: "Published"
    },
    {
      title: "Whispers in Time",
      year: "2022",
      genre: "Historical Fiction",
      description: "Three generations of women discover a hidden diary that reveals shocking truths about their family's past. From the 1940s to present day, this sweeping saga explores love, sacrifice, and the unbreakable bonds of family.",
      status: "Published"
    },
    {
      title: "The Last Garden",
      year: "2021",
      genre: "Literary Fiction",
      description: "After a devastating loss, botanist Emma Chen returns to her childhood home and discovers an abandoned garden that holds the key to healing her broken heart. A poignant meditation on grief, hope, and renewal.",
      status: "Published"
    },
    {
      title: "Echoes of Tomorrow",
      year: "2024",
      genre: "Science Fiction",
      description: "A time-bending journey that questions the nature of reality and choice. When physicist Dr. Maya Patel discovers a way to glimpse alternate timelines, she must decide which future is worth fighting for.",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="works">
      <div className="works-container">
        <section className="works-hero">
          <h1>Published Works</h1>
          <p>Explore the collection of stories that have captivated readers worldwide</p>
        </section>

        <section className="books-section">
          {books.map((book, index) => (
            <div key={index} className="book-item">
              <div className="book-cover-placeholder">
                {book.title}
              </div>
              <div className="book-details">
                <div className="book-header">
                  <h2>{book.title}</h2>
                  <span className={`status-badge ${book.status === 'Coming Soon' ? 'coming-soon' : 'published'}`}>
                    {book.status}
                  </span>
                </div>
                <div className="book-meta">
                  <span className="book-year">{book.year}</span>
                  <span className="book-genre">{book.genre}</span>
                </div>
                <p className="book-description">{book.description}</p>
                <button className="book-button">
                  {book.status === 'Coming Soon' ? 'Notify Me' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Works;
