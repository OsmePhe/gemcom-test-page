import { useState } from 'react';
import './index.scss';

const HeroSection = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (): void => {
    setIsHovered(!isHovered);
  };

  return (
    <section className="hero-section">
      <h1 className="hero-title">
        What makes us different
        <br />
        makes them stronger
      </h1>

      <div className="hero-content">
        <div className="features-group">
          <div className="feature-item">
            <img
              src="/assets/food1.svg"
              alt="Real Food"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Real Food</h3>
              <p>Wholesome recipes for dogs with real meat and veggies.</p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="/assets/pet-bowl1.svg"
              alt="Premium Ingredient"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Premium Ingredient</h3>
              <p>Elevating pet care with unmatched safety and quality.</p>
            </div>
          </div>
        </div>

        <img
          src="/assets/kibble.svg"
          alt="Dog food bowl"
          className="hero-image"
        />

        <div className="features-group">
          <div className="feature-item">
            <img
              src="/assets/pet-food1.svg"
              alt="Made Fresh"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Made Fresh</h3>
              <p>
                We prioritize maintaining the integrity of whole foods and
                nutrition.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="/assets/vet1.svg"
              alt="Vet Developed"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Vet Developed</h3>
              <p>
                We raise the bar for dog nutrition, surpassing industry
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-cta">
        <button
          className={`cta-button${isHovered ? ' hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          Get your dog's healthy meal today!
        </button>

        <div className="guarantee-row">
          <div className="guarantee-info">
            <img
              src="/assets/guarantee.svg"
              alt="Guarantee"
              className="guarantee-icon"
            />
            <span className="guarantee-text">30-day money back guarantee</span>
          </div>
          <div className="payment-icons">
            <img src="/assets/paypal.svg" alt="PayPal" />
            <img src="/assets/visa.svg" alt="Visa" />
            <img src="/assets/mastercard.svg" alt="Mastercard" />
            <img src="/assets/applepay.svg" alt="Apple Pay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
