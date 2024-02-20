import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vanguard Athletics",
  description: "Reach your peak potential with science-based coaching",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/android-chrome-512x512.png",
    search: {
      provider: "local",
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'Tools', items: [
        { text: 'Pace Calculator', link: 'https://vdot.blanco.io' }
      ]},
    ],

    sidebar: [
      {
        items: [
          { text: 'Blog', link: '/blog' },
          { text: 'Contact', link: '/contact' },
          { text: 'Our Philosophy', link: '/philosophy' },
          { text: "Meet the Coach", link: "/coaches" }
        ]
      }
    ],

    socialLinks: [
    ]
  }
})
