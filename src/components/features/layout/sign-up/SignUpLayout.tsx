import { Header } from '../main/Header'
import { LayoutProps } from '../types'

export const SignUpLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header variant="auth" />
      <main>{children}</main>
    </div>
  )
}
