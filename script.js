setTimeout(function () {
  const app = Vue.createApp({
    data: function () {
      return {
        title: 'Alert',
        type: 'primary',
        message: '<strong>This an alert</strong>',
        uppercase: false,
        show: true,
        types: ['primary', 'secondary', 'success', 'danger', 'warning']
      }
    }
  })

  const vm = app.mount('#app')
}, 2000)
