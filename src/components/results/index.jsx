import "./index.css";

const Results = () => {
  return (
    <section className="results horizontal-spacing-1" id="results">
      <article className="results-text">
        <h2 className="title-2">Sustainability results</h2>
        <p className="text-2">
          At EcoTech Solutions, we turn promises into action. Every product sold builds a healthier planet.
        </p>
      </article>
      <ul className="result-cards">
        <li className="result-card-item">
          <img src="./../../../public/assets/family.svg" />
          <h3 className="title-3">Communities Impacted</h3>
          <p className="text-2">
            50 communities benefited with access to solar energy and eco-friendly solutions.
          </p>
        </li>
        <li className="result-card-item">
          <img src="./../../../public/assets/co2.svg" />
          <h3 className="title-3">CO2 Emissions Reduced</h3>
          <p className="text-2">
            Over 1,000 tons of CO2 avoided through the installation of our solar panels.
          </p>
        </li>
        <li className="result-card-item">
          <img src="./../../../public/assets/money-box.svg" />
          <h3 className="title-3">Energy Bill Savings</h3>
          <p className="text-2">
            Our customers save an average of 30% on their energy bills after installing solar panels.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Results;