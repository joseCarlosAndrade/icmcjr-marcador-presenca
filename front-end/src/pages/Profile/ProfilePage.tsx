import { HeaderPage } from 'src/components'
import CurrentMeeting from 'src/components/CurrentMeeting/CurrentMeeting'
import './ProfilePage.css';

function Profile() {

  const isDirector : boolean = true;

  return (
    <section className='profile-section'>
      <HeaderPage 
          name='Bob Nelson Honda Cavalheiro'
          jobTitle='Membro'>  
      </HeaderPage>
      <div className='buttons-separator'>

        <CurrentMeeting
          isOcurringMeeting={false}
          meetingText='Reunião geral ocorrendo'
          ></CurrentMeeting>

        <div className='profile-section--buttons'>
          {/* common buttons */}
          <div></div>
          <button className='general-button'>Próximas Reuniões</button>
          <button className='general-button'>Minha situação</button>

          {/* director buttons */}
          {isDirector ? 
          <>
            <button className='director-button'>Gerenciar Cargos</button>
            <button className='director-button'>Consulta de justificativas</button>
            <button className='director-button'>Consulta de presenças</button>
          </> :
          <>
          </>
          }

        </div>
      </div>
      
        

    </section>
  )
}

export default Profile