
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio ']
    },

    correo: {
        type: String,
        required: [true, 'El corro es obligatori'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'La contrace;a es obligatoria']
    },

    img: {
        type: String
    },

    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    },
});

UsuarioSchema.methods.toJSON = function (){
    const {__v, password,...usuario} = this.toObject();
    return usuario;
}


module.exports = model('Usuario', UsuarioSchema);

//hotel 8 nos toca




