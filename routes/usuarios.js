
const { Router } = require('express');
const { check } = require('express-validator');

const { esRoleValido, emailExiste,existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch } = require('../controllers/usuarios');


const router = Router();

router.get('/',usuariosGet);

router.put('/:id',[
  check('id','No es un id valido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  check('rol').custom(esRoleValido),
  validarCampos
],usuariosPut);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password deve de ser mas de 6 letras ').isLength({ min: 6 }),
  check('correo', 'El correo no es valido ').isEmail(),
  check('correo').custom(emailExiste),

  //check('rol', 'No e sun rol valido o permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
  check('rol').custom(esRoleValido),
  validarCampos

], usuariosPost);

router.delete('/:id',[
  check('id','No es un id valido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos

], usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;










