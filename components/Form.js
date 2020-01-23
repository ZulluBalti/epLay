import DropDown from "./DropDown";
import Button from './Button';

export default (props) => {
    const yearOpts = ['fa19', 'fa18'];
    const facultyOpts = ['bcs', 'ee'];
    const sectionOpts = ['1d', '2d'];

    const changeIt = (field, value) => {
        const info = {...props.info, [field]: value};
        props.changeInfo(info);
    }

    const submit = (e, fun) => {
        e.preventDefault();
        props.onSubmit(fun);
    }
    return (
        <form>
            <div className="one">
                <DropDown label="year" options={yearOpts} onChange={changeIt}/>
            </div>
            <div className="two">
                <DropDown label="faculty" options={facultyOpts}  onChange={changeIt}/>
            </div>
            <div className="three">
                <DropDown label="section" options={sectionOpts}  onChange={changeIt}/>
            </div>
            <div className="four">
                <Button onClick={(e) => submit(e, "emptyRoom")}>Find Room</Button>
            </div>
            <div className="five">
                <Button secondary onClick={(e) => submit(e, "hasClass")}>Do I have a class?</Button>
            </div>
            <style jsx>{`
                form {
                    background: #111;
                    padding: 1rem;
                    display: grid;
                    grid-template-columns: 1fr;
                    row-gap: 0.5rem;
                    border-radius: 5px;
                }

                @media (min-width: 500px) {
                    form {
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                    }
                    .one, .four {
                        justify-self: start
                    }
                    .three, .five {
                        justify-self: end;
                    }
                    .two {
                        justify-self: center;
                    }
                    div {
                        align-self: center;
                    }
                    .five {
                        grid-area: 2/3/3/4;
                    }
                    .five, .four {
                        width: 100%;
                    }
                }
            `}</style>
        </form>
    )
}