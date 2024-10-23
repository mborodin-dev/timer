import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

import { styled } from '@mui/material/styles'
import { Button } from '@mui/material/'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import CheckIcon from '@mui/icons-material/Check'

import s from './Header.module.scss'
import SwitchTheme from '../Switch/Switch'
import { ThemeType } from './Header.types'

export default function Header({ theme, setTheme }: ThemeType): JSX.Element {
  const [isActive, setIsActive] = useState(true)

  const ButtonCheck = useMemo(() => {
    return styled(Button)({
      padding: '10px 20px',
      border: 'none',
      borderRadius: '9999px',
      variant: 'outlined',
      color: theme ? 'white' : 'black',

      '&:hover': {
        backgroundColor: theme ? 'rgb(66, 70, 82)' : '#aab0bd',
      },
    })
  }, [theme])

  return (
    <header className={s.header}>
      <div>
        <Link to="/">
          <ButtonCheck
            className={isActive ? (theme ? s.active : s.active_light) : 'unactive'}
            startIcon={isActive ? <CheckIcon /> : <HourglassEmptyIcon />}
            onClick={() => setIsActive(true)}
          >
            TIMER
          </ButtonCheck>
        </Link>
        <Link to="/countdown">
          <ButtonCheck
            className={!isActive ? (theme ? s.active : s.active_light) : 'unactive'}
            startIcon={!isActive ? <CheckIcon /> : <TimerOutlinedIcon />}
            onClick={() => setIsActive(false)}
          >
            COUNTDOWN
          </ButtonCheck>
        </Link>
      </div>
      <SwitchTheme theme={theme} setTheme={setTheme} />
    </header>
  )
}
