import styled from 'styled-components'

export const DropdownMenuWrap = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  position: absolute;
  top: 100%;
  left: 50%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.palette.dropdown.basic.stroke};
  transform: translateX(-50%);
  background: ${({ theme }) => theme.palette.dropdown.basic.background};
  transition: ${({ theme }) => theme.transition.fast} ease;
  opacity: ${({ $active }) => ($active ? 100 : 0)};
  padding: 20px;
  cursor: default;
  pointer-events: ${({ $active }) => ($active ? 'all' : 'none')};

  ::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.palette.dropdown.basic.background};
    border-radius: 2px;
    z-index: 1;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid ${({ theme }) => theme.palette.dropdown.basic.stroke};
  }
`
