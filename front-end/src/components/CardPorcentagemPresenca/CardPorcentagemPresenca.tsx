import './CardPorcentagemPresenca.css'

interface CardPorcentagemPresencaProps{
    porcentagem: number;
    presenca: number;
    falta: number;
}

const CardPorcentagemPresenca: React.FC<CardPorcentagemPresencaProps> = ({porcentagem, presenca, falta}) => {

    const borda = porcentagem < 50 ? 'Card-baixa' : 'Card-alta';
    const circulo = porcentagem < 50 ? 'Porcentagem-baixa' : 'Porcentagem-alta';

    return(

        <div className={`Card-porcentagem-presenca ${borda}`}>
            <div className='Card-porcentagem-presenca-titulo'>
                <h3>Reunião Geral:</h3>
            </div>
            <div className='Card-porcentagem-presenca-dados'>
                <div className={`Card-porcentagem-presenca-circulo ${circulo}`}>
                    <h2>{porcentagem}%</h2>
                </div>
                <div className='Card-porcentagem-presenca-numeros'>
                    <h3>{presenca} presenças</h3>
                    <h3>{falta} faltas</h3>
                </div>
            </div>
        </div>
    )

}

export default CardPorcentagemPresenca