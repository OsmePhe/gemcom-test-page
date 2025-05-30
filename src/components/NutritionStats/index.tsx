import './index.scss';

const NutritionStats = (): JSX.Element => {
  return (
    <section className="nutrition-section">
      <div className="nutrition-container">
        <div className="nutrition-left">
          <h2 className="nutrition-title">
            Nutrition is the foundation for
            <br />
            longer, healthier lives in dogs.
          </h2>
          <p className="nutrition-subtitle">
            Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.
          </p>

          <div className="nutrition-points">
            <h3 className="points-title">Key Points:</h3>
            <div className="point">
              <span className="point-number">97%</span>
              <p className="point-text">
                Dogs choose our dog food over leading brands because of its real
                functional ingredients and delicious flavor.
              </p>
            </div>
            <div className="point">
              <span className="point-number">84%</span>
              <p className="point-text">
                Our dog food provides superior nutrition and a patented
                probiotic for optimal nutrient absorption.
              </p>
            </div>
            <div className="point">
              <span className="point-number">92%</span>
              <p className="point-text">
                Our dog food's high protein and fat digestibility contribute to
                ideal stool quality.
              </p>
            </div>
          </div>

          <button className="nutrition-cta">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        <div className="nutrition-right">
          <img
            src="/assets/dog-happy.svg"
            alt="Dog with product"
            className="nutrition-image"
          />
        </div>
      </div>
    </section>
  );
};

export { NutritionStats };
