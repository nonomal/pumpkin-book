import DefaultTheme from 'vitepress/theme'
import './custom.css'
import type { Theme } from 'vitepress'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import { h } from 'vue';

// 公告栏组件
const Announcement = () => h('div', {
    class: 'announcement-banner',
}, '🎉 欢迎去各大电商平台选购纸质版南瓜书《机器学习公式详解 第2版》')

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件（可选）
        app.component('vImageViewer', vImageViewer);
    },
    setup() {
        const route = useRoute();
        // 启用插件
        imageViewer(route);
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-top': () => h(Announcement)
        })
    }
} satisfies Theme
