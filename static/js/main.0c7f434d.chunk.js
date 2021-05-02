(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__Iv8Jo",summary:"CartItem_summary__25UOp",price:"CartItem_price__3L6DJ",amount:"CartItem_amount__3N8ce",actions:"CartItem_actions__3Ut8J"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3PtgN",total:"Cart_total__2r1xG",actions:"Cart_actions__2etMf","button--alt":"Cart_button--alt__37Do2",button:"Cart_button__3ZXt_"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3h0X8",icon:"HeaderCartButton_icon__2Er6g",badge:"HeaderCartButton_badge__3NLLY",bump:"HeaderCartButton_bump__1P4wC"}},,function(e,t,n){e.exports={meal:"MealItem_meal__3INmH",description:"MealItem_description__29ctJ",price:"MealItem_price__2GbYx"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1EOka",modal:"Modal_modal__UyMxM","slide-down":"Modal_slide-down__F1M6D"}},,function(e,t,n){e.exports={header:"Header_header__1-UZ-","main-image":"Header_main-image__2nxzW"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2p2i2"}},function(e,t,n){e.exports={card:"Card_card__1Vi42"}},function(e,t,n){e.exports={form:"MealItemForm_form__1OJyO"}},function(e,t,n){e.exports={input:"Input_input__2g0gD"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2mJuC","meals-appear":"AvailableMeals_meals-appear__30rEa"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(8),l=n.n(o),m=n(0),d=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(u),o=s.items.reduce((function(e,t){return e+t.amount}),0),j=s.items,b="".concat(l.a.button," ").concat(a?l.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[j]),Object(m.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(m.jsx)("span",{className:l.a.icon,children:Object(m.jsx)(d,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:l.a.badge,children:o})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),O=n.n(x),p=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:O.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(j,{onClick:e.onShowCart,children:"Cart"})]}),Object(m.jsx)("div",{className:O.a["main-image"],children:Object(m.jsx)("img",{src:b,alt:"A table full of delicious food"})})]})},h=n(15),_=n.n(h),f=function(){return Object(m.jsxs)("section",{className:_.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious food, Delivered to You"}),Object(m.jsx)("p",{children:"Choose your favourite meal from our broad selection of available meals and enjoy a declicous lunch at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=function(e){return Object(m.jsx)("div",{className:C.a.card,children:e.children})},N=n(17),A=n.n(N),y=n(2),I=n(18),M=n.n(I),w=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:M.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(y.a)({ref:t},e.input))]})})),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(w,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=n(10),D=n.n(H),B=function(e){var t=Object(r.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:D.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:D.a.description,children:e.description}),Object(m.jsx)("div",{className:D.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(k,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},E=n(19),F=n.n(E),S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],J=function(){var e=S.map((function(e){return Object(m.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:F.a.meals,children:Object(m.jsx)(g,{children:Object(m.jsx)("ul",{children:e})})})},R=function(){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(J,{})]})},P=n(11),z=n.n(P),T=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},U=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},V=document.getElementById("overlays"),Y=function(e){return Object(m.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(m.jsx)(T,{onClose:e.onClose}),V),c.a.createPortal(Object(m.jsx)(U,{children:e.children}),V)]})},G=n(4),L=n.n(G),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:L.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:L.a.summary,children:[Object(m.jsx)("span",{className:L.a.price,children:t}),Object(m.jsxs)("span",{className:L.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:L.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(5),Z=n.n(X),q=function(e){var t=Object(r.useContext)(u),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){console.log("reached here",e),t.removeItem(e)},i=function(e){t.addItem(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},s=Object(m.jsx)("ul",{className:Z.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(m.jsxs)(Y,{onClose:e.onClose,children:[s,Object(m.jsxs)("div",{className:Z.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:Z.a.actions,children:[Object(m.jsx)("button",{className:Z.a[".button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:Z.a.button,children:"Order"})]})]})},W=n(14),K={items:[],totalAmount:0},Q=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(y.a)(Object(y.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(W.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(s=Object(W.a)(e.items))[o]=d}return{items:s,totalAmount:m}}return K},ee=function(e){var t=Object(r.useReducer)(Q,K),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(u.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(q,{onClose:function(){a(!1)}}),Object(m.jsx)(p,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(R,{})})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.0c7f434d.chunk.js.map