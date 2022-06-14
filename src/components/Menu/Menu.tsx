import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import * as Styled from "./style";

export const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.Box>
      <Button text={t("operations.Addition")} variant1={true} />
      <Button text={t("operations.Substraction")} />
      <Button text={t("operations.Multiplication")} variant1={true} />
      <Button text={t("operations.Division")} />
    </Styled.Box>
  );
};
