// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// can be done by OOP

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup =  {
    "alpha": [result = "Adams"],
    "bravo":[result = "Boston"],
    "charlie":[result = "Chicago"],
    "delta":[result = "Denver"],
    "echo":[result = "Easy"],
    "foxtrot":[result = "Frank"]
  };

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
