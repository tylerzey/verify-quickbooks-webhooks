import verifyRequest from '../src/index';

const parredDownApiGatewayEventFromQuickBooks = {
  headers: {
    'intuit-signature': 'HmuXsvKpPUvvUQbu6PT766iNcZZ9SekX+CES5b0e7y4=',
  },
  body:
    '{"eventNotifications":[{"realmId":"4620816365020074550","dataChangeEvent":{"entities":[{"name":"Invoice","id":"163","operation":"Create","lastUpdated":"2019-10-30T15:29:54.000Z"}]}}]}',
};
const oldVerificationTokenThatWasValidForThisRequest =
  '43c97e5c-99f9-4cb2-82ee-ce64ce90b751';

describe('verification of webhook', () => {
  it('returns true for a valid request', () => {
    expect(
      verifyRequest(
        oldVerificationTokenThatWasValidForThisRequest,
        parredDownApiGatewayEventFromQuickBooks.headers['intuit-signature'],
        parredDownApiGatewayEventFromQuickBooks.body
      )
    ).toBe(true);
  });
  it('returns false for an invalid request', () => {
    expect(
      verifyRequest(
        oldVerificationTokenThatWasValidForThisRequest,
        `123${parredDownApiGatewayEventFromQuickBooks.headers['intuit-signature']}`,
        parredDownApiGatewayEventFromQuickBooks.body
      )
    ).toBe(false);
  });
});
