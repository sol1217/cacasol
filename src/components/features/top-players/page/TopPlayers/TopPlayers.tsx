import { useMemo, useState } from 'react'

import { Box, Select, Typography } from '@core'

import { PlayerCard } from '../PlayerCard'
import { ShowAllButtonBackground } from './ShowAllButtonBackground'
import { players, FILTER_OPTIONS, DEFAULT_PLAYERS_TO_SHOW } from './TopPlayers.constants'
import {
  PlayersWrap,
  ShowAllButton,
  TopPlayersWrap,
  ShowAllButtonWrap,
} from './TopPlayers.elements'

export const TopPlayers = () => {
  const [showAllPlayers, setShowAllPlayers] = useState(false)
  const [selectedFilterOption, setSelectedFilterOption] = useState(FILTER_OPTIONS[0])

  const sortedPlayers = useMemo(() => {
    return players.sort((a, b) => {
      if (selectedFilterOption.value === 'opens') {
        return b.opens - a.opens
      }

      if (selectedFilterOption.value === 'profit') {
        return b.profit - a.profit
      }

      return b.pets - a.pets
    })
  }, [selectedFilterOption])

  return (
    <TopPlayersWrap>
      <Box sx={{ marginBottom: '24px', alignItems: 'flex-start' }}>
        <Typography variant="inputMobileInput1Semibold1624">Фильтровать по:</Typography>
        <Select
          options={FILTER_OPTIONS}
          onChange={setSelectedFilterOption}
          value={selectedFilterOption}
        />
      </Box>

      <PlayersWrap>
        {sortedPlayers
          .slice(0, showAllPlayers ? sortedPlayers.length : DEFAULT_PLAYERS_TO_SHOW)
          .map((user, index) => (
            <PlayerCard
              {...user}
              n={index + 1}
              mode={selectedFilterOption.value}
              key={user.nickname}
            />
          ))}
      </PlayersWrap>

      <ShowAllButtonWrap>
        <ShowAllButton onClick={() => setShowAllPlayers(!showAllPlayers)}>
          <Typography variant="textButtonMobileTextButton2Bold1422">
            {showAllPlayers ? 'Свернуть' : 'Смотреть все'}
          </Typography>
          <ShowAllButtonBackground />
        </ShowAllButton>
      </ShowAllButtonWrap>
    </TopPlayersWrap>
  )
}
