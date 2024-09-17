import { MenuIconSVG } from 'src/assets';
import './ConsultarReunioes.css';
import { useEffect, useState } from 'react';
import {CurrentMeeting, Divider, Sidebar} from 'src/components';

const MeetingsToCome = [
  {
    MeetingText : 'Reunião geral', // TODO: colocar sala??
    Date : '10/07/2024',
    Time: '13h00',
    Room: '3-012'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '17/07/2024',
    Time: '13h00',
    Room: '3-012'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '24/07/2024',
    Time: '13h00',
    Room: '3-012'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '31/07/2024',
    Time: '13h00',
    Room: '3-009'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '07/08/2024',
    Time: '13h00',
    Room: '3-012'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '14/08/2024',
    Time: '13h00',
    Room: '3-010'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '21/08/2024',
    Time: '13h00',
    Room: '3-012'
  },
  {
    MeetingText : 'Reunião geral',
    Date : '28/08/2024',
    Time: '13h00',
    Room: '3-011'
  },
]

function ConsultarReunioes() {
  const [cargo, setCargo] = useState("");

  const [isHavingMeetingCurrently, setIsHavingMeetingCurrently] = useState(true);

  useEffect(() => {
    setCargo("Coordenador GP")
  }, [])

  return (
    <section className='consultar-reuniao-section'>
      <Sidebar></Sidebar>
        <div className='consultar-reuniao-section--header'>
            {/* <img src={MenuIconSVG.toString()} alt="menu button" /> */}
            Próximas reuniões
        </div>

        <div className='container-reunioes'>
          Cargo: {cargo}

          <div className='container-reunioes--proximas-reunioes'>
            {/* <CurrentMeeting isOcurringMeeting={true} meetingText='Reunião Geral 3-012' ></CurrentMeeting> */}
            {MeetingsToCome.map((meeting, index) => {
              

              return (
                <>
                  <Divider date={meeting.Date} time={meeting.Time}/>

                  {(index == 0 && isHavingMeetingCurrently) ? 
                    <CurrentMeeting isOcurringMeeting={true} meetingText='Reunião Geral' /> : 
                    <div className='next-meeting'>
                      <div className='next-meeting--meeting'>
                        {meeting.MeetingText}
                      </div>
                      <div className='next-meeting--room'>
                        {meeting.Room}
                      </div>
                    </div> }
                
                </>
                
              )
            })}

          </div>
        </div>
    </section>
  )
}

export default ConsultarReunioes