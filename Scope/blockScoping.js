var teacher = "Kyle";

//block scoping encapsulation
{
  let teacher = "Suzy"; //let allows it to be changed
  console.log(teacher);
}

console.log(teacher); //Kyle

function diff(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }

  return y - x;
}

//block scoping: let + var
function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

//explicit let block
function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }

  if (/^FOO:/.test(str)) {
    return str;
  }

  return str.slice(4);
}
