

//function loginput() {
//    console.log(textbox.value)
//    console.log(str.length)
//    console.log(str.length)
//    console.log(str.length)
//  }

function allchecked(assert) {
  return checklength(assert) &&
  checkdots(assert) &&
  checkyear(assert);
}

function checklength(assert) {
  var str = textbox.value;
  if (str.length == 10) {
    return true;
  }
  }

function checkdots(assert) {
  var str = textbox.value;
  var dotdot = str.substring(2,3) + str.substring(5,6);
  if (dotdot = "..") {
    return true;
  }
  }

function checkyear(assert) {
var str = textbox.value;
var year = str.substring(6,10);
console.log(year);
if (year.length === 4 && year >= '0000' && year <= '9999') {
  return true;
}
}

function checkmonth(assert) {
  var mon = textbox.value;
  var month = mon.substring(3,5);
  console.log(month);
  if (month.length === 2 && month >= '01' && month <= '12') {
    return true;
  }
  }
  
  function checkday(assert) {
    var da = textbox.value;
    var day = da.substring(0,2);
    console.log(day);
    if (day.length === 2 && day >= '01' && day <= '28') {
      return true;
    }
    }