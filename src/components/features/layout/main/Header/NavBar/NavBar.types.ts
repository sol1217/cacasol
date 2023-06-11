export type NavBarProps = {
  onClick?: () => {}
}

export type NavBarItemType = 'link' | 'dropdown'

export type NavBarItemLink = {
  name: String
  type: 'link'
  href: String
}

export type NavBarItemDropdown = {
  name: String
  type: 'dropdown'
  onClick?: () => void
}

export type NavBarItems = (NavBarItemLink | NavBarItemDropdown)[]
