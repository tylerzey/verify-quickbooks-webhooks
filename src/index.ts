import { sha256 } from 'js-sha256';

const requestIsFromIntuit = (
  verificationTokenFromQuickBooksDashboard: string,
  incomingQuickBooksSignatureFromHeaders: string,
  payload: string
): boolean => {
  if (!verificationTokenFromQuickBooksDashboard)
    throw new Error('verificationTokenFromQuickBooksDashboard is required');
  if (!incomingQuickBooksSignatureFromHeaders)
    throw new Error('incomingQuickBooksSignatureFromHeaders is required');
  if (!payload) throw new Error('Payload is required');

  const hashedPayloadConvertedAsHex = sha256.hmac
    .create(verificationTokenFromQuickBooksDashboard)
    .update(payload)
    .hex();

  const decodedIncomingSignatureAsHex = Buffer.from(
    incomingQuickBooksSignatureFromHeaders,
    'base64'
  ).toString('hex');

  return hashedPayloadConvertedAsHex === decodedIncomingSignatureAsHex;
};

export default requestIsFromIntuit;
