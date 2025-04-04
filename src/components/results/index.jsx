import "./index.css";

const Results = () => {
  return (
    <section className="results" id="results">
      <article className="results-text">
        <h2 className="results-title">Sustainability results</h2>
        <p className="results-description">
          At EcoTech Solutions, we turn promises into action. Every product sold builds a healthier planet.
        </p>
      </article>
      <ul className="result-cards">
        <li className="result-card-item">
          <img src="./../../../public/assets/family.svg" />
          <h3>Communities Impacted</h3>
          <p>
            50 communities benefited with access to solar energy and eco-friendly solutions.
          </p>
        </li>
        <li className="result-card-item">
          <img src="./../../../public/assets/co2.svg" />
          <h3>CO2 Emissions Reduced</h3>
          <p>
            Over 1,000 tons of CO2 avoided through the installation of our solar panels.
          </p>
        </li>
        <li className="result-card-item">
          <img src="./../../../public/assets/money-box.svg" />
          <h3>Energy Bill Savings</h3>
          <p>
            Our customers save an average of 30% on their energy bills after installing solar panels.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Results;