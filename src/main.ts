// css
import './assets/main.scss'
import '@/assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

// 表單組件
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu'
import Toast from 'primevue/toast'
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

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  inputStyle: 'filled',
  zIndex: {
    modal: 1100, //dialog, sidebar
    overlay: 1000, //dropdown, overlaypanel
    menu: 1000, //overlay menus
    tooltip: 1100 //tooltip
  }
})

// 表單組件掛載
app.component('Button', Button)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Avatar', Avatar)
app.component('Menu', Menu)
app.component('Toast', Toast)
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

app.mount('#app')
