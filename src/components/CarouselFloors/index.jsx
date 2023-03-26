import PropTypes from 'prop-types';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import FloorPlanColorized from '../FloorPlanColorized';
import OriginalFloorPlan from '..//OriginalFloorPlan';
import { randomId } from '../../utils/helpers';

const CarouselFloors = ({ floorPlans }) => {
  return (
    <Carousel className="Carousel">
      {floorPlans.map((flPlan, index) => (
        <Carousel.Item key={index} className="CarouselItem">
          <div className="ItemContainer">
            <OriginalFloorPlan key={randomId()} floorPlan={flPlan} />
            <FloorPlanColorized key={randomId()} planToColorized={flPlan} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

CarouselFloors.propTypes = {
  floorPlans: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarouselFloors;
