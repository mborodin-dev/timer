import { useCallback, useEffect, useLayoutEffect } from 'react'

import s from './Timer.module.scss'
import { TypeTimer } from './Timer.types'

export default function Timer({
  theme,
  seconds,
  setSeconds,
  start,
  setStart,
  setPause,
}: TypeTimer): JSX.Element {
  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    const milliseconds = Math.floor((time % 1000) / 10)

    return `${minutes ? `${minutes}:` : ''}${String(seconds).padStart(2, '0')}.${String(
      milliseconds
    ).padStart(2, '0')}`
  }, [])

  useLayoutEffect(() => {
    setPause(false)
    setSeconds(0)
    setStart(false)
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!start) return

    const interval = setInterval(() => {
      setSeconds((sec) => sec + 10)
    }, 10)

    return () => clearInterval(interval)
  }, [start, seconds, setSeconds])

  return (
    <main className={theme ? s.main : s.main_light}>
      <div className={s.timer_container}>{formatTime(seconds)}</div>
    </main>
  )
}
