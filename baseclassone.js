
function BaseClass(value) {
    this.value = value;
    console.log('BaseClass Constructor of es5. value: %s', this.value);
}

(function() {

    this.func = function() {
        console.log('BaseClass.prototype.func of es5.');
    };

}).call(BaseClass.prototype);

module.exports = BaseClass;