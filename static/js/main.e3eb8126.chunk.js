(this["webpackJsonpgot-ice-fire"]=this["webpackJsonpgot-ice-fire"]||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n(0),i=n.n(a),s=n(25),o=n.n(s),u=n(7),l=n(27),j=(n(63),n(64),n(65),n(17)),b=n(8),f=n(51),d=n.n(f),p=n(19),h=n.n(p),O=(n(66),i.a.forwardRef((function(e,t){return Object(c.jsx)("header",{ref:t,className:"primary-header headroom",children:Object(c.jsxs)("div",{className:"primary-header__container",children:[Object(c.jsx)("h1",{className:"primary-header__title",children:Object(c.jsx)(b.b,{to:"/",children:"GOT"})}),Object(c.jsxs)("nav",{className:"primary-header__nav",children:[Object(c.jsx)(b.c,{to:"/",activeClassName:"active",children:"Books"}),Object(c.jsx)(b.c,{to:"/houses",activeClassName:"active",children:"Houses"}),Object(c.jsx)(b.c,{to:"/characters",activeClassName:"active",children:"Characters"})]})]})})}))),g=n(9),v=n(5),m="https://www.anapioficeandfire.com/api",x="http://covers.openlibrary.org/b/isbn";!function(e){e.Small="S",e.Medium="M",e.Large="L"}(r||(r={}));var k,y,C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.Small;return"".concat(x,"/").concat(e,"-").concat(t,".jpg")},w=function(e){return!e||e&&0===e.length},S=function(e){return null===e||0===(null===e||void 0===e?void 0:e.length)},N=function(){window.history.back()},U=function(e){var t=new URL(null!==e&&void 0!==e?e:"").searchParams.get("page");return t?+t:0},B=function(e,t){var n=e.filter((function(e){return e.rel===t})),r=Object(j.a)(n,1)[0];return r?r.uri:""},P=function(e){var t,n=new URL(e).pathname;return t=n.split("/"),w(t)?null:t[t.length-1]},H=n(4),z=n.n(H),L=n(10),F=n(12),T=n(23),_=n.n(T),E=n(20),M=n.n(E),A=n(52),G=n(30),R=n.n(G),D=R.a.createInstance({driver:[R.a.INDEXEDDB,R.a.LOCALSTORAGE],name:"got-cache"}),I=M.a.create({baseURL:m,adapter:Object(A.setupCache)({maxAge:18e5,store:D}).adapter}),J={getBooks:function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.get("".concat(m,"/books"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getBookById:function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.get("".concat(m,"/books/").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getHouses:function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.get("".concat(m,"/houses"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getHouseById:function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.get("".concat(m,"/characters/").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCharacters:function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.get("".concat(m,"/characters"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCharacterById:function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.get("".concat(m,"/characters/").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getDataByUri:function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r=arguments;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",I.get(t,Object(v.a)({},n)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=Object(F.b)("@fetch/fetchGotBooks",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getBooks(t);case 2:return n=e.sent,r=n.data,c=_.a.parse(n.headers.link),a=c.refs,e.abrupt("return",{results:r,links:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),W=Object(F.b)("@fetch/fetchGotBookById",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getBookById(t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),X=Object(F.b)("@fetch/fetchGotBooksByUri",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getDataByUri(t);case 2:return n=e.sent,r=n.data,c=_.a.parse(n.headers.link),a=c.refs,e.abrupt("return",{results:r,links:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(F.b)("@fetch/fetchGotHouses",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getHouses(t);case 2:return n=e.sent,r=n.data,c=_.a.parse(n.headers.link),a=c.refs,e.abrupt("return",{results:r,links:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),K=Object(F.b)("@fetch/fetchGotHouseById",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getHouseById(t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Q=Object(F.b)("@fetch/getGotCharacters",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getCharacters(t);case 2:return n=e.sent,r=n.data,c=_.a.parse(n.headers.link),a=c.refs,e.abrupt("return",{results:r,links:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y=Object(F.b)("@fetch/fetchGotCharacterById",function(){var e=Object(L.a)(z.a.mark((function e(t){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getCharacterById(t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Z=function(){return new URLSearchParams(Object(g.g)().search)},$=n(3),ee=n(53),te=n.n(ee),ne=(n(117),function(){return Object(c.jsx)("div",{className:"page-loader",children:Object(c.jsx)(te.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})}),re=function(e){var t=e.title,n=e.children,r=e.isLoading,a=e.className;return Object(c.jsx)("div",{className:h()("page",Object($.a)({},"".concat(a),a)),children:r?Object(c.jsx)(ne,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a,{children:Object(c.jsx)("title",{children:t})}),n]})})},ce=n(29),ae=n(31),ie=n(38),se=(n(119),function(e){var t=e.columns,n=e.data,r=e.initialState,a=Object(ae.useTable)({columns:t,data:n,initialState:r},ae.useFilters,ae.useSortBy),i=a.getTableProps,s=a.getTableBodyProps,o=a.headerGroups,u=a.rows,l=a.prepareRow;return Object(c.jsx)("div",{className:"data-table",children:Object(c.jsxs)("table",Object(v.a)(Object(v.a)({},i()),{},{children:[Object(c.jsx)("thead",{children:o.map((function(e){return Object(c.jsx)("tr",Object(v.a)(Object(v.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(v.a)(Object(v.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),(null===e||void 0===e?void 0:e.isSorted)&&Object(c.jsx)("span",{className:"data-table__sort-icon",children:(null===e||void 0===e?void 0:e.isSortedDesc)?Object(c.jsx)(ie.a,{}):Object(c.jsx)(ie.b,{})}),(null===e||void 0===e?void 0:e.canFilter)&&e.filter&&e.render("Filter")]}))}))}))}))}),Object(c.jsx)("tbody",Object(v.a)(Object(v.a)({},s()),{},{children:u.map((function(e,t){return l(e),Object(c.jsx)("tr",Object(v.a)(Object(v.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(v.a)(Object(v.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})}),oe=function(e){var t=e.column,n=t.filterValue,r=t.setFilter,a=t.preFilteredRows,s=t.id,o=i.a.useMemo((function(){var e=new Set;return a.forEach((function(t){!S(t.values[s])&&e.add(t.values[s])})),Object(ce.a)(e)}),[s,a]);return Object(c.jsxs)("select",{value:n,onChange:function(e){return e.currentTarget.blur()},onBlur:function(e){r(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),o.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})},ue=(n(120),function(e){var t=e.pageCount,n=e.currentPage,r=e.pageSize,i=e.prevUri,s=e.nextUri,o=e.lastUri,u=Object(g.f)(),l=Z(),j=Object(a.useCallback)((function(e,t){e.preventDefault(),l.set("page","".concat(t)),u.push({search:l.toString()})}),[l,u]),b=Object(a.useCallback)((function(e){e.preventDefault(),l.set("pageSize","".concat(e.currentTarget.value)),u.push({search:l.toString()})}),[l,u]);return Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)("button",{className:"pagination__button-prev",onClick:function(e){return j(e,U(i))},disabled:S(i),children:"Prev"}),t>0&&Array.from(Array(t).keys()).map((function(e){return Object(c.jsx)("button",{className:h()("pagination__button-page",{"pagination__button-page--active":n===e+1}),onClick:function(t){return j(t,e+1)},disabled:n===e+1,children:e+1},"page-".concat(e))})),!S(o)&&Object(c.jsx)("button",{className:"pagination__button-last",onClick:function(e){return j(e,U(o))},disabled:n===U(o),children:"Last"}),Object(c.jsx)("button",{className:"pagination__button-next",onClick:function(e){return j(e,U(s))},disabled:S(s),children:"Next"}),Object(c.jsxs)("select",{onChange:function(e){return e.currentTarget.blur()},onBlur:function(e){return b(e)},value:"".concat(r),children:[Object(c.jsx)("option",{value:"5",children:"5"}),Object(c.jsx)("option",{value:"10",children:"10"}),Object(c.jsx)("option",{value:"20",children:"20"}),Object(c.jsx)("option",{value:"30",children:"30"}),Object(c.jsx)("option",{value:"50",children:"50"}),Object(c.jsx)("option",{value:"100",children:"100"})]})]})}),le=function(){var e=Z(),t=Object(u.c)((function(e){return e.layouts})).isLoading,n=Object(u.c)((function(e){return e.services})).books,s=Object(u.b)(),o=e.get("page"),l=e.get("pageSize"),f=Object(a.useState)({currentPage:0,pageSize:0,pageCount:1,nextUri:"",prevUri:"",lastUri:""}),d=Object(j.a)(f,2),p=d[0],h=d[1];Object(a.useEffect)((function(){h((function(e){return Object(v.a)(Object(v.a)({},e),{},{currentPage:null!==o?+o:1,pageSize:null!==l?+l:5})}))}),[o,l]),Object(a.useEffect)((function(){if(p.currentPage&&p.pageSize){var e=s(V({page:p.currentPage,pageSize:p.pageSize}));return function(){e.abort()}}}),[p.currentPage,p.pageSize,s]),Object(a.useEffect)((function(){if(!w(n.links)){var e=B(n.links,"next"),t=B(n.links,"prev"),r=B(n.links,"last"),c=U(r);h((function(n){return Object(v.a)(Object(v.a)({},n),{},{nextUri:e,prevUri:t,lastUri:r,pageCount:c})}))}}),[n.links]);var O=Object(a.useMemo)((function(){return[{Header:"",accessor:"isbn",Cell:function(e){var t=e.row.original;return Object(c.jsx)(b.b,{to:"/book/".concat(P(t.url)),children:Object(c.jsx)("img",{className:"thumbnail",src:C(t.isbn,r.Medium),alt:t.name})})}},{Header:"Title",accessor:"name",Cell:function(e){var t=e.row.original;return Object(c.jsx)(b.b,{to:"/book/".concat(P(t.url)),children:t.name})}},{Header:"Authors",accessor:"authors"},{Header:"Release Date",accessor:"released"},{Header:"Publisher",accessor:"publisher"},{Header:"Country",accessor:"country"},{Header:"Format",accessor:"mediaType"},{Header:"Page",accessor:"numberOfPages",Cell:function(e){var t=e.value;return Object(c.jsxs)("span",{children:[t," pages"]})}}]}),[]);return i.a.useMemo((function(){return Object(c.jsxs)(re,{title:"GOT | Books",className:"books",isLoading:t,children:[Object(c.jsx)(se,{columns:O,data:n.results,initialState:{sortBy:[{id:"name",desc:!1}]}}),Object(c.jsx)(ue,{pageCount:p.pageCount,currentPage:p.currentPage,pageSize:p.pageSize,prevUri:p.prevUri,nextUri:p.nextUri,lastUri:p.lastUri})]})}),[n,O,t,p])},je=function(){var e=Object(g.h)().id,t=Object(u.c)((function(e){return e.layouts})).isLoading,n=Object(u.c)((function(e){return e.services})).book,r=Object(u.b)();return Object(a.useEffect)((function(){if(e){var t=r(W(e));return function(){return t.abort()}}}),[e,r]),i.a.useMemo((function(){return Object(c.jsxs)(re,{title:"GOT | Book: ".concat(n.name?n.name:"N/A"),className:"character-details",isLoading:t,children:[Object(c.jsx)("button",{onClick:function(e){return N()},children:"Back"}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:JSON.stringify(n,null,"  ")})})]})}),[n,t])},be=(n(121),function(e){var t=e.uri,n=e.href,r=e.labelByProp,s=Object(a.useState)(null),o=Object(j.a)(s,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){var e=M.a.CancelToken.source();return J.getDataByUri(t,{cancelToken:e.token}).then((function(e){var t,n=e.data;l(null!==(t=n[r])&&void 0!==t?t:"")})).catch((function(e){})),function(){return e.cancel()}}),[t,r]),i.a.useMemo((function(){return Object(c.jsx)("div",{className:"link-crawl",children:Object(c.jsx)(b.b,{to:n,children:u})})}),[n,u])}),fe=function(e,t,n){return S(e)?"":Object(c.jsx)(be,{uri:e,href:"/".concat(t,"/").concat(P(e)),labelByProp:n})},de=function(e,t,n){var r=e;return w(r)?"":r.map((function(e,r){return Object(c.jsx)(be,{uri:e,href:"/".concat(t,"/").concat(P(e)),labelByProp:n},"".concat(e))}))},pe=function(){var e=Z(),t=Object(u.c)((function(e){return e.layouts})).isLoading,n=Object(u.c)((function(e){return e.services})).houses,r=Object(u.b)(),s=e.get("page"),o=e.get("pageSize"),l=Object(a.useState)({currentPage:0,pageSize:0,pageCount:1,nextUri:"",prevUri:"",lastUri:""}),f=Object(j.a)(l,2),d=f[0],p=f[1];Object(a.useEffect)((function(){p((function(e){return Object(v.a)(Object(v.a)({},e),{},{currentPage:null!==s?+s:1,pageSize:null!==o?+o:20})}))}),[s,o]),Object(a.useEffect)((function(){if(d.currentPage&&d.pageSize){var e=r(q({page:d.currentPage,pageSize:d.pageSize}));return function(){e.abort()}}}),[d.currentPage,d.pageSize,r]),Object(a.useEffect)((function(){if(!w(n.links)){var e=B(n.links,"next"),t=B(n.links,"prev"),r=B(n.links,"last"),c=U(r);p((function(n){return Object(v.a)(Object(v.a)({},n),{},{nextUri:e,prevUri:t,lastUri:r,pageCount:c})}))}}),[n.links]);var h=Object(a.useMemo)((function(){return[{Header:"Name",accessor:"name",Cell:function(e){var t=e.row.original,n=P(t.url);return Object(c.jsx)(b.b,{to:"/house/".concat(n),children:t.name})}},{Header:"Region",accessor:"region"},{Header:"Overlord",accessor:"overlord",Cell:function(e){return fe(e.value,"character","name")}},{Header:"Current Lord",accessor:"currentLord",Cell:function(e){return fe(e.value,"character","name")}},{Header:"Heir",accessor:"heir",Cell:function(e){return fe(e.value,"character","name")}},{Header:"Details",accessor:"titles",maxWidth:300,Cell:function(e){var t,n=e.row.original;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"founded",children:[Object(c.jsx)("h3",{children:"Founded"}),null!==(t=n.founded)&&void 0!==t?t:"N/A"]}),Object(c.jsxs)("div",{className:"founder",children:[Object(c.jsx)("h3",{children:"Founder"}),n.founder?fe(n.founder,"character","name"):"N/A"]}),Object(c.jsxs)("div",{className:"titles",children:[Object(c.jsx)("h3",{children:"Titles"}),w(n.titles)?"N/A":n.titles.map((function(e){return Object(c.jsx)("p",{children:e},e)}))]}),Object(c.jsxs)("div",{className:"coat-of-arms",children:[Object(c.jsx)("h3",{children:"Coat of Arms"}),n.coatOfArms]}),Object(c.jsxs)("div",{className:"words",children:[Object(c.jsx)("h3",{children:"Words"}),n.words]}),Object(c.jsxs)("div",{className:"sworn-members",children:[Object(c.jsx)("h3",{children:"Sworn Members"}),n.swornMembers?de(n.swornMembers,"character","name"):"N/A"]})]})}}]}),[]);return i.a.useMemo((function(){return Object(c.jsxs)(re,{title:"GOT | Houses",className:"houses",isLoading:t,children:[Object(c.jsx)(se,{columns:h,data:n.results}),Object(c.jsx)(ue,{pageCount:d.pageCount,currentPage:d.currentPage,pageSize:d.pageSize,prevUri:d.prevUri,nextUri:d.nextUri,lastUri:d.lastUri})]})}),[n,h,t,d])},he=function(){var e=Object(g.h)().id,t=Object(u.c)((function(e){return e.layouts})).isLoading,n=Object(u.c)((function(e){return e.services})).house,r=Object(u.b)();return Object(a.useEffect)((function(){if(e){var t=r(K(e));return function(){return t.abort()}}}),[e,r]),i.a.useMemo((function(){return Object(c.jsxs)(re,{title:"GOT | House: ".concat(null===n||void 0===n?void 0:n.name),className:"house-details",isLoading:t,children:[Object(c.jsx)("button",{onClick:function(e){return N()},children:"Back"}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:JSON.stringify(n,null,"  ")})})]})}),[n,t])},Oe=function(){var e=Z(),t=Object(u.c)((function(e){return e.layouts})).isLoading,n=Object(u.c)((function(e){return e.services})).characters,r=Object(u.b)(),i=e.get("page"),s=e.get("pageSize"),o=Object(a.useState)({currentPage:0,pageSize:0,pageCount:1,nextUri:"",prevUri:"",lastUri:""}),l=Object(j.a)(o,2),f=l[0],d=l[1];Object(a.useEffect)((function(){console.log(i,s),d((function(e){return Object(v.a)(Object(v.a)({},e),{},{currentPage:null!==i?+i:1,pageSize:null!==s?+s:30})}))}),[i,s]),Object(a.useEffect)((function(){if(f.currentPage&&f.pageSize){var e=r(Q({page:f.currentPage,pageSize:f.pageSize}));return function(){e.abort()}}}),[f.currentPage,f.pageSize,r]),Object(a.useEffect)((function(){if(!w(n.links)){var e=B(n.links,"next"),t=B(n.links,"prev"),r=B(n.links,"last"),c=U(r);d((function(n){return Object(v.a)(Object(v.a)({},n),{},{nextUri:e,prevUri:t,lastUri:r,pageCount:c})}))}}),[n.links]);var p=Object(a.useMemo)((function(){return[{Header:"Name",accessor:"name",Cell:function(e){var t=e.row.original,n=P(t.url);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.b,{to:"/character/".concat(n),children:S(t.name)?"N/A":t.name}),!w(t.aliases)&&Object(c.jsxs)("div",{className:"aliases",children:[Object(c.jsx)("h5",{children:"Aliases:"}),t.aliases.map((function(e){return Object(c.jsx)("p",{children:e},e)}))]})]})}},{Header:"Gender",accessor:"gender",Filter:oe,disableSortBy:!0,filter:"includes"},{Header:"Culture",accessor:"culture",Filter:oe,disableSortBy:!0,filter:"includes"},{Header:"Family",accessor:"father",Cell:function(e){var t=e.row.original;return Object(c.jsxs)("div",{children:[!S(t.father)&&Object(c.jsxs)("span",{children:["Father ",fe(t.father,"character","name")]}),!S(t.mother)&&Object(c.jsxs)("span",{children:["Mother ",fe(t.mother,"character","name")]}),!S(t.spouse)&&Object(c.jsxs)("span",{children:["Spouse ",fe(t.spouse,"character","name")]})]})}},{Header:"Allegiances",accessor:"allegiances",Cell:function(e){return de(e.value,"house","name")}},{Header:"Books",accessor:"books",Cell:function(e){return de(e.value,"book","name")},Filter:ge,filter:"includes",disableSortBy:!0},{Header:"POV Books",accessor:"povBooks",Cell:function(e){return de(e.value,"book","name")}}]}),[]);return Object(a.useMemo)((function(){return Object(c.jsxs)(re,{title:"GOT | Characters",className:"characters",isLoading:t,children:[Object(c.jsx)(se,{columns:p,data:n.results}),Object(c.jsx)(ue,{pageCount:f.pageCount,currentPage:f.currentPage,pageSize:f.pageSize,prevUri:f.prevUri,nextUri:f.nextUri,lastUri:f.lastUri})]})}),[n,p,f,t])},ge=function(e){var t=e.column,n=t.filterValue,r=t.setFilter,a=t.preFilteredRows,s=t.id,o=i.a.useMemo((function(){var e=new Set;return a.forEach((function(t){!w(t.values[s])&&t.values[s].forEach((function(t){e.add(t)}))})),Object(ce.a)(e)}),[s,a]);return Object(c.jsxs)("select",{value:n,onChange:function(e){return e.currentTarget.blur()},onBlur:function(e){r(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),o.map((function(e,t){return Object(c.jsx)("option",{value:e,children:"Book ".concat(P(e))},t)}))]})},ve=function(){var e=Object(g.h)().id,t=Object(u.c)((function(e){return e.layouts})).isLoading,n=Object(u.c)((function(e){return e.services})).character,r=Object(u.b)();return Object(a.useEffect)((function(){if(e){var t=r(Y(e));return function(){return t.abort()}}}),[e,r]),i.a.useMemo((function(){return Object(c.jsxs)(re,{title:"GOT | Character: ".concat(n.name?n.name:"N/A"),className:"character-details",isLoading:t,children:[Object(c.jsx)("button",{onClick:function(e){return N()},children:"Back"}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:JSON.stringify(n,null,"  ")})})]})}),[n,t])},me=function(){return Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{exact:!0,path:"/",component:le}),Object(c.jsx)(g.a,{path:"/book/:id",component:je}),Object(c.jsx)(g.a,{path:"/houses",component:pe}),Object(c.jsx)(g.a,{path:"/house/:id",component:he}),Object(c.jsx)(g.a,{path:"/characters",component:Oe}),Object(c.jsx)(g.a,{path:"/character/:id",component:ve})]})},xe=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],i=n[1],s=function(){i(!0)},o=function(){i(!1)};return Object(a.useEffect)((function(){var t=e.current;if(null!==t){var n=new d.a(t,{tolerance:{up:5,down:5},onPin:s,onUnpin:o});return n.init(),function(){n.destroy()}}}),[]),Object(c.jsx)("div",{className:h()("main-container",{"main-container--header-pinned":r,"main-container--header-unpinned":!r}),children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(O,{ref:e}),Object(c.jsx)("main",{children:Object(c.jsx)(me,{})}),Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("div",{className:"footer__container",children:Object(c.jsx)("p",{className:"footer__copyright",children:"License Copyright: Unknown. "})})})]})})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},ye=n(14),Ce=function(e,t){e.isLoading=t},we=Object(F.c)({name:"layouts",initialState:{breakpoint:null,isLoading:!1},reducers:{breakpointChange:function(e,t){e.breakpoint=t.payload}},extraReducers:(k={},Object($.a)(k,"".concat(V.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(W.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(X.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(q.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(K.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(Q.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(Y.pending),(function(e){return Ce(e,!0)})),Object($.a)(k,"".concat(V.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(W.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(X.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(q.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(K.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(Q.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(Y.fulfilled),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(V.rejected),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(W.rejected),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(X.rejected),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(q.rejected),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(K.rejected),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(Q.rejected),(function(e){return Ce(e,!1)})),Object($.a)(k,"".concat(Y.rejected),(function(e){return Ce(e,!1)})),k)}).reducer,Se=Object(F.c)({name:"services",initialState:{books:{results:[],links:[]},houses:{results:[],links:[]},characters:{results:[],links:[]},book:{},house:{},character:{}},reducers:{},extraReducers:(y={},Object($.a)(y,"".concat(V.fulfilled),(function(e,t){var n=t.payload;e.books.results=n.results,e.books.links=n.links})),Object($.a)(y,"".concat(W.fulfilled),(function(e,t){var n=t.payload;e.book=n})),Object($.a)(y,"".concat(X.fulfilled),(function(e,t){var n=t.payload;e.books.results=n.results,e.books.links=n.links})),Object($.a)(y,"".concat(q.fulfilled),(function(e,t){var n=t.payload;e.houses.results=n.results,e.houses.links=n.links})),Object($.a)(y,"".concat(K.fulfilled),(function(e,t){var n=t.payload;e.house=n})),Object($.a)(y,"".concat(Q.fulfilled),(function(e,t){var n=t.payload;e.characters.results=n.results,e.characters.links=n.links})),Object($.a)(y,"".concat(Y.fulfilled),(function(e,t){var n=t.payload;e.character=n})),y)}).reducer,Ne=Object(ye.c)({layouts:we,services:Se}),Ue=Object(F.a)({reducer:Ne});o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u.a,{store:Ue,children:Object(c.jsx)(l.b,{children:Object(c.jsx)(xe,{})})})}),document.getElementById("root")),ke()},65:function(e,t,n){},66:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.e3eb8126.chunk.js.map