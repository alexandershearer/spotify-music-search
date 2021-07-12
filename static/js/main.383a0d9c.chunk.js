(this["webpackJsonpspotify-music-search"]=this["webpackJsonpspotify-music-search"]||[]).push([[0],{81:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(20),c=a.n(n),i=a(22),o=a(19),l=a(50),u=a(18),j=a(10),b="SET_ALBUMS",d="ADD_ALBUMS",p="SET_ARTISTS",m="ADD_ARTISTS",h="SET_PLAYLIST",O="ADD_PLAYLIST",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.albums;switch(t.type){case b:return a;case d:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.artists;switch(t.type){case p:return a;case m:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.playlists;switch(t.type){case h:return a;case O:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,g=Object(o.e)(Object(o.c)({albums:x,artists:f,playlist:y}),v(Object(o.a)(l.a))),_=a(29),S=a(30),E=a(32),T=a(31),k=a(21),N=a(6),w=a(88),C=a(1);var A=function(){return Object(C.jsx)("h1",{className:"main-heading",children:"Ear Full"})},I=Object(i.b)()((function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/spotify-music-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"b3b429f457c148a1990d0f41c7636398",REACT_APP_AUTHORIZE_URL:"https://accounts.spotify.com/authorize",REACT_APP_REDIRECT_URL:"https://alexandershearer.github.io/spotify-music-search/redirect"}),a=t.REACT_APP_CLIENT_ID,r=t.REACT_APP_AUTHORIZE_URL,s=t.REACT_APP_REDIRECT_URL;return Object(C.jsxs)("div",{className:"login",children:[Object(C.jsx)(A,{}),Object(C.jsx)(w.a,{varient:"info",type:"submit",onClick:function(){window.location="".concat(r,"?client_id=").concat(a,"&redirect_uri=").concat(s,"&response_type=token&show_dialog=true")},children:"Login to Spotify"})]})})),L=a(8),R=a.n(L),P=a(16),D=a(26),B=a.n(D),U=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(B.a.defaults.headers.common.Authorization="Bearer ".concat(e.access_token))}catch(t){console.log("Error setting auth",t)}},V=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.setExpiryTime,e.history),a=e.location;try{if(R.a.isEmpty(a.hash))return t.push("/dashboard");var r=a.hash.slice(1).split("&").reduce((function(e,t){var a=t.split("="),r=Object(P.a)(a,2),s=r[0],n=r[1];return e[s]=n,e}),{}),s=(new Date).getTime()+1e3*r.expires_in;localStorage.setItem("params",JSON.stringify(r)),localStorage.setItem("expiry_time",s),t.push("/spotify-music-search/dashboard")}catch(n){t.push("/")}}},{key:"render",value:function(){return null}}]),a}(s.a.Component),F=a(7),M=a.n(F),H=a(17),J=function(){var e=Object(H.a)(M.a.mark((function e(t,a){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(),e.next=3,B.a.get(t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K=function(e){return{type:b,albums:e}},W=function(e){return{type:p,artists:e}},q=function(e){return{type:h,playlists:e}},z=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:return r=t.sent,t.abrupt("return",a((s=r.albums,{type:d,albums:s})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var s}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:return r=t.sent,t.abrupt("return",a((s=r.artists,{type:m,artists:s})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var s}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:return r=t.sent,t.abrupt("return",a((s=r.playlists,{type:O,playlists:s})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var s}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Y=a(87),Z=a.p+"static/media/music.b2fe7d4d.jpeg",Q=function(e){var t=e.albums;return Object(C.jsx)(s.a.Fragment,{children:Object.keys(t).length>0&&Object(C.jsx)("div",{className:"albums",children:t.items.map((function(e,t){return Object(C.jsx)(s.a.Fragment,{children:Object(C.jsxs)(Y.a,{className:"cardStyle",style:{width:"18rem"},children:[Object(C.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:R.a.isEmpty(e.images)?Object(C.jsx)("img",{src:Z,alt:""}):Object(C.jsx)(Y.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(C.jsxs)(Y.a.Body,{children:[Object(C.jsx)(Y.a.Title,{children:e.name}),Object(C.jsx)(Y.a.Text,{children:Object(C.jsx)("small",{children:e.artists.map((function(e){return e.name})).join(", ")})})]})]})},t)}))})})},$=function(e){var t=e.artists;return Object(C.jsx)(s.a.Fragment,{children:Object.keys(t).length>0&&Object(C.jsx)("div",{className:"artists",children:t.items.map((function(e,t){return Object(C.jsx)(s.a.Fragment,{children:Object(C.jsxs)(Y.a,{className:"cardStyle",style:{width:"18rem"},children:[Object(C.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:R.a.isEmpty(e.images)?Object(C.jsx)("img",{src:Z,alt:""}):Object(C.jsx)(Y.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(C.jsx)(Y.a.Body,{children:Object(C.jsx)(Y.a.Title,{children:e.name})})]})},t)}))})})},ee=function(e){var t=e.playlist;return Object(C.jsx)("div",{children:Object.keys(t).length>0&&Object(C.jsx)("div",{className:"playlist",children:t.items.map((function(e,t){return Object(C.jsx)(s.a.Fragment,{children:Object(C.jsxs)(Y.a,{className:"cardStyle",style:{width:"18rem"},children:[Object(C.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:R.a.isEmpty(e.images)?Object(C.jsx)("img",{src:Z,alt:""}):Object(C.jsx)(Y.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(C.jsxs)(Y.a.Body,{children:[Object(C.jsx)(Y.a.Title,{children:e.name}),Object(C.jsx)(Y.a.Text,{children:Object(C.jsxs)("small",{children:["By ",e.owner.display_name]})})]})]})},t)}))})})},te=function(e){var t=e.isValidSession,a=e.loadMore,r=e.result,n=e.setCategory,c=e.selectedCategory,i=r.albums,o=r.artists,l=r.playlist;return t()?Object(C.jsxs)(s.a.Fragment,{children:[Object(C.jsxs)("div",{className:"search-buttons",children:[!R.a.isEmpty(i.items)&&Object(C.jsx)("button",{className:"".concat("albums"===c?"btn active":"btn"),onClick:function(){return n("albums")},children:"Albums"}),!R.a.isEmpty(o.items)&&Object(C.jsx)("button",{className:"".concat("artists"===c?"btn active":"btn"),onClick:function(){return n("artists")},children:"Artists"}),!R.a.isEmpty(l.items)&&Object(C.jsx)("button",{className:"".concat("playlist"===c?"btn active":"btn"),onClick:function(){return n("playlist")},children:"PlayLists"})]}),Object(C.jsx)("div",{className:"".concat("albums"===c?"":"hide"),children:i&&Object(C.jsx)(Q,{albums:i})}),Object(C.jsx)("div",{className:"".concat("artists"===c?"":"hide"),children:o&&Object(C.jsx)($,{artists:o})}),Object(C.jsx)("div",{className:"".concat("playlist"===c?"":"hide"),children:l&&Object(C.jsx)(ee,{playlist:l})}),!R.a.isEmpty(r[c])&&!R.a.isEmpty(r[c].next)&&Object(C.jsx)("div",{className:"load-more",onClick:function(){return a(c)},children:Object(C.jsx)(w.a,{variant:"info",type:"button",children:"Load More"})})]}):Object(C.jsx)(N.a,{to:{pathname:"/",state:{session_expired:!0}}})},ae=a(86),re=(a(81),function(e){var t=Object(r.useState)(""),a=Object(P.a)(t,2),s=a[0],n=a[1],c=Object(r.useState)(""),i=Object(P.a)(c,2),o=i[0],l=i[1];return Object(C.jsx)("div",{children:Object(C.jsxs)(ae.a,{className:"searchBar",onSubmit:function(t){t.preventDefault(),""!==s.trim()?(l(""),e.handleSearch(s)):l("Please enter a search term.")},children:[o&&Object(C.jsx)("p",{className:"errorMsg",children:o}),Object(C.jsxs)(ae.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(ae.a.Label,{children:"Enter search term"}),Object(C.jsx)(ae.a.Control,{className:"textInput",type:"search",name:"searchTerm",value:s,placeholder:"Search for album, artist, or playlist",onChange:function(e){var t=e.target.value;n(t)},autoComplete:"off"})]}),Object(C.jsx)(w.a,{className:"searchButton",variant:"light",type:"submit",children:"Search"})]})})}),se=function(e){var t=Object(r.useState)(document.createElement("div")),a=Object(P.a)(t,1)[0],s=document.querySelector("#loader");return Object(r.useEffect)((function(){s.appendChild(a).classList.add("message")}),[s,a]),Object(r.useEffect)((function(){e.show?(s.classList.remove("hide"),document.body.classList.add("loader-open")):(s.classList.add("hide"),document.body.classList.remove("loader-open"))}),[s,e.show]),c.a.createPortal(e.children,a)},ne=Object(i.b)((function(e){return{albums:e.albums,artists:e.artists,playlist:e.playlist}}))((function(e){var t=Object(r.useState)(!1),a=Object(P.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)("albums"),o=Object(P.a)(i,2),l=o[0],u=o[1],j=e.isValidSession,b=e.history,d=function(){var t=Object(H.a)(M.a.mark((function t(a){var r,s,n,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j()){t.next=18;break}r=e.dispatch,s=e.albums,n=e.artists,i=e.playlist,c(!0),t.t0=a,t.next="albums"===t.t0?6:"artists"===t.t0?9:"playlist"===t.t0?12:15;break;case 6:return t.next=8,r(z(s.next));case 8:return t.abrupt("break",15);case 9:return t.next=11,r(G(n.next));case 11:return t.abrupt("break",15);case 12:return t.next=14,r(X(i.next));case 14:return t.abrupt("break",15);case 15:c(!1),t.next=19;break;case 18:b.push({pathname:"/",state:{session_expired:!0}});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p={albums:e.albums,artists:e.artists,playlist:e.playlist};return Object(C.jsx)(s.a.Fragment,{children:j()?Object(C.jsxs)("div",{children:[Object(C.jsx)(A,{}),Object(C.jsx)(re,{handleSearch:function(t){j()?(c(!0),e.dispatch(function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r,s,n,c,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"&type=album,playlist,artist"),t.next=4,J(r);case 4:return s=t.sent,console.log(s),n=s.albums,c=s.artists,i=s.playlists,a(K(n)),a(W(c)),t.abrupt("return",a(q(i)));case 12:t.prev=12,t.t0=t.catch(0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){c(!1),u("albums")}))):b.push({pathname:"/",state:{session_expired:!0}})}}),Object(C.jsx)(se,{show:n,children:"Loading..."}),Object(C.jsx)(te,{result:p,loadMore:d,setCategory:function(e){u(e)},selectedCategory:l,isValidSession:j})]}):Object(C.jsx)(N.a,{to:{pathname:"/",state:{session_expired:!0}}})})}));var ce=function(){return Object(C.jsxs)(s.a.Fragment,{children:[Object(C.jsx)(A,{}),"Page not found. Go to ",Object(C.jsx)(k.b,{to:"/spotify-music-search/dashboard",children:"Home Page"})]})},ie=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={expiryTime:"0"},e.setExpiryTime=function(t){e.setState({expiryTime:t})},e.isValidSession=function(){return(new Date).getTime()<e.state.expiryTime},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e;try{e=JSON.parse(localStorage.getItem("expiry_time"))}catch(t){e="0"}this.setState({expiryTime:e})}},{key:"render",value:function(){var e=this;return Object(C.jsx)(k.a,{children:Object(C.jsx)("div",{className:"main",children:Object(C.jsxs)(N.d,{children:[Object(C.jsx)(N.b,{path:"/spotify-music-search",exact:!0,render:function(t){return Object(C.jsx)(I,Object(j.a)({isValidSession:e.isValidSession},t))}}),Object(C.jsx)(N.b,{path:"/redirect",render:function(t){return Object(C.jsx)(V,Object(j.a)({isValidSession:e.isValidSession,setExpiryTime:e.setExpiryTime},t))}}),Object(C.jsx)(N.b,{path:"/dashboard",render:function(t){return Object(C.jsx)(ne,Object(j.a)({isValidSession:e.isValidSession},t))}}),Object(C.jsx)(N.b,{component:ce})]})})})}}]),a}(s.a.Component);a(83),a(84);c.a.render(Object(C.jsx)(i.a,{store:g,children:Object(C.jsx)(ie,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.383a0d9c.chunk.js.map