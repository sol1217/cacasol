import { ContactLinks } from './ContactLinks'
import { ContactsPageWrap } from './ContactsPage.elements'
import { HaveQuestions } from './HaveQuestions'
import { Hero } from './Hero'
import { LegalInformation } from './LegalInformation'

export const ContactsPage = () => {
  return (
    <ContactsPageWrap>
      <Hero />
      <ContactLinks />
      <HaveQuestions />
      <LegalInformation />
    </ContactsPageWrap>
  )
}
