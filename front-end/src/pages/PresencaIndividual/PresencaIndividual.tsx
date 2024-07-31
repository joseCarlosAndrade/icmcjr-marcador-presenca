import CardPorcentagemPresenca from "src/components/CardPorcentagemPresenca/CardPorcentagemPresenca"
import './PresencaIndividual.css'
import { useLocation } from 'react-router-dom';
import CardFotoUsuario from "src/components/CardFotoUsuario/CardFotoUsuario"


function PresencaIndividual(){

    const location = useLocation();
    const mensagem = location.state?.mensagem || "";

    return(
        <div className="Presenca-individual">

            <div className="Presenca-individual-dados">
                <CardFotoUsuario
                    nome={"Lucas Piovani Ferreira"}
                    cargo={"Membro"}
                />
                <div className="Presenca-individual-dados-titulo">
                    <h2>Presenças:</h2>
                </div>
                <div className="Presenca-individual-dados-card">
                    <CardPorcentagemPresenca
                        porcentagem={100}
                        presenca={9}
                        falta={0}
                    />
                </div>
                <div className="Presenca-individual-mensagem">
                    <h5>{mensagem}</h5>
                </div>
                
            </div>
            
        </div>
    )

}

export default PresencaIndividual