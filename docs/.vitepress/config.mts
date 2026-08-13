import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3';
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/easy-vecdb/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/pumpkin-book/'

export default defineConfig({
  lang: 'zh-CN',
  title: "南瓜书（pumpkin-book）",
  description: "《机器学习》（西瓜书）公式详解",
  base: baseConfig,
  markdown: {
    config(md) {
      md.use(mathjax3, {
        tex: {
          macros: {
            textcircled: ['\\enclose{circle}{#1}', 1]
          }
        }
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/pumpkin-logo.png',
    nav: [
      { text: '纸质版勘误表', link: '/errata' },
      { text: 'PDF版本下载', link: 'https://github.com/datawhalechina/pumpkin-book/releases' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: '第1章 绪论', link: '/chapter1/chapter1' },
          { text: '第2章 模型评估', link: 'chapter2/chapter2' },
          { text: '第3章 线性模型', link: 'chapter3/chapter3' },
          { text: '第4章 决策树', link: 'chapter4/chapter4' },
          { text: '第5章 神经网络', link: 'chapter5/chapter5' },
          { text: '第6章 支持向量机', link: 'chapter6/chapter6' },
          { text: '第7章 贝叶斯分类器', link: 'chapter7/chapter7' },
          { text: '第8章 集成学习', link: 'chapter8/chapter8' },
          { text: '第9章 聚类', link: 'chapter9/chapter9' },
          { text: '第10章 降维与度量学习', link: 'chapter10/chapter10' },
          { text: '第11章 特征选择与稀疏学习', link: 'chapter11/chapter11' },
          { text: '第12章 计算学习理论', link: 'chapter12/chapter12' },
          { text: '第13章 半监督学习', link: 'chapter13/chapter13' },
          { text: '第14章 概率图模型', link: 'chapter14/chapter14' },
          { text: '第15章 规则学习', link: 'chapter15/chapter15' },
          { text: '第16章 强化学习', link: 'chapter16/chapter16' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/pumpkin-book' }
    ],

    editLink: {
      pattern: 'https://github.com/datawhalechina/pumpkin-book/blob/main/docs/:path'
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
