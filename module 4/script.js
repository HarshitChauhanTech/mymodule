

var names = new Array();
names[0] = "Harshit";
names[1] = "Kavita";
names[2] = "jonny";
names[3] = "jack";
names[4] = "Jason";
names[5] = "Aditya";
names[6] = "Tanuj";
names[7] = "larry";
names[8] = "Messy";
names[9] = "msdhoni";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
