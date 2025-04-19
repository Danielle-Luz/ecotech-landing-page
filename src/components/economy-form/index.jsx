import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import formSchema from "./formSchema";
import "./index.css";
import { useEffect } from "react";

const EconomyForm = () => {
  const {handleSubmit, register, formState: {errors}} = useForm({resolver: yupResolver(formSchema), mode: "onChange"});

  const resetFieldsWithErrors = () => {
    Object.keys(errors).forEach(fieldName => {
        errors[fieldName].ref.value = ""
    })
  }

  useEffect(() => {
    resetFieldsWithErrors();
  }, [errors.consumption, errors.energyBill, errors.space]);

  return (
    <section id="savings" className="horizontal-spacing-1 economy-form-content-wrapper">
      <article className="economy-form-text">
        <h2 className="title-2">Discover How Much You Can Save!</h2>
        <p className="text-2">
          Our calculation uses official solar irradiation data for your region and the efficiency of EcoTech products.
        </p>
      </article>
      <article className="economy-form-wrapper">
        <form onSubmit={handleSubmit((data) => console.log(data))} className="economy-form">
          <fieldset className="form-fieldset-1">
            <label className="title-3" htmlFor="consumption">Monthly Energy Consumption</label>
            <input className="form-field-1 text-2" id="consumption" placeholder="Enter your average consumption in kWh (e.g., 300 kWh)" type="text" {...register("consumption")} />
          </fieldset>
          <fieldset className="form-fieldset-1">
            <label className="title-3" htmlFor="energy-bill">Average Energy Bill</label>
            <input className="form-field-1 number-2" id="energy-bill" placeholder="Enter your monthly bill in dollars (e.g., $150)" type="text" {...register("energyBill")} />
          </fieldset>
          <fieldset className="form-fieldset-1">
            <label className="title-3" htmlFor="space">Available Installation Area (m²)</label>
            <input className="form-field-1 number-2" id="space" placeholder="Enter the space you can dedicate to solar panels" type="text" {...register("space")} />
          </fieldset>
          <fieldset className="economy-form-fielset-checkbox">
            <article className="economy-form-field-checkbox-wrapper">
              <input className="form-field-1 economy-form-field-checkbox text-2" id="solar-panel" name="solar-panel" type="checkbox" value="Residential Solar Panels" />
              <label className="text-2" htmlFor="solar-panel">Residential Solar Panels</label>
            </article>
            <article className="economy-form-field-checkbox-wrapper">
              <input className="form-field-1 economy-form-field-checkbox text-2" id="commercial-systems" name="commercial-systems" type="checkbox" value="Commercial Systems" />
              <label className="text-2" htmlFor="commercial-systems">Commercial Systems</label>
            </article>
            <article className="economy-form-field-checkbox-wrapper">
              <input className="form-field-1 economy-form-field-checkbox text-2" id="portable-kits" name="portable-kits" type="checkbox" value="Portable Kits" />
              <label className="text-2" htmlFor="portable-kits">Portable Kits</label>
            </article>
          </fieldset>
          <input type="submit" className="button-1" value="Fazer simulação" />
        </form>
        <article className="economy-card">
          <article className="economy-result">
            <h3 className="title-3">Financial Savings</h3>
            <p className="economy-result-value">$ 40.000</p>
          </article>
          <ul className="economy-metrics">
            <li className="economy-metric-item">
              <p className="title-4">CO₂ Reduction</p>
              <p className="title-3">Up to $60/month</p>
            </li>
            <li className="economy-metric-item">
              <p className="title-4">Return on Investment</p>
              <p className="title-3">4-6 years</p>
            </li>
            <li className="economy-metric-item">
              <p className="title-4">Energy Independence</p>
              <p className="title-3">Up to 90%</p>
            </li>
          </ul>
        </article>
      </article>
    </section>
  )
}

export default EconomyForm;