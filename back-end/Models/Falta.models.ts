import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbconfig';

class Falta extends Model {}

Falta.init({
  id_justificativa: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  justificativas: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status_justificativa: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize: sequelize, timestamps: false, tableName: 'Falta'
});

// Verifica se a tabela "Falta" já não existe
(async () => {
  try {
      await Falta.sync();
      console.log('Tabela Falta verificada.');
  } catch (error) {
      console.error('Erro ao verificar a tabela Falta:', error);
  }
})();

export default Falta;