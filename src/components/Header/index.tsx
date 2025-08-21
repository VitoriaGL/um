import { Imagem, Logo, TextHeader } from './styles'
import logo from '../../assets/img/Logotipo.png'
import fundo from '../../assets/img/Fundo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </Imagem>
)

export default Header
