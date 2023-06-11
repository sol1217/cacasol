import Link from 'next/link'
import styled from 'styled-components'

export const RechargeBalanceButtonWrap = styled(Link)`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15.5px;
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: none;

  .rechargable-icon {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    transition: ${({ theme }) => theme.transition.default};
  }

  .rechargable-icon-pressed.rechargable-icon {
    opacity: 0;
  }

  &:active {
    .rechargable-icon {
      opacity: 0;
    }

    .rechargable-icon-pressed.rechargable-icon {
      opacity: 1;
    }
  }
`
