import { ReactNode } from 'react'
import Image from 'next/image'

import arrowDownIcon from '@assets/svg/icon-arrow-circle-down.svg'
import arrowRightIcon from '@assets/svg/icon-arrow-circle-right.svg'
import doneIcon from '@assets/svg/icon-done.svg'

import {
  Tag,
  Price,
  Chance,
  PetName,
  TagsWrap,
  AvatarWrap,
  ChanceWrap,
  StatusWrap,
  PetCardWrap,
  HoverImageWrap,
} from './PetCard.elements'
import { PetCardProps, PetCardStatus } from './PetCard.types'
import { getTagColor, getCardBgImage } from './PetCard.utils'

export const PetCard = ({
  name,
  avatar,
  price,
  dropChance,
  tags,
  status,
  category,
}: PetCardProps) => {
  // TODO: Когда будем делать валюту, нужно будет здесь получать значек текущей валюты и прокидывать его вниз
  const getStatusComponent = () => {
    const map: Record<PetCardStatus, ReactNode> = {
      available: (
        <StatusWrap $available>
          <img src={doneIcon.src} alt="" />
          Доступен
        </StatusWrap>
      ),
      out: (
        <StatusWrap>
          <img src={arrowRightIcon.src} alt="" />
          Выведен
        </StatusWrap>
      ),
      sold: (
        <StatusWrap>
          <img src={arrowDownIcon.src} alt="" />
          Продан
        </StatusWrap>
      ),
    }

    return status ? map[status] : null
  }

  const bgImage = getCardBgImage(category)

  return (
    <PetCardWrap>
      <Image
        draggable={false}
        src={bgImage.main.src}
        width={bgImage.main.width}
        height={bgImage.main.height}
        alt=""
      />
      <HoverImageWrap>
        <Image
          draggable={false}
          src={bgImage.pressed.src}
          width={bgImage.pressed.width}
          height={bgImage.pressed.height}
          alt=""
        />
      </HoverImageWrap>
      <AvatarWrap>
        <img src={avatar} alt="" />
      </AvatarWrap>
      {status ? (
        getStatusComponent()
      ) : (
        <ChanceWrap>
          Шанс: <Chance>{dropChance}%</Chance>
        </ChanceWrap>
      )}

      <PetName>{name}</PetName>
      <TagsWrap>
        {tags.map((tag) => (
          <Tag key={tag} $color={getTagColor(tag)}>
            {tag}
          </Tag>
        ))}
      </TagsWrap>
      <Price>{price} ₽</Price>
    </PetCardWrap>
  )
}
