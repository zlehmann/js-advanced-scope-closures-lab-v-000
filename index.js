function produceDrivingRange(range) {
  return function(pos1, pos2) {
    console.log('range is ' + range);
    let block1 = pos1.slice(0,-2);
    let block2 = pos2.slice(0,-2);
    console.log('block1 is ' + block1);
    console.log('block2 is ' + block2);
    let distance = block2-block1;
    let result = 0;
    console.log('distance is ' + distance);
    if (distance <= range) {
      result = ('within range by ' + (distance - range));
    } else {
      result = ((distance - range) + ' blocks out of range');
    }
    console.log(result);
    console.log('======================================');
    return result;
  };
}
