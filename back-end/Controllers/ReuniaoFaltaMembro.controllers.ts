import { Request, Response } from 'express';
import ReuniaoFaltaMembro from '../Models/ReuniaoFaltaMembro.models';
import ReuniaoGeral from '../Models/ReuniaoGeral.models';
import Falta from '../Models/Falta.models';
import Membro from '../Models/Membro.models';

async function inserirReuniaoFaltaMembro (req: Request, res: Response) : Promise<void> {
  try {
    const { reuniaoId, faltaId, membroId } = req.body;

    // Verifica se a Reunião, Falta e Membro existem antes de inserir
    const reuniao = await ReuniaoGeral.findByPk(reuniaoId);
    const falta = await Falta.findByPk(faltaId);
    const membro = await Membro.findByPk(membroId);

    if (!reuniao || !falta || !membro) {
      res.status(404).json({ message: 'Reunião, Falta ou Membro não encontrado!' });
    }
    else{
      // Insere na tabela intermediária
      const novoRegistro = await ReuniaoFaltaMembro.create({
        reuniaoId,
        faltaId,
        membroId,
      });

      res.status(201).json(novoRegistro);
    }
  } catch (error) {
    console.error('Erro ao inserir registro na tabela intermediária:', error);
    res.status(500).json({ message: 'Erro ao inserir o registro.' });
  }
};

export default inserirReuniaoFaltaMembro