export default (props) => {
    return (
        <button onClick={props.onClick} className={`primary ${props.secondary ? "secondary":""}`}>
            {props.children}
            <style jsx>{`
                button {
                    padding: 0.5rem 1rem;
                    border: 1px solid;
                    display: inline-block;
                    width: 100%;
                    font-size: 1rem;
                    cursor: pointer;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 1);
                    transition: 0.15s transform;
                    border-radius: 2px;
                }
                button:active {
                    transform: translateY(2px);
                    box-shadow: none;
                }
                button:hover {
                    opacity: 0.9;
                }
                button:focus {
                    outline: none;
                }
                .primary {
                    background: #009688;
                    border-color: #08584c;
                    color: var(--priry-color);
                }
                .secondary {
                    background: #673AB7;
                    border-color: #2f0b6f;
                    color: var(--secondary-color);
                }
            `}</style>
        </button>
    )
}