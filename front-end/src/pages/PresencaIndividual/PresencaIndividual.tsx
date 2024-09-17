import CardPorcentagemPresenca from "src/components/CardPorcentagemPresenca/CardPorcentagemPresenca"
import './PresencaIndividual.css'
import { useLocation } from 'react-router-dom';
import { Header, Sidebar } from "src/components";


function PresencaIndividual(){

    const location = useLocation();
    const mensagem = location.state?.mensagem || "";

    return(
        <div className="Presenca-individual">
            <Sidebar></Sidebar>
            <Header
                    name={"Lucas Piovani Ferreira"}
                    jobTitle={"Membro"}></Header>

            <div className="Presenca-individual-dados">
                
                
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