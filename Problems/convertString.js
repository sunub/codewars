const example = "the-stealth-warrior";

function toCamelCase(str) {
  const regexp = /[-_]\w/g;

  return str.replace(regexp, (match) => {
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase(example));
