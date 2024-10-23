export type TypeCountdown = {
  theme: boolean
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
  start: boolean
  setStart: React.Dispatch<React.SetStateAction<boolean>>
  setPause: React.Dispatch<React.SetStateAction<boolean>>
}
