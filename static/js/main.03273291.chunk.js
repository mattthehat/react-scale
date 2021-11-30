(this.webpackJsonpscales=this.webpackJsonpscales||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),i=t(4),c=t.n(i),s=(t(15),t(9)),o=t(5),r=t(6),d=t(10),v=t(7),j=(t(16),t(17),t(0)),u=function(e){var a=e.data,t=e.chosenKey;return Object(j.jsxs)("div",{className:"scale-container",children:[Object(j.jsx)("div",{className:"fretboard",children:a.map((function(e,a){return Object(j.jsx)("div",{className:"fretboard__item ".concat(e.note.toLowerCase()===t?"fretboard__item--key":""),children:e.active&&Object(j.jsx)("div",{className:"fretboard__item-note",children:e.note})},e.id)}))}),Object(j.jsxs)("div",{className:"fretboard",children:[Object(j.jsx)("div",{className:"fretboard__marker"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"1"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"2"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"3"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"4"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"5"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"6"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"7"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"8"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"9"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"10"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"11"}),Object(j.jsx)("div",{className:"fretboard__marker",children:"12"})]})]})},b=function(e){var a=e.setKey;return Object(j.jsx)("div",{className:"form__select-wrapper",children:Object(j.jsxs)("select",{className:"form__select",onChange:function(e){a(e.target.value)},defaultValue:"",children:[Object(j.jsx)("option",{disabled:!0,hidden:!0,value:"",children:"-- Choose Key --"}),Object(j.jsx)("option",{value:"c",children:"C"}),Object(j.jsx)("option",{value:"c#",children:"C#/Db"}),Object(j.jsx)("option",{value:"d",children:"D"}),Object(j.jsx)("option",{value:"d#",children:"D#/Eb"}),Object(j.jsx)("option",{value:"e",children:"E"}),Object(j.jsx)("option",{value:"f",children:"F"}),Object(j.jsx)("option",{value:"f#",children:"F#/Gb"}),Object(j.jsx)("option",{value:"g",children:"G"}),Object(j.jsx)("option",{value:"g#",children:"G#/Ab"}),Object(j.jsx)("option",{value:"a",children:"A"}),Object(j.jsx)("option",{value:"a#",children:"A#/Bb"}),Object(j.jsx)("option",{value:"b",children:"B"})]})})},f=function(e){var a=e.setScale;return Object(j.jsx)("div",{className:"form__select-wrapper",children:Object(j.jsxs)("select",{className:"form__select",onChange:function(e){a(e.target.value)},defaultValue:"",children:[Object(j.jsxs)("optgroup",{label:"Modes",children:[Object(j.jsx)("option",{disabled:!0,hidden:!0,value:"",children:"-- Choose Scale --"}),Object(j.jsx)("option",{value:"ionian",children:"Ionian/Major"}),Object(j.jsx)("option",{value:"dorian",children:"Dorian"}),Object(j.jsx)("option",{value:"phrygian",children:"Phrygian"}),Object(j.jsx)("option",{value:"lydian",children:"Lydian"}),Object(j.jsx)("option",{value:"mixolydian",children:"Mixolydian"}),Object(j.jsx)("option",{value:"aeolian",children:"Aeolian/Minor"}),Object(j.jsx)("option",{value:"locrian",children:"Locrian"})]}),Object(j.jsxs)("optgroup",{label:"Pentatanoic",children:[Object(j.jsx)("option",{value:"majpent",children:"Major Pentatanoic"}),Object(j.jsx)("option",{value:"minpent",children:"Minor Pentatanoic"})]}),Object(j.jsxs)("optgroup",{label:"European",children:[Object(j.jsx)("option",{value:"hungypmin",children:"Hungarian Gypsy Minor"}),Object(j.jsx)("option",{value:"enigmatic",children:"Enigmatic"})]}),Object(j.jsxs)("optgroup",{label:"Japanese",children:[Object(j.jsx)("option",{value:"insen",children:"Insen"}),Object(j.jsx)("option",{value:"iwato",children:"Iwato"}),Object(j.jsx)("option",{value:"yo",children:"Yo"})]}),Object(j.jsx)("optgroup",{label:"Indian",children:Object(j.jsx)("option",{value:"charukesi",children:"Charukesi"})}),Object(j.jsxs)("optgroup",{label:"Arpeggios",children:[Object(j.jsx)("option",{value:"majarp",children:"Major"}),Object(j.jsx)("option",{value:"maj7arp",children:"Major 7th"}),Object(j.jsx)("option",{value:"maj9arp",children:"Major 9th"})]})]})})},h=t(3),m=t(8),p=["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"],O=[{name:"ionian",intervals:[2,2,1,2,2,2]},{name:"dorian",intervals:[2,1,2,2,2,1]},{name:"phrygian",intervals:[1,2,2,2,1,2]},{name:"lydian",intervals:[2,2,2,1,2,2]},{name:"mixolydian",intervals:[2,2,1,2,2,1]},{name:"aeolian",intervals:[2,1,2,2,1,2]},{name:"aeolian",intervals:[2,1,2,2,1,2]},{name:"locrian",intervals:[1,2,2,1,2,2]},{name:"minpent",intervals:[3,2,2,3]},{name:"majpent",intervals:[2,2,3,2]},{name:"insen",intervals:[1,4,2,3]},{name:"iwato",intervals:[2,1,4,1]},{name:"yo",intervals:[2,3,2,2]},{name:"charukesi",intervals:[2,2,1,2,1,2]},{name:"hungypmin",intervals:[2,1,3,1,1,3]},{name:"enigmatic",intervals:[1,3,2,2,2,1]},{name:"majarp",intervals:[4,3]},{name:"maj7arp",intervals:[4,3,4]},{name:"maj9arp",intervals:[4,3,4,5]}],x=function(e,a,t){var l=O.find((function(e){return e.name===a})).intervals,n=p.findIndex((function(a){return a.toLocaleLowerCase()===e})),i=[].concat(p).splice(n,12),c=[];c.push(i[0]);var s,o=0,r=Object(m.a)(l);try{for(r.s();!(s=r.n()).done;){o+=s.value,c.push(i[o])}}catch(d){r.e(d)}finally{r.f()}return c.forEach((function(e){t.forEach((function(a){a.note===e&&(a.active=!0)}))})),t},_=function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).setScaleData=function(e){if(e.preventDefault(),l.state.key&&l.state.scale){var a=[];l.state.initialFretboard.forEach((function(e){return a.push(Object(s.a)({},e))}));var t=l.resolveScale(l.state.key,l.state.scale,a);l.setState({fretboard:t})}},l.setKey=function(e){l.setState({key:e})},l.setScale=function(e){return[l.setState({scale:e})]},l.state={key:null,scale:null,fretboard:h,initialFretboard:h},l.resolveScale=x,l}return Object(r.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Scale Mapper"}),Object(j.jsxs)("form",{className:"form",onSubmit:this.setScaleData,children:[Object(j.jsx)(b,{setKey:this.setKey}),Object(j.jsx)(f,{setScale:this.setScale}),Object(j.jsx)("button",{disabled:!this.state.key||!this.state.scale,className:"form__button",type:"submit",children:"Generate Notes"})]}),Object(j.jsx)(u,{data:this.state.fretboard,chosenKey:this.state.key})]})}}]),t}(n.a.Component),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),y()},3:function(e){e.exports=JSON.parse('[{"id":"1","note":"E","alt":null,"active":false},{"id":"2","note":"F","alt":null,"active":false},{"id":"3","note":"F#","alt":"Gb","active":false},{"id":"4","note":"G","alt":null,"active":false},{"id":"5","note":"G#","alt":"Ab","active":false},{"id":"6","note":"A","alt":null,"active":false},{"id":"7","note":"A#","alt":"Bb","active":false},{"id":"8","note":"B","alt":null,"active":false},{"id":"9","note":"C","alt":null,"active":false},{"id":"10","note":"C#","alt":"Db","active":false},{"id":"11","note":"D","alt":null,"active":false},{"id":"12","note":"D#","alt":"Eb","active":false},{"id":"13","note":"E","alt":null,"active":false},{"id":"53","note":"B","alt":null,"active":false},{"id":"54","note":"C","alt":null,"active":false},{"id":"55","note":"C#","alt":"Db","active":false},{"id":"56","note":"D","alt":null,"active":false},{"id":"57","note":"D#","alt":"Eb","active":false},{"id":"58","note":"E","alt":null,"active":false},{"id":"59","note":"F","alt":null,"active":false},{"id":"60","note":"F#","alt":"Gb","active":false},{"id":"61","note":"G","alt":null,"active":false},{"id":"62","note":"G#","alt":"Ab","active":false},{"id":"63","note":"A","alt":null,"active":false},{"id":"64","note":"A#","alt":"Bb","active":false},{"id":"65","note":"B","alt":null,"active":false},{"id":"40","note":"G","alt":null,"active":false},{"id":"41","note":"G#","alt":"Ab","active":false},{"id":"42","note":"A","alt":null,"active":false},{"id":"43","note":"A#","alt":"Bb","active":false},{"id":"44","note":"B","alt":null,"active":false},{"id":"45","note":"C","alt":null,"active":false},{"id":"46","note":"C#","alt":"Db","active":false},{"id":"47","note":"D","alt":null,"active":false},{"id":"48","note":"D#","alt":"Eb","active":false},{"id":"49","note":"E","alt":null,"active":false},{"id":"50","note":"F","alt":null,"active":false},{"id":"51","note":"F#","alt":"Gb","active":false},{"id":"52","note":"G","alt":null,"active":false},{"id":"27","note":"D","alt":null,"active":false},{"id":"28","note":"D#","alt":"Eb","active":false},{"id":"29","note":"E","alt":null,"active":false},{"id":"30","note":"F","alt":null,"active":false},{"id":"31","note":"F#","alt":"Gb","active":false},{"id":"32","note":"G","alt":null,"active":false},{"id":"33","note":"G#","alt":"Ab","active":false},{"id":"34","note":"A","alt":null,"active":false},{"id":"35","note":"A#","alt":"Bb","active":false},{"id":"36","note":"B","alt":null,"active":false},{"id":"37","note":"C","alt":null,"active":false},{"id":"38","note":"C#","alt":"Db","active":false},{"id":"39","note":"D","alt":null,"active":false},{"id":"14","note":"A","alt":null,"active":false},{"id":"15","note":"A#","alt":"Bb","active":false},{"id":"16","note":"B","alt":null,"active":false},{"id":"17","note":"C","alt":null,"active":false},{"id":"18","note":"C#","alt":"Db","active":false},{"id":"19","note":"D","alt":null,"active":false},{"id":"20","note":"D#","alt":"Eb","active":false},{"id":"21","note":"E","alt":null,"active":false},{"id":"22","note":"F","alt":null,"active":false},{"id":"23","note":"F#","alt":"Gb","active":false},{"id":"24","note":"G","alt":null,"active":false},{"id":"25","note":"G#","alt":"Ab","active":false},{"id":"26","note":"A","alt":null,"active":false},{"id":"66","note":"E","alt":null,"active":false},{"id":"67","note":"F","alt":null,"active":false},{"id":"68","note":"F#","alt":"Gb","active":false},{"id":"69","note":"G","alt":null,"active":false},{"id":"70","note":"G#","alt":"Ab","active":false},{"id":"71","note":"A","alt":null,"active":false},{"id":"72","note":"A#","alt":"Bb","active":false},{"id":"73","note":"B","alt":null,"active":false},{"id":"74","note":"C","alt":null,"active":false},{"id":"75","note":"C#","alt":"Db","active":false},{"id":"76","note":"D","alt":null,"active":false},{"id":"77","note":"D#","alt":"Eb","active":false},{"id":"78","note":"E","alt":null,"active":false}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.03273291.chunk.js.map