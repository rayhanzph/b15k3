function countChar(str, strsearch) {
  for (let i = (count = 0); i < str.length; count += +(strsearch === str[i++]));
  if (count == 0) {
    console.log("Not Found!");
  } else {
    console.log(count);
  }
}

countChar("arka", "a");
countChar("javascript", "x");
