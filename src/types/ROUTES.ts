export enum OperationRoute {
  Addition = "addition",
  Substraction = "substraction",
  Multiplication = "multiplication",
  Division = "division"
}

export enum BaseRoute {
  Home = "home",
  NotFound = "not-found",
  Chart = "chart",
  Limit = "limit"
}

export type AppRouteType = BaseRoute | OperationRoute;

export const ROUTES: Record<AppRouteType, string> = Object.freeze({
  [BaseRoute.Home]: "/",
  [BaseRoute.NotFound]: "*",
  [OperationRoute.Addition]: "/addition",
  [OperationRoute.Substraction]: "/substraction",
  [OperationRoute.Multiplication]: "/multiplication",
  [OperationRoute.Division]: "/division",
  [BaseRoute.Chart]: "chart",
  [BaseRoute.Limit]: "limit"
});
