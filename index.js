module.exports = {

    ext: '.nova',
    grammar: 'Nova.g4',

    logo: 'logo.svg',
    icon: 'icon.png',

    /**
     * @method transpiler
     * @param {String} code The code in this language
     * @param {Function} cb Callback function, with error and result
     *
     * A method to translate code in this given language
     * into valid, native JASS, which WC3 will recognize
     */
    transpiler: function(code, cb) {
        // TODO:
        cb(true, 'Unimplemented');
    },

    /**
     * @method pretty
     * @param {String} code The code in this language
     * @param {Function} cb Callback function, with error and result
     *
     * A method to "pretty print" or auto-format the given input
     * code. This method DOES NOT MODIFY the behavior of the code;
     * it only formats the code to follow a certain standard.
     *
     * E.g. one might require a space before the ( ) of a function call,
     * or spaces between commas of an argument list.
     */
    pretty: function(code, cb) {
        return cb(true 'Unimplemented');
    },

    /**
     * @method validate
     * @param {String} code The code in this language
     * @param {Function} cb Callback function, with error flag and array of errors
     *
     * A method to verify the validity of the given code in this language.
     * The first param on the callback is true if there are errors, and false otherwise.
     * The second param is an array, containing the errors or else it is empty.
     */
    validate: function(code, cb) {
        return cb(true 'Unimplemented');
    }

};
