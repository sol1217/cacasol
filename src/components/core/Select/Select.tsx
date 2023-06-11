import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { css } from 'styled-components'

import selectChevronDown from '@assets/svg/select-chevron-down.svg'

import { Dropdown, HeadValue, SelectHead, HeadIconWrap, DropdownOption } from './Select.elements'
import { Option, SelectProps } from './Select.types'
import { locateDropdown } from './Select.utils'

export const Select = ({
  value,
  options,
  onChange,
  placeholder = 'Select...',
  dropdownStyles = css``,
}: SelectProps) => {
  const headRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const [open, setOpen] = useState(false)
  const [portalContainer, setPortalContainer] = useState<Element | null>(null)

  useEffect(() => {
    setPortalContainer(document.querySelector('#__next'))
  }, [])

  const optionClickHandler = (option: Option) => () => {
    onChange(option)
    setOpen(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timer

    const mouseDownHandler = (e: any) => {
      if (!dropdownRef.current?.contains(e.target) && !headRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }

    if (!headRef.current) throw Error('No select head element')

    if (open && dropdownRef.current) {
      locateDropdown(headRef.current, dropdownRef.current)

      window.addEventListener('mousedown', mouseDownHandler)
      window.addEventListener('touchstart', mouseDownHandler)

      interval = setInterval(() => {
        if (headRef.current && dropdownRef.current) {
          locateDropdown(headRef.current, dropdownRef.current)
        }
      }, 50)
    } else if (dropdownRef.current) {
      dropdownRef.current.style.display = 'none'
    }

    return () => {
      window.removeEventListener('mousedown', mouseDownHandler)
      window.removeEventListener('touchend', mouseDownHandler)
      clearInterval(interval)
    }
  }, [open])

  return (
    <>
      <SelectHead ref={headRef} onClick={() => setOpen(!open)} className="select-head">
        <HeadValue className="select-head-value">{value?.label || placeholder}</HeadValue>
        <HeadIconWrap $active={open} className="select-head-icon-wrap">
          <img src={selectChevronDown.src} alt="" />
        </HeadIconWrap>
      </SelectHead>
      {portalContainer &&
        createPortal(
          <>
            {open && (
              <Dropdown ref={dropdownRef} $sx={dropdownStyles}>
                {options.map((option) => (
                  <DropdownOption
                    onClick={optionClickHandler(option)}
                    key={option.value}
                    className="select-dropdown-option">
                    {option.label}
                  </DropdownOption>
                ))}
              </Dropdown>
            )}
          </>,
          portalContainer,
        )}
    </>
  )
}
