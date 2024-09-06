"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[110],{6794:function(e,t,n){n.d(t,{Z:function(){return o}});n(2791);var r=n(6355),i=n(3495),s=n(1087),a=n(184),o=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.fO,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)("a",{href:"https://www.instagram.com/abhaypsingh_02/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.Zf_,{})})})})]})]}),(0,a.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,a.jsx)("a",{href:"https://www.linkedin.com/in/abhay-pratap-singh-108804219/",target:"_blank",rel:"noreferrer",children:"Abhay"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(9439),i=n(2791),s=n(7689),a=n(1087),o=n(3495),l=n(9434),c=n(5318),u=n(3853),d=n(1213),h=n(456),f=n(184),p=function(){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),n=t[0],p=t[1],m=(0,l.I0)(),g=(0,s.s0)(),x=(0,i.useState)(localStorage.getItem("token")||""),j=(0,r.Z)(x,2),y=j[0],v=(j[1],(0,i.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),b=(0,r.Z)(v,2),O=b[0];b[1];return(0,f.jsxs)("header",{children:[(0,f.jsxs)("nav",{className:n?"nav-active":"",children:[(0,f.jsx)("h2",{className:"nav-logo",children:(0,f.jsx)(a.OL,{to:"/",children:"MediSlot"})}),(0,f.jsxs)("ul",{className:"nav-links",children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/",children:"Home"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/doctors",children:"Doctors"})}),y&&O.isAdmin&&(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/dashboard/users",children:"Dashboard"})}),y&&!O.isAdmin&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/appointments",children:"Appointments"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/notifications",children:"Notifications"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/profile",children:"Profile"})})]}),y?(0,f.jsx)("li",{children:(0,f.jsx)("span",{className:"btn",onClick:function(){m((0,c.ps)({})),localStorage.removeItem("token"),g("/login")},children:"Logout"})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{className:"btn",to:"/login",children:"Login"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,f.jsxs)("div",{className:"menu-icons",children:[!n&&(0,f.jsx)(u.cur,{className:"menu-open",onClick:function(){p(!0)}}),n&&(0,f.jsx)(d.ySC,{className:"menu-close",onClick:function(){p(!1)}})]})]})}},4890:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(2791),i=n(4942),s=n(1413),a=n(9439),o=(n(1062),n(184)),l=function(){var e=(0,r.useState)({name:"",email:"",message:""}),t=(0,a.Z)(e,2),n=t[0],l=t[1],c=function(e){var t=e.target,r=t.name,a=t.value;return l((0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},r,a)))};return(0,o.jsx)("section",{className:"register-section flex-center",id:"contact",children:(0,o.jsxs)("div",{className:"contact-container flex-center contact",children:[(0,o.jsx)("h2",{className:"form-heading",children:"Contact Us"}),(0,o.jsxs)("form",{method:"POST",action:"https://formspree.io/f/".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_BASE_URL:"https://api.cloudinary.com/v1_1/piyushproj/image/upload",REACT_APP_CLOUDINARY_CLOUD_NAME:"",REACT_APP_CLOUDINARY_PRESET:"",REACT_APP_SERVER_DOMAIN:"http://localhost:5000/api"}.REACT_FORMIK_SECRET),className:"register-form ",children:[(0,o.jsx)("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your name",value:n.name,onChange:c}),(0,o.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:n.email,onChange:c}),(0,o.jsx)("textarea",{type:"text",name:"message",className:"form-input",placeholder:"Enter your message",value:n.message,onChange:c,rows:"8",cols:"12"}),(0,o.jsx)("button",{type:"submit",className:"btn form-btn",children:"send"})]})]})})},c=n.p+"static/media/aboutimg.af2db4b9f307d04f8745.jpg",u=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:"container",children:[(0,o.jsx)("h2",{className:"page-heading about-heading",children:"About Us"}),(0,o.jsxs)("div",{className:"about",children:[(0,o.jsx)("div",{className:"hero-img",children:(0,o.jsx)("img",{src:c,alt:"hero"})}),(0,o.jsx)("div",{className:"hero-content",children:(0,o.jsx)("p",{children:"Dr. Abhay and our team are committed to improving patient outcomes by integrating cutting-edge technology with personalized care strategies. We prioritize patient well-being through collaborative efforts and continuous refinement of our healthcare solutions. Our goal is to empower patients with reliable, efficient, and empathetic support, ensuring their health needs are met with the highest standards of excellence."})})]})]})})},d=n(6794),h=n.p+"static/media/heroimg.8bbd2437f7c9d842026c.jpg",f=function(){return(0,o.jsxs)("section",{className:"hero",children:[(0,o.jsxs)("div",{className:"hero-content",children:[(0,o.jsxs)("h1",{children:["Your Health, ",(0,o.jsx)("br",{}),"Our Responsibility"]}),(0,o.jsx)("p",{children:'"Your health, our responsibility." That\'s our motto at Dr. Abhay\'s team. We are dedicated to ensuring comprehensive and compassionate care for all patients. Through innovation and expertise, we strive to deliver healthcare solutions that prioritize your well-being and support your journey to better health."'})]}),(0,o.jsx)("div",{className:"hero-img",children:(0,o.jsx)("img",{src:h,alt:"hero"})})]})},p=n(3841),m=n(835),g=function(){return(0,o.jsxs)("section",{className:"container circles",children:[(0,o.jsxs)("div",{className:"circle",children:[(0,o.jsx)(m.ZP,{start:0,end:1e3,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,o.jsxs)("div",{className:"counter",children:[(0,o.jsx)("span",{ref:t}),"+"]})}}),(0,o.jsxs)("span",{className:"circle-name",children:["Satisfied",(0,o.jsx)("br",{}),"Patients"]})]}),(0,o.jsxs)("div",{className:"circle",children:[(0,o.jsx)(m.ZP,{start:0,end:250,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,o.jsxs)("div",{className:"counter",children:[(0,o.jsx)("span",{ref:t}),"+"]})}}),(0,o.jsxs)("span",{className:"circle-name",children:["Verified",(0,o.jsx)("br",{}),"Doctors"]})]}),(0,o.jsxs)("div",{className:"circle",children:[(0,o.jsx)(m.ZP,{start:0,end:75,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,o.jsxs)("div",{className:"counter",children:[(0,o.jsx)("span",{ref:t}),"+"]})}}),(0,o.jsxs)("span",{className:"circle-name",children:["Specialist",(0,o.jsx)("br",{}),"Doctors"]})]})]})},x=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{}),(0,o.jsx)(f,{}),(0,o.jsx)(u,{}),(0,o.jsx)(g,{}),(0,o.jsx)(l,{}),(0,o.jsx)(d.Z,{})]})}},7340:function(e,t,n){n.r(t),n.d(t,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,n,r,s,a=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){s="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)i.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(s=i.options.separator+s),c++,s=n[d-u-1]+s;n=s}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),a+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},835:function(e,t,n){var r=n(2791),i=n(7340);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function d(e){var t=r.useRef(e);return u((function(){t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(e){var t=r.useMemo((function(){return a(a({},f),e)}),[e]),n=t.ref,s=t.startOnMount,o=t.enableReinitialize,l=t.delay,u=t.onEnd,p=t.onStart,m=t.onPauseResume,g=t.onReset,x=t.onUpdate,j=c(t,h),y=r.useRef(),v=r.useRef(),b=r.useRef(!1),O=d((function(){return function(e,t){var n=t.decimal,r=t.decimals,s=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,h=t.start,f=t.suffix,p=t.useEasing,m=t.enableScrollSpy,g=t.scrollSpyDelay,x=t.scrollSpyOnce;return new i.CountUp(e,o,{startVal:h,duration:s,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:f,useEasing:p,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:g,scrollSpyOnce:x})}("string"===typeof n?n:n.current,j)})),E=d((function(e){var t=y.current;if(t&&!e)return t;var n=O();return y.current=n,n})),S=d((function(){var e=function(){return E(!0).start((function(){null===u||void 0===u||u({pauseResume:V,reset:w,start:R,update:N})}))};l&&l>0?v.current=setTimeout(e,1e3*l):e(),null===p||void 0===p||p({pauseResume:V,reset:w,update:N})})),V=d((function(){E().pauseResume(),null===m||void 0===m||m({reset:w,start:R,update:N})})),w=d((function(){E().el&&(v.current&&clearTimeout(v.current),E().reset(),null===g||void 0===g||g({pauseResume:V,start:R,update:N}))})),N=d((function(e){E().update(e),null===x||void 0===x||x({pauseResume:V,reset:w,start:R})})),R=d((function(){w(),S()})),A=d((function(e){s&&(e&&w(),S())}));return r.useEffect((function(){b.current?o&&A(!0):(b.current=!0,A())}),[o,b,A,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect((function(){return function(){w()}}),[w]),{start:R,pauseResume:V,reset:w,update:N,getCountUp:E}},m=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,i=e.containerProps,s=e.children,o=e.style,u=c(e,m),h=r.useRef(null),f=r.useRef(!1),g=p(a(a({},u),{},{ref:h,startOnMount:"function"!==typeof s||0===e.delay,enableReinitialize:!1})),x=g.start,j=g.reset,y=g.update,v=g.pauseResume,b=g.getCountUp,O=d((function(){x()})),E=d((function(t){e.preserveValue||j(),y(t)})),S=d((function(){"function"!==typeof e.children||h.current instanceof Element?b():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){S()}),[S]),r.useEffect((function(){f.current&&E(e.end)}),[e.end,E]);var V=n&&e;return r.useEffect((function(){n&&f.current&&O()}),[O,n,V]),r.useEffect((function(){!n&&f.current&&O()}),[O,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect((function(){f.current=!0}),[]),"function"===typeof s?s({countUpRef:h,start:x,reset:j,update:y,pauseResume:v,getCountUp:b}):r.createElement("span",l({className:t,ref:h,style:o},i),"undefined"!==typeof e.start?b().formattingFn(e.start):"")}},1062:function(){}}]);
//# sourceMappingURL=110.3dfeefe6.chunk.js.map