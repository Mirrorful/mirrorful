<h1 align="center">
  <img width="300" src="./assets/logo-light-mode.png" alt="Mirrorful">
</h1>
<p align="center">
  <p align="center">Create the building blocks of your app with simple, open-source design system infrastructure.</p>
</p>

<h4 align="center">
  <a href="https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA">Slack</a> |
  <a href="https://mirrorful.com/">Website</a> |
  <a href="https://www.npmjs.com/package/mirrorful">NPM Package</a> |
</h4>

<h4 align="center">
  <a href="https://github.com/Mirrorful/mirrorful/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Mirrorful is released under the MIT license." />
  </a>
  <a href="https://github.com/">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs welcome!" />
  </a>
  <a href="https://github.com/Infisical/infisical/issues">
    <img src="https://img.shields.io/github/commit-activity/m/Mirrorful/mirrorful" alt="git commit activity" />
  </a>
  <a href="https://www.npmjs.com/package/mirrorful">
    <img src="https://img.shields.io/badge/Downloads-1k-orange" alt="Mirrorful downloads" />
  </a>
  <a href="https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA">
    <img src="https://img.shields.io/badge/chat-on%20Slack-blueviolet" alt="Slack community channel" />
  </a>
  <a href="https://twitter.com/mirrorful">
    <img src="https://img.shields.io/twitter/follow/mirrorful?label=Follow" alt="Mirrorful Twitter" />
  </a>
</h4>

<img src="./assets/Asset.png" width="100%" alt="Mirrorful Dashboard" />

**Read this in other languages**: <kbd>[<img title="English" alt="English language" src="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/us.svg" width="22">](i18n/README.en.md)</kbd>
<kbd>[<img title="German" alt="German language" src="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/de.svg" width="22">](i18n/README.de.md)</kbd>

**[Mirrorful](https://mirrorful.com)** is simple, open-source design system infrastructure. Install Mirrorful to generate colors and other design tokens for your project. Then, import these tokens directly into your app as CSS Variables or JSON. Take 5 minutes today, design at scale forever.

Create the building blocks for fast frontend development!

- **Start new projects with a source of truth**
- **Visually modify your theme**
- **Generate colors**
- 🔜 **Theme Templates**
- 🔜 **Lightweight Headless Component Library**
- 🔜 **Eslint rules**
- 🔜 **Propagate tokens across projects**
- 🔜 **Figma integration**

And more...

## 🎨 Why should I use Mirrorful?

Design systems are the building blocks of your app, but many projects don't adopt them until it's too late because they are hard to set up correctly. Mirrorful gets you set up for a basic design system in minutes while leaving flexibility down the line for customizations. Its lightweight and dead simple.

We're on a mission to help your project be as beautiful as possible. The bar for high quality design is getting higher. We want to help everyone add simple design tokens to new (and existing!) projects.

Simple design systems also speed up development — even early-stage projects! One report suggests its 47% faster to build a simple form using a design system. It's useful for engineers, designers, and especially your customers if there isn't a random color for each button in your app.

## 🚀 Get started

Mirrorful is a NPM package intended to be installed as dev dependency.

```bash
npm install mirrorful --save-dev
```

or

```bash
yarn add mirrorful --dev
```

## ✨ Usage

The following commands will start a local editor at `localhost:5050`.

```
yarn run mirrorful
```

or

```
npx mirrorful
```

## 💿 Export Formats

After configuring your theme in the editor, you can export it to be used by your app.

We currently export to the following file types: `.js`, `.ts`, `.css`, `.scss`, `.json`

**Using CSS Variables**

Example:

```css
.primary-button {
  background-color: var(--color-primary);
}

.primary-button:hover {
  background-color: var(--color-primary-hover);
}
```

**Using Javascript Constants**

Example:

```javascript
<button backgroundColor={{ Tokens.primary.base }}>Click here</button>
```

## 🤝 Component Library Agnostic

We strive to be component library agnostic. Whether you're using Material UI, Chakra UI, Tailwind, Ant Design, or even your in-house library, Mirrorful hooks right in.

⚠️ `create-react-app` may warn that you are trying to import from outside the `src` directory. We are working on a long-term solution, but for now, we would recommend making a copy of the `.mirrorful` folder in your `src` directory.

Check out our examples:

- [Mirrorful 🤝 Chakra UI](https://github.com/Mirrorful/mirrorful/tree/main/examples/with-chakra-ui)
- [Mirrorful 🤝 Basic Create React App](https://github.com/Mirrorful/mirrorful/tree/main/examples/create-react-app)

Looking for a specific example? [Request one here!](https://github.com/Mirrorful/mirrorful/issues)

## ❤️ Community & Support

- [Slack](https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA) - for live discussion with the community and the Mirrorful team.
- [GitHub Discussions](https://github.com/Mirrorful/mirrorful/discussions) - for help with building and deeper conversations about features.
- [GitHub Issues](https://github.com/Mirrorful/mirrorful/issues) - for any bugs and errors you encounter using Mirrorful.
- [Twitter](https://twitter.com/mirrorful) - stay up to date with the latest product updates. Share your memes!

## 🏘 Open-source vs. paid

This repo is entirely MIT licensed, with the exception of any under a `ee` directory which contains premium enterprise features requiring a Mirrorful license. We're currently focused on developing non-enterprise offerings first that should suit most use-cases.

We are working hard to make Mirrorful more extensive. Need any integrations or want a new feature? Feel free to [create an issue](https://github.com/Mirrorful/mirrorful/issues) or contribute directly to the repository. _(The first draft of this README was made by a contributor!)_

## 🛡 Security

Mirrorful takes security issues very seriously. If you have any concerns about Mirrorful or believe you have uncovered a vulnerability, please get in touch via the e-mail address [support@mirrorful.io](mailto:support@mirrorful.io). In the message, try to provide a description of the issue and ideally a way of reproducing it. The team will get back to you **immediately**.

## ⭐ Stay Up-to-Date

There are a lot of new features coming very frequently. Star this repo to stay up to date.

<img width="300" src="./assets/tower.png" alt="Build">

## 🛠️ Contributing

Whether it's big or small, we love contributions. The maintainers of this repo have built open-source projects before and love it. Welcome!

Not sure where to get started? You can:

- [Book a free, non-pressure pairing sessions with one of our teammates](https://usemotion.com/meet/teddyni/meet?d=15)!

- Join our [Slack](https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA) and ask us any questions there.

No matter the PR, all the Github avatars of contributors will be added to the Mirrorful README with their permission.

## 🪞 Contributors

<a href="https://github.com/alexdanilowicz"><img src="https://avatars.githubusercontent.com/u/29822597?v=4" width="50" height="50" alt=""/></a> <a href="https://github.com/teddarific"><img src="https://avatars.githubusercontent.com/u/16343600" width="50" height="50" alt=""/></a> <a href="https://github.com/isabellytubao"><img src="https://avatars.githubusercontent.com/u/113177368" width="50" height="50" alt=""/></a> <a href="https://github.com/gfang200"><img src="https://avatars.githubusercontent.com/u/13005240?v=4" width="50" height="50" alt=""/></a> <a href="https://github.com/sallyxu"><img src="https://avatars.githubusercontent.com/u/1229627" width="50" height="50" alt=""/></a> <a href="https://github.com/zachsnoek"><img src="https://avatars.githubusercontent.com/u/26049962" width="50" height="50" alt=""/></a>
<a href="https://github.com/tobiasdossinger"><img src="https://avatars.githubusercontent.com/u/33021996?v=4" width="50" height="50" alt=""/></a>
<a href="https://github.com/lagneshthakur"><img src="https://avatars.githubusercontent.com/u/13376802?v=4" width="50" height="50" alt=""/></a>

## 🌎 Translations

Mirrorful is currently available in English and [German 🇩🇪](https://github.com/Mirrorful/mirrorful/tree/main/i18n/README.de.md). Help us translate our documentation and UI to your language!

You can find all the info in [this issue](https://github.com/Mirrorful/mirrorful/issues/18).
