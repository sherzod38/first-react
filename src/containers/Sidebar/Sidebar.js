import {Link, link} from 'react-router-dom';

import SidebarButton from '../../components/SidebarButton/SidebarButton';
import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubscriptionIcon

} from '../../assets/icons/Icons'

import SidebarLogoIcon from '../../assets/images/logo.svg'
import './Sidebar.scss'
import { useState } from 'react';

const Sidebar = () => {

    const [activPage, setActivPage] = useState("");


    return (
        <div className="sidebar">
            <a href="javascript:void(0)" className="sidebar-logo">
                <img src={SidebarLogoIcon} alt=""/>
                <h2>Dashboard Kit</h2>

                <h2>{activPage}</h2>

            </a>

            <Link to="overview" onClick={() => setActivPage('overview')}>
                <SidebarButton
                    title="Overview"
                    icon={<OverviewIcon/>}
                    active={activPage == "overview"}
                />
            </Link>

            <Link to="tickets" onClick={() => setActivPage('tickets')}>
                <SidebarButton
                    title="Tickets"
                    icon={<TicketsIcon/>}
                    active={activPage == "tickets"}
                />
            </Link>

            <Link to="ideas" onClick={() => setActivPage('ideas')}>
                <SidebarButton
                    title="Ideas"
                    icon={<IdeasIcon/>}
                    active={activPage == "ideas"}
                />
            </Link>



            
            
            
            <SidebarButton title="Contacts" icon={<ContactsIcon/>}/>
            <SidebarButton title="Agents" icon={<AgentsIcon/>}/>
            <SidebarButton title="Articles" icon={<ArticlesIcon/>}/>
            <SidebarButton title="Settings" icon={<SettingsIcon/>}/>
            <SidebarButton title="Subscription" icon={<SubscriptionIcon/>}/>
        </div>
    )
}

export default Sidebar;