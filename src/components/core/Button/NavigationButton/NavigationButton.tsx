import { NavigationButtonWrap } from './NavigationButton.elements'
import { NavigationButtonProps } from './NavigationButton.types'
import { NavigationButtonLargeArrow } from './NavigationButtonLargeArrow'
import { NavigationButtonSmallArrow } from './NavigationButtonSmallArrow'

export const NavigationButton = ({
  onClick = () => {},
  size = 'small',
  direction = 'forward',
  disabled = false,
}: NavigationButtonProps) => {
  const onClickHandler = () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <NavigationButtonWrap
      $size={size}
      $direction={direction}
      $disabled={disabled}
      onClick={onClickHandler}>
      {size === 'large' ? (
        <NavigationButtonLargeArrow inheritedColor />
      ) : (
        <NavigationButtonSmallArrow inheritedColor />
      )}
    </NavigationButtonWrap>
  )
}
