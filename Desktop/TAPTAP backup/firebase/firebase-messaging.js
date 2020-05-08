!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(lt){"use strict";try{(function(){lt=lt&&Object.prototype.hasOwnProperty.call(lt,"default")?lt.default:lt;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function v(e,s,a,u){return new(a=a||Promise)(function(n,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function i(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(r,i)}o((u=u.apply(e,s||[])).next())})}function g(n,r){var i,o,s,e,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){a.label=t[1];break}if(6===t[0]&&a.label<s[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=r.call(n,a)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function i(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}var o,e,t,d=(o=Error,n(e=a,t=o),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s),a);function s(){this.constructor=e}function a(e,t){var n=o.call(this,t)||this;return n.code=e,n.name="FirebaseError",Object.setPrototypeOf(n,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,u.prototype.create),n}var u=(l.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,i=t[0]||{},o=this.service+"/"+e,s=this.errors[e],a=s?(r=i,s.replace(b,function(e,t){var n=r[t];return null!=n?n.toString():"<"+t+"?>"})):"Error",u=this.serviceName+": "+a+" ("+o+").",c=new d(o,u),l=0,f=Object.keys(i);l<f.length;l++){var p=f[l];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=i[p])}return c},l);function l(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var b=/\{\$([^}]+)}/g,f=(p.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},p.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},p.prototype.setServiceProps=function(e){return this.serviceProps=e,this},p);function p(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function y(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function w(n,r,i){var o,e=new Promise(function(e,t){y(o=n[r].apply(n,i)).then(e,t)});return e.request=o,e}function m(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function k(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return w(this[n],e,arguments)})})}function S(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function I(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return e=this[r],(t=w(e,n,arguments)).then(function(e){if(e)return new T(e,t.request)});var e,t})})}function C(e){this._index=e}function T(e,t){this._cursor=e,this._request=t}function _(e){this._store=e}function P(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function j(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new P(n)}function E(e){this._db=e}function D(e,t,n){var r=w(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new j(i.result,e.oldVersion,i.transaction))}),r.then(function(e){return new E(e)})}function x(e){return w(indexedDB,"deleteDatabase",[e])}m(C,"_index",["name","keyPath","multiEntry","unique"]),k(C,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),I(C,"_index",IDBIndex,["openCursor","openKeyCursor"]),m(T,"_cursor",["direction","key","primaryKey","value"]),k(T,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(T.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),y(t._request).then(function(e){if(e)return new T(e,t._request)})})})}),_.prototype.createIndex=function(){return new C(this._store.createIndex.apply(this._store,arguments))},_.prototype.index=function(){return new C(this._store.index.apply(this._store,arguments))},m(_,"_store",["name","keyPath","indexNames","autoIncrement"]),k(_,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),I(_,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),S(_,"_store",IDBObjectStore,["deleteIndex"]),P.prototype.objectStore=function(){return new _(this._tx.objectStore.apply(this._tx,arguments))},m(P,"_tx",["objectStoreNames","mode"]),S(P,"_tx",IDBTransaction,["abort"]),j.prototype.createObjectStore=function(){return new _(this._db.createObjectStore.apply(this._db,arguments))},m(j,"_db",["name","version","objectStoreNames"]),S(j,"_db",IDBDatabase,["deleteObjectStore","close"]),E.prototype.transaction=function(){return new P(this._db.transaction.apply(this._db,arguments))},m(E,"_db",["name","version","objectStoreNames"]),S(E,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[_,C].forEach(function(e){o in e.prototype&&(e.prototype[o.replace("open","iterate")]=function(){var e,t=(e=arguments,Array.prototype.slice.call(e)),n=t[t.length-1],r=this._store||this._index,i=r[o].apply(r,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})})}),[C,_].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(i.push(e.value),void 0===n||i.length!=n?e.continue():t(i)):t(i)})})})});var K,O="0.4.8",N=1e4,M="w:"+O,A="FIS_v2",q="https://firebaseinstallations.googleapis.com/v1",B=36e5,R=((K={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',K["not-registered"]="Firebase Installation is not registered.",K["installation-not-found"]="Firebase Installation not found.",K["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',K["app-offline"]="Could not process request. Application offline.",K["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",K),L=new u("installations","Installations",R);function V(e){return e instanceof d&&e.code.includes("request-failed")}function W(e){var t=e.projectId;return q+"/projects/"+t+"/installations"}function F(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function H(r,i){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,L.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function U(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $(e,t){var n=t.refreshToken,r=U(e);return r.append("Authorization",A+" "+n),r}function G(n){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}function z(t){return new Promise(function(e){setTimeout(e,t)})}var J=/^[cdef][\w-]{21}$/,Y="";function Z(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return btoa(String.fromCharCode.apply(String,i(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22);return J.test(t)?t:Y}catch(e){return Y}}function Q(e){return e.appName+"!"+e.appId}var X=new Map;function ee(e,t){var n=Q(e);te(n,t),function(e,t){var n=re();n&&n.postMessage({key:e,fid:t});ie()}(n,t)}function te(e,t){var n,r,i=X.get(e);if(i)try{for(var o=c(i),s=o.next();!s.done;s=o.next()){(0,s.value)(t)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var ne=null;function re(){return!ne&&"BroadcastChannel"in self&&((ne=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){te(e.data.key,e.data.fid)}),ne}function ie(){0===X.size&&ne&&(ne.close(),ne=null)}var oe,se,ae="firebase-installations-database",ue=1,ce="firebase-installations-store",le=null;function fe(){return le=le||D(ae,ue,function(e){switch(e.oldVersion){case 0:e.createObjectStore(ce)}})}function pe(s,a){return v(this,void 0,void 0,function(){var t,n,r,i,o;return g(this,function(e){switch(e.label){case 0:return t=Q(s),[4,fe()];case 1:return n=e.sent(),r=n.transaction(ce,"readwrite"),[4,(i=r.objectStore(ce)).get(t)];case 2:return o=e.sent(),[4,i.put(a,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===a.fid||ee(s,a.fid),[2,a]}})})}function de(i){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return t=Q(i),[4,fe()];case 1:return n=e.sent(),[4,(r=n.transaction(ce,"readwrite")).objectStore(ce).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function he(a,u){return v(this,void 0,void 0,function(){var t,n,r,i,o,s;return g(this,function(e){switch(e.label){case 0:return t=Q(a),[4,fe()];case 1:return n=e.sent(),r=n.transaction(ce,"readwrite"),[4,(i=r.objectStore(ce)).get(t)];case 2:return o=e.sent(),void 0!==(s=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(s,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!s||o&&o.fid===s.fid||ee(a,s.fid),[2,s]}})})}function ve(i){return v(this,void 0,void 0,function(){var r,t,n;return g(this,function(e){switch(e.label){case 0:return[4,he(i,function(e){var t=be(e||{fid:Z(),registrationStatus:0}),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return v(this,void 0,void 0,function(){var t,n,r,i;return g(this,function(e){switch(e.label){case 0:return[4,ge(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,z(100)];case 3:return e.sent(),[4,ge(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,ve(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(L.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,function(a,e){var u=e.fid;return v(this,void 0,void 0,function(){var t,n,r,i,o,s;return g(this,function(e){switch(e.label){case 0:return t=W(a),n=U(a),r={fid:u,authVersion:A,appId:a.appId,sdkVersion:M},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,G(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return s=e.sent(),[2,{fid:s.fid||u,registrationStatus:2,refreshToken:s.refreshToken,authToken:F(s.authToken)}];case 3:return[4,H("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,pe(r,t)];case 2:return V(n=e.sent())&&409===n.serverCode?[4,de(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,pe(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==Y?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function ge(e){return he(e,function(e){if(!e)throw L.create("installation-not-found");return be(e)})}function be(e){return 1===(t=e).registrationStatus&&t.registrationTime+N<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function ye(e,l){var f=e.appConfig,p=e.platformLoggerProvider;return v(this,void 0,void 0,function(){var r,i,o,s,a,u,c;return g(this,function(e){switch(e.label){case 0:return t=f,n=l.fid,r=W(t)+"/"+n+"/authTokens:generate",i=$(f,l),(o=p.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:M}},a={method:"POST",headers:i,body:JSON.stringify(s)},[4,G(function(){return fetch(r,a)})];case 1:return(u=e.sent()).ok?[4,u.json()]:[3,3];case 2:return c=e.sent(),[2,F(c)];case 3:return[4,H("Generate Auth Token",u)];case 4:throw e.sent()}var t,n})})}function we(a,u){return void 0===u&&(u=!1),v(this,void 0,void 0,function(){var s,t,n;return g(this,function(e){switch(e.label){case 0:return[4,he(a.appConfig,function(e){if(!ke(e))throw L.create("not-registered");var t,n,r,i=e.authToken;if(u||2!==(r=i).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+B}(r)){if(1===i.requestStatus)return s=function(r,i){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:return[4,me(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,z(100)];case 3:return e.sent(),[4,me(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,we(r,i)]:[2,n]}})})}(a,u),e;if(!navigator.onLine)throw L.create("app-offline");var o=(t=e,n={requestStatus:1,requestTime:Date.now()},h(h({},t),{authToken:n}));return s=function(i,o){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,ye(i,o)];case 1:return t=e.sent(),r=h(h({},o),{authToken:t}),[4,pe(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!V(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,de(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=h(h({},o),{authToken:{requestStatus:0}}),[4,pe(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(a,o),o}return e})];case 1:return t=e.sent(),s?[4,s]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function me(e){return he(e,function(e){if(!ke(e))throw L.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+N<Date.now()?h(h({},e),{authToken:{requestStatus:0}}):e})}function ke(e){return void 0!==e&&2===e.registrationStatus}function Se(t,n){return void 0===n&&(n=!1),v(this,void 0,void 0,function(){return g(this,function(e){switch(e.label){case 0:return[4,function(n){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return[4,ve(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}(t.appConfig)];case 1:return e.sent(),[4,we(t,n)];case 2:return[2,e.sent().token]}})})}function Ie(a,u){return v(this,void 0,void 0,function(){var r,i,o,s;return g(this,function(e){switch(e.label){case 0:return t=a,n=u.fid,r=W(t)+"/"+n,i=$(a,u),o={method:"DELETE",headers:i},[4,G(function(){return fetch(r,o)})];case 1:return(s=e.sent()).ok?[3,3]:[4,H("Delete Installation",s)];case 2:throw e.sent();case 3:return[2]}var t,n})})}function Ce(e,r){var i=e.appConfig;return function(e,t){re();var n=Q(e),r=X.get(n);r||(r=new Set,X.set(n,r)),r.add(t)}(i,r),function(){var e,t,n;e=r,t=Q(i),(n=X.get(t))&&(n.delete(e),0===n.size&&X.delete(t),ie())}}function Te(e){return L.create("missing-app-config-values",{valueName:e})}(oe=lt).INTERNAL.registerComponent(new f("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Te("App Configuration");if(!e.name)throw Te("App Name");try{for(var r=c(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Te(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(i){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return[4,ve(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):we(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return Se(n,e)},delete:function(){return function(r){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:return[4,he(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw L.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw L.create("app-offline");case 3:return[4,Ie(t,n)];case 4:return e.sent(),[4,de(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return Ce(n,e)}}},"PUBLIC")),oe.registerVersion("@firebase/installations",O);var _e=((se={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',se["only-available-in-window"]="This method is available in a Window context.",se["only-available-in-sw"]="This method is available in a service worker context.",se["permission-default"]="The notification permission was not granted and dismissed instead.",se["permission-blocked"]="The notification permission was not granted and blocked instead.",se["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",se["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",se["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",se["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",se["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",se["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",se["token-update-no-token"]="FCM returned no token when updating the user to push.",se["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",se["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",se["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",se["invalid-vapid-key"]="The public VAPID key must be a string.",se["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",se),Pe=new u("messaging","Messaging",_e);function je(e){return Pe.create("missing-app-config-values",{valueName:e})}function Ee(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,i(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}var De="fcm_token_details_db",xe=5,Ke="fcm_token_object_Store";function Oe(a){return v(this,void 0,void 0,function(){var t,s,n=this;return g(this,function(e){switch(e.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=e.sent(),!t.map(function(e){return e.name}).includes(De))return[2,null];e.label=2;case 2:return s=null,[4,D(De,xe,function(o){return v(n,void 0,void 0,function(){var t,n,r,i;return g(this,function(e){switch(e.label){case 0:return o.oldVersion<2?[2]:o.objectStoreNames.contains(Ke)?[4,(t=o.transaction.objectStore(Ke)).index("fcmSenderId").get(a)]:[2];case 1:return n=e.sent(),[4,t.clear()];case 2:if(e.sent(),!n)return[2];if(2===o.oldVersion){if(!(r=n).auth||!r.p256dh||!r.endpoint)return[2];s={token:r.fcmToken,createTime:null!==(i=r.createTime)&&void 0!==i?i:Date.now(),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:Ee(r.vapidKey)}}}else(3===o.oldVersion||4===o.oldVersion)&&(s={token:(r=n).fcmToken,createTime:r.createTime,subscriptionOptions:{auth:Ee(r.auth),p256dh:Ee(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:Ee(r.vapidKey)}});return[2]}})})})];case 3:return e.sent().close(),[4,x(De)];case 4:return e.sent(),[4,x("fcm_vapid_details_db")];case 5:return e.sent(),[4,x("undefined")];case 6:return e.sent(),[2,function(e){if(!e||!e.subscriptionOptions)return;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(s)?s:null]}})})}var Ne="firebase-messaging-database",Me=1,Ae="firebase-messaging-store",qe=null;function Be(){return qe=qe||D(Ne,Me,function(e){switch(e.oldVersion){case 0:e.createObjectStore(Ae)}})}function Re(i){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return[4,e.sent().transaction(Ae).objectStore(Ae).get(t)];case 2:return(n=e.sent())?[2,n]:[3,3];case 3:return[4,Oe(i.appConfig.senderId)];case 4:return(r=e.sent())?[4,Le(i,r)]:[3,6];case 5:return e.sent(),[2,r];case 6:return[2]}})})}function Le(i,o){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return n=e.sent(),[4,(r=n.transaction(Ae,"readwrite")).objectStore(Ae).put(o,t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2,o]}})})}function Ve(e){return e.appConfig.appId}var We="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Fe="https://fcmregistrations.googleapis.com/v1",He="FCM_MSG",Ue="google.c.a.c_id";function $e(s,a){return v(this,void 0,void 0,function(){var t,n,r,i,o;return g(this,function(e){switch(e.label){case 0:return[4,ze(s)];case 1:t=e.sent(),n={method:"DELETE",headers:t},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(s.appConfig)+"/"+a,n)];case 3:return[4,e.sent().json()];case 4:if((r=e.sent()).error)throw i=r.error.message,Pe.create("token-unsubscribe-failed",{errorInfo:i});return[3,6];case 5:throw o=e.sent(),Pe.create("token-unsubscribe-failed",{errorInfo:o});case 6:return[2]}})})}function Ge(e){var t=e.projectId;return Fe+"/projects/"+t+"/registrations"}function ze(e){var n=e.appConfig,r=e.installations;return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return[4,r.getToken()];case 1:return t=e.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})]}})})}function Je(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==We&&(o.web.applicationPubKey=i),o}var Ye,Ze;function Qe(f,p,d){return v(this,void 0,void 0,function(){var a,u,c,l;return g(this,function(e){switch(e.label){case 0:if("granted"!==Notification.permission)throw Pe.create("permission-blocked");return[4,function(n,r){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return[4,n.pushManager.getSubscription()];case 1:return(t=e.sent())?[2,t]:[2,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}(r)})]}})})}(p,d)];case 1:return a=e.sent(),[4,Re(f)];case 2:return u=e.sent(),c={vapidKey:d,swScope:p.scope,endpoint:a.endpoint,auth:Ee(a.getKey("auth")),p256dh:Ee(a.getKey("p256dh"))},u?[3,3]:[2,et(f,c)];case 3:if(t=u.subscriptionOptions,r=(n=c).vapidKey===t.vapidKey,i=n.endpoint===t.endpoint,o=n.auth===t.auth,s=n.p256dh===t.p256dh,r&&i&&o&&s)return[3,8];e.label=4;case 4:return e.trys.push([4,6,,7]),[4,$e(f,u.token)];case 5:return e.sent(),[3,7];case 6:return l=e.sent(),console.warn(l),[3,7];case 7:return[2,et(f,c)];case 8:return Date.now()>=u.createTime+6048e5?[2,function(i,o,s){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,5]),[4,function(a,u){return v(this,void 0,void 0,function(){var t,n,r,i,o,s;return g(this,function(e){switch(e.label){case 0:return[4,ze(a)];case 1:t=e.sent(),n=Je(u.subscriptionOptions),r={method:"PATCH",headers:t,body:JSON.stringify(n)},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(a.appConfig)+"/"+u.token,r)];case 3:return[4,e.sent().json()];case 4:return i=e.sent(),[3,6];case 5:throw o=e.sent(),Pe.create("token-update-failed",{errorInfo:o});case 6:if(i.error)throw s=i.error.message,Pe.create("token-update-failed",{errorInfo:s});if(!i.token)throw Pe.create("token-update-no-token");return[2,i.token]}})})}(o,i)];case 1:return t=e.sent(),n=h({token:t,createTime:Date.now()},i),[4,Le(o,n)];case 2:return e.sent(),[2,t];case 3:return r=e.sent(),[4,Xe(o,s)];case 4:throw e.sent(),r;case 5:return[2]}})})}({token:u.token,createTime:Date.now(),subscriptionOptions:c},f,p)]:[2,u.token];case 9:return[2]}var t,n,r,i,o,s})})}function Xe(r,i){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:return[4,Re(r)];case 1:return(t=e.sent())?[4,$e(r,t.token)]:[3,4];case 2:return e.sent(),[4,function(i){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return t=Ve(i),[4,Be()];case 1:return n=e.sent(),[4,(r=n.transaction(Ae,"readwrite")).objectStore(Ae).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}(r)];case 3:e.sent(),e.label=4;case 4:return[4,i.pushManager.getSubscription()];case 5:return(n=e.sent())?[2,n.unsubscribe()]:[2,!0]}})})}function et(r,i){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:return[4,function(a,u){return v(this,void 0,void 0,function(){var t,n,r,i,o,s;return g(this,function(e){switch(e.label){case 0:return[4,ze(a)];case 1:t=e.sent(),n=Je(u),r={method:"POST",headers:t,body:JSON.stringify(n)},e.label=2;case 2:return e.trys.push([2,5,,6]),[4,fetch(Ge(a.appConfig),r)];case 3:return[4,e.sent().json()];case 4:return i=e.sent(),[3,6];case 5:throw o=e.sent(),Pe.create("token-subscribe-failed",{errorInfo:o});case 6:if(i.error)throw s=i.error.message,Pe.create("token-subscribe-failed",{errorInfo:s});if(!i.token)throw Pe.create("token-subscribe-no-token");return[2,i.token]}})})}(r,i)];case 1:return t=e.sent(),n={token:t,createTime:Date.now(),subscriptionOptions:i},[4,Le(r,n)];case 2:return e.sent(),[2,n.token]}})})}function tt(e){return"object"==typeof e&&e&&Ue in e}(Ze=Ye=Ye||{}).PUSH_RECEIVED="push-received",Ze.NOTIFICATION_CLICKED="notification-clicked";var nt=(Object.defineProperty(rt.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),rt.prototype.getToken=function(){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return this.vapidKey||(this.vapidKey=We),[4,this.getServiceWorkerRegistration()];case 1:return t=e.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:e.sent(),e.label=3;case 3:if("granted"!==Notification.permission)throw Pe.create("permission-blocked");return[2,Qe(this.firebaseDependencies,t,this.vapidKey)]}})})},rt.prototype.deleteToken=function(){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return t=e.sent(),[2,Xe(this.firebaseDependencies,t)]}})})},rt.prototype.requestPermission=function(){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(t=e.sent()))return[2];throw"denied"===t?Pe.create("permission-blocked"):Pe.create("permission-default")}})})},rt.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},rt.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw Pe.create("invalid-sw-registration");if(this.swRegistration)throw Pe.create("use-sw-after-get-token");this.swRegistration=e},rt.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},rt.prototype.setBackgroundMessageHandler=function(){throw Pe.create("only-available-in-sw")},rt.prototype.onTokenRefresh=function(){return function(){}},rt.prototype.getServiceWorkerRegistration=function(){return v(this,void 0,void 0,function(){var t,n;return g(this,function(e){switch(e.label){case 0:if(this.swRegistration)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),t=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return t.swRegistration=e.sent(),this.swRegistration.update().catch(function(){}),[3,4];case 3:throw n=e.sent(),Pe.create("failed-service-worker-registration",{browserErrorMessage:n.message});case 4:return[2,this.swRegistration]}})})},rt.prototype.messageEventListener=function(o){var s;return v(this,void 0,void 0,function(){var t,n,r,i;return g(this,function(e){switch(e.label){case 0:return null!==(s=o.data)&&void 0!==s&&s.firebaseMessaging?(t=o.data.firebaseMessaging,n=t.type,r=t.payload,this.onMessageCallback&&n===Ye.PUSH_RECEIVED&&this.onMessageCallback(r),tt(i=r.data)&&"1"===i["google.c.a.e"]?[4,this.logEvent(n,i)]:[3,2]):[2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},rt.prototype.logEvent=function(n,r){return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return t=function(e){switch(e){case Ye.NOTIFICATION_CLICKED:return"notification_open";case Ye.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(n),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return e.sent().logEvent(t,{message_id:r[Ue],message_name:r["google.c.a.c_l"],message_time:r["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}})})},rt);function rt(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",function(e){return t.messageEventListener(e)})}var it=(Object.defineProperty(ot.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),ot.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw Pe.create("invalid-bg-handler");this.bgMessageHandler=e},ot.prototype.getToken=function(){var n,r;return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return this.vapidKey?[3,2]:[4,Re(this.firebaseDependencies)];case 1:t=e.sent(),this.vapidKey=null!==(r=null===(n=null==t?void 0:t.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==r?r:We,e.label=2;case 2:return[2,Qe(this.firebaseDependencies,self.registration,this.vapidKey)]}})})},ot.prototype.deleteToken=function(){return Xe(this.firebaseDependencies,self.registration)},ot.prototype.requestPermission=function(){throw Pe.create("only-available-in-window")},ot.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},ot.prototype.useServiceWorker=function(){throw Pe.create("only-available-in-window")},ot.prototype.onMessage=function(){throw Pe.create("only-available-in-window")},ot.prototype.onTokenRefresh=function(){throw Pe.create("only-available-in-window")},ot.prototype.onPush=function(i){return v(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){switch(e.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(i))?[4,st()]:[2];case 1:return(n=e.sent()).some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})?[2,function(e,t){var n,r,i=at(Ye.PUSH_RECEIVED,t);try{for(var o=c(e),s=o.next();!s.done;s=o.next())s.value.postMessage(i)}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}(n,t)]:(r=function(e){var t;if(e&&"object"==typeof e.notification){var n=h({},e.notification);return n.data=h(h({},e.notification.data),((t={})[He]=e,t)),n}}(t))?[4,function(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}(r)]:[3,3];case 2:return e.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:e.sent(),e.label=5;case 5:return[2]}})})},ot.prototype.onSubChange=function(n){var r,i;return v(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:return n.newSubscription?[3,2]:[4,Xe(this.firebaseDependencies,self.registration)];case 1:return e.sent(),[2];case 2:return[4,Re(this.firebaseDependencies)];case 3:return t=e.sent(),[4,Xe(this.firebaseDependencies,self.registration)];case 4:return e.sent(),[4,Qe(this.firebaseDependencies,self.registration,null!==(i=null===(r=null==t?void 0:t.subscriptionOptions)||void 0===r?void 0:r.vapidKey)&&void 0!==i?i:We)];case 5:return e.sent(),[2]}})})},ot.prototype.onNotificationClick=function(s){var a,u;return v(this,void 0,void 0,function(){var n,r,i,o;return g(this,function(e){switch(e.label){case 0:return!(n=null===(u=null===(a=s.notification)||void 0===a?void 0:a.data)||void 0===u?void 0:u[He])||s.action?[2]:(s.stopImmediatePropagation(),s.notification.close(),(r=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return i||(tt(e.data)?self.location.origin:null)}(n))?[4,function(u){return v(this,void 0,void 0,function(){var t,n,r,i,o,s,a;return g(this,function(e){switch(e.label){case 0:return t=new URL(u,self.location.href).href,[4,st()];case 1:n=e.sent();try{for(r=c(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).href===t)return[2,o]}catch(e){s={error:e}}finally{try{i&&!i.done&&(a=r.return)&&a.call(r)}finally{if(s)throw s.error}}return[2,null]}})})}(r)]:[2]);case 1:return(i=e.sent())?[3,4]:[4,self.clients.openWindow(r)];case 2:return i=e.sent(),[4,(t=3e3,new Promise(function(e){setTimeout(e,t)}))];case 3:return e.sent(),[3,6];case 4:return[4,i.focus()];case 5:i=e.sent(),e.label=6;case 6:return i?(o=at(Ye.NOTIFICATION_CLICKED,n),[2,i.postMessage(o)]):[2]}var t})})},ot);function ot(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",function(e){e.waitUntil(t.onPush(e))}),self.addEventListener("pushsubscriptionchange",function(e){e.waitUntil(t.onSubChange(e))}),self.addEventListener("notificationclick",function(e){e.waitUntil(t.onNotificationClick(e))})}function st(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function at(e,t){return{firebaseMessaging:{type:e,payload:t}}}var ut={isSupported:ct};function ct(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}lt.INTERNAL.registerComponent(new f("messaging",function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw je("App Configuration Object");if(!e.name)throw je("App Name");var r=e.options;try{for(var i=c(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var s=o.value;if(!r[s])throw je(s)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!ct())throw Pe.create("unsupported-browser");return new(self&&"ServiceWorkerGlobalScope"in self?it:nt)(n)},"PUBLIC").setServiceProps(ut))}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging.js.map
