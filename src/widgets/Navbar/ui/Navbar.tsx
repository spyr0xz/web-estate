
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import logo from '/src/shared/assets/images/logo.png'


interface NavbarProps {
  className?: string;
}



const Navbar = ({className} : NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.logo}>
        <img src={logo} alt="" />
      </div>
    </div>
    
  )
}

export default Navbar