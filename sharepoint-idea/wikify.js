'use strict';
const style = document.createElement('style');
style.innerHTML = `
body {
    background: #000;
    color: #888;
    width: 40rem;
    margin: auto;
}
`;
document.head.appendChild(style);

const script = document.createElement('script');
script.src = './marked.min.js';
script.onload = function() {
    const p = document.getElementsByTagName('pre')[0];
    const t = document.createElement('template');
    t.innerHTML = marked.parse(p.textContent);
    document.body.insertBefore(t.content, p);
    p.remove();

    const h = document.getElementsByTagName('h1')[0];
    const title = document.createElement('title');
    title.innerHTML = h.textContent;
    document.head.appendChild(title);
}
document.head.appendChild(script);
