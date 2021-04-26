import {
  Chat,
  EmojiFlags,
  ExpandMore,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../stateProvider";
import SidebarRow from "../sidebarRow";
import { SidebarContainer } from "./styles";
function Sidebar() {

  const [{user}, dispath] = useStateValue()

  return (
    <SidebarContainer>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </SidebarContainer>
  );
}

export default Sidebar;
