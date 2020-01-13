const newBottles2 = function(bottleNum) {
  return Math.floor(bottleNum / 2);
};
const newBottles4 = function(bottleNum) {
  return Math.floor(bottleNum / 4);
};

const howManyBottles = function() {
  let initial = process.argv[2];
  let bottleCount  = Math.floor(initial / 2); //from initial money

  let fromRecycle = newBottles2(bottleCount) + newBottles4(bottleCount);
  let count2 = newBottles2(bottleCount);
  let count4 = newBottles4(bottleCount);
  let used2 = bottleCount - (bottleCount % 2);
  let used4 = bottleCount - (bottleCount % 4);
  bottleCount += fromRecycle;
  let toUse2 = bottleCount - used2;
  let toUse4 = bottleCount - used4;

  while (toUse2 > 1 || toUse4 > 3) {
    fromRecycle = newBottles2(toUse2) + newBottles4(toUse4);
    count2 += newBottles2(toUse2);
    count4 += newBottles4(toUse4);
    used2 = bottleCount - (bottleCount % 2);
    used4 = bottleCount - (bottleCount % 4);
    bottleCount += fromRecycle;
    toUse2 = bottleCount - used2;
    toUse4 = bottleCount - used4;
  }
  return `Total Bottles: ${bottleCount}, \n Remaining Bottles: ${toUse2}, \n Remaining Caps: ${toUse4}, \n Earned: \n Bottles: ${count2}, \n Caps: ${count4}`;
};
console.log(howManyBottles());