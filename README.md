# Verify A QuickBooks (Intuit) Webhook

A simple function to quickly see if the webhook is from QuickBooks.

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads)

QuickBooks can send webhooks to your application. These webhooks include a header that you should verify to avoid allowing anyone to trigger your code.

Verifying that these webhooks are coming from QuickBooks can be an annoying task. This function tackles it all for you.

## To Use

```js
import verifyWebhookSignature from 'verify-quickbooks-webhooks';
// or
const verifyWebhookSignature = require('verify-quickbooks-webhooks');

const isValidRequest = verifyWebhookSignature(
  verificationTokenFromQuickBooksDashboard, // store this as an env variable or something. You get it from the QB dashboard
  incomingQuickBooksSignatureFromHeaders, // request.headers['intuit-signature'];
  payload // the request.body string
);

if (!isValidRequest) {
  throw new Error('Sorry, this does not look to be a valid action');
}
```
