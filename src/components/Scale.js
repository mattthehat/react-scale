const Scale = ({setScale}) => {

    const onSetScale = (e) => {
        setScale(e.target.value)
    }

    return (
        <div className="form__select-wrapper">
            <select className="form__select" onChange={onSetScale} defaultValue="">
                <optgroup label="Modes">
                    <option disabled hidden value="">-- Choose Scale --</option>
                    <option value="ionian">Ionian/Major</option>
                    <option value="dorian">Dorian</option>
                    <option value="phrygian">Phrygian</option>
                    <option value="lydian">Lydian</option>
                    <option value="mixolydian">Mixolydian</option>
                    <option value="aeolian">Aeolian/Minor</option>
                    <option value="locrian">Locrian</option>
                </optgroup>
                <optgroup label="Pentatanoic">
                    <option value="majpent">Major Pentatanoic</option>
                    <option value="minpent">Minor Pentatanoic</option>
                </optgroup>
                <optgroup label="European">
                    <option value="hungypmin">Hungarian Gypsy Minor</option>
                    <option value="enigmatic">Enigmatic</option>
                </optgroup>  
                <optgroup label="Japanese">
                    <option value="insen">Insen</option>
                    <option value="iwato">Iwato</option>
                    <option value="yo">Yo</option>
                </optgroup>
                <optgroup label="Indian">
                    <option value="charukesi">Charukesi</option>
                </optgroup>
                <optgroup label="Arpeggios">
                    <option value="majarp">Major</option>
                    <option value="maj7arp">Major 7th</option>
                    <option value="maj9arp">Major 9th</option>
                </optgroup>
            </select>
        </div>
    )
}

export default Scale;