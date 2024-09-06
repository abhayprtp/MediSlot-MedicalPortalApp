"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[702],{6794:function(e,n,s){s.d(n,{Z:function(){return l}});s(2791);var t=s(6355),r=s(3495),i=s(1087),c=s(184),l=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("footer",{children:[(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsxs)("div",{className:"footer-links",children:[(0,c.jsx)("h3",{children:"Links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/profile",children:"Profile"})})]})]}),(0,c.jsxs)("div",{className:"social",children:[(0,c.jsx)("h3",{children:"Social links"}),(0,c.jsx)("ul",{children:(0,c.jsx)("li",{className:"instagram",children:(0,c.jsx)("a",{href:"https://www.instagram.com/abhaypsingh_02/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(t.Zf_,{})})})})]})]}),(0,c.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,c.jsx)("a",{href:"https://www.linkedin.com/in/abhay-pratap-singh-108804219/",target:"_blank",rel:"noreferrer",children:"Abhay"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,s){s.d(n,{Z:function(){return p}});var t=s(9439),r=s(2791),i=s(7689),c=s(1087),l=s(3495),o=s(9434),a=s(5318),d=s(3853),h=s(1213),x=s(456),u=s(184),p=function(){var e=(0,r.useState)(!1),n=(0,t.Z)(e,2),s=n[0],p=n[1],j=(0,o.I0)(),m=(0,i.s0)(),f=(0,r.useState)(localStorage.getItem("token")||""),g=(0,t.Z)(f,2),v=g[0],b=(g[1],(0,r.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):"")),N=(0,t.Z)(b,2),k=N[0];N[1];return(0,u.jsxs)("header",{children:[(0,u.jsxs)("nav",{className:s?"nav-active":"",children:[(0,u.jsx)("h2",{className:"nav-logo",children:(0,u.jsx)(c.OL,{to:"/",children:"MediSlot"})}),(0,u.jsxs)("ul",{className:"nav-links",children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/doctors",children:"Doctors"})}),v&&k.isAdmin&&(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/dashboard/users",children:"Dashboard"})}),v&&!k.isAdmin&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/appointments",children:"Appointments"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/notifications",children:"Notifications"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/profile",children:"Profile"})})]}),v?(0,u.jsx)("li",{children:(0,u.jsx)("span",{className:"btn",onClick:function(){j((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{className:"btn",to:"/login",children:"Login"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,u.jsxs)("div",{className:"menu-icons",children:[!s&&(0,u.jsx)(d.cur,{className:"menu-open",onClick:function(){p(!0)}}),s&&(0,u.jsx)(h.ySC,{className:"menu-close",onClick:function(){p(!1)}})]})]})}},3702:function(e,n,s){s.r(n);var t=s(4165),r=s(5861),i=s(4942),c=s(1413),l=s(9439),o=s(2791),a=(s(1062),s(3263)),d=s(3402),h=s(7689),x=s(3841),u=s(6794),p=s(184);a.Z.defaults.baseURL="http://localhost:5000/api";n.default=function(){var e=(0,h.s0)(),n=(0,o.useState)({specialization:"",experience:"",fees:""}),s=(0,l.Z)(n,2),j=s[0],m=s[1],f=function(e){var n=e.target,s=n.name,t=n.value;return m((0,c.Z)((0,c.Z)({},j),{},(0,i.Z)({},s,t)))},g=function(){var n=(0,r.Z)((0,t.Z)().mark((function n(s){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.preventDefault(),n.prev=1,n.next=4,d.ZP.promise(a.Z.post("/doctor/applyfordoctor",{formDetails:j},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor application sent successfully",error:"Unable to send Doctor application",loading:"Sending doctor application..."});case 4:e("/"),n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.Z,{}),(0,p.jsx)("section",{className:"register-section flex-center apply-doctor",id:"contact",children:(0,p.jsxs)("div",{className:"register-container flex-center contact",children:[(0,p.jsx)("h2",{className:"form-heading",children:"Apply for Doctor"}),(0,p.jsxs)("form",{className:"register-form ",children:[(0,p.jsx)("input",{type:"text",name:"specialization",className:"form-input",placeholder:"Enter your specialization",value:j.specialization,onChange:f}),(0,p.jsx)("input",{type:"number",name:"experience",className:"form-input",placeholder:"Enter your experience (in years)",value:j.experience,onChange:f}),(0,p.jsx)("input",{type:"number",name:"fees",className:"form-input",placeholder:"Enter your fees  (in dollars)",value:j.fees,onChange:f}),(0,p.jsx)("button",{type:"submit",className:"btn form-btn",onClick:g,children:"apply"})]})]})}),(0,p.jsx)(u.Z,{})]})}},1062:function(){}}]);
//# sourceMappingURL=702.14cfd03a.chunk.js.map