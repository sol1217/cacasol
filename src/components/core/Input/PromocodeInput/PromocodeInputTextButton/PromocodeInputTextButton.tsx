import { PromocodeInputTextButtonWrap } from './PromocodeInputTextButton.elements'
import {
  PromocodeInputTextButtonProps,
  PromocodeInputTextButtonVariant,
} from './PromocodeInputTextButton.types'

export const PromocodeInputTextButton = ({ onClick, variant }: PromocodeInputTextButtonProps) => {
  const generateText = () => {
    switch (variant) {
      case PromocodeInputTextButtonVariant.Apply:
        return 'Применить'
      case PromocodeInputTextButtonVariant.ChangePromocode:
        return 'Сменить промокод'
      case PromocodeInputTextButtonVariant.Clear:
        return 'Очистить'
    }
  }

  return (
    <PromocodeInputTextButtonWrap onClick={onClick}>{generateText()}</PromocodeInputTextButtonWrap>
  )
}
