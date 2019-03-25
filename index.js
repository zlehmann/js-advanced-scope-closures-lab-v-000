function produceDrivingRange(range) {
  console.log('is this working at all');
  return function(pos1, pos2) {
    console.log('inside inner function');
    let block1 = pos1.splice(2,2);
    let block2 = pos2.splice(2,2);
    let distance = block2-block1;
    let result = 0;
    console.log(distance);
    if (distance <= range) {
      result = ('within range by ' + (distance - range));
    } else {
      result = ((distance - range) + 'blocks out of range');
    }
    console.log(result);
    return result;
  };
}
