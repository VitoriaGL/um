import { ContainerFooter, Logo, ListLogos, TextFooter } from './styles'
import logo from '../../assets/img/Logotipo.png'
import instagramLogo from '../../assets/imagens/Insta.svg'
import twitterLogo from '../../assets/imagens/x.svg'
import facebookLogo from '../../assets/imagens/Face.svg'

const Footer = () => (
  <ContainerFooter>
    <div className="footer-content">
      <Logo src={logo} alt="Efood" />
      <ListLogos>
        <li>
          <a href="#">
            <img src={instagramLogo} alt="Instagram" />
          </a>
        </li>
        <li id="twitter">
          <a href="#">
            <img src={twitterLogo} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebookLogo} alt="facebook" />
          </a>
        </li>
      </ListLogos>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </div>
  </ContainerFooter>
)

export default Footer
