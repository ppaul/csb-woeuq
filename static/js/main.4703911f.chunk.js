(this["webpackJsonptic-tac-toe-game-in-progress"]=this["webpackJsonptic-tac-toe-game-in-progress"]||[]).push([[0],{17:function(e,t,s){"use strict";s.r(t);var n=s(1),l=s.n(n),i=s(11),c=s.n(i),a=s(7),r=s(4),o=s(3),h=s(5),u=s(6),b=s(2),d=s(9),j=s(8),O=s(0),p={display:"flex"},x={width:"60px",height:"60px",backgroundColor:"#ddd",margin:"4px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",color:"white"},m={backgroundColor:"#eee",width:"208px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",border:"3px #eee solid"},k={display:"flex",alignItems:"center",flexDirection:"column"},f={marginTop:"5px",marginBottom:"5px",fontWeight:"bold",fontSize:"16px"},y={marginTop:"15px",marginBottom:"16px",width:"80px",height:"40px",backgroundColor:"#8acaca",color:"white",fontSize:"16px"},v=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(u.a)(s,[{key:"handleClick",value:function(){this.setState({clicked:!0}),this.props.onCellClick(this.props.row,this.props.column)}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"square",onClick:this.handleClick,style:x,children:null!==this.props.symbol&&this.props.symbol})}}]),s}(l.a.Component),C={cells:[[null,null,null],[null,null,null],[null,null,null]],nextSymbol:"X",winner:"none"},g=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state=Object(o.a)(Object(o.a)({},C),{},{score:{X:0,0:0}}),n.onCellClick=n.onCellClick.bind(Object(b.a)(n)),n.reset=n.reset.bind(Object(b.a)(n)),n.checkHasWon=n.checkHasWon.bind(Object(b.a)(n)),n}return Object(u.a)(s,[{key:"reset",value:function(){this.setState(C)}},{key:"checkHasWon",value:function(e,t){if(this.hasWonOnRow(e)||this.hasWonOnColum(t)||(t===e||2===t&&0===e||0===t&&2===e)&&this.hasWonOnDiag(e,t)){var s=this.state,n=s.nextSymbol,l=s.score;this.setState({winner:n});var i=l[n]+1;this.setState({score:Object(o.a)(Object(o.a)({},l),{},Object(r.a)({},n,i))})}}},{key:"hasWonOnRow",value:function(e){var t=[this.state.cells[e][0],this.state.cells[e][1],this.state.cells[e][2]];return t[0]===t[1]&&t[1]===t[2]}},{key:"hasWonOnColum",value:function(e){var t=[this.state.cells[0][e],this.state.cells[1][e],this.state.cells[2][e]];return t[0]===t[1]&&t[1]===t[2]}},{key:"hasWonOnDiag",value:function(e,t){var s=e===t?[this.state.cells[0][0],this.state.cells[1][1],this.state.cells[2][2]]:[this.state.cells[2][0],this.state.cells[1][1],this.state.cells[0][2]];return s[0]===s[1]&&s[1]===s[2]}},{key:"onCellClick",value:function(e,t){if(!this.state.cells[e][t]&&"none"===this.state.winner){for(var s=[Object(a.a)(this.state.cells[0]),Object(a.a)(this.state.cells[1]),Object(a.a)(this.state.cells[2])],n="X"===this.state.nextSymbol?"0":"X",l=0;l<3;l++)for(var i=0;i<3;i++)l===e&&i===t&&(s[l][i]=n);this.setState({cells:s,nextSymbol:n},this.checkHasWon.bind(this,e,t))}}},{key:"render",value:function(){var e=this,t=this.state,s=t.cells,n=t.score,l=t.winner;return Object(O.jsxs)("div",{style:k,className:"gameBoard",children:[Object(O.jsxs)("div",{id:"statusArea",className:"status",style:f,children:["Next player: ",Object(O.jsx)("span",{children:"X"})]}),Object(O.jsxs)("div",{id:"winnerArea",className:"winner",style:f,children:["Winner: ",Object(O.jsx)("span",{children:l})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:["X: ",n.X]})," ",Object(O.jsxs)("span",{children:["0: ",n[0]]})]}),Object(O.jsx)("button",{style:y,onClick:this.reset,children:"Reset"}),Object(O.jsx)("div",{style:m,children:[0,1,2].map((function(t){return Object(O.jsx)("div",{className:"board-row",style:p,children:[0,1,2].map((function(n){return Object(O.jsx)(v,{column:n,onCellClick:e.onCellClick,row:t,symbol:s[t][n]},n)}))},t)}))})]})}}]),s}(l.a.Component),w=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={nextSymbol:"X"},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(u.a)(s,[{key:"handleClick",value:function(){this.setState({nextSymbol:"X"===this.state.nextSymbol?"0":"X"})}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("div",{className:"game-board",onClick:this.handleClick,children:Object(O.jsx)(g,{})})})}}]),s}(l.a.Component),S=document.getElementById("root");c.a.render(Object(O.jsx)(n.StrictMode,{children:Object(O.jsx)(w,{})}),S)}},[[17,1,2]]]);
//# sourceMappingURL=main.4703911f.chunk.js.map