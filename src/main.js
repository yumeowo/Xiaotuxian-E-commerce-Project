
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 测试接口函数
// import { getCategory } from '@/apis/testAPI'
// getCategory().then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
//   console.log("接口函数有误！")
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
