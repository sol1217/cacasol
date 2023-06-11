import { SecondaryButtonArrow, SecondaryButtonWrap } from './SecondaryButton.elements'
import { secondaryButtonVariants } from './SecondaryButton.styles'
import { SecondaryButtonProps } from './SecondaryButton.types'

export const SecondaryButton = ({
  variant,
  children,
  isDisabled = false,
  ...rest
}: SecondaryButtonProps) => {
  const styles = secondaryButtonVariants[variant]

  return (
    <SecondaryButtonWrap
      $isDisabled={isDisabled}
      $defaultStyles={styles.defaultStyles}
      $mainStyles={styles.mainStyles}
      $pressedStyles={styles.pressedStyles}
      $disabledStyles={styles.disabledStyles}
      {...rest}>
      {variant === 'back' && (
        <SecondaryButtonArrow className="secondary-button-arrow" $color="#ff6b3d" />
      )}
      {children}
    </SecondaryButtonWrap>
  )
}
