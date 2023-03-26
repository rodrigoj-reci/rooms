import PropTypes from 'prop-types';
import './styles.css';
import { GiBrickWall, GiDoor } from 'react-icons/gi';
import { isAcolor } from '../../utils/helpers';

const Cell = ({ cell, isOriginalFloorPlan }) => {
  if (isOriginalFloorPlan) {
    return (
      <div className="Cell" style={{ color: 'white' }}>
        {cell}
      </div>
    );
  } else {
    if (isAcolor(cell)) {
      return <div className="Cell" style={{ backgroundColor: `#${cell}` }}></div>;
    } else if (cell === '#') {
      return <GiBrickWall className="Cell" style={{ color: 'red' }} />;
    } else {
      return <GiDoor className="Cell" style={{ color: 'brown' }} />;
    }
  }
};

Cell.propTypes = {
  cell: PropTypes.string.isRequired,
  isOriginalFloorPlan: PropTypes.bool,
};

Cell.defaultProps = {
  isOriginalFloorPlan: false,
};

export default Cell;
