import "./index.css"

const CallToAction = () => {
  return (
    <div className="call-to-action-wrapper horizontal-spacing-1">
      <section className="call-to-action">
        <div className="call-to-action-gradient">
          <article className="call-to-action-content">
            <h1 className="title-1">Transform Your Energy, Save the Planet</h1>
            <p className="text-1">Switch to EcoTech’s solar solutions and reduce your carbon footprint while saving money. The future of energy is clean, renewable, and within your reach.</p>
          </article>
          <img className="call-to-action-image" src="./../../../assets/solar-panels.svg" />
        </div>
      </section>
    </div>
  );
}

export default CallToAction;