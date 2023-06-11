import styled, { FlattenSimpleInterpolation } from 'styled-components'

export const TextButtonWrap = styled.button<{
  $isDisabled: boolean
  $mainStyles: FlattenSimpleInterpolation
  $pressedStyles: FlattenSimpleInterpolation
  $disabledStyles?: FlattenSimpleInterpolation
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;
  align-items: center;
  cursor: pointer;

  background: none;
  border: none;

  ${({ $mainStyles }) => $mainStyles}

  ${({ $isDisabled, $disabledStyles, $pressedStyles }) =>
    $isDisabled ? $disabledStyles : $pressedStyles}
`

export const TextButtonBackArrow = styled.div`
  border: solid;
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 2.5px;
  transform: rotate(135deg);
`

export const TextButtonIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 4px;
`
