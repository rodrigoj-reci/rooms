import PropTypes from 'prop-types';
import './styles.css';
import Cell from '../Cell';

const OriginalFloorPlan = ({ floorPlan }) => {
  return (
    <div>
      {floorPlan.split('\n').map((row, rowIndex) => (
        <div key={rowIndex} className="OriginalRowContainer">
          {row.split('').map((cell, cellIndex) => (
            <Cell key={cellIndex} cell={cell} isOriginalFloorPlan />
          ))}
        </div>
      ))}
    </div>
  );
};

OriginalFloorPlan.propTypes = {
  floorPlan: PropTypes.string.isRequired,
};

export default OriginalFloorPlan;
