import './Buttons.css';

function Buttons() {
    return (
        <div className="tabs">
            <button className="btn active">All</button>
            <button className="btn">News</button>
            <button className="btn">Articles</button>
            <button className="btn">Stories</button>
        </div>
    );
}

export default Buttons;
