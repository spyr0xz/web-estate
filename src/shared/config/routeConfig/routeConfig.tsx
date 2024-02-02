import { RouteProps } from "react-router-dom";
import { BuyPage } from "../../../pages/BuyPage";
import { RentPage } from "../../../pages/RentPage";
import { LandingPage } from "../../../pages/LandingPage";
import { SellPage } from "../../../pages/SellPage";
import { ManagePage } from "../../../pages/ManagePage";
import { ResourcesPage } from "../../../pages/ResourcesPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";

export enum AppRoutes {
  DEFAULT = "default",
  RENT = "rent",
  BUY = "buy",
  SELL = "sell",
  MANAGE = "manage",
  RESOURCES = "resources",
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.DEFAULT]: "/",
  [AppRoutes.RENT]: "/rent",
  [AppRoutes.BUY]: "/buy",
  [AppRoutes.SELL]: "/sell",
  [AppRoutes.MANAGE]: "/manage",
  [AppRoutes.RESOURCES]: "/resources",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.DEFAULT]: {
    path: routePath.default,
    element: <LandingPage />,
  },
  [AppRoutes.RENT]: {
    path: routePath.rent,
    element: <RentPage />,
  },
  [AppRoutes.BUY]: {
    path: routePath.buy,
    element: <BuyPage />,
  },
  [AppRoutes.SELL]: {
    path: routePath.sell,
    element: <SellPage />,
  },
  [AppRoutes.MANAGE]: {
    path: routePath.manage,
    element: <ManagePage />
  },
  [AppRoutes.RESOURCES]: {
    path: routePath.resources,
    element: <ResourcesPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />
  }
};
