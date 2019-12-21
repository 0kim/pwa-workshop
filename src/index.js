import React from 'react';
import ReactDOM, { render } from 'react-dom';

const App = () => (
    <div className="app">
        Hello Azure~ and PWA~ 2
    </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');   // 'service-worker.js' 는 GenerateSW가 생성해줌 
    })
}