import { Hero } from './Hero'
import { TopPlayers } from './TopPlayers'
import { TopPlayersPageWrap } from './TopPlayersPage.elements'

export const TopPlayersPage = () => {
  return (
    <TopPlayersPageWrap>
      <Hero />
      <TopPlayers />
    </TopPlayersPageWrap>
  )
}
