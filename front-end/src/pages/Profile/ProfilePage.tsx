import React from 'react'
import { HeaderPage } from 'src/components'
import CurrentMeeting from 'src/components/CurrentMeeting/CurrentMeeting'

function Profile() {
  return (
    <section className='profile-section'>
      <HeaderPage 
          name='Bob Nelson Honda Cavalheiro'
          jobTitle='Membro'>  
      </HeaderPage>

      <CurrentMeeting
        isOcurringMeeting={false}
        meetingText='Reunião geral ocorrendo'
        ></CurrentMeeting>

        {/* common buttons */}

        {/* director buttons */}

    </section>
  )
}

export default Profile