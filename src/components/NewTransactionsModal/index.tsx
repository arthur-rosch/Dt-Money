import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransitionType,
  TransitionTypeButton,
} from './styles'
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransitionType>
            <TransitionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransitionTypeButton>

            <TransitionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TransitionTypeButton>
          </TransitionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
