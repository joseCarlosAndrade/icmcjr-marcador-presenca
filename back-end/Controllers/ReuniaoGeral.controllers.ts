import { Request, Response } from 'express';
import ReuniaoGeral from '../Models/ReuniaoGeral.models';

async function createReuniao(req: Request, res: Response): Promise<void> {
  try {
    const reuniao = await ReuniaoGeral.create(req.body);
    res.status(201).json(reuniao);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getReunioes(req: Request, res: Response): Promise<void> {
  try {
    const reunioes = await ReuniaoGeral.findAll();
    res.status(200).json(reunioes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getReuniaoById(req: Request, res: Response): Promise<void> {
  try {
    const reuniao = await ReuniaoGeral.findByPk(req.params.id);
    if (reuniao) {
      res.status(200).json(reuniao);
    } else {
      res.status(404).json({ message: 'Reunião não encontrada' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function updateReuniao(req: Request, res: Response): Promise<void> {
  try {
    const [updated] = await ReuniaoGeral.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedReuniao = await ReuniaoGeral.findByPk(req.params.id);
      res.status(200).json(updatedReuniao);
    } else {
      res.status(404).json({ message: 'Reunião não encontrada' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteReuniao(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await ReuniaoGeral.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Reunião não encontrada' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export default { getReunioes, getReuniaoById, createReuniao, deleteReuniao, updateReuniao };

