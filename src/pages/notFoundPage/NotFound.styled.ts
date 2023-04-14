import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  padding: 100px 20px 100px;
  height: 100vh;
  background-size: cover;

  @media ${(p) => p.theme.media.mobile} {
    padding: 100px 20px 100px;
  }
  @media ${(p) => p.theme.media.tablet} {
    padding: 160px 32px 100px 32px;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 127px 16px 200px 16px;
  }
`;

export const Text = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  @media ${(p) => p.theme.media.mobile} {
    font-size: 24px;
    flex-direction: column;
  }

  @media ${(p) => p.theme.media.tablet} {
    font-size: 32px;
    flex-direction: column;
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: 48px;
    flex-direction: row;
  }
`;

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;
`;
export const HomeLink = styled(Link)`
  color: #ffffff;
  display: flex;

  @media ${(p) => p.theme.media.mobile} {
    font-size: 28px;
  }

  @media ${(p) => p.theme.media.tablet} {
    font-size: 32px;
  }
`;

export const HomeLinkBox = styled.div`
  background-color: #f59256;
  height: 70px;
  width: 100px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  display: flex;
  border: 3px solid pink;
  border-radius: 10px;

  @media ${(p) => p.theme.media.desktop} {
    height: 100px;
    width: 100px;
    padding: 40px;
  }
`;

export const Error = styled.span`
  display: block;
  color: #f59256;
  @media ${(p) => p.theme.media.mobile} {
    font-size: 32px;
  }
  @media ${(p) => p.theme.media.tablet} {
    font-size: 40px;
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: 48px;
  }
`;
