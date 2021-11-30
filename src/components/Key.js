const Key = ({setKey}) => {

    const onSetKey = (e) => {
        setKey(e.target.value)
    }

    return (
        <div className="form__select-wrapper">
                <select className="form__select" onChange={onSetKey} defaultValue="">
                <option disabled hidden value="">-- Choose Key --</option>
                <option value="c">C</option>
                <option value="c#">C#/Db</option>
                <option value="d">D</option>
                <option value="d#">D#/Eb</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="f#">F#/Gb</option>
                <option value="g">G</option>
                <option value="g#">G#/Ab</option>
                <option value="a">A</option>
                <option value="a#">A#/Bb</option>
                <option value="b">B</option>
            </select>
        </div>
    )

}


export default Key;