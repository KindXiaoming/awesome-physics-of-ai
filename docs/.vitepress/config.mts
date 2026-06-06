import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Awesome Physics of AI",
  description: "A curated paper list structured around Learning Mechanics",

  // Base path for your GitHub Pages subdirectory
  base: '/awesome-physics-of-ai/',

  markdown: {
    math: true // Essential for rendering LaTeX physics formulas
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pillars', link: '/solvable-settings' },
      { text: 'Recent Papers', link: '/recent-papers' }
    ],

    sidebar: [
      {
        text: 'Learning Mechanics Pillars',
        items: [
          { text: '1. Solvable Settings', link: '/solvable-settings' },
          { text: '2. Tractable Limits', link: '/tractable-limits' },
          { text: '3. Empirical Laws', link: '/empirical-laws' },
          { text: '4. Hyperparameters', link: '/hyperparameters' },
          { text: '5. Universal Phenomena', link: '/universal-phenomena' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huanranchen/awesome-physics-of-ai' }
    ]
  }
})