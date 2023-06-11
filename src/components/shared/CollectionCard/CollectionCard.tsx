import Image from 'next/image'

import { ArrowButton, Typography } from '@core'
import { useTheme } from '@hooks'
import collectionCardMainImage from '@assets/images/collection-card-main-image.png'

import { CaseIcon } from './CaseIcon'
import {
  NameWrap,
  ImageWrap,
  PriceWrap,
  PricesWrap,
  BottomBlock,
  CenterContent,
  ImageContainer,
  ActionButtonWrap,
  DecorElementWrap,
  CollectionCardWrap,
} from './CollectionCard.elements'
import { CollectionCardProps } from './CollectionCard.types'
import { DecorElement } from './DecorElement'
import { FireIcon } from './FireIcon'

export const CollectionCard = ({}: CollectionCardProps) => {
  const theme = useTheme()

  return (
    <CollectionCardWrap>
      <ImageContainer>
        <ImageWrap>
          <Image
            src={collectionCardMainImage.src}
            height={154}
            width={154}
            alt=""
            draggable={false}
          />
        </ImageWrap>
      </ImageContainer>
      <DecorElementWrap>
        <DecorElement />
        <CenterContent>
          <CaseIcon />
          <Typography variant="cardPetsMobileHeadlineLevelBold9Auto">13 k</Typography>
        </CenterContent>
      </DecorElementWrap>
      <BottomBlock>
        <NameWrap>
          <Typography variant="bodyMobileHeadlineBody2Bold1616">
            Dark mega Chetotam power
          </Typography>
        </NameWrap>
        <PriceWrap>
          <FireIcon />
          <PricesWrap>
            <Typography
              variant="bodyMobileHeadlineBody9Medium1218"
              color={theme.palette.collectionCard.secondaryText}
              sx={{ textDecoration: 'line-through' }}>
              25.350 ₽
            </Typography>
            <Typography
              variant="bodyMobileHeadlineBody5Bold1422"
              color={theme.palette.collectionCard.brightText}>
              20.940 ₽
            </Typography>
          </PricesWrap>
        </PriceWrap>
      </BottomBlock>
      <ActionButtonWrap>
        <ArrowButton />
      </ActionButtonWrap>
    </CollectionCardWrap>
  )
}
