
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dumbinFest/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23592, hash: 'f6a5ebc8976cf6d05819382e1c60c7995b6ab891bcd80331c4ca22b3971bc951', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17149, hash: 'e31adef05a329d0fdbd39d988005f7abf29ab0f6cbb1103c5df3e04d2e3329a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XNF55K7U.css': {size: 7143, hash: 'NwIeqm0DsVg', text: () => import('./assets-chunks/styles-XNF55K7U_css.mjs').then(m => m.default)}
  },
};
