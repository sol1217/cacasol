export type RegistrationInputProps = {
  variant: RegistrationInputVariant
  placeholder: string
  onChange: (value: string) => void
}

export enum RegistrationInputVariant {
  Email,
  Nickname,
  Password,
}
