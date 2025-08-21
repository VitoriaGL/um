import { Imagem, Logo, TextHeader } from './styles'
import logo from '.../../assets/img/logo'
import fundoHeader from '../assets/fundoHeader.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundoHeader})` }}>
    <Logo src={logo} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </Imagem>
)

export default Header
