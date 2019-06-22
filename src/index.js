// CommonJS 스펙의 모듈 가져오기
var _ = require('lodash');

// named inport: {} 안에 이름 명시
import {area, circumference} from "./js/circle";
// default import: {} 없이 명시, 이름을 임의로 변경가능
import hhh from'./js/cubic'

'./js/circle';

import './style.css';
import './hello.scss';

function component() {
  let element = document.createElement('div');
  
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  return element;
}

console.log('webpack test');
console.log(area(10), circumference(10));
console.log(hhh(10));

document.body.appendChild(component());