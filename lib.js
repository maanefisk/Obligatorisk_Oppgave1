


//logger informasjonen på onchange
function loginput() {
console.log(textbox.value);
  }
  

// Skjekker alle sammen
function isDateValid(dato) {
    return isLengthTenDigitsLong(dato) &&
    doesItContainDots(dato) &&
    isYearNumberValid(dato) &&
    isItAValidMonth(dato) &&
    isItAValidDay(dato);
  }
  
  // skjekker lengden
  function isLengthTenDigitsLong(dato) {
    return dato.length == 10
    }
  
    // skjekker punktum
  function doesItContainDots(dato) {
    return dato[2]=='.' && dato[5] == '.';
    }
  
    // skjekker året
  function isYearNumberValid(dato) {
  var year = dato.substring(6);
  return year.length === 4 && year >= '0000' && year <= '9999'
  }
  
  // skjekker måneden
  function isItAValidMonth(dato) {
    var month = dato.substring(3,5);
    return month.length === 2 && month >= '01' && month <= '12'
  }
  
  // Gyldig dag er 1 - 28, men;
// 29 er lov for februar dersom det skulle være skuddår
// 30 er lov for alle måneder utenom februar
// 31 er lovlig for januar, mars, mai, juli, august, oktober og desember

  // skjekker dagsdatoen + gyldighet
  function isItAValidDay(dato) {
    var day = dato.substring(0,2);
    var month = dato.substring(3,5);
    var year = dato.substring(6,10);
    var isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    var isFebruary = month == '02';
    var isMonthshort = month == '04' || month == '06' || month == '09' || month == '11';
    console.log(isLeapYear,day,month,year);
    return day >= '01' && day <= '28' ||
    day == '29' && ( !isFebruary || isLeapYear ) ||
    day == '30' && ( !isFebruary ) ||
    day == '31' && !isFebruary && !isMonthshort;
      }
// Skjekker bare om det er skuddår
  function isitleapyear(dato) {
    var year = dato.substring(6,10);
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

 
