export default ({classInfo}) => {
    const {roomNumber, timing, hasClass, address } = classInfo;
    let h2 = '';
    let p = '';

    if (hasClass){
        h2 = <h2>You've a class in Room# <span className="highlight">{roomNumber}</span></h2>
        p = <p>Room# <span className="highlight">{roomNumber}</span> is located at {address}.</p>
    }else {
        const timeRemaing = calcRemaing(timing);
    
        h2 = <h2>You don't have any class yet.</h2>;
        p = <p>
            Your next class is at <span className="highlight">{timing}</span> which is in <span className="hightlight">{timeRemaing}</span>.<br />
            Room# <span className="highlight">{roomNumber}</span> is located at {address}.
            </p>
    }
    return (
            <div>
                {h2}
                {p}
                <style jsx>{`
                    div {
                        color: var(--secondary-color);
                        text-align: center;
                        line-height: 1.5;
                    }
                   
                `}</style>
            </div>
    )
};

function calcRemaing(timing){
    let timeRemaing = '8 minutes';
    const d = new Date(2020, 1, 26, 14, 40);
    const h = d.getHours();
    const m = d.getMinutes();
    const time = timing.split(/:|\s/);
    // h = 14, 30
    // 15, 0;
    let rM = time[1] - m;

    let rH = time[0] - h;

    if (time[2] === 'pm')
        rH += 12;
    if (rM < 0){
        rM *= -1;
        rM = 60 - rM;
        rH--;
    }
    if (rH > 0)
        timeRemaing = `${rH} Hour(s) and ${rM} minute(s)`;
    else
        timeRemaing = `${rM} minute(s)`;

    return timeRemaing;
}