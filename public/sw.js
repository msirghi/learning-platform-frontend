if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0946be66768cd17ceecb4cc1a2948ca0c62a6505.2948e26e6a2115ba352a.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/112e357a85e12dfff35cd520f995f70c8a26d3a5.49d45677ce200d432c1b.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/18a1e742c5d8914242138031a697e1d3a87eea20.4faaab81cdeefc4f2f38.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/19b73dbc86db7cc1e2f6c296c710b247a8b273bb.22edc8dcc0581c231ec6.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/29107295.18f75817e8b4fe0aa2b8.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/37.45c2cec74d404c83e7bd.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/38.baecd8f0e619bd88a2f8.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/39dbc56505f2b492c19ff6438887f7154a588170.aabc1197d3d3119da034.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/4574043596f2f5b1f9c68962ac429bdfc13768ab.5b65ec09e12f049806ac.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/4a3ea9cd.99b252b1af8c98270ffb.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/5abe08a8323119cd479eef8ef0b12f6583c1fd7f.94df98f473b71cc9ad21.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/75fc9c18.762d6916eb42a3ce6303.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/76d22f9e.de52498f2e8b988f17eb.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/77ea384ff63f0345ccb23a3fff17f1ce7f172417.4b7b261ead65f0bdaf11.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/9f3a082dba8c6fd635561def0cbb98ac147f858a.ad09cf8ff3bce0848dcc.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/aebb87635db78f496e81275401a295ebbf75a4ad.b460144a04329f773738.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/bc79a2398f55eab3ece62ae8723fce8955096ca1.2a8f5ccc0e80532285a2.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/c62b1f5506a3d85383b562dbd5dbc47675d7d427.effe60d912d222f09371.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/commons.561248a9bca456c4e910.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/f07eca195a5d48f71cf052b7117659940d7037f6.0af4cdc2eadd7339b399.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/faf590b265bb3b0d3a149556492c04228b0a4cc2.4a7aa027b9a70c304814.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/ff239f9d.c15d92f9fc7e6537bd51.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/framework.aa42c68db2b9f35ebd6f.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/main-9c91dd7ad3b6da663b27.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/_app-1d0a946dc64adff35839.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/_error-aa7d9dcf4105dc39422f.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/account-fd77c77271fc5005360e.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/auth-2868d5caeea829626f73.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/calendar-0ef8fbab54fa1033092f.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/help-a83ee67537bbb2147fe9.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/home-0221faf84b52216420aa.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/index-cc6a78696c6ca5a37489.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/myCourses-fbbab41daef99ff64494.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/myCourses/%5Bid%5D-cb8461435ea87cac6ef6.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/myGroup-76ba13d2307cce6c1b3a.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/performance-16a705d68a7836449310.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/pages/profile-f0356a8655b3f7eac9f0.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/polyfills-70dc315f291991cda2fb.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/chunks/webpack-32c39e895016dd184fd1.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/0310080f6c816ff10cc2.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/0b7c89a5a83e0605dd7d.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/3e2e70ee11474bc72dba.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/6eb98ed81ed5926f3e3b.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/726dc26c51f3c3926109.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/84059b55081ba2582686.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/8a1729b14e49bdbc2106.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/92c0115dbe45c318ade7.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/9f898622b9c422e4d4a3.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/c096efce2e490ebc100d.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/c8a8794f09b222319bcc.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/fa26a62a0d2810c3f39b.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/css/ff888e32baa819e1ba9c.css",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/oYpSJizppQmTYYierBBhZ/_buildManifest.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/_next/static/oYpSJizppQmTYYierBBhZ/_ssgManifest.js",revision:"oYpSJizppQmTYYierBBhZ"},{url:"/favicon.ico",revision:"1f717a65aa914e5f3fdabefa1b1b8688"},{url:"/icons/linkedin.svg",revision:"4b475fb3f54b3e35daa04295ec48df4c"},{url:"/images/account-background.jpg",revision:"88c1826a71bfa12aa577a7882ef361d4"},{url:"/images/course-cover-image.jpg",revision:"a527ce5b40f58e8fea387fa88b83df4a"},{url:"/images/help-primary.png",revision:"fcf9f5ce9b44ac4374f2064f5990ce4d"},{url:"/images/home-no-content.png",revision:"704f82f7edadbd2465cbedc9f5b646fd"},{url:"/images/icons/icon-16x16.png",revision:"bfad3b235608fad89b75403dd2aec732"},{url:"/images/icons/icon-32x32.png",revision:"33870bd1ba357b86958616544295f6fc"},{url:"/images/icons/icon-96x96.png",revision:"d49d4fb45ca3cfdac2efed4309a8a716"},{url:"/images/landing-desktop.png",revision:"7ac55447a825e6014522ca2d11719666"},{url:"/images/landing-shape-1.png",revision:"8e50243b5a8a7673567cf5a8836edbdc"},{url:"/images/lesson-decor.jpg",revision:"844c0d5439b3408494cacc7f13d1977e"},{url:"/images/register-logo-148.png",revision:"ae42b9ef8f2774576301b97ac8e9641a"},{url:"/manifest.json",revision:"d2508474732614af8d68502e72bc1d6e"},{url:"/static/locales/en/account.json",revision:"624cd70f1c56b68560cae043acc88b28"},{url:"/static/locales/en/auth.json",revision:"6733c058e4d4327f25844fe928f744b1"},{url:"/static/locales/en/calendar.json",revision:"b1b4cddc01cfd63c7a9b45a9bad6719c"},{url:"/static/locales/en/common.json",revision:"0b5373207a405db3f51332ff557abf61"},{url:"/static/locales/en/courses.json",revision:"e40d2577b7cbee627bdedf49b2d3b1ed"},{url:"/static/locales/en/help.json",revision:"d431a72951fdb7359c0a59b032ee42c6"},{url:"/static/locales/en/home.json",revision:"b8f2844bb319536a029883de285957e4"},{url:"/static/locales/en/myGroup.json",revision:"dc4655489de3d9b00a8e1d6662224a39"},{url:"/static/locales/en/performance.json",revision:"7e4c99bd299ed66b85e7a2a5bd4db201"},{url:"/static/locales/ru/auth.json",revision:"189461f8347c20d670ec0acdafe98059"},{url:"/static/locales/ru/common.json",revision:"08bb5aec6aa57b0fdc9f803b0db62ddb"},{url:"/static/locales/ru/courses.json",revision:"8f85d66ebab560b3849d379e7d518865"},{url:"/static/locales/ru/help.json",revision:"c2d0dd13945957a868e1556c38817fb9"},{url:"/static/locales/ru/home.json",revision:"0194db6baa145949ff7108277a2d631f"},{url:"/static/locales/ru/myGroup.json",revision:"8e2afa393a153a6d3c115eef9e2521b1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
