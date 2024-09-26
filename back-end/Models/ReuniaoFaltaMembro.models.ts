import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbconfig';
import ReuniaoGeral from './ReuniaoGeral.models';
import Falta from './Falta.models';
import Membro from './Membro.models';

class ReuniaoFaltaMembro extends Model {}

ReuniaoFaltaMembro.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reuniaoId: {
    type: DataTypes.INTEGER,
    references: {
      model: ReuniaoGeral, // Tabela ReuniaoGeral
      key: 'id',
    },
    allowNull: false,
  },
  faltaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Falta, // Tabela Falta
      key: 'id_justificativa',
    },
    allowNull: false,
  },
  membroId: {
    type: DataTypes.INTEGER,
    references: {
      model: Membro, // Tabela Membro
      key: 'id', 
    },
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
});

// Reunião Geral tem muitos registros na tabela intermediária
ReuniaoFaltaMembro.belongsTo(Membro, { foreignKey: 'membroId' });
ReuniaoFaltaMembro.belongsTo(Falta, { foreignKey: 'faltaId', as: 'Faltum' });
ReuniaoFaltaMembro.belongsTo(ReuniaoGeral, { foreignKey: 'reuniaoId' });

// Modelo Membro
Membro.hasMany(ReuniaoFaltaMembro, { foreignKey: 'membroId' });

// Modelo Falta
Falta.hasMany(ReuniaoFaltaMembro, { foreignKey: 'faltaId' });

//Modelo Reuniao Geral
ReuniaoGeral.hasMany(ReuniaoFaltaMembro, { foreignKey: 'reuniaoId' });

// Sincronizar a tabela intermediária
(async () => {
  try {
    await ReuniaoFaltaMembro.sync();
    console.log('Tabela ReuniaoFaltaMembro verificada.');
  } catch (error) {
    console.error('Erro ao verificar a tabela ReuniaoFaltaMembro:', error);
  }
})();

export default ReuniaoFaltaMembro;