import { Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, isInvisible, setLimit } from "../../data";
import { ROUTES } from "../../types/ROUTES";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import * as Styled from "./style";

export const Limit: React.FC = () => {
  const { t } = useTranslation();
  const isOpen = useSelector((state: RootState) => state.limitWindow.visible);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClose = () => {
    dispatch(isInvisible());
    navigate(ROUTES.home);
  };

  const onChange: (event: ChangeEvent<HTMLInputElement>) => void = event => {
    dispatch(setLimit(+event.target.value));
  };

  return (
    <Modal open={isOpen} handleClose={onClose}>
      <>
        <Styled.Box>
          <Typography sx={{ color: "color1" }}>{t("UpperLimit.part1")}</Typography>
          <Typography sx={{ color: "color4" }}>{t("UpperLimit.part2")}</Typography>
          <Typography sx={{ color: "color6" }}>{t("UpperLimit.part3")}</Typography>

          <Input type='number' onChange={event => onChange(event)} onSubmit={() => console.log("hello")} />

          <Styled.ButtonBox>
            <Button text={t("Confirm")} sx={{ minWidth: "20%" }} type='submit' />
            <Button text={t("Cancel")} sx={{ minWidth: "20%" }} onClick={onClose} />
          </Styled.ButtonBox>
        </Styled.Box>
      </>
    </Modal>
  );
};
