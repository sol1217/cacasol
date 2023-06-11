import { useMemo, useState } from 'react'
import Image from 'next/image'

import { Box, Switch, Typography } from '@core'

import arrowDownIcon from './assets/svg/arrow-down-icon.svg'
import arrowRightIcon from './assets/svg/arrow-right-icon.svg'
import caseIcon from './assets/svg/case-icon.svg'
import chatIcon from './assets/svg/chat-icon.svg'
import pawsIcon from './assets/svg/paws-icon.svg'
import starIcon from './assets/svg/star-icon.svg'
import { MAX_AVAILABLE_OPTIONS } from './ChangeSettingsSection.constants'
import {
  IconWrap,
  SettingsElementWrap,
  SettingsElementInner,
  ChangeSettingsSectionWrap,
} from './ChangeSettingsSection.elements'

export const ChangeSettingsSection = () => {
  const [petsCount, setPetsCount] = useState(false)
  const [withdrawPetsCount, setWithdrawPetsCounCount] = useState(false)
  const [soldPetsCount, setSoldPetsCountCount] = useState(false)
  const [contactsButton, setContactsButton] = useState(false)
  const [bestDrop, setBestDrop] = useState(false)
  const [favoriteCase, setFavoriteCase] = useState(false)

  const isFieldsAvailable = useMemo(() => {
    return (
      [petsCount, withdrawPetsCount, soldPetsCount, contactsButton, bestDrop, favoriteCase].filter(
        (el) => el,
      ).length < MAX_AVAILABLE_OPTIONS
    )
  }, [petsCount, withdrawPetsCount, soldPetsCount, contactsButton, bestDrop, favoriteCase])

  const handlePetsCountChange = () => {
    setPetsCount(!petsCount)
  }

  const handleWithdrawPetsCountChange = () => {
    setWithdrawPetsCounCount(!withdrawPetsCount)
  }

  const handleSoldPetsCountChange = () => {
    setSoldPetsCountCount(!soldPetsCount)
  }

  const handleContactsButtonChange = () => {
    setContactsButton(!contactsButton)
  }

  const handleBestDrop = () => {
    setBestDrop(!bestDrop)
  }

  const handleFavoriteCase = () => {
    setFavoriteCase(!favoriteCase)
  }

  return (
    <ChangeSettingsSectionWrap>
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
          Информация, которая будет отображаться в твоем профиле и будет доступна для других
          пользователей{' '}
          <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#ff5c5c">
            (можно скрыть максимум 3 пункта)
          </Typography>
        </Typography>
      </Box>
      <Box>
        <SettingsElementWrap>
          <SettingsElementInner>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
              <IconWrap>
                <Image src={pawsIcon.src} height={pawsIcon.height} width={pawsIcon.width} alt="" />
              </IconWrap>
              <Typography variant="bodyMobileHeadlineBody6Medium1418">
                Количество питомцев
              </Typography>
            </Box>
            <Switch
              value={petsCount}
              onToggle={handlePetsCountChange}
              disabled={!petsCount && !isFieldsAvailable}
            />
          </SettingsElementInner>
        </SettingsElementWrap>

        <SettingsElementWrap>
          <SettingsElementInner>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
              <IconWrap>
                <Image
                  src={arrowRightIcon.src}
                  height={arrowRightIcon.height}
                  width={arrowRightIcon.width}
                  alt=""
                />
              </IconWrap>
              <Typography variant="bodyMobileHeadlineBody6Medium1418">
                Выведенные питомцы
              </Typography>
            </Box>
            <Switch
              value={withdrawPetsCount}
              onToggle={handleWithdrawPetsCountChange}
              disabled={!withdrawPetsCount && !isFieldsAvailable}
            />
          </SettingsElementInner>
        </SettingsElementWrap>

        <SettingsElementWrap>
          <SettingsElementInner>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
              <IconWrap>
                <Image
                  src={arrowDownIcon.src}
                  height={arrowDownIcon.height}
                  width={arrowDownIcon.width}
                  alt=""
                />
              </IconWrap>
              <Typography variant="bodyMobileHeadlineBody6Medium1418">Проданные питомцы</Typography>
            </Box>
            <Switch
              value={soldPetsCount}
              onToggle={handleSoldPetsCountChange}
              disabled={!soldPetsCount && !isFieldsAvailable}
            />
          </SettingsElementInner>
        </SettingsElementWrap>

        <SettingsElementWrap>
          <SettingsElementInner>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
              <IconWrap>
                <Image src={chatIcon.src} height={chatIcon.height} width={chatIcon.width} alt="" />
              </IconWrap>
              <Typography variant="bodyMobileHeadlineBody6Medium1418">
                Кнопка &quot;Связаться с вами&quot;
              </Typography>
            </Box>
            <Switch
              value={contactsButton}
              onToggle={handleContactsButtonChange}
              disabled={!contactsButton && !isFieldsAvailable}
            />
          </SettingsElementInner>
        </SettingsElementWrap>

        <SettingsElementWrap>
          <SettingsElementInner>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
              <IconWrap>
                <Image src={starIcon.src} height={starIcon.height} width={starIcon.width} alt="" />
              </IconWrap>
              <Typography variant="bodyMobileHeadlineBody6Medium1418">Лучшее выпадение</Typography>
            </Box>
            <Switch
              value={bestDrop}
              onToggle={handleBestDrop}
              disabled={!bestDrop && !isFieldsAvailable}
            />
          </SettingsElementInner>
        </SettingsElementWrap>

        <SettingsElementWrap>
          <SettingsElementInner>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
              <IconWrap>
                <Image src={caseIcon.src} height={caseIcon.height} width={caseIcon.width} alt="" />
              </IconWrap>
              <Typography variant="bodyMobileHeadlineBody6Medium1418">Любимый сундук</Typography>
            </Box>
            <Switch
              value={favoriteCase}
              onToggle={handleFavoriteCase}
              disabled={!favoriteCase && !isFieldsAvailable}
            />
          </SettingsElementInner>
        </SettingsElementWrap>
      </Box>
    </ChangeSettingsSectionWrap>
  )
}
