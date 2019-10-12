(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(e){e.exports=JSON.parse('["2019-chiba-typhoon-15.json","2019-typhoon-19.json"]')},185:function(e){e.exports=JSON.parse('{"map_id":"2019-chiba-typhoon-15","map_title":"印刷できる台風災害支援情報マップ（千葉県）","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。（GS・給水・避難所・充電・無料Wifi）  ぜひ印刷して必要な人に届けてあげてください！","sources":[{"url":"https://www.google.com/maps/d/kml?mid=18v4csEC-qPW_aeXhEnuzgMfUAqWcbF5q&forcekml=1","type":"kml","title":"2019千葉台風15号","show":true}],"default_hash":"35.034970230243786,139.83536606997205-34.998870264553034,139.90144296563784","center":[139.83536606997205,35.034970230243786],"type":"KML","layer_settings":[{"name":"GS(赤：無事)","color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-heart","class":"layer_gs_ok"},{"name":"GS (黒点：未確認)","color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},{"name":"給水所_(千葉市・県指定除く）","color":"#285797","bg_color":"#A3BBDA","icon_class":"fas fa-tint","class":"layer_water_chibacity"},{"name":"避難所","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},{"name":"携帯充電_ほか","color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},{"name":"無料Wifi","color":"#604490","bg_color":"#BDB1D8","icon_class":"fas fa-wifi","class":"layer_wifi"}]}')},186:function(e){e.exports=JSON.parse('{"map_id":"2019-typhoon-19","map_title":"印刷できる台風災害支援情報マップ","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。随時情報更新していきます。ぜひ印刷して必要な人に届けてあげてください！","sources":[{"url":"https://www.google.com/maps/d/kml?mid=1pl0sY4TmNur6xB4bKvxxvi5rsizCY1bu&forcekml=1","type":"kml","title":"2019台風19号","show":true}],"default_hash":"35.034970230243786,139.83536606997205-34.998870264553034,139.90144296563784","center":[139.83536606997205,35.034970230243786],"type":"KML","layer_settings":[{"name":"GS (黒点：未確認)","color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},{"name":"避難所_台風19号_19年10月","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},{"name":"携帯充電_ショップ(緑点；未確認)","color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"}]}')},187:function(e,t,n){var map={"./2019-chiba-typhoon-15":185,"./2019-chiba-typhoon-15.json":185,"./2019-typhoon-19":186,"./2019-typhoon-19.json":186,"./list":184,"./list.json":184};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=187},189:function(e,t,n){e.exports=n.p+"img/bbb22c3.jpg"},196:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_ICON_COLOR",(function(){return f})),n.d(t,"default",(function(){return m})),n.d(t,"readCategoryOfFolder",(function(){return h}));n(111);var r=n(41),o=(n(61),n(197)),l=n(198),c=n(104),d=n(199),f="lightgreen",m=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"parse",value:function(e,data,t){switch(e){case"kml":var n=(new DOMParser).parseFromString(data,"text/xml");return this.loadKMLData(n,t);case"umal":this.loadUmapJsonData(data)}}},{key:"addFeatureCollection",value:function(e,t){e.features.forEach((function(e){e.geometry.type}))}},{key:"loadUmapJsonData",value:function(data){data.layers.forEach((function(e){e._umap_options;e.features.forEach((function(e){}))}))}},{key:"loadKMLData",value:function(data,e){var t=this,n=this,r=data.getElementsByTagName("Folder");0==r.length&&(r=data.getElementsByTagName("Document"));var o=[];return Array.prototype.forEach.call(r,(function(r){var l=h(r,data);if(e&&(l=t.convertCategoryStyle(l,e)),"FeatureCollection"==d.kml(r).type){var c=d.kml(r,{styles:!0});if(c.features.length>0)return n.addFeatureCollection(c,l),c.features.map((function(e){"Point"==e.geometry.type&&o.push({feature:e,category:l})}))}else{var f=d.kml(r,{styles:!0});o.push({geojsondata:f,category:l})}})),o}},{key:"inBounds",value:function(e,t){var n=(e[0]-t.getNorthEast().lng)*(e[0]-t.getSouthWest().lng)<0,r=(e[1]-t.getNorthEast().lat)*(e[1]-t.getSouthWest().lat)<0;return n&&r}},{key:"convertCategoryStyle",value:function(e,t){return null==t?e:(t.forEach((function(t){if(t.name==e.name)return e.color=t.color,e.bgColor=t.bg_color,e.iconClass=t.icon_class,e.class=t.class,e})),e)}},{key:"serializeLatLng",value:function(e){return e.lat+","+e.lng}},{key:"serializeBounds",value:function(e){return this.serializeLatLng(e.getNorthWest())+"-"+this.serializeLatLng(e.getSouthEast())}},{key:"deserializeLatLng",value:function(s){var e=s.split(",",2),t=Object(r.a)(e,2),n=t[0],o=t[1],l=parseFloat(o),d=parseFloat(n);return new c.LngLat(l,d)}},{key:"deserializeBounds",value:function(s){try{var e=this;return new c.LngLatBounds(s.split("-",2).map((function(t){return e.deserializeLatLng(t)})))}catch(e){return}}}]),e}();function h(e,t){var n=e.getElementsByTagName("name")[0].textContent,r="red";console.log(e);try{var o=e.getElementsByTagName("styleUrl")[0].textContent;if(o){var l=t.querySelectorAll(o+" Pair");l.length>0&&Array.prototype.forEach.call(l,(function(e){var n=e.querySelector("key");if(n&&"normal"==n.textContent){var o=e.querySelector("styleUrl").textContent,style=t.querySelector(o);try{r="#"+style.querySelector("IconStyle color").textContent.substr(0,6)}catch(e){r=f}}}))}}catch(t){console.log("#category read error"),console.log(t),console.log(e)}return{name:n,color:r,iconUrl:void 0}}},200:function(e,t){},204:function(e,t,n){"use strict";n.r(t);var r,o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"print-button-outer"},[t("button",{attrs:{id:"print"}},[this._v("印刷する（A4タテ）")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("このサイトのソースコードはオープンに公開しております。開発にご協力いただける方は、"),t("a",{attrs:{href:"https://github.com/codeforjapan/mapprint"}},[this._v("Code for Japan の Github リポジトリ")]),this._v("から、開発にご参加ください。JavaScript や Leaflet などの経験がある方、大歓迎です。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:n(189)}})])}];n(61),n(190),n(194);var l={props:["map_config"],computed:{center:function(){return this.map_config.center},inBoundsMarkers:function(){var e=this,t=[];return this.layers.map((function(n){n.source.show&&n.markers.map((function(marker){e.bounds&&r.inBounds(marker.feature.geometry.coordinates,e.bounds)&&t.push(marker)}))})),t},displayMarkersGroupByCategory:function(){return this.inBoundsMarkers.reduce((function(e,t){var n=e.find((function(g){return g.name===t.category.name}));return n||(n={name:t.category.name,prop:t.category,markers:[]},e.push(n)),n.markers.push(t),e}),[])}},data:function(){return{layers:[],map:null,bounds:null,updated_at:null,isOpenLegend:!1,previous_hash:"",mapStyle:{version:8,sources:{OSM:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:'Map data © <a href="http://openstreetmap.org/">OpenStreetMap</a>'}},layers:[{id:"OSM",type:"raster",source:"OSM",minzoom:0,maxzoom:22}]}}},methods:{load:function(e){var t=window.location.hash.substr(1),n=r.deserializeBounds(t);this.map=e.map,null!=n&&this.map.fitBounds(n,{linear:!1}),this.map.on("moveend",this.etmitBounds),this.etmitBounds()},etmitBounds:function(){this.bounds=this.map.getBounds(),this.setHash(this.bounds),this.$emit("bounds-changed")},setHash:function(e){var s=r.serializeBounds(e),path=location.pathname;s!=this.previous_hash&&window.history.pushState("","",path+"#"+s),this.previous_hash=s}},mounted:function(){var e=this,t=n(196).default;r=new t,this.map_config.sources.forEach((function(source){var dt;e.updated_at=(dt=new Date).getFullYear()+"年"+("00"+(dt.getMonth()+1)).slice(-2)+"月"+("00"+dt.getDate()).slice(-2)+"日"+("00"+dt.getHours()).slice(-2)+"時"+("00"+dt.getMinutes()).slice(-2)+"分",$nuxt.$axios.get(source.url).then((function(t){e.layers.push({source:source,markers:r.parse(source.type,t.data,e.map_config.layer_settings)})}))}))}},c=n(11),d={components:{PrintableMap:Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("div",[n("div",e._l(e.map_config.sources,(function(source){return n("label",{staticClass:"header-label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:source.show,expression:"source.show"}],staticClass:"header-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(source.show)?e._i(source.show,null)>-1:source.show},on:{change:function(t){var n=source.show,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&e.$set(source,"show",n.concat([null])):l>-1&&e.$set(source,"show",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(source,"show",o)}}}),e._v(e._s(source.title))])})),0),n("div",{staticClass:"header-datetime"},[e._v("印刷日： "+e._s(e.updated_at))]),n("div",{staticClass:"map-outer"},[n("MglMap",{attrs:{mapStyle:e.mapStyle,center:e.center,zoom:15,preserveDrawingBuffer:"",sourceId:"basemap",id:"map"},on:{"update:mapStyle":function(t){e.mapStyle=t},"update:map-style":function(t){e.mapStyle=t},load:e.load}},[n("MglGeolocateControl"),n("div",{staticClass:"legend",class:{open:e.isOpenLegend}},[n("div",{staticClass:"legend-inner"},[e._l(e.map_config.layer_settings,(function(t){return n("div",{staticClass:"legend-type"},[n("i",{class:[t.icon_class],style:{backgroundColor:t.color}}),n("span",{staticClass:"poi-type"},[e._v(e._s(t.name))])])})),n("div",{staticClass:"legend-trigger",class:{close:!e.isOpenLegend},on:{click:function(t){e.isOpenLegend=!e.isOpenLegend}}},[e.isOpenLegend?n("div",{staticClass:"legend-trigger-icon"},[n("i",{staticClass:"fas fa-caret-right"}),n("span",[e._v("とじる")])]):n("div",{staticClass:"legend-trigger-icon"},[n("i",{staticClass:"fas fa-caret-left"}),n("span",[e._v("凡例")])])])],2)]),e._l(e.layers,(function(t){return t.source.show?e._l(t.markers,(function(marker,t){return n("MglMarker",{key:t,attrs:{coordinates:marker.feature.geometry.coordinates}},[n("template",{slot:"marker"},[n("div",{staticClass:"marker"},[n("span",{style:{background:marker.category.color}},[n("i",{class:[marker.category.iconClass,marker.category.class],style:{backgroundColor:marker.category.color}}),n("b",{staticClass:"number",style:{background:marker.category.bgColor}},[e._v(e._s(e.inBoundsMarkers.indexOf(marker)+1))])])])]),n("MglPopup",[n("div",[n("div",{staticClass:"legend-type"},[n("i",{class:[marker.category.iconClass,marker.category.class],style:{backgroundColor:marker.category.color}}),n("span",{staticClass:"poi-type"},[e._v(e._s(marker.category.name))])]),n("p",[e._v("名称: "+e._s(marker.feature.properties.name))]),n("div",{staticClass:"legend-detail-content"},[n("p",{domProps:{innerHTML:e._s(marker.feature.properties.description?marker.feature.properties.description:"")}})])])])],2)})):e._e()}))],2)],1),n("div",e._l(e.displayMarkersGroupByCategory,(function(t){return n("section",[n("h2",{staticClass:"list-title"},[n("span",{staticClass:"list-title-mark",style:{backgroundColor:t.prop.color}},[n("i",{class:[t.prop.iconClass]})]),n("span",[e._v(e._s(t.prop.name))])]),n("ul",{staticClass:"list-items grid-noGutter"},e._l(t.markers,(function(marker){return n("li",{staticClass:"col-12_xs-6"},[n("span",{staticClass:"item-number"},[e._v(e._s(e.inBoundsMarkers.indexOf(marker)+1))]),n("span",{staticClass:"item-name"},[e._v(e._s(marker.feature.properties.name))])])})),0)])})),0)])])}),[],!1,null,null,null).exports,VueQrcode:n(201).a},data:function(){return{map_config:null,isOpenExplain:!1,fullURL:null}},methods:{updateQRCode:function(){this.fullURL=location.href}},mounted:function(){this.map_config=n(187)("./"+$nuxt.$route.params.map),this.fullURL=location.href}},f=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-container-inner grid"},[n("aside",{staticClass:"not_print_area col-12_md-3",attrs:{id:"explain"}},[e._m(0),n("h2",{staticClass:"explain-title-pc"},[e._v("このサイトについて")]),n("div",{staticClass:"explain-title-sp",on:{click:function(t){e.isOpenExplain=!e.isOpenExplain}}},[e._v("このサイトについて")]),n("div",{staticClass:"explain",class:{open:e.isOpenExplain}},[e.map_config?n("p",[e._v(e._s(e.map_config.map_description))]):e._e(),e._m(1)])]),n("main",{staticClass:"sheet col-12_md-9"},[n("header",{staticClass:"header"},[n("div",{staticClass:"qrcode"},[n("vue-qrcode",{attrs:{value:e.fullURL,tag:"img"}})],1),n("div",{staticClass:"banner"},[e._m(2),e.map_config?n("h1",{staticClass:"title"},[e._v(e._s(e.map_config.map_title))]):e._e()])]),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"page"}},[n("div",{staticClass:"print_area",attrs:{id:"date"}}),e.map_config?n("printable-map",{attrs:{map_config:e.map_config},on:{"bounds-changed":e.updateQRCode}}):e._e()],1),n("div",{staticClass:"print_area",attrs:{id:"footer"}})])])])}),o,!1,null,null,null);t.default=f.exports}}]);