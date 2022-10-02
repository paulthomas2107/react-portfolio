import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const SideBar = () => (
  <div class="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img src={LogoSubtitle} alt="slobadan" />
    </Link>
  </div>
)

export default SideBar
