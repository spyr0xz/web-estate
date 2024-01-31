import { Navigate, RouteProps} from "react-router-dom";
import SellPage from "../../../pages/SellPage/ui/SellPage";

export enum AppRoutes {
  DEFAULT = 'default',
  RENT = 'rent',
  BUY = 'buy',
  SELL = 'sell',
  MANAGE = 'manage',
  RESOURCES = 'resources',
  NOT_FOUND = 'not-found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.DEFAULT]: '/',
  [AppRoutes.RENT]: '/rent',
  [AppRoutes.BUY]: '/buy',
  [AppRoutes.SELL]: '/sell',
  [AppRoutes.MANAGE]: '/manage',
  [AppRoutes.RESOURCES]: '/resources',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
 [AppRoutes.DEFAULT]: {
  path: routePath.default,
  element: <Navigate to={routePath.default} />
 },
 [AppRoutes.RENT]: {
  path: routePath.rent,
  element: <SellPage />
 }
}