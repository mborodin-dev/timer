import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Timer from './components/Timer/Timer'
import Countdown from './components/Countdown/Countdown'
import Footer from './components/Footer/Footer'

function App(): JSX.Element {
  const [theme, setTheme] = useState<boolean>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)
  const [sec, setSec] = useState(0)

  useEffect(() => {
    document.body.className = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <Timer
              theme={theme}
              seconds={sec}
              setSeconds={setSec}
              start={start}
              setStart={setStart}
              setPause={setPause}
            />
          }
        />
        <Route
          path="/countdown"
          element={
            <Countdown
              theme={theme}
              seconds={sec}
              setSeconds={setSec}
              start={start}
              setStart={setStart}
              setPause={setPause}
            />
          }
        />
      </Routes>
      <Footer
        theme={theme}
        start={start}
        setStart={setStart}
        seconds={sec}
        setSeconds={setSec}
        pause={pause}
        setPause={setPause}
      />
    </>
  )
}

export default App
