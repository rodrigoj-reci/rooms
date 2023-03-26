import './App.css';
import CarouselFloors from './components/CarouselFloors';
import { floorPlans } from './utils/constants';

const App = () => {
  return (
    <div className="App">
      <CarouselFloors floorPlans={floorPlans} />
    </div>
  );
};

export default App;
