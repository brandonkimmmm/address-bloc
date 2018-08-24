const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose from an option below: ',
        choices: [
          'Add new contact',
          'Get the date',
          'Exit'
        ]
      }
    ];
    this.dateQuestions = [
      {
        type: 'list',
        name: 'dayAndTimeChoice',
        message: 'Would you like to know the day and time? ',
        choices: [
          'Yes',
          'No'
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log('Welcome to AddressBloc!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case 'Add new contact':
          this.addContact();
          break;
        case 'Get the date':
          this.getDate();
          break;
        case 'Exit':
          this.exit();
        default:
          console.log('Invalid input');
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  clear(){
    console.log('\x1Bc');
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate(){
    let date = new Date();
    let dateArray = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear();
    inquirer.prompt(this.dateQuestions).then((response) => {
      switch(response.dayAndTimeChoice){
        case 'Yes':
          let day = date.getDay();
          switch(day){
            case 0:
              day = 'Sunday';
              break;
            case 1:
              day = 'Monday';
              break;
            case 2:
              day = 'Tuesday';
              break;
            case 3:
              day = 'Wednesday';
              break;
            case 4:
              day = 'Thursday';
              break;
            case 5:
              day = 'Friday';
              break;
            case 6:
              day = 'Saturday'
              break;
          }
          let minutes = date.getMinutes();
          let time = date.getHours() + ':' + minutes + ':' + date.getSeconds();
          dateArray += ' ' + day + ' ' + time;
          this.clear();
          console.log(dateArray);
          this.main();
          break;
        case 'No':
          this.clear();
          console.log(dateArray);
          this.main();
          break;
      }
    })
  }

  exit(){
    console.log('Thanks for using AddressBloc!');
    process.exit();
  }
}
