import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _27bc4c48 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _3d49089e = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _3f3a76a5 = () => import('..\\pages\\faq.vue' /* webpackChunkName: "pages_faq" */).then(m => m.default || m)
const _54fd5090 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _7395cfa6 = () => import('..\\pages\\orders.vue' /* webpackChunkName: "pages_orders" */).then(m => m.default || m)
const _94511a54 = () => import('..\\pages\\terms.vue' /* webpackChunkName: "pages_terms" */).then(m => m.default || m)
const _0bd9b4a1 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _01608834 = () => import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */).then(m => m.default || m)
const _40d03dbe = () => import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages__lang_about" */).then(m => m.default || m)
const _30bf0fe3 = () => import('..\\pages\\_lang\\admin.vue' /* webpackChunkName: "pages__lang_admin" */).then(m => m.default || m)
const _2eb8e9ac = () => import('..\\pages\\_lang\\faq.vue' /* webpackChunkName: "pages__lang_faq" */).then(m => m.default || m)
const _6e114206 = () => import('..\\pages\\_lang\\login.vue' /* webpackChunkName: "pages__lang_login" */).then(m => m.default || m)
const _223e9dfe = () => import('..\\pages\\_lang\\orders.vue' /* webpackChunkName: "pages__lang_orders" */).then(m => m.default || m)
const _ad650bca = () => import('..\\pages\\_lang\\terms.vue' /* webpackChunkName: "pages__lang_terms" */).then(m => m.default || m)
const _5f7a0e32 = () => import('..\\pages\\_lang\\booking\\cancel.vue' /* webpackChunkName: "pages__lang_booking_cancel" */).then(m => m.default || m)
const _4cd0eee6 = () => import('..\\pages\\_lang\\booking\\success.vue' /* webpackChunkName: "pages__lang_booking_success" */).then(m => m.default || m)
const _2c8664e6 = () => import('..\\pages\\_lang\\booking\\_name.vue' /* webpackChunkName: "pages__lang_booking__name" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _27bc4c48,
			name: "about"
		},
		{
			path: "/admin",
			component: _3d49089e,
			name: "admin"
		},
		{
			path: "/faq",
			component: _3f3a76a5,
			name: "faq"
		},
		{
			path: "/login",
			component: _54fd5090,
			name: "login"
		},
		{
			path: "/orders",
			component: _7395cfa6,
			name: "orders"
		},
		{
			path: "/terms",
			component: _94511a54,
			name: "terms"
		},
		{
			path: "/",
			component: _0bd9b4a1,
			name: "index"
		},
		{
			path: "/:lang",
			component: _01608834,
			name: "lang"
		},
		{
			path: "/:lang/about",
			component: _40d03dbe,
			name: "lang-about"
		},
		{
			path: "/:lang/admin",
			component: _30bf0fe3,
			name: "lang-admin"
		},
		{
			path: "/:lang/faq",
			component: _2eb8e9ac,
			name: "lang-faq"
		},
		{
			path: "/:lang/login",
			component: _6e114206,
			name: "lang-login"
		},
		{
			path: "/:lang/orders",
			component: _223e9dfe,
			name: "lang-orders"
		},
		{
			path: "/:lang/terms",
			component: _ad650bca,
			name: "lang-terms"
		},
		{
			path: "/:lang/booking/cancel",
			component: _5f7a0e32,
			name: "lang-booking-cancel"
		},
		{
			path: "/:lang/booking/success",
			component: _4cd0eee6,
			name: "lang-booking-success"
		},
		{
			path: "/:lang/booking/:name?",
			component: _2c8664e6,
			name: "lang-booking-name"
		}
    ],
    
    
    fallback: false
  })
}
