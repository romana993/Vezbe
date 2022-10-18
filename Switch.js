// prvi zadatak
var dan="ponedeljak"
var result="123"
switch(dan) {
    
    case "ponedeljak":
    result="Danas je prvi dan u nedelji"
    break;

    case "utorak":
    result="Danas je drugi dan u nedelji"
    break;

    case "sreda":
    result="Danas je treci dan u nedelji";
    break;

    case "cetvrtak":
    result="Danas je cetvrti dan u nedelji";
    break;

    case "petak":
    result="Danas je peti dan u nedelji";
    break;

    case "subota":
    result="Danas je 6 dan u nedelji";
    break;

    default:
    result="Danas je nedelja"
    break;
}
console.log(result);

// 2 zadatak

var dan="1"
var result="123"
switch(dan) {
    
    case "1":
    result="Ponedeljak"
    break;

    case "2":
    result="Utorak"
    break;

    case "3":
    result="Sreda";
    break;

    case "4":
    result="Cetvrtak";
    break;

    case "5":
    result="Petak";
    break;

    case "6":
    result="Subota";
    break;

    case "7":
    result="Nedelja";
    break;

    default:
    result= "Input must be a number between 1 and 7"
    break;
}
console.log(result);

// 3 zadatak
var dan= "sreda"
result="123"
 
switch(dan) {

    case"ponedeljak":
    case"utorak":
    case "sreda":
    case "cetvrtak":
    case "petak":
     result="Danas je radni dan "
     break;

     case"subota":
     case "nedelja":
     result= "Danas je vikend"
     break;

     default:
        result="Input must be number between 1 and 7"
        brake;
}
console.log(result)

// 4. zadatak
var dan="1"
var result="123"
switch(dan) {
    
    case "1":
    result="Januar"
    break;

    case "2":
    result="Februar"
    break;

    case "3":
    result="Mart";
    break;

    case "4":
    result="April";
    break;

    case "5":
    result="Maj";
    break;

    case "6":
    result="Jun";
    break;

    case "7":
    result="Jul";
    break;

    case "8":
    result="Avgust";
    break;

    case "9":
    result="Septembar";
    break;

    case "10":
    result="Oktobar";
    break;

    case "11":
    result="Novembar";
    break;

    case "12":
    result="Decembar";
    break;


    default:
    result= "Ulaz mora biti broj između 1 i 12"
    break;
}
console.log(result);

// 5 zadatak
var mesec= "maj"
result="123"

switch(mesec) {

    case"mart":
    case"april":
    case "maj":
     result="Prolece "
     break;

     case"jun":
    case"jul":
    case "avgust":
     result="Leto "
     break;

     case"septembar":
    case"oktobar":
    case "novembar":
     result="Jesen "
     break;

     case"decembar":
    case"januar":
    case "februar":
     result="Zima "
     break;

     default:
        result= "Input must be number between 1 and 12."
        break;
    }
        console.log (result);

// 6.zadatak 

var ocena= "B"
var result="123"
switch(ocena)
{
    case "A":
        result="Good job"
        break;
        case "B":
            result="Pretty good"
            break;
            case "C":
                result="Passed"
                break;
                case "D":
                    result="Not so good"
                    break;
                    case"F":
                    result="Failed"
                    break;
                    default:
                        result="Unknown grede"
                        break; 
}
                        console.log (result)
                
// 7 zadatak
var city = "Novi Sad"
var result = ""

switch (city) 
{
    case "Beograd":
    case "Novi Sad":
    case "Nis":   
    case "Kragujevac":    
        result = "This city belongs to Serbia"
        break;

    case "Berlin":
    case "Hamburg":
        result = "This city belongs to Germany"
        break;

    case "Rome":
    case "Milan":
        result = "This city belongs to Italia"
        break;

    case "Geneva":
    case "Lucerne":
    case "Bern":
        result = "This city belongs to Switzerland"
        break;

    case "Vienna":
    case "Linz":
    case "Vilach":   
    case "Baden bei Wien":    
         result = "This city belongs to Austria"
         break;

    default:
        result ="Please choose a different city"
        break;
}

console.log(result)

// 8.zadatak

num1 = 6
num2 = 3
operation = "-"

switch (operation) {
    case "+":
        result = num1+num2
        break;

    case "-":
        result = num1-num2
        break;
    case "/":
        result = num1-num2
        break;  
        
    case "*":
        result = num1-num2
        break;

    case num1 = 0:
    case num2 = 0:
            result = "Please choose a different number, not 0"
            break;  


}
console.log(result)

        





