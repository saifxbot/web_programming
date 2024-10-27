function weekdayGreeting() {
    let weekday = new Date().getDay();
    let message ='';

switch(weekday) {
    case 0:
        message = 'Happy Sunday';
        break;
    case 1:
        message = 'Happy monday!';
        break;
    case 2:
        message = 'Go ahead'
        break;
    case 3:
        message = 'Have a wonderful Wednesday'
        break;
    case 4:
        message = 'Just do a bit!'
        break;
    case 5:
        message = 'Almost the weekend!!!'
        break;
    case 6:
        message = 'You nailed It!'
        break;
    default:
        message = 'Have a great day!'
}
alert(message);
}