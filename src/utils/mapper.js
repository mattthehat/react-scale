const allNotes = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'];

const scales = [
    {
        name: 'ionian',
        intervals: [2,2,1,2,2,2]
    },
    {
        name: 'dorian',
        intervals: [2,1,2,2,2,1]
    },
    {
        name: 'phrygian',
        intervals: [1,2,2,2,1,2]
    },
    {
        name: 'lydian',
        intervals: [2,2,2,1,2,2]
    },
    {
        name: 'mixolydian',
        intervals: [2,2,1,2,2,1]
    },
    {
        name: 'aeolian',
        intervals: [2,1,2,2,1,2]
    },
    {
        name: 'aeolian',
        intervals: [2,1,2,2,1,2]
    },
    {
        name: 'locrian',
        intervals: [1,2,2,1,2,2]
    },
    {
        name: 'minpent',
        intervals: [3,2,2,3]
    },
    {
        name: 'majpent',
        intervals: [2,2,3,2]
    },
    {
        name: 'insen',
        intervals: [1,4,2,3]
    },
    {
        name: 'iwato',
        intervals: [2,1,4,1]
    },
    {
        name: 'yo',
        intervals: [2,3,2,2]
    },
    {
        name: 'charukesi',
        intervals: [2,2,1,2,1,2]
    },
    {
        name: 'hungypmin',
        intervals: [2,1,3,1,1,3]
    },
    {
        name: 'enigmatic',
        intervals: [1,3,2,2,2,1]
    },
    {
        name: 'majarp',
        intervals: [4,3]
    },
    {
        name: 'maj7arp',
        intervals: [4,3,4]
    },
    {
        name: 'maj9arp',
        intervals: [4,3,4,5]
    },

]


const resolveFullScale =  (key, scale, data) => {

    // Find the intervals
    const intervals =  scales.find(i => i.name === scale).intervals;

    // Looks through all note and find index of starting note
    const keyIndex =  allNotes.findIndex(i => i.toLocaleLowerCase() === key);

    // Generate notes in octave
    const keyData = [...allNotes].splice(keyIndex, 12); 
    
    // Init notes in scale
    const notes = [];

    // Set first note
    notes.push(keyData[0])

    // Build scale array
    let position = 0;
    for(const interval of intervals) {
        position = position + interval;
        notes.push(keyData[position])
    }

    // Look though data and make active notes
    notes.forEach(note => {
        data.forEach(row => {
            if(row.note === note) {
                row.active = true;
            }
        })
    })

    // return mutated array
    return data;

}

export default resolveFullScale