import './App.css'
import Title from './components/Title'
import Counter from './components/Count'
import NewYear from './assets/happyNewYear.jpg'
import useCountdown from './hooks/useCountdown'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2023 00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title="Countdown for 2023" />
        
        <div className="countdown-container">
          <Counter title="Days" number={day}/>
          <Counter title="Hours" number={hour}/>
          <Counter title="Minutes" number={minute}/>
          <Counter title="Seconds" number={second}/>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
