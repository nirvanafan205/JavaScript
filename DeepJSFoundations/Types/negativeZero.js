var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); //"0"
trendRate === 0; //true
trendRate < 0; //false
trendRate > 0; //false

Object.is(trendRate, -0); //true
Object.is(trendRate, 0); //false

Math.sign(-3); //-1
Math.sign(3); //1
Math.sign(-0); //-0
Math.sign(0); //0

//fix Math.sign(...)

function sigh(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); //-1
sign(3); //1
sign(-0); //-1
sign(0); //1
