import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { ROUTES } from "../types/ROUTES";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES["not-found"]} element={<div>Error</div>} />
      <Route
        path={ROUTES.addition}
        element={
          <>
            <div>dodawanie</div>
            <Outlet />
          </>
        }
      >
        <Route path={ROUTES.chart} element={<div>dod/chart</div>} />
      </Route>
      <Route path={ROUTES.substraction} element={<div>odejmowanie</div>} />
      <Route path={ROUTES.multiplication} element={<div>mnozenie</div>} />
      <Route path={ROUTES.division} element={<div>dzielenie</div>} />
    </Routes>
  );
};
