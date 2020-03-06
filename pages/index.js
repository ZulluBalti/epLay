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
            <footer>
                <p>
                Made by <a href="https://www.twitter.com/zullubalti" target="_blank"><span className="leader">Zullu Balti</span></a>
                </p>
                <p>
                    Co-Founders: 
                    <a href="https://www.twitter.com/zullubalti" target="_blank"><span className="co-founders">Shahzad Balagari</span></a>

                    <a href="https://www.twitter.com/zullubalti" target="_blank"><span className="co-founders">Muhammed Haris</span></a>
                </p>
            </footer>

            <style jsx global>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    user-select: none;
                }
                :root {
                    --primary-color: #000;
                    --secondary-color: #fff;
                    --green: #0caf96;
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
                footer p:first-child {
                    margin-bottom: 1rem;
                }
                .highlight {
                    color: #0caf96;
                }
                a {
                    text-decoration: none;
                }
                .leader {
                    color: var(--green);
                }
                .co-founders {
                    color: #a586ff;
                    margin: 0 1rem;
                }
                .leader:hover,
                .co-founders:hover{
                    opacity: 0.8
                }

            `}</style>
        </div>
    )
}

export default App;