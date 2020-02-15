function username(username) {
  // Regex(a-z)
  // panjang 5-9
  const reg = /^[a-z]{5,9}$/;

  if (username.match(reg)) {
    return true;
  } else {
    return false;
  }
}

function password(password) {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9}$/;
  if (password.match(reg)) {
    return true;
  } else {
    return false;
  }
}

console.log("Username Check: ");
console.log(username("johnsmith")); //true
console.log(username("johns")); //true
console.log(username("alyashaf")); //true

console.log("================");

console.log(username("alya.shafa12345")); //false
console.log(username("JOHNSmith")); //false
console.log(username("_alyaaa")); //false
console.log(username("aly_1")); //false

console.log("\nPassword Check: ");
console.log(password("j0hn5m!th")); //true
console.log(password("rayh1emi!")); //true
console.log(password("aly@shaf4")); //true
console.log(password("sh4f@alya")); //true

console.log("=================");

console.log(password("shafaal4@123")); //false
console.log(password("johnsm!t12345")); //false
console.log(password("p@tternnn")); //false
console.log(password("p4tterrnn")); //false
console.log(password("p@tt3r")); //false
