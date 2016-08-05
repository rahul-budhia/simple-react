let knightPosition = [0,0];
let observer = null;
function emitChange() {
  observer && observer(knightPosition);
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}

export function canMoveKnight(toX, toY) {
  let [x, y] = knightPosition;
  let dx = Math.abs(x - toX);
  let dy = Math.abs(y - toY);

  if ((dx == 2 && dy ==1) || (dx == 1 && dy ==2)) {
    return true
  }
  else {
    return false;
  }
}

export function observe(o) {
    if (observer) {
      throw new Error("Multiple observers not implemented.")
    }

    observer = o;
    emitChange();
}
