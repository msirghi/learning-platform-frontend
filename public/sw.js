if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Vk5TSye7IoiTqxmNu8XML/_buildManifest.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/Vk5TSye7IoiTqxmNu8XML/_ssgManifest.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/0946be66768cd17ceecb4cc1a2948ca0c62a6505.523484ce067722375677.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/19b73dbc86db7cc1e2f6c296c710b247a8b273bb.f0a6f3c6772efa2ecac2.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/29107295.0bbe248cfe8dc790919f.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/31.d9f0de58b89307999bf3.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/32.11874e2482dfcd37ce97.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/4a3ea9cd.dfb9aba2acdffe0d7467.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/4bad13d600c8b81cda38cb98d0836e5ca06758cb.cde6184813e2a9080695.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/75fc9c18.17ff053c1a7cf13b4452.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/76d22f9e.b2d8c327e8c2a04aecfc.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/9daecf558578b009ad06b5b4404e07b404696c80.d2c07da161c14525bd01.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/a42bb6e9d266b9a1a1309e76312b6b3aca2c0788.65c1d347e93bbcd7bb42.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/commons.561248a9bca456c4e910.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/dabaedd0246f37c50f65f42c5d45595ee841b857.93272489f8656a1d94d7.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/e456bedd383579d449d685d7d33a994d90d681cd.26f901c1ab5792f58948.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/f07eca195a5d48f71cf052b7117659940d7037f6.c9a8127fcb99011c9ce1.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/f5d2be7049b42d11383e79558771962504a0a0d7.e28ced191449aedd1d43.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/fe93f911b8d5b97788566a76a9e6b4ff7b16c3f1.798d6ad3206b5cd9dae7.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/ff239f9d.c50d180e05b780b6210c.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/framework.aa42c68db2b9f35ebd6f.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/main-cc0b14debe8070899748.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/_app-21c24b9211a9ea32634c.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/_error-ae465654370232bafa4d.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/auth-d62747e2d073af078337.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/calendar-d4b121aaaed428cd7401.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/help-95de0dedc9c340c85d8a.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/home-d1283857e1c67433822a.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/index-1c5e871cbce417077645.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/myCourses-06c30fa44c628134b8d6.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/myCourses/%5Bid%5D-e977df7462ae05c3955e.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/myGroup-fe51c995e30132ffcad9.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/pages/performance-ad5b9014e7f2c31a9359.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/polyfills-a73df1184a0dac548cc3.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/chunks/webpack-a73e384f86fe3a898b23.js",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/041a742718cec7291e37.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/219bd7bbc444f6e6243f.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/2abbd310eb085d671c5e.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/3c375d20c15b0bc9c42c.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/6eb98ed81ed5926f3e3b.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/726dc26c51f3c3926109.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/92c0115dbe45c318ade7.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/9f898622b9c422e4d4a3.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/cb1c63538fd0e074a41d.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/e273970c05d5883b6712.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/_next/static/css/fa26a62a0d2810c3f39b.css",revision:"Vk5TSye7IoiTqxmNu8XML"},{url:"/favicon.ico",revision:"1f717a65aa914e5f3fdabefa1b1b8688"},{url:"/icons/linkedin.svg",revision:"4b475fb3f54b3e35daa04295ec48df4c"},{url:"/images/course-cover-image.jpg",revision:"a527ce5b40f58e8fea387fa88b83df4a"},{url:"/images/help-primary.png",revision:"fcf9f5ce9b44ac4374f2064f5990ce4d"},{url:"/images/home-no-content.png",revision:"704f82f7edadbd2465cbedc9f5b646fd"},{url:"/images/icons/icon-16x16.png",revision:"bfad3b235608fad89b75403dd2aec732"},{url:"/images/icons/icon-32x32.png",revision:"33870bd1ba357b86958616544295f6fc"},{url:"/images/icons/icon-96x96.png",revision:"d49d4fb45ca3cfdac2efed4309a8a716"},{url:"/images/lesson-decor.jpg",revision:"844c0d5439b3408494cacc7f13d1977e"},{url:"/images/register-logo-148.png",revision:"ae42b9ef8f2774576301b97ac8e9641a"},{url:"/manifest.json",revision:"d2508474732614af8d68502e72bc1d6e"},{url:"/static/locales/en/auth.json",revision:"6733c058e4d4327f25844fe928f744b1"},{url:"/static/locales/en/calendar.json",revision:"b1b4cddc01cfd63c7a9b45a9bad6719c"},{url:"/static/locales/en/common.json",revision:"fef4c48d1d0d37dd967919df71f368fa"},{url:"/static/locales/en/courses.json",revision:"e40d2577b7cbee627bdedf49b2d3b1ed"},{url:"/static/locales/en/help.json",revision:"8351df1ac6f344d1917649f7edc62b62"},{url:"/static/locales/en/home.json",revision:"de129cc6c0ff9bc140366a7edb22befb"},{url:"/static/locales/en/myGroup.json",revision:"dc4655489de3d9b00a8e1d6662224a39"},{url:"/static/locales/en/performance.json",revision:"7e4c99bd299ed66b85e7a2a5bd4db201"},{url:"/static/locales/ru/auth.json",revision:"189461f8347c20d670ec0acdafe98059"},{url:"/static/locales/ru/common.json",revision:"08bb5aec6aa57b0fdc9f803b0db62ddb"},{url:"/static/locales/ru/courses.json",revision:"8f85d66ebab560b3849d379e7d518865"},{url:"/static/locales/ru/help.json",revision:"c2d0dd13945957a868e1556c38817fb9"},{url:"/static/locales/ru/home.json",revision:"0194db6baa145949ff7108277a2d631f"},{url:"/static/locales/ru/myGroup.json",revision:"8e2afa393a153a6d3c115eef9e2521b1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
