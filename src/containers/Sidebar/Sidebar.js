import { Link } from "react-router-dom";
import { useState } from "react";

import SidebarButton from "../../components/SidebarButton/SidebarButton";
import {
  OverviewIcon,
  TicketsIcon,
  IdeasIcon,
  ContactsIcon,
  AgentsIcon,
  ArticlesIcon,
  SettingsIcon,
  SubscriptionIcon,
} from "../../assets/icons/Icons";

import SidebarLogoIcon from "../../assets/images/logo.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  const [activPage, setActivPage] = useState("");

  return (
    <div className="sidebar">
      <Link href="javascript:void(0)" className="sidebar-logo">
        <img src={SidebarLogoIcon} alt="" />
        <h2>Dashboard Kit</h2>

        {/* <h2>{activPage}</h2>/ */}
      </Link>

      <Link
        to="/overview"
        className="link"
        onClick={() => setActivPage("overview")}
      >
        <SidebarButton
          title="Overview"
          icon={<OverviewIcon />}
          active={activPage === "overview"}
        />
      </Link>

      <Link
        to="/tickets"
        className="link"
        onClick={() => setActivPage("tickets")}
      >
        <SidebarButton
          title="Tickets"
          icon={<TicketsIcon />}
          active={activPage === "tickets"}
        />
      </Link>

      <Link to="ideas" className="link" onClick={() => setActivPage("ideas")}>
        <SidebarButton
          title="Ideas"
          icon={<IdeasIcon />}
          active={activPage === "ideas"}
        />
      </Link>

      <Link to="contacts" className="link" onClick={() => setActivPage("contacts")}>
            <SidebarButton
                title="Contacts"
                icon={<ContactsIcon/>}
                active={activPage === "contacts"}
            />
      </Link>

      <SidebarButton title="Agents" icon={<AgentsIcon />} />
      <SidebarButton title="Articles" icon={<ArticlesIcon />} />
      <SidebarButton title="Settings" icon={<SettingsIcon />} />
      <SidebarButton title="Subscription" icon={<SubscriptionIcon />} />
    </div>
  );
};

export default Sidebar;
