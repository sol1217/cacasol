import styled, { FlattenSimpleInterpolation } from 'styled-components'

export const SecondaryButtonWrap = styled.button<{
  $isDisabled?: boolean
  $mainStyles: FlattenSimpleInterpolation
  $defaultStyles: FlattenSimpleInterpolation
  $pressedStyles: FlattenSimpleInterpolation
  $disabledStyles?: FlattenSimpleInterpolation
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2px;
  border: none;
  font-family: Gilroy, sans-serif;
  cursor: pointer;

  ${({ $mainStyles }) => $mainStyles}
  ${({ $defaultStyles }) => $defaultStyles};

  ${({ $isDisabled, $disabledStyles, $pressedStyles }) =>
    $isDisabled ? $disabledStyles : $pressedStyles}
`

export const SecondaryButtonArrow = styled.div<{
  $color: string
}>`
  border: solid ${({ $color }) => $color};
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 2.5px;
  transform: rotate(135deg);
`
