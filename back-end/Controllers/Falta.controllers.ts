import { Request, Response } from 'express';
import Falta from '../Models/Falta.models';

async function createFalta(req: Request, res: Response): Promise<void> {
  try {
    const falta = await Falta.create(req.body);
    res.status(201).json(falta);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getFaltas(req: Request, res: Response): Promise<void> {
  try {
    const faltas = await Falta.findAll();
    res.status(200).json(faltas);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getFaltaById(req: Request, res: Response): Promise<void> {
  try {
    const falta = await Falta.findByPk(req.params.id);
    if (falta) {
      res.status(200).json(falta);
    } else {
      res.status(404).json({ message: 'Falta não encontrada' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function updateFalta(req: Request, res: Response): Promise<void> {
  try {
    const [updated] = await Falta.update(req.body, {
      where: { id_justificativa: req.params.id_justificativa }
    });
    if (updated) {
      const updatedFalta = await Falta.findByPk(req.params.id_justificativa);
      res.status(200).json(updatedFalta);
    } else {
      res.status(404).json({ message: 'Falta não encontrada' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteFalta(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await Falta.destroy({ where: { id_justificativa: req.params.id_justificativa } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Falta não encontrada' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export default { getFaltas, getFaltaById, createFalta, deleteFalta, updateFalta };
