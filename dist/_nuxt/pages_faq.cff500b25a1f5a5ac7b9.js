webpackJsonp([5,8],{"1//B":function(t,e,s){"use strict";var i=s("6XZn"),a=s("Zybf"),r=s("VU/8")(i.a,a.a,!1,null,null,null);r.options.__file="components/footer.vue",e.a=r.exports},"18re":function(t,e,s){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"TA_cdswritereviewnew",attrs:{id:"TA_cdswritereviewnew417"}},[e("ul",{staticClass:"TA_links sGds6Y7vq",attrs:{id:"ScRPWPb1"}},[e("li",{staticClass:"2AZui23",attrs:{id:"dQtVMgCB0kD"}},[e("a",{attrs:{target:"_blank",href:"https://www.tripadvisor.com/"}},[e("img",{attrs:{src:"https://www.tripadvisor.com/img/cdsi/img2/branding/medium-logo-29834-2.png",alt:"TripAdvisor"}})])])]),e("script",{attrs:{async:"",src:"https://www.jscache.com/wejs?wtype=cdswritereviewnew&uniq=417&locationId=14795629&lang=en_US&lang=en_US&display_version=2"}})])}]};e.a=a},"6XZn":function(t,e,s){"use strict";var i=s("zZk1");e.a={components:{tripadvisor:i.a}}},HeVo:function(t,e,s){"use strict";var i=s("PrMn"),a=s("XY/7"),r=s("VU/8")(i.a,a.a,!1,null,null,null);r.options.__file="components/header.vue",e.a=r.exports},Kqwk:function(t,e,s){"use strict";var i=s("NDi2");e.a=i.default},NAEW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Kqwk"),a=s("VU/8")(i.a,null,!1,null,null,null);a.options.__file="pages/faq.vue",e.default=a.exports},NDi2:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("SSj8"),a=s("p6lK"),r=s("VU/8")(i.a,a.a,!1,null,null,null);r.options.__file="pages/_lang/faq.vue",e.default=r.exports},PrMn:function(t,e,s){"use strict";e.a={name:"Header",serverCacheKey:function(){return"header-new"},data:function(){return{mobileNavOpened:!1}},mounted:function(){"sm"!==this.$mq&&"sm2"!==this.$mq||(this.$refs.primaryMenu.style.height=window.innerHeight+"px")},watch:{mq:function(){"sm2"===this.$mq||"sm"===this.$mq?this.$refs.primaryMenu.style.height=window.innerHeight+"px":this.$refs.primaryMenu.removeAttribute("style")}},computed:{mq:function(){return this.$mq}},methods:{hamby:function(t,e){var s=this,i="true"===t.currentTarget.getAttribute("aria-expanded")||!1,a=t.currentTarget.nextElementSibling||this.$refs.primaryMenu;"close"!==e?(this.$refs.hamby.setAttribute("aria-expanded",!i),this.$refs.hamby.classList.toggle("is-active"),i?(a.classList.toggle("is-active"),setTimeout(function(){a.classList.toggle("is-flex"),document.documentElement.classList.remove("disable-scroll")},200)):(a.classList.toggle("is-flex"),setTimeout(function(){a.classList.toggle("is-active"),document.documentElement.classList.add("disable-scroll")}))):document.documentElement.classList.contains("disable-scroll")&&(a.classList.remove("is-active"),setTimeout(function(){a.classList.remove("is-flex"),s.$refs.hamby.setAttribute("aria-expanded","false"),s.$refs.hamby.classList.remove("is-active"),document.documentElement.classList.remove("disable-scroll")},200))}}}},SSj8:function(t,e,s){"use strict";var i=s("HeVo"),a=s("1//B");e.a={name:"Faq",serverCacheKey:function(){return"faq"},components:{siteHeader:i.a,siteFooter:a.a}}},"V+kQ":function(t,e,s){t.exports=s.p+"ac7ef979fd0e5bbfc0ce47474537d1c9.svg"},"XY/7":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"Logo"},[i("div",{staticClass:"LogoContainer"},[i("nuxt-link",{attrs:{to:{name:"lang",params:{lang:t.$i18n.locale}},title:t.$t("home.logo")}},[i("img",{attrs:{src:s("V+kQ"),alt:""}})])],1)]),i("nav",{staticClass:"MainNav",attrs:{"aria-label":"Primary navigation"}},[i("button",{ref:"hamby",staticClass:"MainNav-toggle",attrs:{"aria-expanded":"false","aria-controls":"primary-menu"},on:{click:t.hamby}},[i("span",{staticClass:"u-isHiddenVisually"},[t._v("Menu")]),i("span",{attrs:{"aria-hidden":"true"}},[i("svg-inline",{attrs:{src:s("i1Ld")}})],1)]),i("ul",{ref:"primaryMenu",staticClass:"MainNav-list",attrs:{id:"primary-menu"}},[t._l(t.$t("primaryNav"),function(e){return i("li",{key:e.title},[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:e.href},on:{click:function(e){return t.hamby(e,"close")}}},[t._v(t._s(e.title))])])}),i("li",[i("nuxt-link",{attrs:{to:{name:"lang-login",params:{lang:t.$i18n.locale}}}},[t._v("B2B login")])],1)],2)])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},Zybf:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"Footer",attrs:{id:"contact"}},[s("div",{staticClass:"Footer-holder container"},[s("div",{staticClass:"Footer-section Footer--sectionContact"},[s("p",{staticClass:"Footer-sectionTitle"},[t._v("\n                "+t._s(t.$t("footer.contact"))+"\n            ")]),t._m(0),s("ul",[s("li",{staticClass:"Footer-sectionTitle"},[t._v(t._s(t.$t("footer.headquaters")))]),t._m(1),t._m(2)])]),t._m(3),s("div",{staticClass:"Footer-section Footer--sectionLinks"},[s("p",{staticClass:"Footer-sectionTitle"},[t._v("\n                "+t._s(t.$t("footer.links"))+"\n            ")]),s("ul",[s("li",[s("nuxt-link",{attrs:{to:{name:"lang-about",params:{lang:t.$i18n.locale}}}},[t._v(t._s(t.$t("footer.about")))])],1),s("li",[s("nuxt-link",{attrs:{to:{name:"lang-terms",params:{lang:t.$i18n.locale}}}},[t._v(t._s(t.$t("footer.terms")))])],1)])]),s("div",{staticClass:"Footer-section Footer--sectionTripadvisor"},[s("no-ssr",[s("tripadvisor")],1)],1),t._m(4)])])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"tel:+385 99 366 0606"}},[this._v("+385 99 366 0606")])]),e("li",[e("a",{attrs:{href:"mailto:hello@adriaticsunsets.com"}},[this._v("hello@adriaticsunsets.com")])]),e("li",[this._v("Uz Glavičino 6, 20207 Mlini"),e("br"),this._v("OIB 21242579244")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Frana Supila 3, "),e("br"),this._v(" 20000 Dubrovnik (Ploče gate),"),e("br"),e("b",[this._v("Office Hours:")]),this._v(" 09:00 - 20:00; "),e("br"),this._v(" Obala Pape Ivana Pavla II")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("\n                    Obala Pape Ivana Pavla II, 1, "),e("br"),this._v(" 20000 Dubrovnik (Cargo port, Cruise terminal), "),e("br"),e("b",[this._v("Office Hours:")]),this._v(" 07:00 - 17:00\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Footer-section Footer--sectionLogo"},[e("img",{attrs:{src:s("V+kQ"),alt:""}}),e("p",{staticClass:"Footer-copy"},[this._v("\n                © 2018 Adriatic Sunsets d.o.o.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Footer-section Footer--sectionCopy"},[e("p",{staticClass:"Footer-sectionTitle"},[this._v("\n                Adriatic Sunsets d.o.o.\n            ")]),e("p",{staticClass:"Footer-copy"},[this._v("\n                © 2018 Adriatic Sunsets d.o.o.\n            ")])])}];i._withStripped=!0;var r={render:i,staticRenderFns:a};e.a=r},i1Ld:function(t,e){t.exports='<svg viewBox="0 0 23 14" xmlns="http://www.w3.org/2000/svg"><g fill="#FBB040" fill-rule="evenodd" id="open"><rect width="23" height="2"></rect><rect y="12" width="23" height="2"></rect><rect y="6" width="23" height="2"></rect></g><g fill="#FBB040" id="close"><rect id="Rectangle-12" transform="translate(8.838835, 8.838835) rotate(-45.000000) translate(-8.838835, -8.838835) " x="-2.66116524" y="7.83883476" width="23" height="2"></rect><rect id="Rectangle-12-Copy-9" transform="translate(8.838835, 8.838835) rotate(45.000000) translate(-8.838835, -8.838835) " x="-2.66116524" y="7.83883476" width="23" height="2"></rect></g></svg>'},p6lK:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("siteHeader"),e("div",{staticClass:"Page"},[e("div",{staticClass:"Page-inner"},[e("h1",{staticClass:"Page-title"},[this._v(this._s(this.$t("faq.title")))]),e("div",{staticClass:"Type",domProps:{innerHTML:this._s(this.$t("faq.content"))}})])]),e("siteFooter")],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},zZk1:function(t,e,s){"use strict";var i=s("18re"),a=s("VU/8")(null,i.a,!1,null,null,null);a.options.__file="components/tripadvisor.vue",e.a=a.exports}});