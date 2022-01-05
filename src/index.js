module.exports = function toReadable(number) {
    if (number === 0)
        return "zero";

    function unit(number) {
        let digit = number;
        if (number > 19) {
            digit = (number / 10 - Math.floor(number / 10)) * 10;
            digit = Math.round(digit);
        }
        switch (digit) {
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
            default:
                return "";
                break;
        }
    }

    function fromTenToTwenty(number) {
        let digit = number - Math.floor(number / 100) * 100;
        digit = Math.round(digit);
        switch (digit) {
            case 10:
                return "ten";
                break;
            case 11:
                return "eleven";
                break;
            case 12:
                return "twelve";
                break;
            case 13:
                return "thirteen";
                break;
            case 14:
                return "fourteen";
                break;
            case 15:
                return "fifteen";
                break;
            case 16:
                return "sixteen";
                break;
            case 17:
                return "seventeen";
                break;
            case 18:
                return "eighteen";
                break;
            case 19:
                return "nineteen";
                break;
            default:
                return "";
                break;
        }
    }

    function tens(number) {
        let digit;
        if (number < 100) {
            digit = number - (number / 10 - Math.floor(number / 10)) * 10;
        }
        else {
            digit = number - (Math.floor(number / 100)) * 100 - (number / 10 - Math.floor(number / 10)) * 10;
        }
        digit = Math.round(digit);
        switch (digit) {
            case 20:
                return "twenty";
                break;
            case 30:
                return "thirty";
                break;
            case 40:
                return "forty";
                break;
            case 50:
                return "fifty";
                break;
            case 60:
                return "sixty";
                break;
            case 70:
                return "seventy";
                break;
            case 80:
                return "eighty";
                break;
            case 90:
                return "ninety";
                break;
            default:
                return "";
                break;
        }
    }

    function hundreds(number) {
        let digit = number - (number / 100 - Math.floor(number / 100)) * 100;
        digit = Math.round(digit);
        switch (digit) {
            case 100:
                return "one hundred";
                break;
            case 200:
                return "two hundred";
                break;
            case 300:
                return "three hundred";
                break;
            case 400:
                return "four hundred";
                break;
            case 500:
                return "five hundred";
                break;
            case 600:
                return "six hundred";
                break;
            case 700:
                return "seven hundred";
                break;
            case 800:
                return "eight hundred";
                break;
            case 900:
                return "nine hundred";
                break;
        }
    }

    if (number < 10)
        return unit(number);
    if (number >= 10 && number < 20)
        return fromTenToTwenty(number);
    if (number >= 20 && number < 100 && unit(number) != "")
        return tens(number) + " " + unit(number);
    if(number >= 20 && number < 100 && unit(number) === "")
        return tens(number);    
    if (number >= 100 && fromTenToTwenty(number) != "")
        return hundreds(number) + " " + fromTenToTwenty(number);
    else if (number >= 100 && unit(number) === "" && tens(number) === "") 
        return hundreds(number);
    else if (number >= 100 && tens(number) === "")
        return hundreds(number) + " " + unit(number);
    else if (number >= 100 && unit(number) === "")
        return hundreds(number) + " " + tens(number);
    else 
        return hundreds(number) + " " + tens(number) + " " + unit(number);          
                  
}