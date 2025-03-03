import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Menu = ({good, neutral, bad, handleGood, handleNeutral, handleBad}) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGood} text={'good'} />
      <Button onClick={handleNeutral} text={'neutral'} />
      <Button onClick={handleBad} text={'bad'} />
    </div>
  )
}

const StatLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = ((good - bad) / total).toFixed(1)
  const positive = (good / total * 100).toFixed(1)

  if (total === 0) {
    return (
      <p>no feedback given...</p>
    )
  }

  return (
    <div>
      <h2>statistics</h2>

      <table>
        <tbody>
          <StatLine text={'good'} value={good} />
          <StatLine text={'neutral'} value={neutral} />
          <StatLine text={'bad'} value={bad} />
          <StatLine text={'all'} value={total} />
          <StatLine text={'average'} value={average} />
          <StatLine text={'positive'} value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Menu good={good} neutral={neutral} bad={bad} handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App