import * as Dialog from '@radix-ui/react-dialog'
import DtMoneyLogo from '../../assets/DtMoneyLogo.svg'
import { NewTransactionModal } from '../NewTransactionsModal'
import { HeaderContainer, HeaderContent, NewTransactionsButton } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={DtMoneyLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova transação</NewTransactionsButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
