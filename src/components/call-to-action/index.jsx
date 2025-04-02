import "./index.css"

const CallToAction = () => {
  return (
    <div className="call-to-action-wrapper">
      <section className="call-to-action">
        <div className="call-to-action-gradient">
          <article className="call-to-action-content">
            <h1 className="call-to-action-title">Transform Your Energy, Save the Planet</h1>
            <p className="call-to-action-text">Switch to EcoTech’s solar solutions and reduce your carbon footprint while saving money. The future of energy is clean, renewable, and within your reach.</p>
          </article>
          <img className="call-to-action-image" src="./../../../public/assets/solar-panels.svg" />
        </div>
      </section>
    </div>
  );
}

export default CallToAction;