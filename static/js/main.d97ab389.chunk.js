(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),s=(a(16),a(1)),o=a(2),l=a(4),u=a(3),d=a(5),m=a(6),f=a.n(m),h=a(9);a(20);function p(e){var t=e.price;return r.a.createElement("div",{className:"kittenCard-status"},r.a.createElement("i",{className:"kittenCard-status__icon"}),r.a.createElement("p",{className:"kittenCard-status__sale"},"For sale"),r.a.createElement("p",{className:"kittenCard-status__price"},"$",t))}a(22);function v(e){var t=e.name,a=e.category;return r.a.createElement("div",{className:"kittenCard__details"},r.a.createElement("div",{className:"kittenCard__details-header"},r.a.createElement("div",{className:"kittenCard__details-name"},t),r.a.createElement("div",{className:"like"})),r.a.createElement("div",{className:"kittenCard__details-stats"},r.a.createElement("i",{className:"kittenCard__details-icon"}),r.a.createElement("div",{className:"kittenCard__details-category"},a)))}a(24);var k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.kitten,t={background:{background:function(){var t=["#eee9e8","#faeefa","#faeefa","#fae1ca","#c5eefa","#efe1da","#d9f5cb","#dbf0d0","#e5e7ef","#fde9e4","#e5f3e2"];return t[Math.abs(function(e){var t,a=0;if(0===e.length)return a;for(t=0;t<e.length;t++)a=(a<<5)-a+e.charCodeAt(t),a|=0;return a}(e.name))%t.length]}()}},a=e.name,n=e.category,c=e.price,i=e.img_url,s=e.id;return r.a.createElement("div",{className:"kittenCard"},r.a.createElement("div",{className:"kittenCard__main",style:t.background},r.a.createElement("div",{className:"kittenCard__main-container"},r.a.createElement("div",{className:"kittenCard__image-container"},r.a.createElement("img",{className:"kittenCard__image",src:i,alt:s})),r.a.createElement(p,{price:c}))),r.a.createElement(v,{name:a,category:n}))}}]),t}(n.Component);function g(e){var t=e.kittens;e.isLoading;return t.map(function(e){return r.a.createElement(k,{key:e.id,kitten:e})})}a(26);var E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,dataBase:null,counter:1},a.fetchData=function(){fetch("https://ma-cats-api.herokuapp.com/api/cats?page="+a.state.counter+"&per_page=12").then(function(e){return e.json()}).then(function(e){a.setState({dataBase:e.cats})}).then(function(){setTimeout(function(){a.setState({isLoading:!1})},1e3)})},a.loadNextKittens=function(){a.setState({isLoading:!0},function(){this.setState({counter:this.state.counter+1},function(){this.fetchData()})})},a.loadPrewKittens=function(){a.state.counter>1&&a.setState({counter:a.state.counter-1},function(){this.fetchData()})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ma-cats-api.herokuapp.com/api/cats?page="+this.state.counter+"&per_page=12");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({dataBase:a.cats,isLoading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},this.state.isLoading?r.a.createElement("div",null,"Loading..."):r.a.createElement(g,{kittens:this.state.dataBase})),r.a.createElement("div",{className:"list-nav"},r.a.createElement("button",{className:"loadMore",onClick:this.loadPrewKittens},"Previous Page"),r.a.createElement("button",{className:"loadMore",onClick:this.loadNextKittens},"Next Page")))}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d97ab389.chunk.js.map