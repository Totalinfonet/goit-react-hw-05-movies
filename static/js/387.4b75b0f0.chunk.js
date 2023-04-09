"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(r,e,t){t.r(e),t.d(e,{default:function(){return x}});var n,a,c,s=t(861),o=t(439),i=t(687),u=t.n(i),p=t(791),l=t(647),h=t(689),v=t(168),f=t(934),d=f.Z.div(n||(n=(0,v.Z)(["\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    align-items: center;\n    display: flex;\n    margin-bottom: 1rem;\n  }\n"]))),g=f.Z.img(a||(a=(0,v.Z)(["\n  border-radius: 50%;\n  margin-right: 1rem;\n"]))),m=f.Z.div(c||(c=(0,v.Z)(["\n  p:first-of-type {\n    font-weight: bold;\n  }\n"]))),w=t(184),x=function(){var r=(0,h.UO)().movieId,e=(0,p.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1];(0,p.useEffect)((function(){var e=function(){var e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.getMovieCast(r);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),console.log(n);return(0,w.jsxs)(d,{children:[(0,w.jsx)("h2",{children:"Cast"}),null!==n&&void 0!==n&&n.length?(0,w.jsx)("ul",{children:n.map((function(r){return(0,w.jsxs)("li",{children:[(0,w.jsx)(g,{src:(e=r.profile_path,t="w200","".concat("https://image.tmdb.org/t/p/").concat(t).concat(e)),alt:r.name}),(0,w.jsxs)(m,{children:[(0,w.jsx)("p",{children:r.name}),(0,w.jsx)("p",{children:r.character})]})]},r.id);var e,t}))}):(0,w.jsx)("p",{children:"Loading cast..."})]})}},647:function(r,e,t){var n=t(861),a=t(687),c=t.n(a),s=t(243),o="68685731643ea27d6deb89fd83fc916a",i="https://api.themoviedb.org/3/trending/movie/day",u="https://api.themoviedb.org/3/movie/",p="https://api.themoviedb.org/3/search/movie";function l(){return(l=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get(i,{params:{api_key:o}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting trending movies");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u,"/").concat(e),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting movie info");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get(p,{params:{api_key:o,query:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error searching movies");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u).concat(e,"/credits"),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting movie credits");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u).concat(e,"/reviews"),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting movie reviews");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}var g={getTrendingMovies:function(){return l.apply(this,arguments)},getMovieInfo:function(r){return h.apply(this,arguments)},searchMovies:function(r){return v.apply(this,arguments)},getMovieCast:function(r){return f.apply(this,arguments)},getMovieReviews:function(r){return d.apply(this,arguments)}};e.Z=g}}]);
//# sourceMappingURL=387.4b75b0f0.chunk.js.map