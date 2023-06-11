export type PromoCarouselProps = {
  data: PromoCarouselSlide[]
}

export type PromoCarouselSlide = {
  header: string
  subHeader: string
  buttonText: string
  backgroundImage: string
  onButtonClick: () => void
}
