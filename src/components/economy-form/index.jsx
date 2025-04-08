import "./index.css";

const EconomyForm = () => {
  return (
    <section className="horizontal-spacing-1 economy-form-content-wrapper">
      <article className="economy-form-text">
        <h2 className="title-2">Discover How Much You Can Save!</h2>
        <p className="text-2">
          Our calculation uses official solar irradiation data for your region and the efficiency of EcoTech products.
        </p>
      </article>
      <article className="economy-form-wrapper">
        <form className="economy-form">
          <fieldset className="economy-form-fielset">
            <label className="title-3" htmlFor="consumption">Monthly Energy Consumption</label>
            <input className="economy-form-field text-2" id="consumption" placeholder="Enter your average consumption in kWh (e.g., 300 kWh)" type="text" />
          </fieldset>
          <fieldset className="economy-form-fielset">
            <label className="title-3" htmlFor="energy-bill">Average Energy Bill</label>
            <input className="economy-form-field text-2" id="energy-bill" placeholder="Enter your monthly bill in dollars (e.g., $150)" type="text" />
          </fieldset>
          <fieldset className="economy-form-fielset">
            <label className="title-3" htmlFor="location">Location (for Solar Irradiation Calculation)</label>
            <input className="economy-form-field text-2" id="location" placeholder="Select state/city (e.g., California, Texas, etc.)" type="text" />
          </fieldset>
          <fieldset className=" economy-form-fielset economy-form-fielset-checkbox">
            <article className="economy-form-field-checkbox-wrapper">
              <input className="economy-form-field economy-form-field-checkbox text-2" id="solar-panel" name="solar-panel" type="checkbox" value="Residential Solar Panels" />
              <label className="text-2" htmlFor="solar-panel">Residential Solar Panels</label>
            </article>
            <article className="economy-form-field-checkbox-wrapper">
              <input className="economy-form-field economy-form-field-checkbox text-2" id="commercial-systems" name="commercial-systems" type="checkbox" value="Commercial Systems" />
              <label className="text-2" htmlFor="commercial-systems">Commercial Systems</label>
            </article>
            <article className="economy-form-field-checkbox-wrapper">
              <input className="economy-form-field economy-form-field-checkbox text-2" id="portable-kits" name="portable-kits" type="checkbox" value="Portable Kits" />
              <label className="text-2" htmlFor="portable-kits">Portable Kits</label>
            </article>
          </fieldset>
        </form>
      </article>
    </section>
  )
}

export default EconomyForm;