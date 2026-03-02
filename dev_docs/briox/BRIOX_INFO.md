For developers
Get started with Briox API

Step 1
Write to apisupport@briox.se so that we can register you as a developer.

Step 2
Login to Briox AccountExternal link icon. Navigate to Admin - Users in the left hand-side menu. Find your username in the displayed users table and click on the gear menu symbol in the end of the row. In the window that opens scroll down to open Application Token field. Generate a new Authentication token and copy it.

Step 3
In the right-hand side menu select "Your Account". Scroll down to find an account ID (a long number enclosed in parenthesis next to the company's name). Copy this ID.

Step 4
Navigate to the Swagger UIExternal link icon page. Start by scrolling to "token" request where a POST request to create an access token can be sent using the account ID and Authentication token (values copied earlier). The request will return an object with an access token and a refresh token. Save the tokens.

Step 5
Use the Authorize button, located in the upper right hand corner of the page, to open an authorization window. Enter the access token in order to proceed. It is highly recommended to save the received object, as an authorization is required every time the page is reloaded.