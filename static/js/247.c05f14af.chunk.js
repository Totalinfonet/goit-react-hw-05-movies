"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(687),s=t.n(c),o=t(791),i=t(647),u=t(689),p=t(184);e.default=function(){var r=(0,u.UO)().movieId,e=(0,o.useState)([]),t=(0,a.Z)(e,2),c=t[0],v=t[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.getMovieCast(r);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Cast"}),null!==c&&void 0!==c&&c.length?(0,p.jsx)("ul",{children:c.map((function(r){return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:r.name}),(0,p.jsx)("p",{children:r.character})]},r.id)}))}):(0,p.jsx)("p",{children:"Loading cast..."})]})}},647:function(r,e,t){var n=t(861),a=t(687),c=t.n(a),s=t(243),o="68685731643ea27d6deb89fd83fc916a",i="https://api.themoviedb.org/3/trending/movie/day",u="https://api.themoviedb.org/3/movie/",p="https://api.themoviedb.org/3/search/movie";function v(){return(v=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get(i,{params:{api_key:o}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting trending movies");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u,"/").concat(e),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting movie info");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get(p,{params:{api_key:o,query:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error searching movies");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u).concat(e,"/credits"),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting movie credits");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(u).concat(e,"/reviews"),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),new Error("Error getting movie reviews");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}var g={getTrendingMovies:function(){return v.apply(this,arguments)},getMovieInfo:function(r){return h.apply(this,arguments)},searchMovies:function(r){return l.apply(this,arguments)},getMovieCast:function(r){return f.apply(this,arguments)},getMovieReviews:function(r){return d.apply(this,arguments)}};e.Z=g}}]);
//# sourceMappingURL=247.c05f14af.chunk.js.map