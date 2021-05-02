import {Helmet} from 'react-helmet' 

import './Tickets.scss';


import Table from '../../containers/Table/Table';


const Tickets = () => {
    return (
       <div className="tickets-page">
           <h1>Tickets</h1>
           <Helmet>
               <title>Tickets</title>
           </Helmet>

           <Table/>
       </div>

    )
}

export default Tickets;