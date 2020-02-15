export default () => (
    <div>
        <span className='first'></span>
        <span className='second'></span>
        <span className='third'></span>
        <style jsx>{`
            div {
                width: 50px;
                height: 50px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            span {
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                border: 3px solid transparent;
                border-top: 3px solid var(--secondary-color);
                border-radius: 50%;
                width: 50px;
                height: 50px;
            }
            .first {
                animation: rot 1s infinite;
                animation-delay: 0s;
            }
            .second {
                animation: rot 1s infinite;
                animation-delay: 0.1s;
            }
            .third {
                animation: rot 1s infinite;
                animation-delay: 0.2s;
            }
            @keyframes rot {
                to {
                    transform: rotate(360deg);
                }
            }
        `}</style>
    </div>
);