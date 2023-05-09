import React from "react";
import {
  Container,
  FaSunIcon,
  HiMoonIcon,
  IconsBox,
  SwitchInput,
  SwitchLabel,
} from "./ThemeTogglerButton.styled";

interface ThemeTogglerProps {
  themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
  return (
    <Container>
      <SwitchLabel htmlFor="checkbox">
        <SwitchInput
          id="checkbox"
          type="checkbox"
          onClick={themeToggler}
          onChange={() => false}
          checked={window.localStorage.getItem("theme") === "light"}
        />
        <IconsBox className="slider round">
          {window.localStorage.getItem("theme") !== "light" ? (
            <>
              <HiMoonIcon />
            </>
          ) : (
            <>
              <FaSunIcon />
            </>
          )}
        </IconsBox>
      </SwitchLabel>
    </Container>
  );
}

export default TogglerButton;
