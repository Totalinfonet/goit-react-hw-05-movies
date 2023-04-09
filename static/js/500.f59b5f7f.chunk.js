"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[500],{500:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(861),a=t(439),s=t(687),c=t.n(s),o=t(791),u=t(87),i=t(689),p=t(184),h=function(e){var r=e.onSearch,t=(0,o.useState)(""),n=(0,a.Z)(t,2),s=n[0],c=n[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s?r(s):alert("Please enter a search query")},children:[(0,p.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},v=t(647),l=function(){var e=(0,o.useState)(""),r=(0,a.Z)(e,2),t=r[0],s=r[1],l=(0,o.useState)([]),f=(0,a.Z)(l,2),d=f[0],g=f[1],m=(0,o.useState)(!1),w=(0,a.Z)(m,2),y=w[0],x=w[1],Z=(0,i.TH)(),k=(0,u.lr)(),b=(0,a.Z)(k,2),_=b[0],E=b[1],j=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(r),x(!0),e.next=4,v.Z.searchMovies(r);case 4:t=e.sent,g(t),E({query:r});case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),S=(0,o.useMemo)((function(){return""===t?[]:d}),[t,d]),M=new URLSearchParams(Z.search).get("query")||"";return""!==M&&""===t&&(s(M),x(!0),v.Z.searchMovies(M).then(g)),console.log(_),(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{onSearch:j,initialValue:M}),y&&0===S.length&&(0,p.jsxs)("p",{children:['No results found for "',t,'"']}),S.length>0&&(0,p.jsx)("ul",{children:S.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:Z},children:e.title})},e.id)}))})]})}},647:function(e,r,t){var n=t(861),a=t(687),s=t.n(a),c=t(243),o="68685731643ea27d6deb89fd83fc916a",u="https://api.themoviedb.org/3/trending/movie/day",i="https://api.themoviedb.org/3/movie/",p="https://api.themoviedb.org/3/search/movie";function h(){return(h=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(u,{params:{api_key:o}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),new Error("Error getting trending movies");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/").concat(r),{params:{api_key:o}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),new Error("Error getting movie info");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(p,{params:{api_key:o,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),new Error("Error searching movies");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i).concat(r,"/credits"),{params:{api_key:o}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),new Error("Error getting movie credits");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i).concat(r,"/reviews"),{params:{api_key:o}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),new Error("Error getting movie reviews");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var g={getTrendingMovies:function(){return h.apply(this,arguments)},getMovieInfo:function(e){return v.apply(this,arguments)},searchMovies:function(e){return l.apply(this,arguments)},getMovieCast:function(e){return f.apply(this,arguments)},getMovieReviews:function(e){return d.apply(this,arguments)}};r.Z=g}}]);
//# sourceMappingURL=500.f59b5f7f.chunk.js.map