function produceDrivingRange(range) {
  return function(pos1, pos2) {
    let block1 = pos1.slice(0,-2);
    let block2 = pos2.slice(0,-2);
    let distance = block2-block1;
    let result = 0;
    if (distance <= range) {
      result = ('within range by ' + Math.abs(distance - range));
    } else {
      result = ((distance - range) + ' blocks out of range');
    }
    return result;
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
