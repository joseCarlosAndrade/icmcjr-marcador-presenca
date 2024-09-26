import express from "express";

const router = express.Router();

import membroController from '../Controllers/Membro.controllers';
import reuniaoGeralController from '../Controllers/ReuniaoGeral.controllers';
import faltaController from '../Controllers/Falta.controllers';
import getMembrosComJustificativa from "../Controllers/JustificativaMembros.controllers";

// Rotas para Membro
router.post('/membros', membroController.createMembro);
router.get('/membros', membroController.getMembros);
router.get('/membros/:id', membroController.getMembroById);
router.put('/membros/:id', membroController.updateMembro);
router.delete('/membros/:id', membroController.deleteMembro);

// Rotas para Reunião Geral
router.post('/reunioes', reuniaoGeralController.createReuniao);
router.get('/reunioes', reuniaoGeralController.getReunioes);
router.get('/reunioes/:id', reuniaoGeralController.getReuniaoById);
router.put('/reunioes/:id', reuniaoGeralController.updateReuniao);
router.delete('/reunioes/:id', reuniaoGeralController.deleteReuniao);

// Rotas para Falta
router.post('/faltas', faltaController.createFalta);
router.get('/faltas', faltaController.getFaltas);
router.get('/faltas/:id', faltaController.getFaltaById);
router.put('/faltas/:id_justificativa', faltaController.updateFalta);
router.delete('/faltas/:id_justificativa', faltaController.deleteFalta);


router.get('/justificativas/ultima-reuniao', getMembrosComJustificativa);

export default router;