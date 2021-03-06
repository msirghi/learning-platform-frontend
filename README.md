## Learning Platform (front-end)

### Scripts

To install dependencies:

```bash
npm run install
# or
yarn install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To run tests:

```bash
npm run test:local
# or
yarn test:local
```

To build:

```bash
npm run build
# or
yarn build
```

### Configuration
In order to start the app on your local machine, create .env.local file and fill it with the following:

```bash
RECAPTCHA_SITEKEY = YOUR_KEY // This is a site key which ReCAPTCHA component will use.
```