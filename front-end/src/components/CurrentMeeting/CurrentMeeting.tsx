import { NotificationSVG } from 'src/assets';
import './CurrentMeeting.css';

interface CurrentMeetingProps {
    isOcurringMeeting : boolean
    meetingText ?: string

}

function CurrentMeeting( props : CurrentMeetingProps) {
  return (

    <div className={`current-meeting ${props.isOcurringMeeting ? 'active' : ''}`}>
        {props.isOcurringMeeting ?
        <div className='current-meeting--active-section'>
            <div className='current-meeting--active-section--text'>
                {props.meetingText}
                <img src={NotificationSVG.toString()} alt="notification" />
            </div>
            
            <button className='current-meeting--active-section--button'>Cadastrar Presença</button>
        </div>
        :
        <div className='no-meeting'>Nenhuma reunião ocorrendo.</div>
        }
    </div>
  )
}

export default CurrentMeeting