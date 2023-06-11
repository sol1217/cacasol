export type PromocodeInputProps = {
  applyPromocodeHandler: (promocode: string) => PromocodeInputResult
}

export type PromocodeInputResult = PromocodeInputSuccessResult | PromocodeInputErrorResult

export type PromocodeInputSuccessResult = { status: 'success'; promocodeValue: number }

export type PromocodeInputErrorResult = { status: 'error' }
