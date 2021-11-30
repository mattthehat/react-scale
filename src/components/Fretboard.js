import React from 'react';
import './Fretboard.scss'

const Fretboard = ({data, chosenKey}) => {

    return (
        <div className="scale-container">
            <div className="fretboard">
                {data.map((i, index) => {
                    return (
                        <div key={i.id} className={`fretboard__item ${i.note.toLowerCase() === chosenKey ? 'fretboard__item--key' : ''}`}>
                            {i.active && (
                                <div className="fretboard__item-note">
                                    {i.note}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="fretboard">
                <div className="fretboard__marker"></div>
                <div className="fretboard__marker">1</div>
                <div className="fretboard__marker">2</div>
                <div className="fretboard__marker">3</div>
                <div className="fretboard__marker">4</div>
                <div className="fretboard__marker">5</div>
                <div className="fretboard__marker">6</div>
                <div className="fretboard__marker">7</div>
                <div className="fretboard__marker">8</div>
                <div className="fretboard__marker">9</div>
                <div className="fretboard__marker">10</div>
                <div className="fretboard__marker">11</div>
                <div className="fretboard__marker">12</div>
            </div>
        </div>
    )
}

export default Fretboard;