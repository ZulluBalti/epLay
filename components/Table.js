import ClassRoom from './ClassRoom';
import EmptyRoom from './EmptyRoom';

export default ({data}) => {
    let markup;
    if (data.isLoading) 
        markup = <div className="loader">Loading...</div>;
    else if (data.whichOne === 'emptyRoom')
        markup = <EmptyRoom rooms={data.rooms}/>;
    else if(data.whichOne === 'hasClass')
        markup = <ClassRoom roomNumber={data.class.roomNumber} time={data.class.time} />;
    
    return (
        <section>
            {markup}
            <style jsx>{`
                section {
                    margin-top: 1rem;
                    background: #111;
                    padding: 1rem;
                    border-radius: 5px;
                    margin-bottom: 50px;
                    overflow: auto;
                }
               
                @media (min-width: 500px) {
                    section {
                        margin-top: 2rem;
                    }
                }
                `}</style>
        </section>
    )
}