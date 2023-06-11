import { NavigationButton } from '@core'

import { CollectionPreviewArrowBox } from './CollectionPreview.elements'
import { CollectionPreviewArrowProps } from './CollectionPreview.types'

export const CollectionPreviewArrow = ({ onClick, direction }: CollectionPreviewArrowProps) => {
  return (
    <div onClick={onClick}>
      <CollectionPreviewArrowBox $right={direction === 'forward' ? 0 : 36}>
        <NavigationButton direction={direction} />
      </CollectionPreviewArrowBox>
    </div>
  )
}
