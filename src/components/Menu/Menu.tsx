import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isVisible } from "../../data/slices/limitWindow";
import { ROUTES } from "../../types/ROUTES";
import { Button } from "../Button";
import * as Styled from "./style";

export const Menu: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const chooseLimit = () => {
    dispatch(isVisible());
    navigate(ROUTES.limit);
  };

  return (
    <Styled.Box>
      <Button text={t("operations.Addition")} variant1={"true"} onClick={chooseLimit} />
      <Button text={t("operations.Substraction")} onClick={chooseLimit} />
      <Button text={t("operations.Multiplication")} variant1={"true"} onClick={chooseLimit} />
      <Button text={t("operations.Division")} onClick={chooseLimit} />
    </Styled.Box>
  );
};
