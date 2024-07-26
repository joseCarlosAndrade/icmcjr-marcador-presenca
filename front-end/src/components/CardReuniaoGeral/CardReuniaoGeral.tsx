import { useState } from 'react';

import './CardReuniaoGeral.css'
import CardMembrosJustificativas from '../CardMembrosJustificativas/CardMembrosJustificativas';

function CardReuniaoGeral(){

    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {nome: "Camila Donda Ronchi"},
        {nome: "Carlos Neto"},
        {nome: "Felipe Carvalho"},
        {nome: "Felipe Coqueiro"},
        {nome: "Gabriel Sousa Santos de Almeida"},
        {nome: "Lucas Piovani Ferreira"},
        {nome: "Luís Henrique Giorgetti Dantas"},
        {nome: "Marina Figueiredo"},
    ]

    function openControllerCard() {
        return setIsOpen(!isOpen);
    }

    return(
        <>
            <div className='Card-reuniao-geral' onClick={openControllerCard}> 
                <h4>Reunião Geral </h4>
                <i className="fa-solid fa-angles-down" ></i>
            </div>
            {isOpen && (
                <div className='Card-expansivo-reuniao-geral'>
                    {data.map((item) => (
                        <CardMembrosJustificativas nome={item.nome} />
                    ))}
                </div>
            )}
        </>
    )
}

export default CardReuniaoGeral