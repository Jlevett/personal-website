"use strict";var precacheConfig=[["/index.html","e454d1545bfbeb688459bf46594e945d"],["/static/css/main.65502ac5.css","3cc90d8ac81cb5d280dbbe50311cbd0e"],["/static/js/main.29dbaac5.js","cd7ea7d42354d3a481f0420a2324e0f6"],["/static/media/ajax.4ce3c641.png","4ce3c641d32fbee5ceaefde1f20fbb52"],["/static/media/climb_L.940eda23.jpeg","940eda23b5b20245caea423d5bc0d8cf"],["/static/media/css3.9c10752e.svg","9c10752eba3fcf21ba4b9b097bf025b3"],["/static/media/es6.1f0e4175.svg","1f0e4175b8e6b1ff953d76ddb48fc73e"],["/static/media/feedreader_L.a41154da.png","a41154da56a1e1382c5214f48b8476e3"],["/static/media/frogger_L.a7dc71ea.png","a7dc71ea036f632a1bed41a98daf96bf"],["/static/media/git.3b9e121c.svg","3b9e121c4d802568b947eaf971bb0a6e"],["/static/media/gulp.0c5248f6.svg","0c5248f60b59abfbfa00f4fbf3c7b3e2"],["/static/media/html5.7dffd9f3.svg","7dffd9f3befc41d7496ce325f3055084"],["/static/media/jasmine.cc221d4d.svg","cc221d4dafcf5f0469a9134873589374"],["/static/media/java.84321945.svg","84321945474161660fa7d892460c2d6c"],["/static/media/jquery.90f4b0bc.svg","90f4b0bc966c455a98b99848e6b391bd"],["/static/media/js.abfb143c.svg","abfb143c12c032eb197d61515d117cf1"],["/static/media/mapsreact_L.1def29dc.png","1def29dc57a0ff86cae6cf6830ea25a5"],["/static/media/me_L.dc6d57f5.jpg","dc6d57f5b893c34312f56fb8af880aee"],["/static/media/memory_L.ee078cda.png","ee078cda9a8c81634e66385dd8948281"],["/static/media/myreads_L.469be574.png","469be57449aa1b446f11528dd91a961d"],["/static/media/npm.e8b13454.svg","e8b13454f80942e3b209630949b275cd"],["/static/media/otherskills_L.a10a79a0.png","a10a79a0a7936fe56633805094a00844"],["/static/media/press_L.9dea86b7.png","9dea86b704b576ba829ab83c2bdcc9de"],["/static/media/printer_L.59e1e517.png","59e1e5175ddcfa3d8aa40262564e9782"],["/static/media/pro_L.34cc2ce5.png","34cc2ce5b7c48fa8e7357c802b3303d6"],["/static/media/react.2bc32987.svg","2bc32987b9a9efbbeff8e9047f28f235"],["/static/media/reactrouter.4fbd15d8.svg","4fbd15d81e69dcf3fa843ba586582f4f"],["/static/media/responsivedesign.24f694ab.svg","24f694abbe46151868887c2df0ace9c3"],["/static/media/restaurant_L.480ee90a.png","480ee90a089ed712fbb10e23a8d35960"],["/static/media/sea.a58529f2.jpg","a58529f2cc8b53d3bd6e87504b50e153"],["/static/media/skydive_L.20d185a4.png","20d185a48f9cb2aff70e29e81a7a0e63"],["/static/media/smoker_L.b8912422.png","b8912422edf0c778280f1116da19d06b"],["/static/media/travel_L.18747185.png","18747185a5f35213ea4f2e026521577b"],["/static/media/webpack.aa94b651.svg","aa94b6517e686a5e5f38c11513d50c45"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});