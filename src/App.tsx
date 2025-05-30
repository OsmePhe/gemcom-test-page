import { HeroSection } from './components/HeroSection/index';
import { NutritionStats } from './components/NutritionStats/index';
import { GutHealthSection } from './components/GutHealthSection/index';
import './App.scss';

function App() {
  return (
    <>
      <HeroSection />
      <NutritionStats />
      <GutHealthSection />
    </>
  );
}

export default App;
