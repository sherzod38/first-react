import TableItem from '../../components/TableItem/TableItem'
import VetnamliBrat from '../../assets/images/5.png'

import './Table.scss';

const TableInfoArr = [
    {
        id: 0,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 1,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 2,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 3,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 4,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 5,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 6,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 7,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
    {
        id: 8,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dataHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat

    },
]

const Table = () => {
    return (
        <div className="table">
            <h1>Table</h1>

            {
                TableInfoArr.map((item) => (
                    <TableItem
                    id={item.id}
                    subject={item.subject}
                    updateDay={item.updateDay}
                    customerName={item.customerName}
                    customerDate={item.customerDate}
                    dateDay={item.dateDay}
                    dataHour={item.dataHour}
                    status={item.status}
                    imgLink={item.imgLink}
            
                    
                    />
                ))
            }
        </div>
    )
}

export default Table;