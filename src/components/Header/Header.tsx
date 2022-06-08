import { useTranslation } from "react-i18next";
import * as Styled from "./style";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.HeaderBox>
      <Styled.Text variant='h4' sx={{ color: "pastelPink" }}>
        {t("headerInfo.part1")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "pastelBlue" }}>
        {t("headerInfo.part2")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "pastelOrange" }}>
        {t("headerInfo.part3")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "pastelYellow" }}>
        {t("headerInfo.part4")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "pastelViolet" }}>
        {t("headerInfo.part5")}
      </Styled.Text>
    </Styled.HeaderBox>
  );
};
