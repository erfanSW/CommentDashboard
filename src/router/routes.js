const routes = [{
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
        path: '/a',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/guid',
        component: () => import('pages/ApiGuidline.vue')
      }
    ]
  }, {
    path: '/login',
    component: () => import('pages/Login')
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
