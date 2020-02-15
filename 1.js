//Tampil profile dalam bentuk JSOn
function profile(name, age) {
  let data = {
    name: name,
    age: age,
    address: "Karang Kemiri 1/1",
    hobbies: ["Game", "Futsal"],
    is_married: false,
    list_school: [
      {
        name: "SMP N 4 Purwokerto",
        year_in: "2014",
        year_out: "2017",
        major: null
      },
      {
        name: "SMK N 1 Purwokerto",
        year_in: "2017",
        year_out: "2020",
        major: "RPL"
      }
    ],
    skills: [
      {
        skill_name: "Gaming",
        level: "beginer"
      },
      {
        skill_name: "Web Programming",
        level: "beginer"
      },
      {
        skill_name: "Java Script",
        level: "beginer"
      },
      {
        skill_name: "UI/UX Design",
        level: "beginner"
      }
    ],
    interes_in_coding: true
  };
  return data;
  // let string = JSON.stringify(data);
  // console.log(JSON.parse(string));
}

console.log("Profile: ", profile("Rayhan Emillul", 17));

//   profile("Rayhan", 17);
