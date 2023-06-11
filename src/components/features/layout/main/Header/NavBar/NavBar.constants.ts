import { NavBarItems } from './NavBar.types'

export const NAVBAR_PAGES: NavBarItems = [
  {
    name: 'Сундуки',
    type: 'link',
    href: '/chests',
  },
  {
    name: 'Коллекции',
    type: 'dropdown',
  },
  {
    name: 'FAQ',
    type: 'link',
    href: '/faq',
  },
  {
    name: 'ТОП-игроков',
    type: 'link',
    href: '/top',
  },
  {
    name: 'Контакты',
    type: 'link',
    href: '/contacts',
  },
]
