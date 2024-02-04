
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}



const Navbar = ({className} : NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.logo}>

      </div>
    </div>
    
  )
}

export default Navbar