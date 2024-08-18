import LoadingButton from './button/LoadingButton.vue'

// form
import InputDropdownFloat from './form/InputDropdownFloat.vue'
import InputPasswordFloat from './form/InputPasswordFloat.vue'
import InputTextFloat from './form/InputTextFloat.vue'
import RoleDropdownFloat from './form/RoleDropdownFloat.vue'
import StateDropdownFloat from './form/StateDropdownFloat.vue'
import MemberDropdownFloat from './form/MemberDropdownFloat.vue'

// VeeForm
// 新封裝
// 這邊先直接移過來，但還沒做調整
// 有部分封裝可能有問題，使用前要注意
// 因為是後台，樣式上較為固定，所以這邊的都會內建label
// 並有開關選擇是否顯示，之後前台視情況可能要移除label，變成純input
import VeeOTPInput from './vee-form/VeeOTPInput.vue'
import VeeInputText from './vee-form/VeeInputText.vue'
import VeeInputNumber from './vee-form/VeeInputNumber.vue'
import VeeRadio from './vee-form/VeeRadio.vue'
import VeeCalendar from './vee-form/VeeCalendar.vue'
import VeeDropdown from './vee-form/VeeDropdown.vue'
import VeeInputAddress from './vee-form/VeeInputAddress.vue'

import DebounceButton from './form/DebounceButton.vue'
// table
import UniversalTable from './table/UniversalTable.vue'
// universal
import FloatText from './universal/FloatText.vue'
import FloatBoolean from './universal/FloatBoolean.vue'
import FloatImg from './universal/FloatImg.vue'
import PageMenu from './universal/PageMenu.vue'

// dialog
import CropperDialog from './dialog/CropperDialog.vue'

// TinyMCE
import TinyMCE from './TinyMCE.vue'

export {
  VeeOTPInput,
  VeeInputText,
  VeeInputNumber,
  VeeRadio,
  VeeCalendar,
  VeeDropdown,
  VeeInputAddress,
  LoadingButton,
  InputDropdownFloat,
  InputPasswordFloat,
  InputTextFloat,
  RoleDropdownFloat,
  StateDropdownFloat,
  MemberDropdownFloat,
  DebounceButton,
  UniversalTable,
  FloatText,
  FloatBoolean,
  FloatImg,
  PageMenu,
  CropperDialog,
  TinyMCE
}
