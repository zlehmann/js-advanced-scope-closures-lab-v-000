function produceDrivingRange(range) {
  console.log(range);
  return function(pos1, pos2) {
    console.log(pos1);
    console.log(pos2);
    let block1 = pos1.splice(2,2);
    let block2 = pos2.splice(2,2);
    console.log(block1);
    console.log(block2);
    return Math.abs(pos1-pos2);
  };
}
