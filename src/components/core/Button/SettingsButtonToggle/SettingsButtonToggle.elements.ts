import styled from 'styled-components'

export const SettingsButtonToggleWrap = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.header.profile.buttonBackground};
  border-radius: 12px;

  &:hover svg path {
    transition: all ${({ theme }) => theme.transition.fast} ease;
    fill: ${({ theme }) => theme.palette.header.profile.activeItem};
  }
`

export const SettingsButtonToggleTooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.tooltip.background};
  border: 1px solid ${({ theme }) => theme.palette.tooltip.border};
  box-shadow: 0px 4px 6px rgba(32, 34, 36, 0.16);
  padding: 8px 21px;
  border-radius: 16px;
  z-index: 1;
  white-space: nowrap;

  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);

  visibility: hidden;
  opacity: 0;
  transition: all ${({ theme }) => theme.transition.long};

  ${SettingsButtonToggleWrap}:hover & {
    visibility: visible;
    opacity: 1;
  }

  ::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 4px solid ${({ theme }) => theme.palette.dropdown.basic.background};
    border-radius: 2px;
    z-index: 1;
  }

  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.palette.dropdown.basic.stroke};
  }
`
