**Access through API \- Arcim TEST**

**Public Key:** 69f15a2d-c71e-4b38-b085-4d7a5e95e1b5

**id: b32bedfc-532f-49df-8e2f-6711c3ef3c50**  
**secret: a59b6cc3-906e-41a3-b147-75fb0ad0b180**

**Step 1 – Onboard your integration**  
Visit [https://developer.bjornlunden.se/get-started/](https://developer.bjornlunden.se/get-started/) and follow the instructions to obtain your API credentials. We use the OAuth 2.0 Client Credentials flow to identify your integration, and GUIDs to identify specific companies or databases. Once onboarding is complete, you will also gain access to a sandbox company, representing your first connected client or customer.

**Step 2 – Get an access token**  
Use the credentials to request an access token from our identity server. Each token is valid for 3600 seconds (1 hour), and multiple tokens can be used simultaneously. However, we recommend reusing valid tokens when possible to reduce unnecessary load on our servers.

**Example:**  
curl \-X POST {authUrl}/token \\  
  \-H "Content-Type: application/x-www-form-urlencoded" \\  
  \-d "grant\_type=client\_credentials" \\  
  \-d "client\_id=CLIENT\_ID" \\  
  \-d "client\_secret=CLIENT\_SECRET"

A successful call will return a response similar to this:

{  
  "access\_token": "b1352033-d760-479d-9bc3-a0c2f830ed51",  
  "token\_type": "bearer",  
  "expires\_in": 3600,  
  "scope": "oob"  
}

**Step 3 – Get list of connected companies/clients**  
This call will give you the list of id’s to connected companies. Once you go live with your finished integration, this list will grow as more companies connect themselves through our Marketplace, but if this is the first time you call this endpoint, the list most likely will consist of only the one Sandbox company that we created and connected to you as part of the onboarding in Step 1\. These GUID’s are global and static in our systems, and potentially suitable to persist in your system as an identifier for the same company on your end as well.

alt.1  
curl  
\--location \--request GET ‘{baseUrl}/meta/allKeys’ \\  
\--header ‘Content-Type: application/json’ \\  
\--header ‘Authorization: Bearer ‘  
*The answer will be an JSON array of GUID’s each representing a connected company that you are allowed to access through the API.*

alt.2  
curl  
\--location \--request GET ‘{baseUrl}/common/client’ \\  
\--header ‘Content-Type: application/json’ \\  
\--header ‘Authorization: Bearer ‘  
*The answer will be a JSON body containing the name, GUID(s), email address and scopes for each connected company that you are allowed to access through the API.*

For the Sandbox, you will have extensive rights to enable you to develop your integration to your liking. But when you are ready to go live, we will validate and agree on which endpoints and scopes you will use in production. The ever-growing list of possible calls can be found as Swagger here [https://developer.bjornlunden.se/api-documentation](https://developer.bjornlunden.se/api-documentation)

**Step 4 – make a call to your Sandbox company**  
The only additional thing needed from step 3, to make a call regarding a specific company, is the HEADER “User-Key” with the GUID value found in step 3\.

curl  
\--location \--request GET '{baseUrl}/details' \\  
\--header 'Content-Type: application/json' \\  
\--header 'User-Key: ' \\  
\--header 'Authorization: Bearer '

That will give you an extensive JSON object with the details of the company identified by “User-Key”. (More information about the response for this call can be found here: [https://developer.bjornlunden.se/api-documentation/](https://developer.bjornlunden.se/api-documentation/) under “details” – where you also can find complete Swagger specs)

För att begära ut en token för att kunna göra request mot API gör du följande:  
curl \-X POST {authUrl}/token \\  
  \-H "Content-Type: application/x-www-form-urlencoded" \\  
  \-d "grant\_type=client\_credentials" \\  
  \-d "client\_id=CLIENT\_ID" \\  
  \-d "client\_secret=CLIENT\_SECRET"  
   
Vid anrop till APIet använder du följande headers  
Authroization: Bearer och token som du får tillbaka från auth requestet  
User-Key: är företagsnyckeln du fått på mail men som också går att återfinna i Lundify \> integrationer \> kugghjulet.  
   
User-Key är en statisk identifierare för ett specifikt företag. Ett request kan se ut som följande:  
curl  
\--location \--request GET '{baseUrl}/details' \\  
\--header 'Content-Type: application/json' \\  
\--header 'User-Key: ' \\  
\--header 'Authorization: Bearer '  
   
authUrl \= [https://apigateway.blinfo.se/auth/oauth/v2](https://apigateway.blinfo.se/auth/oauth/v2)  
baseUrl \= [https://apigateway.blinfo.se/bla-api/v1/sp](https://apigateway.blinfo.se/bla-api/v1/sp)  
   
Du kan läsa mer om hur du gör dessa request här: [Authentication & API Requests – Björn Lundén](https://developer.bjornlunden.se/2022/05/19/api-quickguide/)  
För API dokumentation: [API Documentation – Björn Lundén](https://developer.bjornlunden.se/api-documentation/)  
Beskrivning om de olika sätt som skarpa företag kan aktivera integrationen på och hur ni kan få deras statiska företagsnyckel:  
[Company Activation & Key Retrieval – Björn Lundén](https://developer.bjornlunden.se/2025/03/31/activation-guide/)  
 

