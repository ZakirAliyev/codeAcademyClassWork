let month = String.prototype.toLowerCase(window.prompt("Enter month: "));

switch (month) {
    case 'december':
    case 'january':
    case 'febuary':
        console.log("Winter");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("Spring");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("Summer");
        break;
    case 'september':
    case 'october':
    case 'november':
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month name:");
        break;
}