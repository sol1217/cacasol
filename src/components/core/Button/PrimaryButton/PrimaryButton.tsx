import { Typography } from '@core'
import { useTheme } from '@hooks'

import { PrimaryButtonWrap, RectangularButton } from './PrimaryButton.elements'
import { PrimaryButtonProps } from './PrimaryButton.types'
import { primaryButtonSettings } from './PrimaryButton.variants'
import { TrapezeButton } from './TrapezeButton'

export const PrimaryButton = ({
  children,
  variant,
  isDisabled = false,
  icon: IconComponent,
  onClick = () => {},
}: PrimaryButtonProps) => {
  const styles = primaryButtonSettings[variant]
  const theme = useTheme()
  const buttonTheme = theme.palette.button.primary

  const iconColor = isDisabled ? buttonTheme.basic.textDisabled : buttonTheme.basic.text

  const getButtonComponent = () => {
    if (styles.shape === 'rectangular') {
      return (
        <RectangularButton
          $variant={variant}
          $isDisabled={isDisabled}
          onClick={onClick}
          className="primary-rectangular-button">
          <Typography variant={styles.typography}>{children}</Typography>
          {IconComponent && <IconComponent color={iconColor} />}
        </RectangularButton>
      )
    }

    return (
      <TrapezeButton
        variant={variant}
        typographyVariant={styles.typography}
        isDisabled={isDisabled}
        onClick={onClick}>
        {children}
      </TrapezeButton>
    )
  }

  return <PrimaryButtonWrap onClick={onClick}>{getButtonComponent()}</PrimaryButtonWrap>
}
