import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { throttle } from 'lodash'

import { Box, UpButton, Typography, SecondaryButton } from '@core'
import userpic from '@assets/images/userpic.png'
import tabBarArrow from '@assets/svg/tab-bar-arrow.svg'
import tabBarBackground from '@assets/svg/tab-bar-background.svg'

import { UP_BUTTON_MIN_SHOW_POSITION } from './TabBar.constants'
import {
  TabBarWrap,
  UpButtonWrap,
  BackButtonWrap,
  TabBarItemWrap,
  TabBarUserIconWrap,
} from './TabBar.elements'
import { tabBarTabStyles } from './TabBar.styles'
import { TabBarProps, TabBarTabIndex } from './TabBar.types'

export const TabBar = ({ back }: TabBarProps) => {
  const router = useRouter()

  const [activeTab, setActiveTab] = useState(0)
  const [isUpButtonActive, setIsUpButtonActive] = useState(false)

  const tabIndexes: TabBarTabIndex[] = [0, 1, 2, 3]

  useEffect(() => {
    const scrollHandler = throttle(() => {
      setIsUpButtonActive(window.scrollY >= UP_BUTTON_MIN_SHOW_POSITION)
    }, 100)

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const upButtonHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Box sx={{ position: 'fixed', bottom: 24, zIndex: 9999 }}>
      <TabBarWrap>
        {tabIndexes.map((tabIndex, index, array) => (
          <TabBarItemWrap
            key={tabIndex}
            $tabLeftPosition={tabBarTabStyles[tabIndex].leftPosition}
            $isActive={tabIndex === activeTab}
            onClick={() => setActiveTab(tabIndex)}>
            {activeTab === tabIndex && (
              <Image src={tabBarArrow.src} alt="" width={20} height={17} />
            )}
            {tabIndex !== 3 ? (
              <Image
                src={
                  activeTab === tabIndex
                    ? tabBarTabStyles[tabIndex].focusedIcon
                    : tabBarTabStyles[tabIndex].defaultIcon
                }
                alt=""
                width={40}
                height={40}
              />
            ) : (
              <TabBarUserIconWrap $isActive={activeTab === tabIndex}>
                <Image src={userpic.src} alt="" width={30} height={29} />
              </TabBarUserIconWrap>
            )}
            <Typography variant="navigationMobileTabBarNavigationBold1018">
              {tabBarTabStyles[tabIndex].text}
            </Typography>
          </TabBarItemWrap>
        ))}
        <img
          src={tabBarBackground.src}
          style={{ width: '100%', position: 'absolute', right: 0 }}
          alt=""
        />
      </TabBarWrap>
      {back && (
        <BackButtonWrap>
          <SecondaryButton variant="back" onClick={() => router.back()}>
            Назад
          </SecondaryButton>
        </BackButtonWrap>
      )}
      {isUpButtonActive && (
        <UpButtonWrap>
          <UpButton onClick={upButtonHandler} />
        </UpButtonWrap>
      )}
    </Box>
  )
}
