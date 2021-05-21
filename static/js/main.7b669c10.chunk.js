(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,,function(e,n,t){},,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),s=t(7),r=t.n(s),i=t(2),o=t(9),p=t(8),u=(t(14),t(15),t(0)),d=function(e){return Object(a.useEffect)((function(){var n=new p.c(document.getElementById(e.data.opening+"-board"),{position:"start",sprite:{url:"./chessboard-sprite-staunty.svg"}});return setTimeout((function(){n.setPosition(e.data.fen)}),500),function(){n.destroy()}})),Object(u.jsxs)("div",{className:"card-wrapper",id:e.data.opening,onClick:e.pick,children:[Object(u.jsx)("div",{className:"card-board",id:e.data.opening+"-board"}),Object(u.jsx)("h2",{children:e.data.fullTitle})]})},m=(t(17),function(e){function n(e){var n=[],t=e.filter((function(e){return!1===e.picked})),a=t[Math.floor(Math.random()*t.length)],c=p.findIndex((function(e){return e===a}));for(n.push(c);n.length<3;){var s=Math.floor(Math.random()*e.length);if(!n.includes(s))Math.floor(2*Math.random())?n.push(s):n.unshift(s)}return n}function t(n){var t=n.target.id,a=p,c=p.findIndex((function(e){return e.opening===t}));if(p[c].picked)e.lossSequence(f);else{var s=f;s++,g(s),a[c].picked=!p[c].picked,m(Object(o.a)(a))}}var c=function(e,n,t,a){return{opening:e,fullTitle:n,fen:t,picked:a}},s=Object(a.useState)([c("ruy","Ruy Lopez","r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3",!1),c("italian","Italian Game","r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3",!1),c("sicilian","Sicilian Defense","rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",!1),c("french","French Defense","rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",!1),c("carokann","Caro-Kann Defense","rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",!1),c("pirc","Pirc Defense","rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",!1),c("queens","Queen\u2019s Gambit","rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",!1),c("indian","Indian Defenses","rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",!1),c("english","English Opening","rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",!1),c("reti","Reti Opening","rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1",!1)]),r=Object(i.a)(s,2),p=r[0],m=r[1],l=Object(a.useState)(n(p)),b=Object(i.a)(l,2),j=b[0],h=b[1],P=Object(a.useState)(0),O=Object(i.a)(P,2),f=O[0],g=O[1];return Object(a.useEffect)((function(){f<10?h(n(p)):e.winSequence(f)}),[p]),Object(u.jsxs)("div",{className:"game-wrapper",children:[Object(u.jsxs)("div",{className:"game-rulesandscore",children:[Object(u.jsx)("div",{className:"game-rules",children:Object(u.jsx)("p",{children:"This game tests your memory. Don\u2019t click the same chess opening twice!"})}),Object(u.jsx)("div",{className:"game-score",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"game-score-label",children:"Score:"}),Object(u.jsx)("td",{children:f})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"game-score-label",children:"High Score:"}),Object(u.jsx)("td",{children:e.hiScore})]})]})})]}),Object(u.jsx)("div",{className:"game-cards",children:j.map((function(e){return Object(u.jsx)(d,{pick:t,data:p[e]},p[e].opening)}))})]})}),l=(t(6),function(e){return Object(u.jsxs)("div",{className:"video-wrapper",children:[Object(u.jsx)("video",{autoPlay:!0,onEnded:e.newGame,children:Object(u.jsx)("source",{src:"./queensgambit_lossvid.mp4",type:"video/mp4"})}),Object(u.jsx)("div",{className:"video-message",children:"Oh no! You\u2019ve lost!"})]})}),b=function(e){return Object(u.jsxs)("div",{className:"video-wrapper",children:[Object(u.jsx)("video",{autoPlay:!0,onEnded:e.newGame,children:Object(u.jsx)("source",{src:"./queensgambit_winvid.mp4",type:"video/mp4"})}),Object(u.jsx)("div",{className:"video-message",children:"Hooray! You win!"})]})},j=(t(18),function(e){return Object(u.jsxs)("div",{className:"menu-hamburger",onClick:e.handleHamburger,children:[Object(u.jsx)("span",{id:"menu-hamburger-1"}),Object(u.jsx)("span",{id:"menu-hamburger-2"}),Object(u.jsx)("span",{id:"menu-hamburger-3"})]})}),h=function(){return Object(u.jsxs)("div",{className:"menu-overlay",children:[Object(u.jsx)("div",{className:"menu-link",children:Object(u.jsx)("a",{href:"https://www.github.com/ndmekala/memory",children:"Repository"})}),Object(u.jsx)("div",{className:"menu-link",children:Object(u.jsx)("a",{href:"https://ndmekala.github.io/",children:"Portfolio"})})]})},P=function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],c=n[1];return Object(u.jsxs)("nav",{className:"menu-wrapper",children:[Object(u.jsx)(h,{animationClass:"menu-visible"}),Object(u.jsx)(j,{animationClass1:"menu-hamburger-animate-1",animationClass2:"menu-hamburger-animate-2",animationClass3:"menu-hamburger-animate-3",handleHamburger:function(){var e=document.getElementById("menu-hamburger-1"),n=document.getElementById("menu-hamburger-2"),a=document.getElementById("menu-hamburger-3"),s=document.querySelector(".menu-overlay");t?(e.classList.remove("menu-hamburger-animate-1"),n.classList.remove("menu-hamburger-animate-2"),a.classList.remove("menu-hamburger-animate-3"),s.classList.remove("menu-cover")):(e.classList.add("menu-hamburger-animate-1"),n.classList.add("menu-hamburger-animate-2"),a.classList.add("menu-hamburger-animate-3"),s.classList.add("menu-cover")),c(!t)}})]})},O=(t(19),function(){var e=Object(a.useState)(!0),n=Object(i.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),o=r[0],p=r[1],d=Object(a.useState)(!1),j=Object(i.a)(d,2),h=j[0],O=j[1],f=Object(a.useState)(0),g=Object(i.a)(f,2),x=g[0],v=g[1];function N(){p(!1),O(!1),c(!0)}return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(P,{}),o&&Object(u.jsx)(l,{newGame:N}),h&&Object(u.jsx)(b,{newGame:N}),Object(u.jsxs)("section",{className:"app-hero",children:[Object(u.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:"./queensgambit_headervid_01.mp4",type:"video/mp4"})}),Object(u.jsxs)("div",{className:"app-hero-container",children:[Object(u.jsx)("h1",{className:"app-miniheader",children:"The"}),Object(u.jsx)("h1",{children:"Queen\u2019s"}),Object(u.jsx)("h1",{children:"Gambit"}),Object(u.jsx)("button",{onClick:function(){document.querySelector(".game-wrapper").scrollIntoView()},children:"Play"})]})]}),Object(u.jsx)("div",{className:"app-game-container",children:t&&Object(u.jsx)(m,{lossSequence:function(e){e>x&&v(e),c(!1),p(!0)},winSequence:function(e){v(e),c(!1),O(!0)},hiScore:x})})]})});r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7b669c10.chunk.js.map