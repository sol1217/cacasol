import styled from 'styled-components'

export const HoverImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition: opacity 0.2s;
  opacity: 0;
`

export const PetCardWrap = styled.div`
  position: relative;
  min-width: 120px;
  width: 120px;
  height: 166px;
  min-height: 166px;

  &:hover {
    cursor: pointer;

    ${HoverImageWrap} {
      opacity: 1;
    }
  }
`

export const AvatarWrap = styled.div`
  position: absolute;
  top: 6px;
  left: calc(50% - 24px);
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #e3edf2;
  background-color: #fff;
`

export const ChanceWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: Gilroy sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #86959e;
`

export const Chance = styled.span`
  font-weight: 700;
  color: inherit;
`

export const PetName = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: Gilroy sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
  color: #2f2f2f;
  padding: 0 10px;
`

export const TagsWrap = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: Gilroy sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
  color: #2f2f2f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const Tag = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  border-radius: 25px;
  font-family: Gilroy sans-serif;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  padding: 2px 8px;
  color: #fff;
`

export const Price = styled.div`
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: Gilroy sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
`

export const StatusWrap = styled.div<{ $available?: boolean }>`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 60px;
  left: 0;
  right: 0;
  font-family: Gilroy sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  gap: 4px;
  color: ${({ $available }) => ($available ? '#3ac080' : '#86959e')};
`
