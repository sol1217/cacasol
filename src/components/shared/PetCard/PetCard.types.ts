export type PetCategory = 1 | 2 | 3
export type PetCardTag = 'F' | 'R' | 'M' | 'N'
export type PetCardStatus = 'available' | 'out' | 'sold'

export type CardBgImage = {
  main: {
    src: string
    width: number
    height: number
  }
  pressed: {
    src: string
    width: number
    height: number
  }
}

export interface PetCardProps {
  id: string
  name: string
  avatar: string
  category: PetCategory
  dropChance: number
  price: number
  tags: PetCardTag[]
  status?: PetCardStatus
}
