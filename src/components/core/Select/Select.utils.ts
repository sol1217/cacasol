import { DROPDOWN_TOP_OFFSET } from './Select.constants'

export const locateDropdown = (head: HTMLDivElement, dropdown: HTMLDivElement) => {
  const headCoords = head.getBoundingClientRect()
  const headTop = headCoords.top + window.scrollY
  const headLeft = headCoords.left + window.scrollX
  const headWidth = headCoords.width

  const bottomBorder = window.scrollY + window.innerHeight

  dropdown.style.display = 'flex'
  dropdown.style.width = `${headWidth}px`
  dropdown.style.left = `${headLeft}px`
  dropdown.style.top = `${headTop + head.offsetHeight + DROPDOWN_TOP_OFFSET}px`

  const dropdownCoords = dropdown.getBoundingClientRect()
  const dropdownBottom = dropdownCoords.bottom + window.scrollY

  if (dropdownBottom > bottomBorder) {
    dropdown.style.top = `${headTop - DROPDOWN_TOP_OFFSET - dropdownCoords.height}px`
  }
}
