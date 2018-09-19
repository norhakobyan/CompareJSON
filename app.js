let str1 = JSON.stringify({
  "a": {"c": 4}, "b": 3
});
let str2 = JSON.stringify({
  "a": {"c": 5}, "b": {"d": 4}
});
function compareJSON(str1, str2){
  let res1 = JSON.parse(str1);
  let res2 = JSON.parse(str2);
  let count = 0;
  if(typeof res1.a == "object" && typeof res2.a == "object") {
    if(JSON.stringify(res1.a) != JSON.stringify(res2.a)) {
      console.log("Difference " + "\n" + '"a": ' + JSON.stringify(res1.a) + "\n" + '"a": ' + JSON.stringify(res2.a));
    count++;
    }
  }else if(res1.a != res2.a) {
    console.log("Difference " + "\n" + '"a": ' + JSON.stringify(res1.a) + "\n" + '"a": ' + JSON.stringify(res2.a));
    count++;
  }
  if(typeof res1.b == "object" && typeof res2.b == "object") {
    if(JSON.stringify(res1.b) != JSON.stringify(res2.b)) {
      console.log("Difference " + "\n" + '"b": ' + JSON.stringify(res1.b) + "\n" + '"b": ' + JSON.stringify(res2.b));
      count++;
    }
  }else if(res1.b != res2.b) {
    console.log("Difference " + "\n" + '"b": ' + JSON.stringify(res1.b) + "\n" + '"b": ' + JSON.stringify(res2.b));
    count++;
  }
  if(0 == count) {
    console.log("Did not find a difference");
    return
  }
}

compareJSON(str1, str2);
