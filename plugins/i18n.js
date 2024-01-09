// plugins/i18n.js
export default {
    install: (app, options) => {
      // 在这里编写插件代码
      //<h1>{{ $translate('greetings.hello') }}</h1> 使用目标
      app.config.globalProperties.$translate =(key)=>{
    // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
      }
    }
  }