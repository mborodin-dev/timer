import { useEffect, useLayoutEffect, useState } from 'react'
import s from './Countdown.module.scss'
import { TypeCountdown } from './Countdown.type'

export default function Countdown({
  theme,
  seconds,
  setSeconds,
  start,
  setStart,
  setPause,
}: TypeCountdown): JSX.Element {
  const [minutes, setMinutes] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [sliderValue, setSliderValue] = useState<number>(() => minutes * 60 + seconds)

  useLayoutEffect(() => {
    setPause(false)
    setSeconds(0)
    setStart(false)
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!start) return

    const timerInterval = setInterval(() => {
      if (!seconds && !minutes) {
        setStart(false)
        clearInterval(timerInterval)
        return 0
      }

      setSeconds((sec) => sec - 1)
      setSliderValue((sec) => minutes * 60 + sec)

      if (!seconds && minutes > 0) {
        setMinutes((min) => min - 1)
        setSeconds(59)
      }

      return
    }, 1000)

    return () => clearInterval(timerInterval)
    //eslint-disable-next-line
  }, [seconds, start])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const totalSeconds = Number(e.target.value)
    const newMinutes = Math.floor(totalSeconds / 60)
    const newSeconds = totalSeconds % 60
    setMinutes(newMinutes)
    setSeconds(newSeconds)
    setSliderValue(totalSeconds)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (value.length > 2 || value === '0') return

    if (name === 'minutes') {
      const newMinutes = Math.max(0, Math.min(60, Number(value)))
      setMinutes(newMinutes)
      setSliderValue(newMinutes * 60 + seconds)
    } else if (name === 'seconds') {
      const newSeconds = Math.max(0, Math.min(59, Number(value)))
      setSeconds(newSeconds)
      setSliderValue(minutes * 60 + newSeconds)
    }
  }

  return (
    <main className={theme ? s.main : s.main_light}>
      <div className={s.timerContainer}>
        <div className={`${s.timerInput} ${isActive ? s.active : ''}`}>
          <input
            type="number"
            name="minutes"
            value={minutes}
            onChange={handleInputChange}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            className={s.inputField}
            readOnly={start ? true : false}
          />
          <span className={s.separator}>:</span>
          <input
            type="number"
            name="seconds"
            value={seconds}
            onChange={handleInputChange}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            className={s.inputField}
            readOnly={start ? true : false}
          />
        </div>
        <input
          type="range"
          min="0"
          max="3600"
          step="15"
          value={sliderValue}
          onChange={handleSliderChange}
          className={s.slider}
          disabled={start ? true : false}
        />
      </div>
    </main>
  )
}
