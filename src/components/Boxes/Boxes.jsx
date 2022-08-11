import Names from '../Names/Names';
import './Boxes.css';

function Boxes({arr}) {
    return (
        <div className='cont'>
            {
                arr.map(i =>
                    <div className="box" key={i.id} >
                        <div className="top">
                            <img src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className="main">
                            <div className="article">
                                <h3>{i.article}</h3>
                            </div>
                            <Names i={i} />
                            <span className='month'><div className="cir"></div> 3 minute read</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Boxes;
