import { Link, LinkProps, NavLink } from "react-router-dom";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkVariant {
  DEFAULT = "default",
  NAV = "nav",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  activeClassName?: string;
}

const AppLink = (props: AppLinkProps) => {
  const {
    className,
    variant = AppLinkVariant.DEFAULT,
    to,
    children,
    activeClassName = "",
    ...otherProps
  } = props;

  if (variant === AppLinkVariant.DEFAULT) {
    return (
      <Link
        className={classNames(cls.AppLink, {}, [className])}
        to={to}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [className])
      }
      to={to}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};

export default AppLink;
