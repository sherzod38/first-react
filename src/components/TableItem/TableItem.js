import './TableItem.scss'

const TableItem = (props) => {
    const {
        id,
        subject,
        updateDay,
        customerName,
        customerDate,
        dateDay,
        dataHour,
        status,
        imgLink
    } = props;
    return (
        <div className="table-item">
            <div className="item-left">
                <img src={imgLink} alt=""/>
                <div className="left-info">
                    <h5>{subject}</h5>
                    <h6>{updateDay}</h6>
                </div>

            </div>
            <div className="item-right">
                <div className="customer-name">
                    <h5>{customerName}</h5>
                    <h6>{customerDate}</h6>
                </div>
                <div className="customer-name">
                    <h5>{dateDay}</h5>
                    <h6>{dataHour}</h6>
                </div>
                <h3 className="table-tag">{status}</h3>
                <button className="item-toggle">uchta nuqta</button>

            </div>
        </div>
    )
}

export default TableItem;