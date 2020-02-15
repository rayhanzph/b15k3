function validateColor(hex) {
  const reg = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (hex.match(reg)) {
    return true;
  } else {
    return false;
  }
}

console.log(validateColor("#eee"));
console.log(validateColor("#F3F3F3"));
console.log(validateColor("#ezff8d"));
