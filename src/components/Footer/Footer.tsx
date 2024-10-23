import { useMemo } from 'react'

import { Button } from '@mui/material/'
import { styled } from '@mui/material/styles'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import PauseIcon from '@mui/icons-material/Pause'

import s from './Footer.module.scss'
import { TypeFooter } from './Footer.type'

export default function Footer({
  theme,
  start,
  setStart,
  setSeconds,
  pause,
  setPause,
}: TypeFooter): JSX.Element {
  const ButtonCheck = useMemo(() => {
    return styled(Button)({
      margin: '0px 10px',
      width: '100%',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '9999px',
      variant: 'outlined',
      color: start ? 'white' : 'black',
      backgroundColor: theme ? (start ? '#5c5c70' : '#a8c7fa') : start ? '#94a6c9' : '#4b83ed',

      '&:hover': {
        opacity: '0.8',
      },
    })
  }, [start, theme])

  return (
    <footer className={s.footer}>
      <div className={s.buttons}>
        {!start && !pause ? (
          <ButtonCheck onClick={() => setStart(true)}> {<PlayArrowIcon />}</ButtonCheck>
        ) : (
          <>
            <ButtonCheck
              onClick={() => {
                setPause(!pause)
                setStart(!start)
              }}
            >
              {!pause ? <PauseIcon /> : <PlayArrowIcon />}
            </ButtonCheck>
            <ButtonCheck
              onClick={() => {
                setPause(false)
                setStart(false)
                setSeconds(0)
              }}
            >
              {<RestartAltIcon />}
            </ButtonCheck>
          </>
        )}
      </div>
    </footer>
  )
}
