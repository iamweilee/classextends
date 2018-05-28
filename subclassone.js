
const BaseClass = require('./baseclassone');

class SubClass extends BaseClass {
    // constructor(...args) {
    //     super(...args);
    //     console.log('SubClass constructor of es5.');
    // }

    func() {
        super.func(...arguments);
        console.log('SubClass.prototype.func of es5.value: %s', this.value);
    }
}

module.exports = SubClass;