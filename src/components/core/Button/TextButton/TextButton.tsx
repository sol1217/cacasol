import Link from 'next/link'

import { TextButtonWrap, TextButtonIconWrap, TextButtonBackArrow } from './TextButton.elements'
import { textButtonVariants } from './TextButton.styles'
import { TextButtonProps } from './TextButton.types'
import { TextButtonArrowIcon } from './TextButtonArrowIcon'

export const TextButton = ({
  variant,
  onClick = () => {},
  children,
  isDisabled = false,
  href,
}: TextButtonProps) => {
  const styles = textButtonVariants[variant]

  return (
    <TextButtonWrap
      as={href ? Link : 'button'}
      href={href}
      onClick={() => !isDisabled && onClick()}
      $mainStyles={styles.mainStyles}
      $pressedStyles={styles.pressedStyles}
      $disabledStyles={styles.disabledStyles}
      $isDisabled={isDisabled}>
      {variant === 'navigation' && <TextButtonBackArrow className="secondary-button-arrow" />}
      {children}
      {(variant === 'viewAllArrowDown' || variant === 'viewAllArrowRight') && (
        <TextButtonIconWrap className="text-button-icon">
          <TextButtonArrowIcon className="text-button-icon-arrow" />
        </TextButtonIconWrap>
      )}
    </TextButtonWrap>
  )
}
