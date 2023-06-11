import { StaticImageData } from 'next/image'

export type OtherCollectionsCarouselProps = {
  data: OtherCollectionsCardProps[]
}

export type OtherCollectionsCardProps = {
  name: string
  image: StaticImageData
  url: string
}
