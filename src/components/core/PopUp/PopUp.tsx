import Image from 'next/image'

import { InfographicIcon } from '@core'
import Cap from '@assets/svg/pop-up-cap.svg'

import { Holder, PopUpWrap, Container } from './PopUp.elements'
import { PopUpProps } from './PopUp.types'

export const PopUp = ({ iconVariant, isOpen, children }: PopUpProps) => {
  return (
    <>
      {isOpen && (
        <PopUpWrap>
          <Holder>
            <InfographicIcon
              variant={iconVariant}
              sx={{ position: 'absolute', zIndex: 1, top: '-2px', right: 'calc(50% - 34px)' }}
            />
            <Image
              src={Cap.src}
              alt=""
              width={Cap.width}
              height={Cap.height}
              style={{
                position: 'absolute',
                top: `-${Cap.height}px`,
                right: `calc(50% - ${Cap.width / 2}px)`,
              }}
            />
            <Container>{children}</Container>
          </Holder>
        </PopUpWrap>
      )}
    </>
  )
}
