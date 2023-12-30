import aboutImage from "./images/head-logo.jpg";
import './css/About.css'
function About() {
    return (
      <section className="about">
        <img
          src={aboutImage}
          alt="A fox is closing eyes "
          className="about__image"
        />
        <div className="about__container">
          <h2 className="about__title">Foxes</h2>
          <p className="about__text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.
          </p>
          <p className="about__text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.
          </p>
          <p className="about__text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.
          </p>
          <p className="about__text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;