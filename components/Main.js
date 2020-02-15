import  Form from './Form';
import  Table from './Table';
import {useState} from 'react';
import axios from 'axios';

const Main = () => {
    const [info, changeInfo] = useState({year: "fa19", faculty: 'bcs', section: '1d'});
    const [isLoading, toggleLoading] = useState(false);
    const [classInfo, setClassInfo] = useState({
                                    roomNumber: null,
                                    timimg: null, 
                                    class: '', 
                                    address: '',
                                    hasClass: null
                                });
    const [whichOne, setOne] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [errors, setErrors] = useState(null);

    const submit = async (what) => {
        toggleLoading(true);
        if(what === 'emptyRoom'){
            setOne('emptyRoom');
            const res = await axios.get('/api/emptyRoom');
            const json = res.data;
            if (json.error)
                setErrors(json.error);
            else
                setRooms(json);
            toggleLoading(false);
        }else if(what === 'hasClass') {
            setOne('hasClass');
            const url = `/api/classRoom?year=${info.year}&faculty=${info.faculty}&section=${info.section}`;
            const res = await axios.get(url);
            const json = res.data;
            setClassInfo(json);
            toggleLoading(false);
        }
    }

    return (
        <main>
            <div>
                <Form onSubmit={submit} info={info} changeInfo={changeInfo}/>
                <Table 
                    isLoading={isLoading} 
                    classInfo={classInfo} 
                    whichOne={whichOne}
                    rooms={rooms}
                    errors={errors}
                />
            </div>
            <style jsx>{`
                div {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 1rem;
                }
                main {
                    background: #171515;
                    min-height: calc(100vh - 50px - 70px);
                }
            `}
            </style>
        </main>
    )
}

export default Main;

