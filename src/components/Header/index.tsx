import { HeaderContainer, HeaderContent, NewTransactionsButton } from './styles'
import DtMoneyLogo from '../../assets/DtMoneyLogo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={DtMoneyLogo} alt="" />
        <NewTransactionsButton>Nova transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
