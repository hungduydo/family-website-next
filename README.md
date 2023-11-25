# MovieFriends

MovieFriends is a web application built with Next.js, NextAuth, Node.js, and Jest for testing. It allows users to discover and share their favorite movies with friends.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with NextAuth.
- Browse and discover movies.
- Share and save favorite movies.
- Jest tests for ensuring code reliability.

## Quick Start Guide

1. Clone the repo

```bash
git clone https://github.com/hungduydo/movie-friends.git
```

2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use
   other analytics provider or a commenting solution other than giscus.

8. Deploy on Vercel

## Installation

```bash
pnpm install
pnpm build
```

## Development

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

**Vercel**  
The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Support

Using the template? Support this effort by giving a star on GitHub, sharing your own blog and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)
