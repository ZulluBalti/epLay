export default ({roomNumber, time}) => {
    return (
            <div>
                {
                    roomNumber !== null ? <h2>You've a class in Room# <span className="highlight">{roomNumber}</span></h2>:<h2>You don't have any class yet.</h2>
                }

                {
                    roomNumber !== null ? <p>Room# <span className="highlight">{roomNumber}</span> is located at Quaid e azam block.</p>:<p>Your next class is at <span className="highlight">{time} pm</span> which is in <span className="hightlight">8 minutes</span></p>
                }
                <style jsx>{`
                    div {
                        color: #e444ff;
                        text-align: center;
                        line-height: 1.5;
                    }
                    .highlight {
                        color: #0caf96;
                    }
                `}</style>
            </div>
    )
};