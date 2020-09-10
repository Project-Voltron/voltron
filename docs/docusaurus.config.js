module.exports = {
  title: 'Voltron Docs',
  tagline: 'Documentation for Voltron',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Project-Voltron', // Usually your GitHub org/user name.
  projectName: 'Voltron', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Voltron',
        src: 'img/voltron.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Project-Voltron/voltron',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Contribute',
              to: 'docs/contribute/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              // TODO: add a link below that doesn't expire
              label: 'Slack',
              href: 'https://join.slack.com/share/zt-h0ygh34l-q3Bm92qXjNYKhGNr3HVuDA',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Project-Voltron/voltron',
            },
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} Structsure, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Project-Voltron/voltron/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
