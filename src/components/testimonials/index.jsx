import "./index.css";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <article className="horizontal-spacing-1 testimonials-text">
        <h2 className="title-2">Real Stories, Real Impact</h2>
        <p className="text-2">
          See how EcoTech is powering a greener future—straight from those who’ve made the switch.
        </p>
      </article>
      <ul className="horizontal-spacing-1 testimonials-cards">
        {
          testimonials.map((testimonial, index) => {
            return (
              <li key={index} className="testimonial-card-item">
                <article className="all-sides-spacing-1 testimonial-content">
                  <img className="testimonial-image" src={testimonial.image} />
                  <p className="text-2">{testimonial.content}</p>
                </article>
                <article className="all-sides-spacing-1 testimonial-footer">
                  <p className="title-3">{testimonial.author}</p>
                  <p className="text-2">{testimonial.location}</p>
                </article>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default Testimonials;