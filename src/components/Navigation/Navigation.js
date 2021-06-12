import React, { useState } from "react";
import {
  NavbarContainer,
  SidebarIcon,
  SidebarContainer,
  SidebarItemsWrapper,
  SidebarItem,
  SidebarCloseIconContainer,
  SidebarCloseIcon,
  SidebarItemText,
} from "./Navigation.styles";

import { navigationData } from "./Navigation.data";

const Navigation = (props) => {

  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <NavbarContainer>
        <SidebarIcon
          onClick={() => {
            setSidebarActive(!sidebarActive);
          }}
        />
      </NavbarContainer>
      <SidebarContainer active={sidebarActive}>
        <SidebarCloseIconContainer>
          <SidebarCloseIcon
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
          />
        </SidebarCloseIconContainer>
        <SidebarItemsWrapper>
          {navigationData.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                onClick={() => {
                props.setActive(index);
                  setSidebarActive(!sidebarActive);
                }}
              >
                {item.icon}
                <SidebarItemText>{item.title}</SidebarItemText>
              </SidebarItem>
            );
          })}
        </SidebarItemsWrapper>
      </SidebarContainer>
    </>
  );
};

export default Navigation;