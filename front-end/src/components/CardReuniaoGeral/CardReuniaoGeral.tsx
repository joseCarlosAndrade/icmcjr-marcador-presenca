import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CardReuniaoGeral.css'
import CardMembrosJustificativas from '../CardMembrosJustificativas/CardMembrosJustificativas';
import CardMembrosPresencas from '../CardMembrosPresencas/CardMembrosPresencas';

function CardReuniaoGeral(){

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [isPresenca, setIsPresenca] = useState(false);
    const [isJustificativa, setIsJustificativa] = useState(false);

    const dataPresenca = [
        {id: 1, data: "10/07/2024", hora: "13h"},
        {id: 2, data: "03/06/2024", hora: "13h"},
        {id: 3, data: "26/06/2024", hora: "13h"},
        {id: 4, data: "19/06/2024", hora: "13h"},
        {id: 5, data: "12/06/2024", hora: "13h"},
        {id: 6, data: "5/06/2024", hora: "13h"},
        {id: 7, data: "29/05/2024", hora: "13h"},
        {id: 8, data: "22/05/2024", hora: "13h"},
        {id: 9, data: "15/05/2024", hora: "13h"},
        {id: 10, data: "1/05/2024", hora: "13h"},
        {id: 11, data: "24/05/2024", hora: "13h"},
        {id: 12, data: "17/05/2024", hora: "13h"},
    ]

    const dataJustificativa = [
        {nome: "Camila Donda Ronchi"},
        {nome: "Carlos Neto"},
        {nome: "Felipe Carvalho"},
        {nome: "Felipe Coqueiro"},
        {nome: "Gabriel Sousa Santos de Almeida"},
        {nome: "Lucas Piovani Ferreira"},
        {nome: "Luís Henrique Giorgetti Dantas"},
        {nome: "Marina Figueiredo"},
    ]

    function openControllerCard(){
        return setIsOpen(!isOpen);
    }

    function openPresenca(){
        if(location.pathname === '/presenca')
            return setIsPresenca(true);
        else
            return setIsPresenca(false);
    }

    function openJustificativa(){
        if(location.pathname === '/justificativa'){
            return setIsJustificativa(true);
        }   
        else
            return setIsJustificativa(false);
    }

    function handleCardClick(){
        openControllerCard();
        openPresenca();
        openJustificativa();
    }

    return(
        <>
            <div className='Card-reuniao-geral' onClick={handleCardClick}> 
                <h4>Reunião Geral </h4>
                <i className="fa-solid fa-angles-down" ></i>
            </div>
            {isOpen && isJustificativa &&(
                <div className='Card-expansivo-reuniao-geral'>
                    {dataJustificativa.map((item) => (
                        <CardMembrosJustificativas key={item.nome} nome={item.nome} />
                    ))}
                </div>
            )}
            {isOpen && isPresenca &&(
                <div className='Card-expansivo-reuniao-geral'>
                    {dataPresenca.map((item) => (
                       <CardMembrosPresencas key={item.id} data={item.data} hora={item.hora}/> 
                    ))}
                </div>
            )}
        </>
    )
}

export default CardReuniaoGeral