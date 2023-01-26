import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransitionType,
  TransitionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
  price: z.number(),
  category: z.string(),
  description: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(date: newTransactionInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(date)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransitionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransitionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransitionTypeButton>

                  <TransitionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransitionTypeButton>
                </TransitionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
