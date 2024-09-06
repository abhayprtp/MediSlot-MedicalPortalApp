"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[809],{3321:function(n,e,i){i(2791);var s=i(184);e.Z=function(){return(0,s.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(n,e,i){i.d(e,{Z:function(){return c}});i(2791);var s=i(6355),t=i(3495),r=i(1087),l=i(184),c=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{children:[(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsxs)("div",{className:"footer-links",children:[(0,l.jsx)("h3",{children:"Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.fO,{to:"/#contact",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h3",{children:"Social links"}),(0,l.jsx)("ul",{children:(0,l.jsx)("li",{className:"instagram",children:(0,l.jsx)("a",{href:"https://www.instagram.com/abhaypsingh_02/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(s.Zf_,{})})})})]})]}),(0,l.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,l.jsx)("a",{href:"https://www.linkedin.com/in/abhay-pratap-singh-108804219/",target:"_blank",rel:"noreferrer",children:"Abhay"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(n,e,i){i.d(e,{Z:function(){return u}});var s=i(9439),t=i(2791),r=i(7689),l=i(1087),c=i(3495),o=i(9434),a=i(5318),d=i(3853),h=i(1213),x=i(456),j=i(184),u=function(){var n=(0,t.useState)(!1),e=(0,s.Z)(n,2),i=e[0],u=e[1],f=(0,o.I0)(),m=(0,r.s0)(),p=(0,t.useState)(localStorage.getItem("token")||""),v=(0,s.Z)(p,2),g=v[0],N=(v[1],(0,t.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):"")),k=(0,s.Z)(N,2),L=k[0];k[1];return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:i?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(l.OL,{to:"/",children:"MediSlot"})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/",children:"Home"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),g&&L.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!L.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.fO,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/profile",children:"Profile"})})]}),g?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:function(){f((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!i&&(0,j.jsx)(d.cur,{className:"menu-open",onClick:function(){u(!0)}}),i&&(0,j.jsx)(h.ySC,{className:"menu-close",onClick:function(){u(!1)}})]})]})}},809:function(n,e,i){i.r(e),i.d(e,{default:function(){return f}});var s=i(4165),t=i(5861),r=i(9439),l=i(2791),c=i(9434),o=i(3321),a=i(6794),d=i(3841),h=i(4971),x=i(5318),j=i(3200),u=(i(5108),i(184)),f=function(){var n=(0,l.useState)([]),e=(0,r.Z)(n,2),i=e[0],f=e[1],m=(0,c.I0)(),p=(0,c.v9)((function(n){return n.root})).loading,v=function(){var n=(0,t.Z)((0,s.Z)().mark((function n(e){var i;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m((0,x.K4)(!0)),n.next=4,(0,h.Z)("/notification/getallnotifs");case 4:i=n.sent,m((0,x.K4)(!1)),f(i),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){v()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{}),p?(0,u.jsx)(j.Z,{}):(0,u.jsxs)("section",{className:"container notif-section",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),i.length>0?(0,u.jsx)("div",{className:"notifications",children:(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"S.No"}),(0,u.jsx)("th",{children:"Content"}),(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Time"})]})}),(0,u.jsx)("tbody",{children:null===i||void 0===i?void 0:i.map((function(n,e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e+1}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.content}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[0]}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[1].split(".")[0]})]},null===n||void 0===n?void 0:n._id)}))})]})}):(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=809.80870756.chunk.js.map