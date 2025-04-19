import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import formSchema from "./formSchema";
import "./index.css";
import { useEffect, useState } from "react";

const EconomyForm = () => {
  const {handleSubmit, register, formState: {errors}} = useForm({resolver: yupResolver(formSchema), mode: "onChange"});
  const [systemCapacity, setSystemCapacity] = useState(0);
  const [coverageOfEnergy, setCoverageOfEnergy] = useState(0);
  const [billReduction, setBillReduction] = useState(0);

  const calculateSystemCapacity = ({space, solarPanel, commercialSystem, portableKits}) => {
    const availableSystemsToSelect = {solarPanel, commercialSystem, portableKits};
    
    const calculatedCapacityPerSystem = {
      solarPanel: space * 0.15,
      commercialSystem: space * 0.20,
      portableKits: 0.5
    } 

    const selectedSystems = Object.keys(availableSystemsToSelect).filter(
      availableSystem => 
        availableSystemsToSelect[availableSystem] != false
    );

    return selectedSystems.reduce(
      (total, selectedSystem) => total + calculatedCapacityPerSystem[selectedSystem],
      0
    );
  }

  const calculateCoverageOfEnergy = (systemCapacity, energyConsumption) => {
    const monthlySunHours = 120; // total of 4 hours of sun per day during a hole month
    return (systemCapacity * monthlySunHours) / energyConsumption * 100
  }

  const calculateBillReduction = (averageEnergyBill, coverageOfEnergy) => {
    return coverageOfEnergy * averageEnergyBill;
  }

  const calculateEnergySavings = (formData) => {
    const systemCapacityResult = calculateSystemCapacity(formData);
    const coverageOfEnergyResult = calculateCoverageOfEnergy(systemCapacityResult, formData.consumption);
    const billReductionResult = calculateBillReduction(formData.energyBill, coverageOfEnergyResult);

    setSystemCapacity(systemCapacityResult);
    setCoverageOfEnergy(coverageOfEnergyResult);
    setBillReduction(billReductionResult);
  }
 
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
        <form onSubmit={handleSubmit(calculateEnergySavings)} className="economy-form">
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
              <input className="form-field-1 economy-form-field-checkbox text-2" id="solar-panel" name="solar-panel" type="checkbox" value="Residential Solar Panels" {...register("solarPanel")} />
              <label className="text-2" htmlFor="solar-panel">Residential Solar Panels</label>
            </article>
            <article className="economy-form-field-checkbox-wrapper">
              <input className="form-field-1 economy-form-field-checkbox text-2" id="commercial-systems" name="commercial-systems" type="checkbox" value="Commercial Systems" {...register("commercialSystem")} />
              <label className="text-2" htmlFor="commercial-systems">Commercial Systems</label>
            </article>
            <article className="economy-form-field-checkbox-wrapper">
              <input className="form-field-1 economy-form-field-checkbox text-2" id="portable-kits" name="portable-kits" type="checkbox" value="Portable Kits" {...register("portableKits")} />
              <label className="text-2" htmlFor="portable-kits">Portable Kits</label>
            </article>
          </fieldset>
          <input type="submit" className="button-1" value="Fazer simulação" />
        </form>
        <article className="economy-card">
          <article className="economy-result">
            <h3 className="title-3">System Capacity</h3>
            <p className="economy-result-value">{systemCapacity} Kw</p>
          </article>
          <ul className="economy-metrics">
            <li className="economy-metric-item">
              <p className="title-4">Coverage of Energy Demand</p>
              <p className="title-3">{coverageOfEnergy}%</p>
            </li>
            <li className="economy-metric-item">
              <p className="title-4">Bill Reduction Estimate</p>
              <p className="title-3">${billReduction}/month</p>
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