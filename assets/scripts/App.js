var $ = require('jquery');

import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $150 in taxes.");
    }
}

var john = new Person("John Doe", "blue", 10);
john.greet();

var jane = new Adult("Jane Smith", "purple", 48);
jane.greet();
jane.payTaxes();

