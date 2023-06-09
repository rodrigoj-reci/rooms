export const randomId = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export const isAcolor = (cell) => cell.length > 1;

const generateRandomColor = () => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const getPrevCellColor = (row, index) => row[index - 1]?.length > 1 && row[index - 1];
const getPrevRowColor = (prevRow, index) => prevRow[index]?.length > 1 && prevRow[index];

const isAdoor = (planToCheck, rowToCheck, cellToCheck) =>
  //first check if it is a door in the vertical axis
  (planToCheck[rowToCheck - 1][cellToCheck] === '#' &&
    planToCheck[rowToCheck + 1][cellToCheck] === '#') ||
  // then check if it is a door in the horizontal axis
  (planToCheck[rowToCheck][cellToCheck - 1] === '#' &&
    planToCheck[rowToCheck][cellToCheck + 1] === '#');

const isApotentialRoom = (rowToCheck, cellToCheck) => rowToCheck[cellToCheck] === ' ';

export const getPlanWithRooms = (planToUpdate) => {
  let newColor = generateRandomColor();
  const newPlan = planToUpdate.split('\n');

  for (let i = 0; i < newPlan.length; i++) {
    const currentRow = newPlan[i].split('');

    //check if there are two white spaces at least, if not continue with the next iteration
    if (!newPlan[i].includes('  ')) {
      newPlan[i] = currentRow;
      continue;
    }

    for (let x = 0; x < currentRow.length; x++) {
      // check if it has a chance to be a room
      if (isApotentialRoom(currentRow, x)) {
        const previousRow = newPlan[i - 1];
        //check if it a door in the vertical and horizontal axis
        if (isAdoor(newPlan, i, x)) {
          newColor = generateRandomColor();
        } else if (getPrevRowColor(previousRow, x) || getPrevCellColor(currentRow, x)) {
          // use the color of the previous row or the previous cell to continue painting with the same color
          currentRow[x] = getPrevRowColor(previousRow, x) || getPrevCellColor(currentRow, x);
        } else {
          // it is a new room
          currentRow[x] = newColor;
        }
      } else {
        // update the color if it is a wall
        newColor = generateRandomColor();
      }
    }

    newPlan[i] = currentRow;
  }
  return newPlan;
};
