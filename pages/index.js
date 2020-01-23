import Main from '../components/Main';

const App = () => {
    return (
        <div>
            <header>
                <h1>EpLay</h1>
            </header>
            <Main />
            <footer>Made by Zullu Balti</footer>

            <style jsx global>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                :root {
                    --primary-color: #000;
                    --secondary-color: #fff;
                } 
                *::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                    background: var(--primary-color);
                }
                *::-webkit-scrollbar-thumb {
                    background: #555;
                    border-radius: 10px;
                }
                header, footer {
                    background: var(--primary-color);
                    color: var(--secondary-color);
                    text-align: center;
                    padding: 1rem;
                }
                body {
                    background: #070707;
                    color: var(--secondary-color);
                 }
                footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }

            `}</style>
        </div>
    )
}

export default App;