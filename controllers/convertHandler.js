/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function (input) {
    var result = input.split(/[a-zA-Z](.+)/)[0];

    try {
      result = eval(result);
    } catch (ex) {
      return 'invalid number';
    }

    if (!result) {
      return 1;
    }

    return result;
  };

  this.getUnit = function (input) {
    var result = /[a-zA-Z](.+)/.exec(input)[0];
    var validUnits = ['gal', 'l', 'lbs', 'kg', 'km', 'mi'];

    result = validUnits.filter(x => x == result)[0];

    if (!result) {
      return 'invalid unit';
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    switch (initUnit) {
      case 'gal':
        result = 'l'
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;
    unit = unit.toLowerCase();
    switch (unit) {
      case 'gal':
        result = 'gallons'
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'mi':
        result = 'miles';
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
      case 'mi':
        result = initNum * miToKm;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
