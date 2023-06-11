import { useState } from 'react'
import cn from 'classnames'

import minus from '@assets/svg/accordeon-toggle-button-minus.svg'
import plus from '@assets/svg/accordeon-toggle-button-plus.svg'

import { Body, Head, ToggleButton, AccordeonElementWrap } from './Accordeon.elements'
import { AccordeonElement } from './Accordeon.types'

export const RegularAccordeonElement = ({ head, body }: AccordeonElement) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordeonElementWrap className={cn('accordeon-element-wrap', isOpen ? 'open' : '')}>
      <Head>
        {head}
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? plus.src : minus.src} alt="" draggable={false} />
        </ToggleButton>
      </Head>
      {isOpen && <Body>{body}</Body>}
    </AccordeonElementWrap>
  )
}
