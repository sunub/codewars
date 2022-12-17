const input = 42145;

function descendingOrder(n) {
  const result = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(result);
}

descendingOrder(input);
