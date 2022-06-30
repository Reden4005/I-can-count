import { Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, isInvisible, setLimit } from "../../data";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import * as Styled from "./style";
import { ROUTES, UserFormElement } from "../../types";

export const Limit: React.FC = () => {
  const { t } = useTranslation();
  const isOpen = useSelector((state: RootState) => state.limitWindow.visible);
  const [userLimit, setUserLimit] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const invalidLimit = userLimit === null || userLimit < 10;

  const onClose = () => {
    dispatch(isInvisible());
    navigate(ROUTES.home);
  };

  const onChange: (event: ChangeEvent<HTMLInputElement>) => void = event => {
    setUserLimit(+event.target.value);
  };

  const handleSubmit = (event: FormEvent<UserFormElement>) => {
    event.preventDefault();
    dispatch(isInvisible());
    dispatch(setLimit(+event.currentTarget.userInput.value));
  };

  return (
    <Modal open={isOpen} handleClose={onClose}>
      <Styled.Box>
        <Typography sx={{ color: "color1" }}>{t("UpperLimit.part1")}</Typography>
        <Typography sx={{ color: "color4" }}>{t("UpperLimit.part2")}</Typography>
        <Typography sx={{ color: "color6" }}>{t("UpperLimit.part3")}</Typography>

        <form onSubmit={handleSubmit}>
          <Input type='number' onChange={onChange} id='userInput' />
          <Styled.ButtonBox>
            <Button text={t("Confirm")} sx={{ minWidth: "20%" }} type='submit' disabled={invalidLimit} />
            <Button text={t("Cancel")} sx={{ minWidth: "20%" }} onClick={onClose} />
          </Styled.ButtonBox>
        </form>
      </Styled.Box>
    </Modal>
  );
};
