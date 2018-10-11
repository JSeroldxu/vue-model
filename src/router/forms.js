import Layout2 from '@/layout/Layout2'

export default [{
  path: '/forms',
  component: Layout2,
  children: [{
    path: 'layouts-and-elements',
    component: () => import('@/components/forms/LayoutsAndElements')
  }, {
    path: 'controls',
    component: () => import('@/components/forms/Controls')
  }, {
    path: 'custom-controls',
    component: () => import('@/components/forms/CustomControls')
  }, {
    path: 'input-groups',
    component: () => import('@/components/forms/InputGroups')
  }, {
    path: 'switchers',
    component: () => import('@/components/forms/Switchers')
  }, {
    path: 'input-spinner',
    component: () => import('@/components/forms/InputSpinner')
  }, {
    path: 'sliders',
    component: () => import('@/components/forms/Sliders')
  }, {
    path: 'selects-and-tags',
    component: () => import('@/components/forms/SelectsAndTags')
  }, {
    path: 'pickers',
    component: () => import('@/components/forms/Pickers')
  }, {
    path: 'editors',
    component: () => import('@/components/forms/Editors')
  }, {
    path: 'file-upload',
    component: () => import('@/components/forms/FileUpload')
  }, {
    path: 'vue-form-wizard',
    component: () => import('@/components/forms/VueFormWizard')
  }, {
    path: 'vue-typeahead',
    component: () => import('@/components/forms/VueTypeahead')
  }, {
    path: 'extras',
    component: () => import('@/components/forms/Extras')
  }]
}]
