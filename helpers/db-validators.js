
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`el rol ${rol} no esta registrado en la base de datos`)
    }
}

const emailExiste = async (correo = '') => {

    ///verificar si el correo existe
    const exiteEmail = await Usuario.findOne({ correo });
    if (exiteEmail) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
    }
}

const existeUsuarioPorId = async (id) => {

    ///verificar si el correo existe
    const existeUsuario = await Usuario.findById(id)
    if (!existeUsuario) {
        throw new Error(`El id no existe: ${id}`);
    }
}


module.exports = {
    esRoleValido,
    emailExiste,
    emailExiste,
    existeUsuarioPorId
}


