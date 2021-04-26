import { Avatar, IconButton } from "@material-ui/core";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  HeaderInput,
  HeaderOption,
  HeaderRightInfo,
} from "./styles";
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
          alt=""
        />

        <HeaderInput>
          <Search />
          <input placeholder="Search" type="text" />
        </HeaderInput>
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderOption className="active">
          <Home fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <Flag fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <SubscriptionsOutlined fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <StorefrontOutlined fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <SupervisedUserCircle fontSize="large" />
        </HeaderOption>
      </HeaderMiddle>
      <HeaderRight>
        <HeaderRightInfo>
          <Avatar />
          <h4>Miguel Arreaza</h4>
        </HeaderRightInfo>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
