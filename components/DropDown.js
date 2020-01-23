export default (props) => {
    const opts =  props.options.map(op => <option key={op} value={op}>{op}</option>);
    const changeMe = (e) => {
        props.onChange(props.label, e.target.value);
    }
    return (
        <div>
            <span>{props.label}</span>
            <select onChange={changeMe}>
                {opts}
            </select>
            <style jsx>{`
                div {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                span {
                    font-size: 1.3rem;
                    text-transform: capitalize;
                }
                select {
                    padding: 0.5rem;
                    text-transform: uppercase;
                    background: var(--primary-color);
                    color: var(--secondary-color);
                    width: 100px;
                }
                @media (min-width: 500px){
                    div {  
                        flex-direction: column;
                        align-items: center;
                    }
                    span {
                        margin-bottom: 0.5rem;
                    }
                }
            `}</style>
        </div>
    )
}