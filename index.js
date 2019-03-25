function produceDrivingRange(range) {
  return function(pos1, pos2) {
    let block1 = pos1.splice(2,2);
    let block2 = pos2.splice(2,2);
    return Math.abs(pos1-pos2);
  };
}
