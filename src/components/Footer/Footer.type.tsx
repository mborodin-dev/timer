export type TypeFooter = {
  theme: boolean
  start: boolean
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
  setStart: React.Dispatch<React.SetStateAction<boolean>>
  pause: boolean
  setPause: React.Dispatch<React.SetStateAction<boolean>>
}
