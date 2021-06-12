import styled, { css } from "styled-components";
import { colors } from "../../constans/index";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const SidebarIconContainer = css`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.nav`
  ${SidebarIconContainer};
  height: 80px;
  margin-top: -80px;
  z-index: 99;
  position: sticky;
  top: 0;
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ active }) => (active ? "0" : "-100%")};
  transition: 800ms;
  background-color: ${colors.first};
  width: 250px;
  height: 100vh;
  box-shadow: 1px 1px #000;
  overflow: none;
  z-index: 100;
`;

const Icon = css`
  font-size: 30px;
  color: ${colors.second};
  cursor: pointer;
  margin-left: 50px;
  transition: 0.2s color ease-in-out;

  &:hover {
    color: ${colors.third};
  }
`;
export const SidebarIcon = styled(FaBars)`
  ${Icon};
`;

export const SidebarCloseIconContainer = styled.div`
  ${SidebarIconContainer};
  width: 100%;
`;

export const SidebarCloseIcon = styled(VscChromeClose)`
  ${Icon};
`;

export const SidebarItemsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 0;
`;

export const SidebarItem = styled.li`
  text-decoration: none;
  color: ${colors.second};
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s color ease-in-out;
  &:hover {
    color: ${colors.third};
  }
`;

export const SidebarItemText = styled.span`
  margin-left: 15px;
`;