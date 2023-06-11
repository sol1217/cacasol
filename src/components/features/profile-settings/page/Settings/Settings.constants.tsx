import { Typography, AccordeonElement } from '@core'

import { ChangePasswordSection } from './ChangePasswordSection'
import { ChangeSettingsSection } from './ChangeSettingsSection'
import { ProfileIdSection } from './ProfileIdSection'

export const ACCORDEON_DATA: AccordeonElement[] = [
  {
    head: <Typography variant="bodyMobileHeadlineBody1Bold1620">ID профиля</Typography>,
    body: <ProfileIdSection />,
  },
  {
    head: <Typography variant="bodyMobileHeadlineBody1Bold1620">Параметры отображения</Typography>,
    body: <ChangeSettingsSection />,
  },
  {
    head: <Typography variant="bodyMobileHeadlineBody1Bold1620">Сменить пароль</Typography>,
    body: <ChangePasswordSection />,
  },
]
