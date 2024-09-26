import { Request, Response } from 'express';
import Membro from '../Models/Membro.models';

async function createMembro(req: Request, res: Response): Promise<void> {
  try {
    const membro = await Membro.create(req.body);
    res.status(201).json(membro);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getMembros(req: Request, res: Response): Promise<void> {
  try {
    const membros = await Membro.findAll();
    res.status(200).json(membros);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getMembroById(req: Request, res: Response): Promise<void> {
  try {
    const membro = await Membro.findByPk(req.params.id);
    if (membro) {
      res.status(200).json(membro);
    } else {
      res.status(404).json({ message: 'Membro não encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function updateMembro(req: Request, res: Response): Promise<void> {
  try {
    const [updated] = await Membro.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedMembro = await Membro.findByPk(req.params.id);
      res.status(200).json(updatedMembro);
    } else {
      res.status(404).json({ message: 'Membro não encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteMembro(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await Membro.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Membro não encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export default { getMembros, getMembroById, createMembro, deleteMembro, updateMembro };