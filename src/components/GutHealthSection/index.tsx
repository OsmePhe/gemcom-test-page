import './index.scss';

const GutHealthSection = (): JSX.Element => {
  return (
    <section className="gut-health-section">
      <div className="gut-block first">
        <img
          src="/assets/gut-health-1.svg"
          alt="Dogs eating"
          className="gut-image"
        />
        <div className="gut-text">
          <h2 className="gut-title">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h2>
          <p className="gut-description">
            Through rigorous scientific studies and consultations with
            veterinarians, we have created a breakthrough formula exclusively
            tailored to combat the health challenges prevalent in dogs. A
            staggering 91% of our customers have reported significant
            improvements in their dogs' health after incorporating our product
            into their diet.
          </p>
        </div>
      </div>

      <div className="gut-block second">
        <div className="gut-text left">
          <h2 className="gut-title">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h2>
          <p className="gut-description">
            Our dog food formula contains carefully selected prebiotics that
            work in harmony with the gut microbiota, providing the necessary
            nutrients for the growth and maintenance of beneficial bacteria,
            ultimately supporting digestive health.
          </p>
        </div>
        <img
          src="/assets/gut-health-2.svg"
          alt="Dog food pellets"
          className="gut-image"
        />
      </div>
    </section>
  );
};

export { GutHealthSection };
