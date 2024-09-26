import { Request, Response } from 'express';
import Membro from '../Models/Membro.models';
import ReuniaoGeral from '../Models/ReuniaoGeral.models'; 
import ReuniaoFaltaMembro from '../Models/ReuniaoFaltaMembro.models';
import Falta from '../Models/Falta.models';

interface JustificativaResponse {
    nome: string;
}

// Buscar o nome de todos os membros com justificativas da última reunião
async function getMembrosComJustificativa(req: Request, res: Response): Promise<Response> {
    try {
        // Buscar a última reunião
        const ultimaReuniao = await ReuniaoGeral.findOne({
            order: [['data', 'DESC']], // Ordena as reuniões pela data, da mais recente para a mais antiga
        });
       

        if (!ultimaReuniao) {
            return res.status(404).json({ message: 'Nenhuma reunião encontrada.' });
        }
        
        // Buscar todos os membros que enviaram justificativa para a última reunião
        const membrosComJustificativa = await ReuniaoFaltaMembro.findAll({
            where: {
                id_reuniao: ultimaReuniao.dataValues.id,
                '$Faltum.status_justificativa$': true, // Ajuste para o seu caso (certifique-se que a relação com o status esteja correta)
            },
            include: [
                {
                    model: Membro,
                    attributes: ['nome'], // Seleciona apenas o nome do membro
                },
                {
                    model: Falta, // Inclui o modelo Falta
                    attributes: ['status_justificativa'], // Certifica-se de incluir esse campo
                    as: 'Faltum', // Caso o alias gerado pelo Sequelize seja esse
                },
            ],
        });

        if (!membrosComJustificativa.length) {
            return res.status(404).json({ message: 'Nenhum membro enviou justificativa para a última reunião.' });
        }

        // Retorna a lista de membros com justificativa
        const response: JustificativaResponse[] = membrosComJustificativa.map(item => ({
            nome: (item as any).membro.nome, // Forçando tipo para evitar erros de tipagem do Sequelize
        }));

        return res.json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar os membros com justificativas.', error });
    }
}

export default getMembrosComJustificativa;