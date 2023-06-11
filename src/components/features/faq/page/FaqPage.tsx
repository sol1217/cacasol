import { Faq } from './Faq'
import { FAQPageWrap } from './FaqPage.elements'
import { Hero } from './Hero'
import { NotFoundQuestions } from './NotFoundQuestions'

export const FaqPage = () => {
  return (
    <FAQPageWrap>
      <Hero />
      <Faq />
      <NotFoundQuestions />
    </FAQPageWrap>
  )
}
