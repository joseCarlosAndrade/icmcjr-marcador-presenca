import React from 'react';
import './CurrentMeeting.css';

interface CurrentMeetingProps {
    isOcurringMeeting : boolean
    meetingText ?: string

}

function CurrentMeeting( props : CurrentMeetingProps) {
  return (

    <div className={`current-meeting ${props.isOcurringMeeting ? 'active' : ''}`}>
        {props.isOcurringMeeting ?
        <div>{props.meetingText}</div>
        
        :
        <div>Nenhuma reunião ocorrendo.</div>
        }
    </div>
  )
}

export default CurrentMeeting