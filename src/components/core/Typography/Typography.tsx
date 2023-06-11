import { typographyVariants } from '@styles'

import { StyledComponent } from './Typography.elements'
import { TypographyProps } from './Typography.types'

export const Typography = ({
  as = 'span',
  variant = 'bodyMobileHeadlineBody6Medium1418',
  wrap,
  children = '',
  sx = {},
  color = '#2f2f2f',
}: TypographyProps) => {
  const styles = {
    ...typographyVariants[variant],
    color,
    ...sx,
  }

  return (
    <StyledComponent as={as} styles={styles} $wrap={wrap}>
      {children}
    </StyledComponent>
  )
}
