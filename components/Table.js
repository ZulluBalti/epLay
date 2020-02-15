import ClassRoom from './ClassRoom';
import EmptyRoom from './EmptyRoom';
import Spinner from '../components/Spinner';

export default ({isLoading, whichOne, classInfo, rooms}) => {
    let markup;
    if (!isLoading && !whichOne)
        return null;
    else if (isLoading) 
        markup = <Spinner />;
    else if (whichOne === 'emptyRoom')
        markup = <EmptyRoom rooms={rooms}/>;
    else if(whichOne === 'hasClass')
        markup = <ClassRoom classInfo={classInfo} />;
    
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
                    position: relative;
                    min-height: 100px;
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