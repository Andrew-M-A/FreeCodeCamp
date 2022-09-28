const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  }
  const score = par - strokes;

  if (score === 2 || score === 3) {
    return names[1];
  } else if (score === 1) {
    return names[2];
  } else if (score === 0) {
    return names[3];
  } else if (score === -1) {
    return names[4];
  } else if (score === -2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);
