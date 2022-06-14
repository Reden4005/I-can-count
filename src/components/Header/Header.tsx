import { useTranslation } from "react-i18next";
import * as Styled from "./style";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.HeaderBox>
      <Styled.Text variant='h4' sx={{ color: "color1" }}>
        {t("headerInfo.part1")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "color4" }}>
        {t("headerInfo.part2")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "color6" }}>
        {t("headerInfo.part3")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "color3" }}>
        {t("headerInfo.part4")}
      </Styled.Text>
      <Styled.Text variant='h4' sx={{ color: "color2" }}>
        {t("headerInfo.part5")}
      </Styled.Text>
    </Styled.HeaderBox>
  );
};
