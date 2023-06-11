import Image from 'next/image'

import { Typography } from '@core'
import userAvatar from '@assets/images/userpic.png'
import blueCoinIcon from '@assets/svg/blue-coin.svg'
import caseIcon from '@assets/svg/case-icon.svg'
import coinsStackIcon from '@assets/svg/coins-stack-icon.svg'
import dogFootprintIcon from '@assets/svg/dog-footprint-icon.svg'
import goldCoinIcon from '@assets/svg/gold-coin.svg'
import redCoinIcon from '@assets/svg/red-coin.svg'

import { DecorMask } from './DecorMask'
import {
  CoinWrap,
  AvatarWrap,
  DecorMaskWrap,
  StatisticWrap,
  PlayerCardWrap,
} from './PlayerCard.elements'
import { PlayerCardProps } from './PlayerCard.types'
import { maskColorMap } from './PlayerCard.utils'

export const PlayerCard = ({ nickname, opens, profit, pets, n, mode }: PlayerCardProps) => {
  return (
    <PlayerCardWrap>
      <AvatarWrap>
        <Image src={userAvatar.src} height={32} width={32} alt="" />
      </AvatarWrap>
      <Typography variant="bodyMobileHeadlineBody5Bold1422">{nickname}</Typography>
      {n <= 3 && (
        <CoinWrap>
          {n === 1 && (
            <Image
              src={goldCoinIcon.src}
              height={goldCoinIcon.height}
              width={goldCoinIcon.width}
              alt=""
            />
          )}
          {n === 2 && (
            <Image
              src={blueCoinIcon.src}
              height={blueCoinIcon.height}
              width={blueCoinIcon.width}
              alt=""
            />
          )}
          {n === 3 && (
            <Image
              src={redCoinIcon.src}
              height={redCoinIcon.height}
              width={redCoinIcon.width}
              alt=""
            />
          )}
        </CoinWrap>
      )}
      <DecorMaskWrap $backdropColor={maskColorMap(n)}>
        <DecorMask color={maskColorMap(n)} />
        <StatisticWrap>
          {mode === 'opens' && (
            <>
              <Image src={caseIcon.src} height={caseIcon.height} width={caseIcon.width} alt="" />
              <Typography variant="bodyMobileHeadlineBody2Bold1616" color="#fff">
                {opens}
              </Typography>
            </>
          )}
          {mode === 'profit' && (
            <>
              <>
                <Image
                  src={coinsStackIcon.src}
                  height={coinsStackIcon.height}
                  width={coinsStackIcon.width}
                  alt=""
                />
                <Typography variant="bodyMobileHeadlineBody2Bold1616" color="#fff">
                  {profit}
                </Typography>
              </>
            </>
          )}
          {mode === 'pets' && (
            <>
              <>
                <Image
                  src={dogFootprintIcon.src}
                  height={dogFootprintIcon.height}
                  width={dogFootprintIcon.width}
                  alt=""
                />
                <Typography variant="bodyMobileHeadlineBody2Bold1616" color="#fff">
                  {pets}
                </Typography>
              </>
            </>
          )}
        </StatisticWrap>
      </DecorMaskWrap>
    </PlayerCardWrap>
  )
}
