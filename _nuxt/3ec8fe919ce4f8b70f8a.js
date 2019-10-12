(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(t){t.exports=JSON.parse('["2019-chiba-typhoon-15.json","2019-typhoon-19.json"]')},185:function(t){t.exports=JSON.parse('{"map_id":"2019-chiba-typhoon-15","map_title":"印刷できる台風災害支援情報マップ（千葉県）","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。（GS・給水・避難所・充電・無料Wifi）  ぜひ印刷して必要な人に届けてあげてください！","sources":[{"url":"https://www.google.com/maps/d/kml?mid=18v4csEC-qPW_aeXhEnuzgMfUAqWcbF5q&forcekml=1","type":"kml","title":"2019千葉台風15号","show":true}],"default_hash":"35.034970230243786,139.83536606997205-34.998870264553034,139.90144296563784","center":[139.83536606997205,35.034970230243786],"type":"KML","layer_settings":{"GS(赤：無事)":{"color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-heart","class":"layer_gs_ok"},"GS (黒点：未確認)":{"color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},"給水所_(千葉市・県指定除く）":{"color":"#285797","bg_color":"#A3BBDA","icon_class":"fas fa-tint","class":"layer_water_chibacity"},"避難所":{"color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"携帯充電_ほか":{"color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},"無料Wifi":{"color":"#604490","bg_color":"#BDB1D8","icon_class":"fas fa-wifi","class":"layer_wifi"}}}')},186:function(t){t.exports=JSON.parse('{"map_id":"2019-typhoon-19","map_title":"印刷できる台風災害支援情報マップ","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。随時情報更新していきます。ぜひ印刷して必要な人に届けてあげてください！","sources":[{"url":"https://www.google.com/maps/d/kml?mid=1pl0sY4TmNur6xB4bKvxxvi5rsizCY1bu&forcekml=1","type":"kml","title":"2019台風19号","show":true}],"default_hash":"35.99241430232924,139.77480375904878-35.57785479770956,140.32268996827378","center":[140.1099463905179,35.77029301432708],"type":"KML","layer_settings":{"GS (黒点：未確認)":{"color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},"避難所_台風19号_19年10月":{"name":"避難所_台風19号_19年10月","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"携帯充電_ショップ(緑点；未確認)":{"color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"}}}')},187:function(t,e,n){var map={"./2019-chiba-typhoon-15":185,"./2019-chiba-typhoon-15.json":185,"./2019-typhoon-19":186,"./2019-typhoon-19.json":186,"./list":184,"./list.json":184};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=187},189:function(t,e,n){t.exports=n.p+"img/bbb22c3.jpg"},198:function(t,e,n){"use strict";n.r(e),n.d(e,"DEFAULT_ICON_COLOR",(function(){return f})),n.d(e,"default",(function(){return _})),n.d(e,"readCategoryOfFolder",(function(){return m}));n(111);var r=n(41),o=(n(61),n(199)),l=n(200),c=n(104),d=n(201),f="lightgreen",_=function(){function t(){Object(o.a)(this,t)}return Object(l.a)(t,[{key:"parse",value:function(t,data,e){switch(t){case"kml":var n=(new DOMParser).parseFromString(data,"text/xml");return this.loadKMLData(n,e);case"umal":this.loadUmapJsonData(data)}}},{key:"addFeatureCollection",value:function(t,e){t.features.forEach((function(t){t.geometry.type}))}},{key:"loadUmapJsonData",value:function(data){data.layers.forEach((function(t){t._umap_options;t.features.forEach((function(t){}))}))}},{key:"loadKMLData",value:function(data,t){var e=data.getElementsByTagName("Folder");0==e.length&&(e=data.getElementsByTagName("Document"));var n=[];return Array.prototype.forEach.call(e,(function(t){var e=m(t,data).name;if("FeatureCollection"==d.kml(t).type){var r=d.kml(t,{styles:!0});if(r.features.length>0)return r.features.map((function(t){"Point"==t.geometry.type&&n.push({feature:t,category:e})}))}else{var o=d.kml(t,{styles:!0});n.push({geojsondata:o,category:e})}})),n}},{key:"inBounds",value:function(t,e){var n=(t[0]-e.getNorthEast().lng)*(t[0]-e.getSouthWest().lng)<0,r=(t[1]-e.getNorthEast().lat)*(t[1]-e.getSouthWest().lat)<0;return n&&r}},{key:"convertCategoryStyle",value:function(t,e){return null==e?t:(e.forEach((function(e){if(e.name==t.name)return t.color=e.color,t.bgColor=e.bg_color,t.iconClass=e.icon_class,t.class=e.class,t})),t)}},{key:"serializeLatLng",value:function(t){return t.lat+","+t.lng}},{key:"serializeBounds",value:function(t){return this.serializeLatLng(t.getNorthWest())+"-"+this.serializeLatLng(t.getSouthEast())}},{key:"deserializeLatLng",value:function(s){var t=s.split(",",2),e=Object(r.a)(t,2),n=e[0],o=e[1],l=parseFloat(o),d=parseFloat(n);return new c.LngLat(l,d)}},{key:"deserializeBounds",value:function(s){try{var t=this;return new c.LngLatBounds(s.split("-",2).map((function(e){return t.deserializeLatLng(e)})))}catch(t){return}}}]),t}();function m(t,e){var n=t.getElementsByTagName("name")[0].textContent,r="red";console.log(t);try{var o=t.getElementsByTagName("styleUrl")[0].textContent;if(o){var l=e.querySelectorAll(o+" Pair");l.length>0&&Array.prototype.forEach.call(l,(function(t){var n=t.querySelector("key");if(n&&"normal"==n.textContent){var o=t.querySelector("styleUrl").textContent,style=e.querySelector(o);try{r="#"+style.querySelector("IconStyle color").textContent.substr(0,6)}catch(t){r=f}}}))}}catch(e){console.log("#category read error"),console.log(e),console.log(t)}return{name:n,color:r,iconUrl:void 0}}},202:function(t,e){},207:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"print-button-outer"},[e("button",{attrs:{id:"print"}},[this._v("印刷する（A4タテ）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("このサイトのソースコードはオープンに公開しております。開発にご協力いただける方は、"),e("a",{attrs:{href:"https://github.com/codeforjapan/mapprint"}},[this._v("Code for Japan の Github リポジトリ")]),this._v("から、開発にご参加ください。JavaScript や Leaflet などの経験がある方、大歓迎です。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:n(189)}})])}],o=(n(112),n(113),n(15),n(14),n(27),n(44),n(5));n(61),n(190),n(194);var l,c=n(196).crc16,d={props:["map_config"],computed:{center:function(){return this.map_config.center},inBoundsMarkers:function(){var t=this,e=[];return this.layers.map((function(n){n.source.show&&n.markers.map((function(marker){t.bounds&&l.inBounds(marker.feature.geometry.coordinates,t.bounds)&&e.push(marker)}))})),e},displayMarkersGroupByCategory:function(){return this.inBoundsMarkers.reduce((function(t,e){var n=t.find((function(g){return g.name===e.category}));return n||(n={name:e.category,prop:e.category,markers:[]},t.push(n)),n.markers.push(e),t}),[])}},data:function(){return{layers:[],map:null,bounds:null,updated_at:null,isOpenLegend:!1,previous_hash:"",mapStyle:{version:8,sources:{OSM:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:'Map data © <a href="http://openstreetmap.org/">OpenStreetMap</a>'}},layers:[{id:"OSM",type:"raster",source:"OSM",minzoom:0,maxzoom:22}]}}},methods:{load:function(t){var e=window.location.hash.substr(1),n=l.deserializeBounds(e);this.map=t.map,null!=n&&this.map.fitBounds(n,{linear:!1}),this.map.on("moveend",this.etmitBounds),this.etmitBounds()},etmitBounds:function(){this.bounds=this.map.getBounds(),this.setHash(this.bounds),this.$emit("bounds-changed")},setHash:function(t){var s=l.serializeBounds(t),path=location.pathname;s!=this.previous_hash&&window.history.pushState("","",path+"#"+s),this.previous_hash=s}},mounted:function(){var t=n(198).default,e=n(203).default;l=new t;var r={},d=this;this.map_config.sources.forEach((function(source){Object(o.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.updated_at=(dt=new Date).getFullYear()+"年"+("00"+(dt.getMonth()+1)).slice(-2)+"月"+("00"+dt.getDate()).slice(-2)+"日"+("00"+dt.getHours()).slice(-2)+"時"+("00"+dt.getMinutes()).slice(-2)+"分",t.next=3,e.get(source.url).text();case 3:data=t.sent,(n=l.parse(source.type,data,d.map_config.layer_settings)).map((function(marker){r[marker.category]=!0})),Object.keys(r).map((function(t){if(!d.map_config.layer_settings[t]){var e="#";e+=(parseInt(c(t.substr(0)),16)%32+64).toString(16),e+=(parseInt(c(t.substr(1)),16)%32+64).toString(16),e+=(parseInt(c(t.substr(2)),16)%32+64).toString(16);var n="#";n+=(parseInt(c(t.substr(0)),16)%32+128).toString(16),n+=(parseInt(c(t.substr(1)),16)%32+128).toString(16),n+=(parseInt(c(t.substr(2)),16)%32+128).toString(16),d.map_config.layer_settings[t]={name:t,color:e,bg_color:n}}})),d.layers.push({source:source,markers:n});case 8:case"end":return t.stop()}var dt}),t)})))()}))}},f=n(11),_={components:{PrintableMap:Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[t.layers.length?n("div",[n("div",t._l(t.map_config.sources,(function(source){return n("label",{staticClass:"header-label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:source.show,expression:"source.show"}],staticClass:"header-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(source.show)?t._i(source.show,null)>-1:source.show},on:{change:function(e){var n=source.show,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&t.$set(source,"show",n.concat([null])):l>-1&&t.$set(source,"show",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(source,"show",o)}}}),t._v(t._s(source.title))])})),0),n("div",{staticClass:"header-datetime"},[t._v("印刷日： "+t._s(t.updated_at))]),n("div",{staticClass:"map-outer"},[n("MglMap",{attrs:{mapStyle:t.mapStyle,center:t.center,zoom:15,preserveDrawingBuffer:"",sourceId:"basemap",id:"map"},on:{"update:mapStyle":function(e){t.mapStyle=e},"update:map-style":function(e){t.mapStyle=e},load:t.load}},[n("MglGeolocateControl"),n("div",{staticClass:"legend",class:{open:t.isOpenLegend}},[n("div",{staticClass:"legend-inner"},[t._l(t.map_config.layer_settings,(function(e,r){return n("div",{staticClass:"legend-type"},[n("i",{class:[e.icon_class],style:{backgroundColor:e.color}}),n("span",{staticClass:"poi-type"},[t._v(t._s(r))])])})),n("div",{staticClass:"legend-trigger",class:{close:!t.isOpenLegend},on:{click:function(e){t.isOpenLegend=!t.isOpenLegend}}},[t.isOpenLegend?n("div",{staticClass:"legend-trigger-icon"},[n("i",{staticClass:"fas fa-caret-right"}),n("span",[t._v("とじる")])]):n("div",{staticClass:"legend-trigger-icon"},[n("i",{staticClass:"fas fa-caret-left"}),n("span",[t._v("凡例")])])])],2)]),t._l(t.layers,(function(e){return e.source.show?t._l(e.markers,(function(marker,e){return n("MglMarker",{key:e,attrs:{coordinates:marker.feature.geometry.coordinates}},[n("template",{slot:"marker"},[n("div",{staticClass:"marker"},[n("span",{style:{background:t.map_config.layer_settings[marker.category].color}},[n("i",{class:[t.map_config.layer_settings[marker.category].icon_class,t.map_config.layer_settings[marker.category].class],style:{backgroundColor:t.map_config.layer_settings[marker.category].color}}),n("b",{staticClass:"number",style:{background:t.map_config.layer_settings[marker.category].bg_color}},[t._v(t._s(t.inBoundsMarkers.indexOf(marker)+1))])])])]),n("MglPopup",[n("div",{staticClass:"legend-type"},[n("i",{class:[t.map_config.layer_settings[marker.category].icon_class,t.map_config.layer_settings[marker.category].class],style:{backgroundColor:t.map_config.layer_settings[marker.category].color}}),n("span",{staticClass:"poi-type"},[t._v(t._s(marker.category))]),n("p",[t._v("名称: "+t._s(marker.feature.properties.name))]),n("div",{staticClass:"legend-detail-content"},[n("p",{domProps:{innerHTML:t._s(marker.feature.properties.description?marker.feature.properties.description:"")}})])])])],2)})):t._e()}))],2)],1),n("div",t._l(t.displayMarkersGroupByCategory,(function(e){return n("section",[n("h2",{staticClass:"list-title"},[n("span",{staticClass:"list-title-mark",style:{backgroundColor:t.map_config.layer_settings[e.name].color}},[n("i",{class:t.map_config.layer_settings[e.name].icon_class})]),n("span",[t._v(t._s(e.name))])]),n("ul",{staticClass:"list-items grid-noGutter"},t._l(e.markers,(function(marker){return n("li",{staticClass:"col-12_xs-6"},[n("span",{staticClass:"item-number"},[t._v(t._s(t.inBoundsMarkers.indexOf(marker)+1))]),n("span",{staticClass:"item-name"},[t._v(t._s(marker.feature.properties.name))])])})),0)])})),0)]):t._e()])}),[],!1,null,null,null).exports,VueQrcode:n(204).a},data:function(){return{map_config:null,isOpenExplain:!1,fullURL:null}},methods:{updateQRCode:function(){this.fullURL=location.href}},mounted:function(){this.map_config=n(187)("./"+$nuxt.$route.params.map),this.fullURL=location.href}},m=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container-inner grid"},[n("aside",{staticClass:"not_print_area col-12_md-3",attrs:{id:"explain"}},[t._m(0),n("h2",{staticClass:"explain-title-pc"},[t._v("このサイトについて")]),n("div",{staticClass:"explain-title-sp",on:{click:function(e){t.isOpenExplain=!t.isOpenExplain}}},[t._v("このサイトについて")]),n("div",{staticClass:"explain",class:{open:t.isOpenExplain}},[t.map_config?n("p",[t._v(t._s(t.map_config.map_description))]):t._e(),t._m(1)])]),n("main",{staticClass:"sheet col-12_md-9"},[n("header",{staticClass:"header"},[n("div",{staticClass:"qrcode"},[n("vue-qrcode",{attrs:{value:t.fullURL,tag:"img"}})],1),n("div",{staticClass:"banner"},[t._m(2),t.map_config?n("h1",{staticClass:"title"},[t._v(t._s(t.map_config.map_title))]):t._e()])]),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"page"}},[n("div",{staticClass:"print_area",attrs:{id:"date"}}),t.map_config?n("printable-map",{attrs:{map_config:t.map_config},on:{"bounds-changed":t.updateQRCode}}):t._e()],1),n("div",{staticClass:"print_area",attrs:{id:"footer"}})])])])}),r,!1,null,null,null);e.default=m.exports}}]);