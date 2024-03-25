// css
import './assets/main.scss'
import '@/assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
// directives
import Directives from './directives/index'

// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as rules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// https://israynotarray.com/vue/20230208/3309208839/

// 表單組件
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
import Dialog from 'primevue/dialog'
import Image from 'primevue/image'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Chart from 'primevue/chart'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Knob from 'primevue/knob'
import Sidebar from 'primevue/sidebar'
import Fieldset from 'primevue/fieldset'
import Dropdown from 'primevue/dropdown'
import ColorPicker from 'primevue/colorpicker'
import FileUpload from 'primevue/fileupload'
import TabMenu from 'primevue/tabmenu'
import OverlayPanel from 'primevue/overlaypanel'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider/Divider.vue'
import Rating from 'primevue/rating'
import InputNumber from 'primevue/inputnumber'
import MultiSelect from 'primevue/multiselect'
import Tree from 'primevue/tree'

const app = createApp(App)

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(rules).forEach((rule) => {
  defineRule(rule, (rules as any)[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  zIndex: {
    modal: 1100, //dialog, sidebar
    overlay: 1000, //dropdown, overlaypanel
    menu: 1000, //overlay menus
    tooltip: 1100 //tooltip
  }
})
app.use(ToastService)
app.use(Directives)

// 表單組件掛載
app.component('Button', Button)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Avatar', Avatar)
app.component('Menu', Menu)
app.component('Toast', Toast)
app.component('Toolbar', Toolbar)
app.component('Dialog', Dialog)
app.component('Image', Image)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Chart', Chart)
app.component('Tag', Tag)
app.component('Textarea', Textarea)
app.component('Knob', Knob)
app.component('Sidebar', Sidebar)
app.component('Fieldset', Fieldset)
app.component('Dropdown', Dropdown)
app.component('ColorPicker', ColorPicker)
app.component('OverlayPanel', OverlayPanel)
app.component('TabMenu', TabMenu)
app.component('FileUpload', FileUpload)
app.component('RadioButton', RadioButton)
app.component('Divider', Divider)
app.component('Rating', Rating)
app.component('InputNumber', InputNumber)
app.component('MultiSelect', MultiSelect)
app.component('Tree', Tree)

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
