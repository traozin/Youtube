import styled from "styled-components";
import { CSSReset } from "./CSSReset";
import { Logo } from "./svg/Logo";
import { Caption } from "./svg/Caption";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
        <Caption />
      </div>
    </StyledMenu>
  );
}


