import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbconfig';

class Membro extends Model {}

Membro.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status_cadastro: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize: sequelize, timestamps: false 
});

// Verifica se a tabela "Membro" já não existe
(async () => {
  try {
      await Membro.sync();
      console.log('Tabela Membro verificada.');
  } catch (error) {
      console.error('Erro ao verificar a tabela Membro:', error);
  }
})();

export default Membro;