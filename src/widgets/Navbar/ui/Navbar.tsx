import { useTranslation } from "react-i18next";
import { routePath } from "../../../shared/config/routeConfig/routeConfig";
import { classNames } from "../../../shared/lib/classNames/classNames";
import AppLink, { AppLinkVariant } from "../../../shared/ui/AppLink/AppLink";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
import logo from "/src/shared/assets/images/logo.png";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.content}>
        <div className={cls.logo}>
          <AppLink to={routePath.default}>
            <img src={logo} alt="" />
          </AppLink>
        </div>
        <div className={cls.items}>
          <AppLink
            variant={AppLinkVariant.NAV}
            activeClassName={cls.active}
            className={cls.link}
            to={routePath.rent}
          >
            {t('Rent')}
          </AppLink>
          <AppLink
            variant={AppLinkVariant.NAV}
            activeClassName={cls.active}
            className={cls.link}
            to={routePath.buy}
          >
            {t('Buy')}
          </AppLink>
          <AppLink
            variant={AppLinkVariant.NAV}
            activeClassName={cls.active}
            className={cls.link}
            to={routePath.sell}
          >
            {t('Sell')}
          </AppLink>
          <AppLink
            variant={AppLinkVariant.NAV}
            activeClassName={cls.active}
            className={cls.link}
            to={routePath.manage}
          >
            {t('Manage propety')}
          </AppLink>
          <AppLink
            variant={AppLinkVariant.NAV}
            activeClassName={cls.active}
            className={cls.link}
            to={routePath.resources}
          >
            {t('Resources')}
          </AppLink>
        </div>
        <div className={cls.btns}>
          <Button theme={ButtonTheme.OUTLINE}>{t('Login')}</Button>
          <Button>{t('Sign Up')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
