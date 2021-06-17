## Learning Platform (front-end)

Learning platform written in Next.js.

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

To start documentation server:

```bash
npm run doc:gen
# or
yarn doc:gen
```

### Configuration

In order to start the app on your local machine, create .env.local file and fill it with the following:

```bash
RECAPTCHA_SITEKEY = YOUR_KEY // This is a site key which ReCAPTCHA component will use.
// The following variables are needed for firebase support:
FIREBASE_API_KEY= YOUR KEY
FIREBASE_AUTH_DOMAIN= DOMAIN
FIREBASE_PROJECT_ID= ID
FIREBASE_STORAGE_BUCKET= BUCKET
FIREBASE_MESSAGING_SENDER_ID= SENDER_ID
FIREBASE_APP_ID= APP_ID
```
