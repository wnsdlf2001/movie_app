(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),r=s.n(a),i=s(13),c=s.n(i),o=s(4),m=s.n(o),l=s(14),d=s(15),j=s(16),u=s(19),v=s(18),h=s(17),p=s.n(h);s(44);var b=function(e){e.id;var t=e.year,s=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"movie_title",children:[s," ",t]}),Object(n.jsx)("img",{src:r,alt:s}),Object(n.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(n.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(n.jsx)("h4",{className:"movie_summary",children:a})]})},O=function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading,t=this.state.movies;return Object(n.jsx)("section",{className:"container",children:Object(n.jsx)("div",{children:e?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:"Loading"})}):Object(n.jsx)("div",{className:"movies",children:t.map((function(e){return Object(n.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})}}]),s}(r.a.Component);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1c291b09.chunk.js.map