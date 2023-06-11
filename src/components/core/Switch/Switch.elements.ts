import styled from 'styled-components'

export const Thumb = styled.div`
  transition: all 0.2s;
  position: absolute;
  top: 2px;
  bottom: 2px;
  width: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.button.switch.circleDefault};
`

export const SwitchWrap = styled.div<{ $disabled: boolean; $active: boolean }>`
  transition: all 0.2s;
  background-color: ${({ $disabled, $active, theme }) => {
    if ($disabled) return theme.palette.button.switch.backgroundDisabled
    if ($active) return theme.palette.button.switch.backgroundPress
    return theme.palette.button.switch.backgroundDefault
  }};
  width: 34px;
  min-width: 34px;
  height: 18px;
  min-height: 18px;
  border-radius: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    border: 1px solid
      ${({ $disabled, $active, theme }) =>
        $disabled || $active ? 'transparent' : theme.palette.button.switch.strokeDefault};
    transition: all 0.2s;
  }

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  }

  ${Thumb} {
    left: ${({ $active }) => ($active ? 'calc(100% - 16px)' : '2px')};
  }
`
