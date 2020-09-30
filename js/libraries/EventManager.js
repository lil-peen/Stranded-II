export default class EventManager{constructor(t,e,o){if("number"!=typeof e||"number"!=typeof o)throw new TypeError("Invalid offsets");this.offsetX=e,this.offsetY=o,this.canvas=t,this._doNotTouch={events:[],eventFunctions:[]}}addListener(t,e,o,s){"string"!=typeof s&&(s=""),this._doNotTouch.events.includes(t)?this._doNotTouch.eventFunctions.push({func:o,dimensions:e,name:s}):(this._doNotTouch.events.push(t),this._doNotTouch.eventFunctions.push({func:o,dimensions:e}),this.canvas.addEventListener(t,t=>{if(void 0===t.offsetX)throw new TypeError("Event type not supported");this._doNotTouch.eventFunctions.forEach(e=>{const o=e.dimensions;t.offsetX-this.offsetX>o.x&&t.offsetX-this.offsetX<o.x+o.width&&t.offsetY-this.offsetY>o.y&&t.offsetY-this.offsetY<o.y+o.height&&e.func(t)})}))}removeListener(t){this._doNotTouch.eventFunctions.forEach((e,o)=>{e.name===t&&eventFunctions.splice(o,1)})}get events(){return this._doNotTouch.eventFunctions}}