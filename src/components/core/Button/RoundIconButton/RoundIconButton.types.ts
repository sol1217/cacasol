export type RoundIconButtonIcons = 'arrow' | 'plus' | 'plusOrange'
export type RoundIconButtonStates = 'default' | 'active'

export interface RoundIconButtonProps {
  onClick?: () => void
  type: RoundIconButtonIcons
  state?: RoundIconButtonStates
}
