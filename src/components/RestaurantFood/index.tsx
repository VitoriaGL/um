import {
  ContainerFood,
  ImagemFood,
  TitleFood,
  DescriptionFood,
  StyledButton
} from './styles'

type FoodProps = {
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
  onClick?: () => void
}

export default function Food({
  onClick,
  foto,
  descricao,
  nome
}: FoodProps) {
  // CORREÇÃO: A função deve receber a string diretamente
  function limitarDescricao(descricao: string): string {
    return descricao.length > 150 ? descricao.slice(0, 150) + '...' : descricao
  }

  return (
    <ContainerFood onClick={onClick}>
      <ImagemFood src={foto} />
      <div onClick={onClick}>
        <TitleFood>{nome}</TitleFood>
        {/* CORREÇÃO: Passar a string diretamente */}
        <DescriptionFood>{limitarDescricao(descricao)}</DescriptionFood>
        <StyledButton>Adicionar ao carrinho</StyledButton>
      </div>
    </ContainerFood>
  )
}
