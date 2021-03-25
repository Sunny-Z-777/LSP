// 因为app.vue是一个组件，不能直接挂在到HTML中去，
// 因此创建一个index.js入口文件。

// 要进行挂载需要先引入vue库
import Vue from 'vue'
// 引入app.vue文件
import App from './app.vue'

// 导入静态资源css 图片等
import './assets/style/test.css'
import './assets/style/test.scss'
import './assets/images/lsp.jpg'

// 创建一个根节点，用于放入vue组件
const root = document.createElement('div');
// 将创建的节点添加到HTML中。
document.body.appendChild(root);

// 实例一个Vue对象
new Vue ({
    // 渲染app.vue组件,使用Vue的render方法，传参一个h，
    // h其实是vue里面的createApp这个参数，
    // 通过h把app.vue挂在到HTML里面
    render: (h) => h(App)
}).$mount(root) // 声明组件要被挂在在HTML中的哪个节点中。