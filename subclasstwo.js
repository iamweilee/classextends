
const BaseClass = require('./baseclasstwo');

class SubClass extends BaseClass {
    // constructor(...args) {
    //     super(...args);
    //     console.log('SubClass constructor of es6.');
    // }

    func() {
        //super.func(...arguments);
        console.log('SubClass.prototype.func of es6. value: %s', this.value);
    }
}

module.exports = SubClass;