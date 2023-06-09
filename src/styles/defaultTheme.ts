import { breakpoints } from '@styles/breakpoints'
import { colors } from '@styles/colors'
import { gradients } from '@styles/gradients'

export const defaultTheme = {
  breakpoints,
  palette: {
    button: {
      primary: {
        basic: {
          default: colors.lightOrange,
          light: gradients.glow,
          text: colors.crystal,
          press: colors.fiery,
          disabled: colors.silverHaze,
          textDisabled: colors.silver,
        },
        trapeze: {
          default: colors.lightOrange,
          light: gradients.glow,
          stroke: gradients.sunset,
          background: colors.darkOrange,
          press: colors.fiery,
          pressBackground: colors.fiery,
          disabled: colors.silverHaze,
          textDisabled: colors.silver,
          glow: colors.citric,
        },
      },
      secondary: {
        medium: {
          default: colors.crystal,
          strokeDefault: colors.darkOrange,
          textDefault: colors.dark,
          strokePress: colors.fiery,
          textPress: colors.fiery,
          disabled: colors.silverHaze,
          textDisabled: colors.silver,
        },
        blue: {
          default: colors.blueHaze,
          textDefault: colors.dustyBlue,
          press: colors.dustyBlue,
          textPress: colors.crystal,
          disabled: colors.silverHaze,
          textDisabled: colors.silver,
        },
        back: {
          default: colors.crystal,
          textDefault: colors.darkOrange,
          press: colors.fiery,
          textPress: colors.crystal,
        },
      },
      searchBot: {
        default: colors.darkOrange,
        textDefault: colors.crystal,
        light: gradients.glow,
        filterDefault: colors.crystal,
      },
      popUp: {
        primary: {
          default: colors.darkOrange,
          light: gradients.glow,
          textDefault: colors.crystal,
          press: colors.fiery,
          textPress: colors.crystal,
          disabled: colors.silverHaze,
          textDisabled: colors.silver,
          filterDefault: colors.crystal,
        },
        secondary: {
          default: colors.crystal,
          strokeDefault: colors.darkOrange,
          textDefault: colors.dark,
          strokePress: colors.fiery,
          textPress: colors.fiery,
          disable: colors.silverHaze,
          textDisabled: colors.silver,
          press: colors.crystal,
        },
        timer: {
          backgroundDefault: colors.darkOrange,
          lightDefault: gradients.glow,
          textDefault: colors.crystal,
          waitingDefault: colors.crystal,
          backgroundPress: colors.fiery,
          textPress: colors.crystal,
          backgroundDisabled: colors.silverHaze,
          textDisabled: colors.silver,
        },
      },
      switch: {
        backgroundDefault: colors.silverHaze,
        circleDefault: colors.crystal,
        strokeDefault: colors.paleGray,
        backgroundPress: colors.darkOrange,
        circlePress: colors.crystal,
        backgroundDisabled: colors.silverHaze,
        circleDisabled: colors.crystal,
      },
      setting: {
        default: colors.silver,
        press: colors.fiery,
      },
      text: {
        blue: {
          default: colors.azure,
          press: colors.indigo,
        },
        orange: {
          underlined: {
            default: colors.darkOrange,
            press: colors.fiery,
            disabled: colors.silver,
          },
          navigation: {
            default: colors.darkOrange,
            press: colors.fiery,
          },
          viewAll: {
            default: colors.silver,
            circleDefault: gradients.sunrise,
            arrowDefault: colors.crystal,
            textPress: colors.fiery,
            circlePress: colors.fiery,
            arrowPress: colors.crystal,
            textDisabled: colors.silver,
            circleDisabled: colors.silverHaze,
            arrowDisabled: colors.silver,
          },
          black: {
            default: colors.dark,
            press: colors.fiery,
          },
          viewAll30: {
            textDefault: colors.silver,
            circleDefault: gradients.sunrise,
            arrowDefault: colors.crystal,
            textPress: colors.fiery,
            circlePress: colors.fiery,
            arrowPress: colors.crystal,
          },
          grey: {
            default: colors.silver,
            press: colors.fiery,
          },
          link: {
            default: colors.darkOrange,
            press: colors.fiery,
          },
        },
      },
      checkbox: {
        strokeOff: colors.silverHaze,
        strokeOn: colors.fiery,
        on: colors.fiery,
        backgroundOff: colors.crystal,
        backgroundOn: colors.crystal,
      },
      burgerMenu: {
        white: {
          background: colors.whiteSmoke,
          icon: colors.dark,
        },
        color: {
          background: colors.crystal,
          icon: colors.dark,
        },
      },
      socialMedia: {
        strokeDefault: colors.silverHaze,
        strokePress: colors.darkOrange,
        backgroundDefault: colors.crystal,
        backgroundPress: colors.crystal,
      },
      accordion: {
        background: colors.blueHaze,
        icon: colors.dustyBlue,
      },
      balance: {
        white: {
          backgroundDefault: colors.silverBlue,
          strokeDefault: colors.iceGray,
          iconDefault: colors.dark,
          backgroundCircle: colors.crystal,
          subTextDefault: colors.dark60,
          textDefault: colors.lightOrange,
          backgroundPress: colors.citric,
          iconPress: gradients.wheat,
          backgroundCirclePress: colors.paleGray,
          subTextPress: colors.dark,
          textPress: colors.crystal,
        },
        color: {
          backgroundDefault: colors.crystal45,
          strokeDefault: colors.crystal50,
          iconDefault: colors.dark,
          backgroundCircle: colors.crystal50,
          subTextDefault: colors.dark60,
          textDefault: colors.dark,
          backgroundPress: colors.crystal80,
          iconPress: colors.crystal50,
          backgroundCirclePress: colors.crystal50,
          subTextPress: colors.dark60,
          textPress: colors.dark,
        },
      },
      return: {
        backgroundDefault: colors.whiteSmoke,
        iconDefault: colors.dark,
        backgroundPress: colors.silverGray,
        iconPress: colors.dark,
      },
      add: {
        backgroundDefault: colors.lightOrange,
        lightDefault: colors.citric,
        iconDefault: gradients.wheat,
        backgroundPress: colors.fiery,
        iconPress: gradients.wheat,
      },
      navigation: {
        big: {
          backgroundDefault: colors.crystal20,
          arrowDefault: colors.crystal,
          strokeDefault: colors.crystal,
          backgroundPress: colors.crystal20,
          arrowPress: colors.fiery,
          strokePress: colors.fiery,
          backgroundDisabled: colors.crystal20,
          arrowDisabled: colors.crystal20,
          strokeDisabled: colors.crystal20,
        },
        small: {
          backgroundDefault: colors.crystal,
          arrowDefault: colors.silver,
          strokeDefault: colors.silver,
          backgroundPress: colors.crystal,
          arrowPress: colors.fiery,
          strokePress: colors.fiery,
          backgroundDisabled: colors.crystal,
          arrowDisabled: colors.silver40,
          strokeDisabled: colors.silver40,
        },
      },
      arrow: {
        backgroundDefault: colors.lightOrange,
        lightDefault: colors.citric,
        arrowDefault: colors.crystal,
        backgroundPress: colors.lightOrange,
        arrowPress: colors.crystal,
      },
      slider: {
        grey: {
          stroke: colors.silver,
          circle: colors.silver,
        },
        white: {
          stroke: colors.crystal,
          circle: colors.crystal,
        },
      },
      up: {
        bg: colors.darkOrange,
        bgGradient: gradients.grapefruit,
        bgPressed: colors.fiery,
      },
    },
    tooltip: {
      background: colors.crystal,
      border: colors.silverHaze,
    },
    case: {
      jungli: gradients.jungli,
      cold: gradients.cold,
      dark: gradients.dark,
      china: gradients.china,
      mouse: gradients.mouse,
      magic: gradients.magic,
      dragon: gradients.dragonEgg,
      pony: gradients.ponyEgg,
      coldEgg: gradients.coldEgg,
      dragonEgg: gradients.dragonEgg,
      ewaEgg: gradients.ewaEgg,
      pingvi: gradients.pingvi,
      delphi: gradients.delphi,
    },
    levels: {
      R: colors.fuchsiaR,
      M: colors.violetM,
      F: colors.cobaltBlueF,
      N: colors.herbalN,
    },
    text: {
      basicText: colors.dark,
      subText: colors.silver,
    },
    input: {
      registration: {
        emailLogin: {
          strokeDefault: colors.silverHaze,
          textDefault: colors.silver,
          iconDefault: colors.silverHaze,
          strokePress: colors.paleGray,
          backgroundPress: colors.silverBlue,
          subTextPress: colors.silver,
          circlePress: colors.crystal,
          iconPress: colors.lightOrange,
          strokeTyping: colors.paleGray,
          backgroundTyping: colors.silverBlue,
          textTyping: colors.dark,
          subTextTyping: colors.silver,
          circleTyping: colors.crystal,
          iconTyping: colors.lightOrange,
          strokeEntered: colors.paleGray,
          backgroundEntered: colors.silverBlue,
          subTextEntered: colors.silver,
          textEntered: colors.dark,
          circleEntered: colors.crystal,
          iconEntered: colors.lightOrange,
          backgroundDefault: colors.crystal,
        },
        password: {
          strokeDefault: colors.silverHaze,
          textDefault: colors.silver,
          iconDefault: colors.silverHaze,
          strokePress: colors.paleGray,
          backgroundPress: colors.silverBlue,
          subTextPress: colors.silver,
          circlePress: colors.crystal,
          iconPress: colors.lightOrange,
          strokeTyping: colors.paleGray,
          backgroundTyping: colors.paleGray,
          textTyping: colors.dark,
          subTextTyping: colors.silver,
          circleTyping: colors.crystal,
          iconTyping: colors.lightOrange,
          strokeEntered: colors.paleGray,
          backgroundEntered: colors.paleGray,
          subTextEntered: colors.silver,
          textEntered: colors.dark,
          circleEntered: colors.crystal,
          iconEntered: colors.lightOrange,
          backgroundDefault: colors.crystal,
          eyeDefault: colors.paleGray,
          eyePress: colors.paleGray,
          eyeTyping: colors.paleGray,
          eyeEntered: colors.paleGray,
        },
        code: {
          strokeDefault: colors.silverHaze,
          strokePress: colors.paleGray,
          backgroundPress: colors.silverBlue,
          strokeTyping: colors.paleGray,
          backgroundTyping: colors.silverBlue,
          textTyping: colors.dark,
          strokeEntered: colors.paleGray,
          backgroundEntered: colors.silverBlue,
          textEntered: colors.dark,
          backgroundDefault: colors.crystal,
        },
      },
      search: {
        light: {
          backgroundDefault: colors.whiteSmoke,
          textDefault: colors.silver,
          iconDefault: colors.silver,
          backgroundPress: colors.whiteSmoke,
          strokePress: colors.paleGray,
          iconPress: colors.silver,
          backgroundTyping: colors.whiteSmoke,
          strokeTyping: colors.paleGray,
          iconTyping: colors.silver,
          textTyping: colors.dark,
          backgroundEntered: colors.whiteSmoke,
          iconEntered: colors.silver,
          textEntered: colors.dark,
        },
        dark: {
          backgroundDefault: colors.silverHaze,
          textDefault: colors.silver,
          iconDefault: colors.silver,
          backgroundPress: colors.silverHaze,
          strokePress: colors.paleGray,
          iconPress: colors.silver,
          backgroundTyping: colors.silverHaze,
          strokeTyping: colors.paleGray,
          iconTyping: colors.silver,
          textTyping: colors.dark,
          backgroundEntered: colors.silverHaze,
          iconEntered: colors.silver,
          textEntered: colors.dark,
        },
        bot: {
          stroke: colors.silverHaze,
          subText: colors.silver,
          text: colors.dark,
          background: colors.crystal,
        },
      },
      message: {
        backgroundDefault: colors.whiteSmoke,
        textDefault: colors.dustyBlue,
        iconDefault: colors.dustyBlue,
        backgroundPress: colors.whiteSmoke,
        iconPress: colors.dustyBlue,
        textTyping: colors.dark,
        backgroundTyping: colors.whiteSmoke,
        iconTyping: colors.dustyBlue,
        textEntered: colors.dark,
        backgroundEntered: colors.whiteSmoke,
        iconEntered: colors.dustyBlue,
      },
      wallet: {
        promocode: {
          backgroundDefault: colors.silverBlue,
          strokeDefault: colors.silverHaze,
          textDefault: colors.silver,
          strokePress: colors.paleGray,
          textPress: colors.silver,
          strokeTyping: colors.paleGray,
          textTyping: colors.dark,
          strokeEntered: colors.paleGray,
          textEntered: colors.dark,
          subTextEntered: colors.silver,
          successEntered: colors.mintGreen,
          backgroundPress: colors.crystal,
          backgroundTyping: colors.crystal,
          backgroundEntered: colors.crystal,
        },
        amount: {
          strokeDefault: colors.silverHaze,
          textDefault: colors.silver,
          strokePress: colors.paleGray,
          strokeTyping: colors.paleGray,
          textTyping: colors.dark,
          strokeEntered: colors.silverHaze,
          textEntered: colors.dark,
          backgroundShapeEntered: colors.mintGreen45,
          textPromocodeEntered: colors.mintGreen,
          backgroundDefault: colors.crystal,
          backgroundPress: colors.crystal,
          backgroundTyping: colors.crystal,
          backgroundEntered: colors.crystal,
        },
      },
      basic: {
        strokeDefault: colors.silverHaze,
        textDefault: colors.silver,
        strokePress: colors.paleGray,
        strokeTyping: colors.paleGray,
        textTyping: colors.dark,
        strokeEntered: colors.silverHaze,
        textEntered: colors.dark,
        backgroundDefault: colors.crystal,
        backgroundPress: colors.crystal,
        backgroundTyping: colors.crystal,
        backgroundEntered: colors.crystal,
      },
    },
    dropdown: {
      transaction: {
        stroke: colors.silverHaze,
        arrow: colors.silver,
        text: colors.dark,
        income: colors.mintGreen,
        expense: colors.carmine,
        wait: colors.gold,
        background: colors.crystal,
      },
      language: {
        stroke: colors.silverBlue,
        arrow: colors.dark,
        text: colors.dark,
        background: colors.crystal,
      },
      basic: {
        stroke: colors.silverHaze,
        arrow: colors.silver,
        text: colors.dark,
        scrollBackground: colors.whiteSmoke,
        scroll: colors.silverHaze,
        background: colors.crystal,
      },
      payment: {
        stroke: colors.silverHaze,
        text: colors.dark,
        background: colors.crystal,
      },
      calendar: {
        stroke: colors.silverHaze,
        icon: colors.silverHaze,
        text: colors.dark,
        backgroundCalendar: colors.silverHaze,
        textCalendar: colors.dark,
        arrowCalendar: colors.silver,
        blueText: colors.azure,
        selectCalendar: colors.lightOrange,
        whiteTextCalendar: colors.crystal,
        background: colors.crystal,
        backgroundCalendarCalendar: colors.silverHaze,
        backgroundCalendarCalendarWhite: colors.crystal,
      },
    },
    validation: {
      error: {
        errorValidation: colors.carmine,
      },
    },
    icon: {
      popUp: {
        circleSuccess: colors.paleGreen,
        strokeSuccess: colors.paleGreen30,
        iconSuccess: colors.mintGreen,
        circleSearch: colors.paleBlue,
        strokeSearch: colors.paleBlue30,
        iconSearch: colors.dustyBlue,
        circleError: colors.lightRed,
        strokeError: colors.lightRed30,
        iconError: colors.carmine,
        circleFilter: colors.paleBlue,
        strokeFilter: colors.paleBlue30,
        iconFilter: colors.dustyBlue,
        circleWarning: colors.lightRed,
        strokeWarning: colors.lightRed30,
        iconWarning: colors.carmine,
        circleSad: colors.paleGreen,
        strokeSad: colors.paleGreen30,
        iconSad: colors.mintGreen,
      },
      wallet: {
        circleExpenses: colors.lightRed,
        strokeExpenses: colors.lightRed30,
        iconExpenses: colors.carmine,
        circleWait: colors.cream,
        strokeWait: colors.cream30,
        iconWait: colors.gold,
        circleIncome: colors.paleGreen,
        strokeIncome: colors.paleGreen30,
        iconIncome: colors.mintGreen,
      },
    },
    accordions: {
      10: {
        stroke: colors.blueHaze,
        text: colors.dark,
        backgroundCircle: colors.blueHaze,
        iconCircle: colors.dustyBlue,
        background: colors.crystal,
      },
      20: {
        stroke: colors.blueHaze,
        text: colors.dark,
        backgroundCircle: colors.blueHaze,
        iconCircle: colors.dustyBlue,
      },
    },
    card: {
      pets: {
        default: {
          background: colors.crystal,
          backgroundPlashka: colors.silverBlue,
          strokePlashka: colors.silverHaze,
          backgroundCircle: colors.crystal,
          strokeCircle: colors.silverHaze,
          subText: colors.silver,
          text: colors.dark,
          priceText: colors.crystal,
          orangeDefault: gradients.dustyOrange,
          grapeDefault: gradients.grape,
          seaDefault: gradients.sea,
          orangePress: colors.fiery,
          seaPress: colors.azure,
          grapePress: colors.amethyst,
        },
        profile: {
          background: colors.crystal,
          backgroundPlashka: colors.silverBlue,
          strokePlashka: colors.silverHaze,
          backgroundCircle: colors.crystal,
          strokeCircle: colors.silverHaze,
          text: colors.dark,
          priceText: colors.crystal,
          availableStatus: colors.mintGreen,
          withdrawnStatus: colors.silver,
          salesStatus: colors.silver,
          orangeDefault: gradients.dustyOrange,
          grapeDefault: gradients.grape,
          seaDefault: gradients.sea,
          orangePress: colors.fiery,
          seaPress: colors.azure,
          grapePress: colors.amethyst,
        },
      },
    },
    tabBar: {
      10: {
        strokeSelect: colors.darkOrange,
        textSelect: colors.darkOrange,
        strokeDefault: colors.silverHaze,
        textDefault: colors.silver,
      },
      20: {
        backgroundDefault: colors.silverHaze,
        backgroundSelect: colors.crystal,
        strokeDefault: colors.darkOrange,
        textDefault: colors.silver,
      },
      navigation: {
        background: colors.whiteSmoke,
        textSelect: colors.darkOrange,
        circleSelect: colors.lightOrange,
        iconSelect: gradients.wheat,
        lightSelect: colors.citric,
        backgroundArrowSelect: gradients.grapefruit,
        strokeArrowSelect: gradients.sunrise,
        circleDefault: colors.blueSmoke,
        textDefault: colors.dustyBlue,
        iconDefault: colors.crystal,
        iconShadowDefault: colors.blueSmoke,
        lightDefault: colors.crystal,
        circleProfileDefault: colors.pearl,
        strokeProfileDefault: gradients.polar,
        strokeProfileSelect: gradients.sunrise,
      },
    },
    statistic: {
      profile: {
        icon: colors.silver,
        number: colors.dark,
        text: colors.silver,
      },
    },
    variants: {
      bot: {
        strokeDefault: colors.blueHaze,
        iconDefault: colors.blueHaze,
        textDefault: colors.dark,
        backgroundDefault: colors.crystal,
        strokePress: colors.lightOrange,
        textPress: colors.dark,
        strokeCirclePress: colors.lightRed,
        backgroundCirclePress: colors.darkOrange,
        lightCirclePress: colors.citric50,
        iconCirclePress: colors.crystal,
      },
      contact: {
        backgroundDefault: colors.silverBlue,
        textDefault: colors.dark,
        strokeCircleDefault: colors.silverGray,
        backgroundCircleDefault: colors.crystal,
        iconCircleDefault: colors.silver,
        backgroundPress: colors.silverHaze,
        textPress: colors.dark,
        strokeCirclePress: colors.silverGray,
        backgroundCirclePress: colors.crystal,
        iconCirclePress: colors.silver,
      },
    },
    modal: {
      background: colors.crystal,
      headline: colors.darkOrange,
    },
    footer: {
      socialMediaBackground: colors.silverBlue,
      socialMediaHoverBackground: colors.darkOrange,
      statisticsBackground: colors.silverBlue,
      innerBackground: colors.crystal,
      emailLink: colors.darkOrange,
      primaryText: colors.dark,
      secondaryText: colors.silver,
      linkHover: colors.lightOrange,
    },
    collectionCard: {
      background: colors.crystal,
      outerBackground: colors.silverBlue,
      secondaryText: colors.silver,
      brightText: colors.darkOrange,
    },
    topPlayerCard: {
      background: colors.crystal,
      border: colors.silverGray,
      primaryColor: colors.crystal,
      secondaryColor: colors.silver,
    },
    header: {
      background: colors.crystal,
      toggleButtonBackground: colors.crystal,
      profile: {
        background: colors.silverBlue,
        primary: colors.dark,
        secondary: colors.silver,
        activeItem: colors.lightOrange,
        buttonBackground: colors.crystal,
      },
    },
    topPlayers: {
      sectionTitleColor: colors.dark,
      sectionSubtitleColor: colors.silver,
    },
    chestCollections: {
      emptySearchResult: {
        color: colors.silver,
      },
    },
  },
  transition: {
    long: '.3s',
    default: '.2s',
    fast: '.1s',
  },
}
