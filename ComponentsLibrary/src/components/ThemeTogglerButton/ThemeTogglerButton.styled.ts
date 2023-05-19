import styled from "styled-components";
import { HiMoon } from "react-icons/hi";
import { FaSun } from "react-icons/fa";

export const Container = styled.div`
  border-color: ${({ theme }) => theme.colors.accent};
`;

export const HiMoonIcon = styled(HiMoon)`
  margin-right: auto;
  height: 25px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 11;
`;

export const FaSunIcon = styled(FaSun)`
  margin-left: auto;
  height: 15px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 11;
`;

export const IconsBox = styled.div`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 30px;
  z-index: 20;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55px;
  height: 24px;
  padding: 5px 7px;
  border-radius: 30px;
  border-color: ${({ theme }) => theme.colors.accent};
  background-color: #0f11148a;
  background-color: ${({ theme }) => theme.colors.background};
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 34px;
  border: 1px solid #8a67fa;
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.text};

  @media ${(p) => p.theme.media.tablet} {
    top: 25px;
    right: 60px;
  }
  @media screen and (min-width: 940px) {
    right: 100px;
  }
  @media ${(p) => p.theme.media.desktop} {
    top: 25px;
    right: 140px;
  }

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 7px;
    top: 7px;
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + IconsBox:before {
    -webkit-transform: translateX(35px);
    -ms-transform: translateX(35px);
    transform: translateX(35px);
  }
`;

export const SwitchLabel = styled.label`
  display: inline-block;
  width: 4rem;
  height: 1.5rem;
`;
