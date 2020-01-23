export default ({rooms}) => {
    let markup = ''
    if(rooms.length > 0){
        const roomRow = rooms.map( (d, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{d.roomNumber}</td>
                            <td>{d.address}</td>
                            <style jsx>{`
                                td{
                                    border: 1px solid #fff;
                                    border-collapse: collapse;
                                    text-align: center;
                                }
                                td{
                                    padding: 1rem;
                                }
                            `}</style>
                        </tr>
                        ));

        markup = <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Room #</th>
                            <th>Block</th>
                        </tr>
                    </thead>
                    <tbody>
                    {roomRow}
                    </tbody>
                    <style jsx>{`
                        table {
                            width: 100%;
                        }
                        table, th, tr {
                            border: 1px solid #fff;
                            border-collapse: collapse;
                            text-align: center;
                        }
                        th {
                            padding: 1rem;
                        }
                    `}
                    </style>
                </table>
    }else {
        markup = <div className="noFree">
                    <h2>Sorry, No empty rooms.</h2>
                    <style jsx>{`
                        div {
                            color: #0caf96;
                            text-align: center;
                        }
                    `}</style>
                </div>
    }
    return markup;
}