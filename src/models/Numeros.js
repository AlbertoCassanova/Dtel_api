import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const Numeros = sequelize.define(
  'numeros',
  {
    numero: DataTypes.STRING,
    operador: DataTypes.STRING,
    fecha_consulta: DataTypes.STRING
  },
  {
      createdAt: false,
      updatedAt: false
  }
);

export default Numeros