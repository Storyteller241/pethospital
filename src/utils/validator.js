
export var formRules = {
  // phone:{validator : Validator.getPhoneValidator(true),trigger:'change' }  /* 自定义校验 */


  blur: [{ required: true, message: '此项为必填项', trigger: 'blur' }],

  name: [{ required: true, pattern: /\S/, message: '请输入姓名', trigger: 'change' }],

  /* 手机号验证 */
  phone: [
      {
          required: true,
          pattern: /^1\d{10}$/,
          message: '请输入正确的手机号码',
          trigger: 'change'
      }
  ],

 

  email: [
      {
          required: true,
          pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
          message: '请输入正确邮箱'
      }
  ],
  
};