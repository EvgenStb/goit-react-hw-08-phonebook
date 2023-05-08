"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[86],{5086:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,i,a=t(2791),o=t(9434),c=t(6907),s=t(9439),l=t(4554),d=t(3736),u=t(890),x=t(4826),f=t(7750),p=t(4942),m=t(1413),h=t(3433),j=t(6916),b=function(n){return n.contacts},g=function(n){return n.filter},v=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},y=(0,j.P1)([b,g],(function(n,e){var t=n.items;if(""!==e){var r=e.toLowerCase();t=t.filter((function(n){return n.name.toLowerCase().includes(r)}))}return(0,h.Z)(t).sort((function(n,e){return n.name.localeCompare(e.name)}))})),w=t(3634),C=t(1686),k=t.n(C),z=t(168),P=t(8789),A=P.ZP.form(r||(r=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width:97%;\n  /* border: 1px solid #fff; */\n  /* border-radius: 4px; */\n  /* padding: 3px 5px; */\n  /* background-color: #226c8cbf; */\n\n  & input {\n    padding: 8px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 5px;\n  }\n\n  & label {\n    color: black;\n    font-weight: 200;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 12px;\n  }\n"]))),_=t(3329),S={name:"",number:""},I=function(){var n=(0,o.I0)(),e=(0,o.v9)(b),t=(0,a.useState)(S),r=(0,s.Z)(t,2),i=r[0],c=i.name,l=i.number,u=r[1],x=function(n){var e=n.target,t=e.name,r=e.value;u((function(n){return(0,m.Z)((0,m.Z)({},n),{},(0,p.Z)({},t,r))}))},f=function(){u(S)};return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(A,{type:"submit",onSubmit:function(t){t.preventDefault();var r={name:c,number:l};if(e.items.find((function(n){return n.name===r.name})))return k().Notify.failure("".concat(r.name," is already is contacts"));n((0,w.uK)(r)),f()},children:[(0,_.jsxs)("label",{children:["Name",(0,_.jsx)("input",{type:"text",onChange:x,value:c,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{children:["Number",(0,_.jsx)("input",{type:"tel",onChange:x,value:l,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(d.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})},N=P.ZP.div(i||(i=(0,z.Z)(["\ndisplay: flex;\n"]))),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"#3c9178",border:"2px solid #000",boxShadow:24,p:4};function L(){var n=a.useState(!1),e=(0,s.Z)(n,2),t=e[0],r=e[1];return(0,_.jsxs)(N,{children:[(0,_.jsx)(d.Z,{onClick:function(){return r(!0)},variant:"outlined",startIcon:(0,_.jsx)(f.Z,{}),children:"Add Contact"}),(0,_.jsx)(x.Z,{open:t,onClose:function(){return r(!1)},children:(0,_.jsxs)(l.Z,{sx:F,children:[(0,_.jsx)(u.Z,{id:"modal-modal-title",variant:"h6",component:"h2",align:"center",children:"Add Contact"}),(0,_.jsx)(I,{})]})})]})}var q,K,B,$=t(501),D=t(3229),E=t(7247),G=P.ZP.li(q||(q=(0,z.Z)(["\n  display: flex;\n  max-width: 50%;\n  justify-content: stretch;\n  align-items: center;\n  text-decoration: none;\n  & p {\n    display: flex;\n    align-self: center;\n    font-size: 18px;\n    margin: 10px auto;\n  }\n  & button {\n    margin-left: 15px;\n    align-self: center;\n  }\n"]))),J=P.ZP.div(K||(K=(0,z.Z)(["\n  display: flex;\n  max-width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-width:100%;\n  & p {\n    margin-left: 5px;\n  }\n"]))),M=function(n){var e=n.contact,t=(0,o.I0)();return(0,_.jsxs)(G,{children:[(0,_.jsxs)(J,{children:[(0,_.jsx)($.Z,{color:"primary",fontSize:"large"}),(0,_.jsx)("p",{children:e.name}),(0,_.jsx)(D.Z,{color:"primary",fontSize:"large"}),(0,_.jsx)("p",{children:e.number})]}),(0,_.jsx)(d.Z,{variant:"contained",size:"small",type:"button",onClick:function(){return n=e.id,t((0,w.GK)(n)),k().Notify.success("Contact deleted successfully");var n},children:(0,_.jsx)(E.Z,{})})]})},T=P.ZP.ul(B||(B=(0,z.Z)(["\ndisplay: flex;\nflex-direction: column;\npadding: 5px;\n\n"])));var H,O,Q=function(){var n=(0,o.v9)(y);return(0,_.jsx)(T,{children:n.map((function(n){return(0,_.jsx)(M,{contact:n},n.id)}))})},R=function(n){return n.filter},U=t(1634),V=P.ZP.div(H||(H=(0,z.Z)(["\ndisplay:flex;\nflex-direction: row;\ngap: 20px;\nmargin-bottom: 10px;\n\n& p{\n    margin: 0;\n    font-size: 20px;\n}\n"]))),W=function(){var n=(0,o.I0)(),e=(0,o.v9)(R);return(0,_.jsxs)(V,{children:[(0,_.jsx)("p",{children:"Find contacts"}),(0,_.jsx)("input",{type:"text",value:e,name:"name",onChange:function(e){return n((0,U.$r)(e.currentTarget.value))}})]})},X=t(4217),Y=P.ZP.div(O||(O=(0,z.Z)(["\ndisplay:flex;\nflex-direction:column;\n  max-width: 100%;\n  margin: 0 auto;\n\n  & button {\n    margin-bottom: 10px;\n  }\n"]))),nn=function(){var n=(0,o.v9)(v),e=(0,o.v9)(Z),t=(0,o.I0)(),r=(0,o.v9)(X.rK);return(0,a.useEffect)((function(){r&&t((0,w.yF)())}),[t,r]),(0,_.jsxs)(c.B6,{children:[(0,_.jsx)(c.ql,{children:(0,_.jsx)("title",{children:"Contacts"})}),(0,_.jsxs)(Y,{children:[(0,_.jsx)("h1",{children:"Contacts"}),(0,_.jsx)(L,{}),(0,_.jsx)(W,{}),n&&(0,_.jsx)("p",{children:"Loading..."}),e&&(0,_.jsx)("p",{children:e}),(0,_.jsx)(Q,{})]})]})}}}]);
//# sourceMappingURL=86.6150d4a0.chunk.js.map