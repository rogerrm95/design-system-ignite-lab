import { Envelope, Key } from 'phosphor-react'
// Components //
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
// Styles //
import './styles/global.css'

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col'>
      <Logo className='mb-4' />

      <Heading asChild size='lg'>
        <h1>Ignite Lab</h1>
      </Heading>

      <Text className='text-gray-400' size='lg'>
        Faça login e comece a usar!
      </Text>

      <form className='mt-8 mb-10 max-w-[400px] px-2 w-full flex flex-col gap-4'>
        {/* E-MAIL */}
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text>Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input placeholder='johndoe@example.com.br' id='email' type='email' />
          </TextInput.Root>
        </label>

        {/* SENHA */}
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Key />
            </TextInput.Icon>

            <TextInput.Input placeholder='****************' id='password' type="password" />
          </TextInput.Root>
        </label>

        {/* LEMBRAR DADOS */}
        <label className='flex items-center gap-2' htmlFor='remember'>
          <Checkbox id='remember' />

          <Text size='sm' className='font-semibold'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        {/* LOGAR */}
        <Button className='mt-4' type='submit'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center justify-center gap-4'>
        <Text asChild className='text-gray-400 underline hover:text-cyan-100 transition-colors' size='sm'>
          <a href="/forgot-pass">Esqueceu sua senha?</a>
        </Text>

        <Text asChild className='text-gray-400 underline hover:text-cyan-100 transition-colors' size='sm'>
          <a href="/create-account">Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  )
}
