import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <section className="about-hero">
          <h1>About Kelsey Day</h1>
        </section>

        <section className="about-content">
          <div className="about-image-placeholder">
            Author Photo
          </div>
          
          <div className="about-text">
            <h2>Writer. Storyteller. Dreamer.</h2>
            <p>
              Kelsey Day is an award-winning author whose captivating narratives have 
              touched readers around the world. With a background in literature and a 
              passion for exploring the human condition, Kelsey crafts stories that 
              resonate with authenticity and emotional depth.
            </p>
            <p>
              Born and raised in the Pacific Northwest, Kelsey draws inspiration from 
              the natural beauty of the region and the diverse communities that call it 
              home. Her work often explores themes of identity, belonging, and the 
              complex relationships that shape our lives.
            </p>
            <p>
              When not writing, Kelsey enjoys hiking, reading contemporary fiction, 
              and spending time with her family. She holds an MFA in Creative Writing 
              and has been featured in numerous literary journals and publications.
            </p>
            
            <div className="achievements">
              <h3>Recognition & Awards</h3>
              <ul>
                <li>Winner - Pacific Northwest Book Award (2023)</li>
                <li>Finalist - National Book Critics Circle Award (2022)</li>
                <li>Featured Author - Literary Review Magazine</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
