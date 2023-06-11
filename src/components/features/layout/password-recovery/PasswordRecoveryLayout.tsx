import { Header } from '../main/Header'
import { LayoutProps } from '../types'

export const PasswordRecoveryLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header variant="auth" />
      <main>{children}</main>
    </div>
  )
}
