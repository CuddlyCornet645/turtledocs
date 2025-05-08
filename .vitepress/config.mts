import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Turtle Projekte",
  description: "Eine Website mit Anleitungen und Projekten für das Python Modul Turtle",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projekte', link: '/projects' },
      { text: 'Dokumentation', link: '/docs' }
    ],

    sidebar: {
      '/projects/': [
  { 
    text: 'aaa',
    items: [
      { text: 'Markdown Examples', link: 'docs/markdown-examples' },
      { text: 'Runtime API Examples', link: 'docs/api-examples' }
    ]
  },
  {
    text: 'ExEx',
    items: [
      { text: 'Markdown Examples', link: 'docs/markdown-examples' },
      { text: 'Runtime API Examples', link: 'docs/api-examples' }
    ]
  }
],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
