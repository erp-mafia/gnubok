Get Authorization-Code
Request
GET https://apps.fortnox.se/oauth-v1/auth?client_id={Client-ID}&redirect_uri=https%3A%2F%2Fmysite.org%2Factivation&scope=companyinformation&state=somestate123&access_type=offline&response_type=code&account_type=service
client_id (required) - The client_id is the public identifier for the app.

response_type (required) - The response_type should be set to code, indicating that the application expects to receive an authorization code if successful.

state (required) - The state parameter is used by the application to store request-specific data and/or prevent CSRF attacks. The authorization server will return the unmodified state value back to the application.

scope (required) - The request should have one or more scope values indicating access requested by the application. The authorization server will display the requested scopes to the user. The scope parameter is a list of URL-encoded space-delimited, case-sensitive strings. A full list of scopes can be found 
here
. Example: scope=article%20companyinformation

redirect_uri (optional) - URL-encoded URI that must match the Redirect URI for the app set in the Developer Portal. If omitted, it will default to the registered Redirect URI.

access_type (optional) - Indicates whether your app can refresh access tokens when the user is not present at the browser. Should be set to offline.

account_type (optional) - Indicates whether a service account should be created. Service account must also be enabled for the app in the Developer Portal. A service account is not connected to any specific user and has a specific set of permissions suitable for integrations within the requested scopes. There can only be one service account per client_id and customer. Only system administrators of the customer can authorize service accounts during the authorization process. The only valid value is “service”, if a service account should be created.

Users will be redirected to a login screen where authentication is performed using regular Fortnox user credentials. Upon successful authentication, the server responds with a redirect containing the Authorization-Code.

Read more about OAuth

Response redirect

https://mysite.org/activation?code={Authorization-Code}&state=somestate123

authorize your integration
The authorization of access to a customer’s account is made using the OAuth2 Authorization Code Flow. In essence, this means that a user grants your application access to their account. The user must approve the access and scope of access to their account during the activation process.

Below is an overview of the Authorization Code Flow. The flow starts at your application’s landing page. Authentication of the user is handled through the standard Fortnox login process as part of the flow.

The App Backend attempts to access a resource that requires authorization that it does not have. It redirects the user to the authorization server for authentication.

The Authorization Server authenticates the user by asking for their login credentials. The server determines if the user should be granted or denied their request.

If the User is determined to be authentic, an Authorization-Code is issued and returned to the App Frontend. This code is used to retrieve an Access-Token from the Authorization Server.

The retrieved Authorization-Code is sent to the App Backend.

The App Backend makes a POST request to the Authorization Server, containing its Client-ID, Client-Secret, and Authorization-Code.

The Authorization Server verifies the key, secret and code, and issues an Access-Token and Refresh-Token.

The App Backend receives and processes the Access-Token. The Access-Token is then kept in the App Backend, which can request resources on behalf of the App Frontend without exposing the token itself.


Item	Description
Client-Id
The integrators key to exchange an Authorization-Code for an Access-Token (unique for the application and connected to the Client-Id)
Client-Secret
The integrators key for making requests (unique for the integration and connected to the Client-Id).
Authorization-Code
Generated when the customer authenticates and approves the connection between their account and your application. Expiration time: 10 minutes.
Access-Token
Token with limited lifetime used by your application when making API requests on behalf of a user. Expiration time: 1 hour
Refresh-Token
Long-lived token used to generate a new Access-Token once the old one has expired. Expiration time: 45 days
 
The Client-Id, Client-Secret and Authorization-Code are only used during initial authorization of the connection between a customer’s account and your application.

The Access-Token is used when making regular API calls from your application.

The Refresh-Token is used when an Access-Token has expired. The Refresh-Token should be kept secret.

Steps for authentication, activation and performing requests.
When a user performs the authentication we generate an Authcode (valid for 10 min) which is sent to the integrator through the redirect URL.

The integrator receives the Authcode and activates it. In response to the activation, we generate an Access Token (valid for 1 hour) and a Refresh Token (valid for 45 days).

The integrator uses the Access Token to make calls to our API. These calls do not affect an expire date, neither for Access-Token nor Refresh-Token.

When the Access Token expires after one hour, the integrator uses its Refresh Token to obtain a new Access Token. When this is generated, a new Refresh Token is also created. The old Refresh Token then becomes invalid.

The Refresh Token is valid for 45 days and within this time a new Access Token can be generated. If the Refresh Token has expired, the user needs to re-authenticate and we start again at authentication.

Get Access-Token
Request
POST https://apps.fortnox.se/oauth-v1/token
Credentials is the Base64 encoding of ClientId and Client-Secret, separated with a colon.

Read more about OAuth

Content-type: application/x-www-form-urlencoded
Authorization: Basic {Credentials}
Body example

The body shall be sent by using the "application/x-www-form-urlencoded" format, with a character encoding of UTF-8.

grant_type (required) - Value MUST be set to "authorization_code".

code (required) - The authorization code received from the authorization request.

redirect_uri (required) - If the "redirect_uri" parameter was included in the authorization request, and their values MUST be identical.

grant_type=authorization_code&code={Authorization-Code}&redirect_uri=https://mysite.org/activation
Response

Json
{
  "access_token": "xyz...",
  "refresh_token": "a7302e6b-b1cb-4508-b884-cf9abd9a51de",
  "scope": "companyinformation",
  "expires_in": 3600,
  "token_type": "bearer"
}

Get Refresh-Token
Request
POST https://apps.fortnox.se/oauth-v1/token
Credentials is the Base64 encoding of ClientId and Client-Secret, separated with a colon.

Read more about OAuth

Content-type: application/x-www-form-urlencoded
Authorization: Basic {Credentials}
Body example

grant_type=refresh_token&refresh_token={Refresh-Token}
Response

Json
{
  "access_token": "xyz...",
  "refresh_token": "a7302e6b-b1cb-4508-b884-cf9abd9a51de",
  "scope": "companyinformation",
  "expires_in": 3600,
  "token_type": "bearer"
}

Show More


Make request towards API
Request
GET https://api.fortnox.se/3/companyinformation
The endpoint above is just an example. To find all available endpoints, please read our 
documentation
.

As header, you just need to send the Authorization header with the given access-token as value.

Authorization: Bearer {Access-Token}

Revoke Access-Token
Request
Request (for old type of tokens)
Revoke of access-token is not supported for Authorization Code Flow due to their short lifespan. Instead, the revoke is done on the refresh-token to prevent new access-tokens from being created.

POST https://apps.fortnox.se/oauth-v1/revoke
Headers example

ClientId: 8VurtMGDTeAI
ClientSecret: yFKwme8LEQ
Credentials: OFZ1cnRNR0RUZUFJOnlGS3dtZThMRVE=

Credentials is the Base64 encoding of ClientId and Client-Secret, separated with a colon.

Read more about OAuth

Content-type: application/x-www-form-urlencoded
Authorization: Basic {Credentials}
Body example

token_type_hint=refresh_token&token={Refresh-Token}
Response

Json
{
  "revoked":true
}


