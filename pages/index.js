import Main from '../components/Main';
import Head from 'next/head';

const App = () => {
    return (
        <div>
            <Head>
                <title>EpLay</title>
            </Head>
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
                .highlight {
                        color: #0caf96;
                }

            `}</style>
        </div>
    )
}

export default App;