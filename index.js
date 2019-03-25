function produceDrivingRange(range) {
  return function(pos1, pos2) {
    let block1 = pos1.splice(2,2);
    let block2 = pos2.splice(2,2);
    let distance = pos2-pos1;
    let result = 0;
    console.log('range is' + range);
    if (distance <= range) {
      result = ('within range by ' + (distance - range));
    } else {
      result = ((distance - range) + 'blocks out of range');
    }
    console.log(result);
    return result;
  };
}
