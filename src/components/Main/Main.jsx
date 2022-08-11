import Header from '../Header/Header';
import Buttons from '../Buttons/Buttons';
import './Main.css';
import Boxes from '../Boxes/Boxes';

function Main() {
    const arr = [
        { id: 1, article: 'Technology and remote work: A blessing or a curse?', photo: '', time: '3 moths ago', name: 'Jude Sampson Jr.', stack: 'SOFTWARE DEVELOPER' },
        { id: 2, article: 'Technology and remote work: A blessing or a curse?', photo: '', time: '3 moths ago', name: 'Albert Flores', stack: 'DIGITAL MARKETER' },
        { id: 3, article: 'Technology and remote work: A blessing or a curse?', photo: '', time: '3 moths ago', name: 'Floyd Miles', stack: 'SOFTWARE DEVELOPER' },
        { id: 4, article: 'Technology and remote work: A blessing or a curse?', photo: '', time: '3 moths ago', name: 'Jude Sampson Jr.', stack: 'SOFTWARE DEVELOPER' },
        { id: 5, article: 'Technology and remote work: A blessing or a curse?', photo: '', time: '3 moths ago', name: 'Jude Sampson Jr.', stack: 'SOFTWARE DEVELOPER' },
        { id: 6, article: 'Technology and remote work: A blessing or a curse?', photo: '', time: '3 moths ago', name: 'Jude Sampson Jr.', stack: 'SOFTWARE DEVELOPER' }
    ]
    return (
        <div className="App">
            <Header/>
            <h1>Get the latest news, articles and stories from Gigy</h1>
            <Buttons />
            <Boxes arr={arr}/>
        </div>
    );
}

export default Main;
