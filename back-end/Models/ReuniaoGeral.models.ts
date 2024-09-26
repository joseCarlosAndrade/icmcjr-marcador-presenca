import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbconfig';

class ReuniaoGeral extends Model {}

ReuniaoGeral.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false,
  },
}, {
  sequelize: sequelize, timestamps: false 
});

// Verifica se a tabela "ReuniaoGeral" já não existe
(async () => {
  try {
      await ReuniaoGeral.sync();
      console.log('Tabela ReuniaoGeral verificada.');
  } catch (error) {
      console.error('Erro ao verificar a tabela ReuniaoGeral:', error);
  }
})();

export default ReuniaoGeral;