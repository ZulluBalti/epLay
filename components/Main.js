import  Form from './Form';
import  Table from './Table';
import {useState} from 'react';

const Main = () => {
    const [info, changeInfo] = useState({year: "fa19", faculty: '', section: ''});
    const [data, changeData] = useState({isLoading: false, rooms: [], class: {roomNumber: null, time: null}, whichOne: null});

    const submit = (what) => {
        changeData({...data, isLoading: true});
        if(what === 'emptyRoom'){
            setTimeout(() => {
                changeData({
                    ...data,
                    rooms:[
                        {roomNumber: 321, address: "Quid-e-azam block"},
                        {roomNumber: 184, address: "Alama Iqbal block"},
                        {roomNumber: 189, address: "Alama Iqbal block"},
                        {roomNumber: 222, address: "Zullu block"}
                    ],
                    whichOne: "emptyRoom",
                    isLoading:false
                });
            }, 3000);
        }else if(what === 'hasClass') {
            setTimeout(() => {
                changeData({
                    ...data,
                    class: {roomNumber: 303, time: "12:00"},
                    isLoading:false,
                    whichOne: "hasClass"
                });
            }, 3000);
        }
    }

    return (
        <main>
            <div>
                <Form onSubmit={submit} info={info} changeInfo={changeInfo}/>
                <Table data={data} />
            </div>
            <style jsx>{`
                div {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 1rem;
                }
                main {
                    background: #333;
                    min-height: calc(100vh - 50px - 70px);
                }
            `}
            </style>
        </main>
    )
}

export default Main;

