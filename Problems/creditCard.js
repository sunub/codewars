const input = "Nananananananananananananananana Batman!";

//my Answer

const current = (cc) => {
  if (cc.length < 4) {
    return cc;
  }

  let result = "";

  cc.split("").map((value, index) => {
    if (cc.length - index <= 4) {
      return (result += value);
    }
    return (result += "#");
  });
  return result;
};

//better Answer

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
