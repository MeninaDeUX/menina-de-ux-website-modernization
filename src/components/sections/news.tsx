import { Box } from '../common/box'
import { Button } from '../common/button'
import { Title } from '../common/title'
import Image from 'next/image'

export function SectionNews() {
  return (
    <Box>
      <Image
        src="/img-mulher-cursonovo.png"
        alt="imagem de uma mulher falando cursos novo"
        width={411}
        height={320}
        quality={100}
        priority
      />
      <div className="max-w-[493px] space-y-6">
        <Title type="h2" size="b2">
          Quer ficar por dentro de todas as novidades?
        </Title>
        <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
          Entre no canal do Telegram da Menina de UX e fique sabendo de todos os
          cursos e processos seletivos novos!
        </p>
        <div className="w-auto lg:w-[186px]">
          <Button.Root variant="pink">
            <Button.Text>Entrar no canal!</Button.Text>
          </Button.Root>
        </div>
      </div>
    </Box>
  )
}