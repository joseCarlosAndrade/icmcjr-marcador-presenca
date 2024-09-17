import './Divider.css';

interface DividerProps {
    date : string,
    time : string
}

function Divider( props : DividerProps) {
  return (
    <div className='divider-container'>
        <div className='divider-datetime'>
            {props.date} - {props.time}
        </div>
        
        <div className='divider-line'></div>
    </div>
  )
}

export default Divider