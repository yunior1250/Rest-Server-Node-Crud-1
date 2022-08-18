

const { Schema, model } = require('mongoose');

const RoleSvhema = Schema({
    rol: {
        type: String,
        required: [true, 'Es rol es obligatorio']
    }

});

module.exports = model('Role', RoleSvhema);
