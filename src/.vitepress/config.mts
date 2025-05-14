import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Turtle Projekte",
  description: "Eine Website mit Anleitungen und Projekten für das Python Modul Turtle",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Aufträge', link: '/docs' }
    ],

    sidebar: {
      '/projects/': [
        { 
          items: [
            { text: 'Markdown Examples', link: 'docs/markdown-examples' },
            { text: 'Runtime API Examples', link: 'docs/api-examples' }
          ]
        },
        {
          items: [
            { text: 'Markdown Examples', link: 'docs/markdown-examples' },
            { text: 'Runtime API Examples', link: 'docs/api-examples' }
          ]
        }
      ],
      '/docs/': [
        {
          items: [
            { text: 'Startinformationen', link: 'docs/startinfos' }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
