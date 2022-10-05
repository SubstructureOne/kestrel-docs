// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Kestrel Substructure Documentation',
    url: 'https://docs.kestrel.codes',
    tagline: "Substructure for Open Source SaaS Sustainability",
    baseUrl: '/',
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/'
                },
                blog: false
            })
        ]
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: "Kestrel Substructure",
            logo: {
                alt: "Kestrel Logo",
                src: 'img/kestrel_transparent.png',
            },
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
        }
    })
}

module.exports = config
