export type PromocodeInputTextButtonProps = {
  variant: PromocodeInputTextButtonVariant
  onClick: () => void
}

export enum PromocodeInputTextButtonVariant {
  ChangePromocode,
  Apply,
  Clear,
}
