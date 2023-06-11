import tabBarIconCaseFocused from '@assets/svg/tab-bar-icon-case-focused.svg'
import tabBarIconCase from '@assets/svg/tab-bar-icon-case.svg'
import tabBarIconSettingsFocused from '@assets/svg/tab-bar-icon-settings-focused.svg'
import tabBarIconSettings from '@assets/svg/tab-bar-icon-settings.svg'
import tabBarIconWalletFocused from '@assets/svg/tab-bar-icon-wallet-focused.svg'
import tabBarIconWallet from '@assets/svg/tab-bar-icon-wallet.svg'

import { TabBarTabStylesType } from './TabBar.types'

export const tabBarTabStyles: TabBarTabStylesType = {
  0: {
    text: 'Сундуки',
    defaultIcon: tabBarIconCase.src,
    focusedIcon: tabBarIconCaseFocused.src,
    leftPosition: 9,
  },
  1: {
    text: 'Кошелек',
    defaultIcon: tabBarIconWallet.src,
    focusedIcon: tabBarIconWalletFocused.src,
    leftPosition: 27.5,
  },
  2: {
    text: 'Настройки',
    defaultIcon: tabBarIconSettings.src,
    focusedIcon: tabBarIconSettingsFocused.src,
    leftPosition: 62,
  },
  3: {
    text: 'Саша',
    defaultIcon: '',
    focusedIcon: '',
    leftPosition: 80,
  },
}
