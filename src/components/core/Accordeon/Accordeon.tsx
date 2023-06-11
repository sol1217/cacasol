import { AccordeonWrap } from './Accordeon.elements'
import { AccordeonProps } from './Accordeon.types'
import { RegularAccordeonElement } from './AccordeonElement'

export const Accordeon = ({ data }: AccordeonProps) => {
  return (
    <AccordeonWrap>
      {data.map((el, i) => (
        <RegularAccordeonElement {...el} key={i} />
      ))}
    </AccordeonWrap>
  )
}
