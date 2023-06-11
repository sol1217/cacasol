export interface PlayerCardProps {
  nickname: string
  opens: number
  profit: number
  pets: number
  n: number
  mode: TopPlayersFilterMode
}

export type TopPlayersFilterMode = 'opens' | 'profit' | 'pets'

export type DecorMaskProps = {
  color: string
}
