import PropTypes from 'prop-types';
import './styles.css';
import { getPlanWithRooms } from '../../utils/helpers';
import Cell from '../Cell';

const FloorPlanColorized = ({ planToColorized }) => (
  <div>
    {getPlanWithRooms(planToColorized).map((row, rowIndex) => (
      <div key={rowIndex} className="ColorizedRowContainer">
        {row.map((cell, cellIndex) => (
          <Cell key={cellIndex} cell={cell} />
        ))}
      </div>
    ))}
  </div>
);

FloorPlanColorized.propTypes = {
  planToColorized: PropTypes.string.isRequired,
};

export default FloorPlanColorized;
