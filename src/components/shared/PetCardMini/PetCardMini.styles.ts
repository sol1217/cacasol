import { css } from 'styled-components'

import { colors } from '@styles/colors'
import {
  PetCardMiniStyles,
  PetCardMiniVariant,
} from '@components/shared/PetCardMini/PetCardMini.types'

export const petCardMiniStyles: Record<PetCardMiniVariant, PetCardMiniStyles> = {
  white: {
    color: colors.crystal,
    width: 86,
    height: 76,
    avatar: { size: 50 },
    tagPosition: {
      1: css`
        top: 65%;
        right: 39.55%;
      `,
      2: css`
        top: 52%;
        right: 13%;
      `,
      3: css`
        top: 52%;
        left: 13.05%;
      `,
    },
  },
  faded76x68: {
    color: colors.crystal35,
    width: 76,
    height: 68,
    avatar: { size: 44 },
    tagPosition: {
      1: css`
        top: 65%;
        right: 38.35%;
      `,
      2: css`
        top: 49%;
        right: 10.3%;
      `,
      3: css`
        top: 49%;
        left: 10%;
      `,
    },
  },
  faded104x90: {
    color: colors.crystal35,
    width: 104,
    height: 90,
    avatar: { size: 60 },
    tagPosition: {
      1: css`
        top: 67%;
        right: 41.5%;
      `,
      2: css`
        top: 56%;
        right: 17.5%;
      `,
      3: css`
        top: 56%;
        left: 17%;
      `,
    },
  },
}
