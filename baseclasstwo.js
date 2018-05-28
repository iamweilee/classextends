
class BaseClass {
    constructor(value) {
        this.value = value;
        console.log('BaseClass Constructor of es6. value: %s', this.value);
    }

    func() {
        console.log('BaseClass.prototype.func of es6.');
    }
}

module.exports = BaseClass;