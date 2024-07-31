import CardPorcentagemPresenca from "src/components/CardPorcentagemPresenca/CardPorcentagemPresenca"
import './PresencaIndividual.css'

function PresencaIndividual(){

    return(
        <div className="Presenca-individual">

            <div className="Presenca-individual-dados">
                <div className="Presenca-individual-dados-titulo">
                    <h3>Presenças:</h3>
                </div>
                <div className="Presenca-individual-dados-card">
                    <CardPorcentagemPresenca
                        porcentagem={100}
                        presenca={9}
                        falta={0}
                    />
                </div>
                
            </div>
            
        </div>
    )

}

export default PresencaIndividual