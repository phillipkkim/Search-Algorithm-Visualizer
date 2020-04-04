(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{41:function(e,t,a){},43:function(e,t){},47:function(e,t,a){e.exports=a(75)},52:function(e,t,a){},53:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(22),n=a.n(r),i=a(31),s=a(8),c=a(9),o=a(10),h=a(11),l=a(0),u=a.n(l),p=(a(52),a(53),function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.state,a=e.height;return u.a.createElement("div",{className:"block block-".concat(t),style:{height:"".concat(a,"px")}})}}]),a}(l.Component)),f=a(5),g=a(30),m=a(3),b=a(44),d=m.a.create({container1:{height:56,cursor:"pointer",":hover":{color:"lightseagreen",fontWeight:"bold",fontSize:16}},container2:{height:56,cursor:"pointer",":hover":{color:"lightcoral",fontWeight:"bold",fontSize:16}},title:{fontFamily:"Muli",fontSize:15,lineHeight:"20px",letterSpacing:"0.2px",color:"white",marginLeft:24}});var v,k=function(e){var t=e.title,a=Object(b.a)(e,["title"]),r=d.container1;return"Clear"===t&&(r=d.container2),u.a.createElement(f.Row,Object.assign({className:Object(m.b)(r,d.title),vertical:"center"},a),t)},S=m.a.create({container:{paddingTop:10,height:40,paddingBottom:15,borderBottom:"2px solid #DFE0EB",backgroundColor:"#24292e"},separator:{borderLeft:"2px solid #DFE0EB",marginLeft:32,height:32,width:2},title:(v={marginLeft:20,fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:24,lineHeight:"30px",letterSpacing:.3,cursor:"default",color:"white"},Object(g.a)(v,"cursor","pointer"),Object(g.a)(v,"minWidth","200px"),v),space:{marginLeft:20}}),y=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(f.Row,{className:Object(m.b)(S.container),vertical:"center",horizontal:"space-between"},u.a.createElement("span",{className:Object(m.b)(S.title),onClick:function(){window.location.reload(!1)}},"Search Algorithm Visualizer"),u.a.createElement(f.Row,{vertical:"center"},u.a.createElement(k,{title:"Linear Search",onClick:function(){return e.props.onClick("linearSearch")}}),u.a.createElement(k,{title:"Jump Search",onClick:function(){return e.props.onClick("jumpSearch")}}),u.a.createElement(k,{title:"Binary Search",onClick:function(){return e.props.onClick("binarySearch")}}),u.a.createElement(k,{title:"Ternary Search",onClick:function(){return e.props.onClick("ternarySearch")}}),u.a.createElement(k,{title:"Exponential Search",onClick:function(){return e.props.onClick("exponentialSearch")}}),u.a.createElement(k,{title:"Fibonacci Search",onClick:function(){return e.props.onClick("fibonacciSearch")}}),u.a.createElement("div",{className:Object(m.b)(S.separator)}),u.a.createElement(k,{title:"Clear",onClick:function(){return e.props.onClick("clear")}}),u.a.createElement("div",{style:{marginLeft:30}})))}}]),a}(l.Component),j=a(87),E=a(89),O=m.a.create({container:{paddingBottom:60,margin:"auto",paddingLeft:"20px",paddingRight:"20px"},title:{fontFamily:"Muli",fontSize:16,lineHeight:"20px",letterSpacing:"0.2px",color:"#2F4F4F",paddingRight:10},slider:{minWidth:"15vw"}}),C=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.numBlocks,a=e.onChange,r=e.searching;return u.a.createElement(f.Row,{className:Object(m.b)(O.container)},u.a.createElement(j.a,{className:Object(m.b)(O.title),style:{minWidth:"70px"},gutterBottom:!0},"Number of Blocks"),u.a.createElement(E.a,{className:Object(m.b)(O.slider),defaultValue:30,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:5,max:50,onChange:function(e,t){a("numBlocks",t)},disabled:r}),u.a.createElement("div",{style:{marginLeft:50}}),u.a.createElement(j.a,{className:Object(m.b)(O.title),gutterBottom:!0},"Target Size"),u.a.createElement(E.a,{className:Object(m.b)(O.slider),defaultValue:Math.floor(15)+1,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:1,max:t,onChange:function(e,t){a("targetSize",t)},disabled:r}),u.a.createElement("div",{style:{marginLeft:50}}),u.a.createElement(j.a,{className:Object(m.b)(O.title),gutterBottom:!0},"Speed"),u.a.createElement(E.a,{className:Object(m.b)(O.slider),defaultValue:50,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:1,max:100,onChange:function(e,t){a("speed",t)},disabled:r}))}}]),a}(l.Component);a(41);var L=a(43);var B=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={numBlocks:30,targetSize:Math.floor(15),blockList:[],searching:!1,speed:200},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=M(this.state.numBlocks,this.state.targetSize);this.setState({blockList:e})}},{key:"clear",value:function(){for(var e=Object(i.a)(this.state.blockList),t=1;t<e.length;t++)e[t].state="pending";this.setState({blockList:e,searching:!1})}},{key:"handleSlider",value:function(e,t){switch(e){case"numBlocks":this.setState({numBlocks:t,targetSize:Math.min(t-1,this.state.targetSize)});var a=M(this.state.numBlocks,Math.min(t-1,this.state.targetSize));this.setState({blockList:a});break;case"targetSize":var r=M(this.state.numBlocks,t-1);this.setState({blockList:r,targetSize:t-1});break;case"speed":this.setState({speed:200-2*(t-50)})}}},{key:"animate",value:function(e){var t=this;this.clear(),this.setState({searching:!0});for(var a=Object(i.a)(this.state.blockList),r=this.state.speed,n=0,s=function(i){for(var s=e[i],c="pending",o=function(e){var i=c;"string"===typeof s[e]?c=s[e]:setTimeout((function(){a[s[e]].state=i,t.setState({blockList:a})}),r*n)},h=0;h<s.length;h++)o(h);n+=1},c=0;c<e.length;c++)s(c);setTimeout((function(){t.setState({searching:!1})}),r*n)}},{key:"handleButton",value:function(e){if(!this.state.searching){this.clear();var t=[];switch(e){case"linearSearch":t=function(e){for(var t=e[0].height,a=[],r=[],n=1;n<e.length;n++){if(r.push("curr",n),a.push(r),r=[],e[n].height===t)return r.push("result",n),a.push(r),a;r.push("processed",n)}}(this.state.blockList);break;case"jumpSearch":t=function(e){for(var t=e[0].height,a=[],r=[],n=Math.round(Math.sqrt(e.length-1)),i=1;e[Math.min(n,e.length-1)].height<t;){r.push("processed");for(var s=1;s<i;s++)r.push(s);r.push("pending",i),r.push("curr",n),a.push(r),r=[],i=n,n+=Math.round(Math.sqrt(e.length-1))}for(var c=1;c<=i;c++)r.push("processed",c);if(n<e.length){r.push("curr",n),a.push(r),(r=[]).push("pending",n);for(var o=n+1;o<e.length;o++)r.push("processed",o);a.push(r),r=[]}for(;e[i].height<t;)r.push("processed",i,"curr",i+1),a.push(r),r=[],i+=1;return r.push("result",i),a.push(r),a}(this.state.blockList);break;case"binarySearch":t=function(e){for(var t=e[0].height,a=[],r=[],n=1,i=e.length-1;n<=i;){var s=Math.floor(n+(i-n)/2);if(r.push("curr",s),a.push(r),r=[],e[s].height===t)return r.push("result",s),a.push(r),a;if(r.push("processed"),e[s].height<t){for(var c=1;c<s+1;c++)r.push(c);n=s+1}else{for(var o=s;o<e.length;o++)r.push(o);i=s-1}a.push(r),r=[]}}(this.state.blockList);break;case"interpolationSearch":t=Object(L.interpolationSearch)(this.state.blockList);break;case"exponentialSearch":t=function(e){for(var t=e[0].height,a=[],r=[],n=1;n<e.length&&e[n].height<t;){r.push("processed");for(var i=1;i<n;i++)r.push(i);r.push("curr",n),a.push(r),r=[],n*=2}if(Math.floor(n/2)>0&&r.push("pending",Math.floor(n/2)),n<e.length-1){r.push("processed");for(var s=n+1;s<e.length;s++)r.push(s)}var c=Math.floor(n/2),o=Math.min(n,e.length-1);for(0===c&&(c+=1);c<=o;){var h=Math.floor(c+(o-c)/2);if(r.push("curr",h),a.push(r),r=[],e[h].height===t)return r.push("result",h),a.push(r),a;if(r.push("processed"),e[h].height<t){for(var l=1;l<h+1;l++)r.push(l);c=h+1}else{for(var u=h;u<e.length;u++)r.push(u);o=h-1}a.push(r),r=[]}}(this.state.blockList);break;case"fibonacciSearch":t=function(e){var t=e[0].height;e=e.slice(1);for(var a=[],r=[],n=0,i=1,s=n+i;s<e.length;)s=(n=i)+(i=s);for(var c=-1;s>1;){var o=Math.min(c+n,e.length-1);if(r.push("curr",o+1),a.push(r),r=[],e[o].height===t)return r.push("result",o+1),a.push(r),a;if(r.push("processed"),e[o].height<t){for(var h=0;h<o+1;h++)r.push(h+1);n=(s=i)-(i=n),c=o}else{for(var l=o;l<e.length;l++)r.push(l+1);n=(s=n)-(i-=n)}a.push(r),r=[]}return i&&e[c+1].height===t?(r.push("result",c+2),a.push(r),a):a}(this.state.blockList);break;case"ternarySearch":t=function(e){for(var t=e[0].height,a=[],r=[],n=1,i=e.length-1;n<=i;){var s=Math.floor(n+(i-n)/3),c=Math.floor(i-(i-n)/3);if(r.push("curr",s,c),a.push(r),r=[],e[s].height===t)return r.push("processed",c),r.push("result",s),a.push(r),a;if(e[c].height===t)return r.push("processed",s),r.push("result",c),a.push(r),a;if(r.push("processed"),e[s].height>t){for(var o=s;o<e.length;o++)r.push(o);i=s-1}else if(e[c].height<t){for(var h=1;h<c+1;h++)r.push(h);n=c+1}else{for(var l=1;l<s+1;l++)r.push(l);for(var u=c;u<e.length;u++)r.push(u);n=s+1,i=c-1}a.push(r),r=[]}}(this.state.blockList)}this.animate(t)}}},{key:"render",value:function(){var e=this,t=this.state.blockList;return u.a.createElement(f.Column,{flexGrow:1,className:"container"},u.a.createElement(y,{onClick:function(t){return e.handleButton(t)}}),u.a.createElement(f.Row,{className:"main-block"},u.a.createElement("div",{className:"block-list"},t.map((function(e,t){var a=e.state,r=e.height;return u.a.createElement(p,{key:t,state:a,height:r})})))),u.a.createElement(C,{numBlocks:this.state.numBlocks,onChange:function(t,a){return e.handleSlider(t,a)},searching:this.state.searching}))}}]),a}(l.Component),M=function(e,t){var a=[];a.push(x(t)),a[0].state="target";for(var r=0;r<e;r++)a.push(x(r));return a},x=function(e){return{state:"pending",height:10+7*e}},w=B;n.a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.28ffe072.chunk.js.map