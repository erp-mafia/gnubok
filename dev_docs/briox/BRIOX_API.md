{
    "openapi": "3.0.0",
    "info": {
        "title": "Briox API",
        "description": "Our business software makes it easy to be an entrepreneur. With us, you choose which programs you need. All data is stored on our own servers and you login from any connected device. Welcome to Briox.",
        "contact": {
            "email": "apisupport@briox.se"
        },
        "version": "2.0"
    },
    "servers": [
        {
            "url": "https://api-se.briox.services/v2"
        }
    ],
    "paths": {
        "/account": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "Get a list of accounts",
                "description": "Get a list of all accounts with the basic information",
                "operationId": "getListOfAllAccounts",
                "parameters": [
                    {
                        "name": "active",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "year",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "accounts": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Account"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/account/{year}/{accountID}": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "Get an account by account id",
                "description": "Get an account by account id with the basic information",
                "operationId": "getAccountById",
                "parameters": [
                    {
                        "name": "year",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "accountID",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Account"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "account"
                ],
                "summary": "Update an account",
                "description": "Update an account in Briox",
                "operationId": "UpdateAccount",
                "parameters": [
                    {
                        "name": "year",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "accountID",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Account object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "account": {
                                        "$ref": "#/components/schemas/Account"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Account"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/assignments": {
            "get": {
                "tags": [
                    "assignment"
                ],
                "summary": "Get a list of all the assignments",
                "description": "Get a list of all the assignments",
                "operationId": "getListOfAssignments",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "assignment": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Assignment"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/authorisation/types": {
            "get": {
                "tags": [
                    "authorisation"
                ],
                "summary": "Get a list of authorisation types that can be made on a supplier invoice",
                "description": "The authorisation types that are returned are the authorisations types that can be made by the user",
                "operationId": "getListOfAuthorisationTypes",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "allOf": [
                                                    {
                                                        "$ref": "#/components/schemas/SupplierInvoiceAuthorisationType"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/authorisation/supplierinvoice": {
            "get": {
                "tags": [
                    "authorisation"
                ],
                "summary": "Get a list of all supplier invoices that need some kind of authorisation",
                "description": "Get a list of all supplier invoices that also contains comments and linked documents",
                "operationId": "supplierInvoiceToAuthorise",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/SupplierInvoiceToAuthorise"
                                            }
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/authorisation/supplierinvoice/authorised": {
            "get": {
                "tags": [
                    "authorisation"
                ],
                "summary": "Get a list of all supplier invoices that have been authorised",
                "description": "Get a list of all supplier invoices that have been authorised by the user, also contains comments and linked documents",
                "operationId": "authorisedSupplierInvoices",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    },
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "authorised_supplier_invoices": {
                                                    "type": "array",
                                                    "items": {
                                                        "properties": {
                                                            "": {
                                                                "$ref": "#/components/schemas/SupplierInvoiceToAuthorise"
                                                            }
                                                        },
                                                        "type": "object"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/bankpayment": {
            "post": {
                "tags": [
                    "bankpayment"
                ],
                "summary": "Create a Bank Payment",
                "description": "Create a bank payment in Briox",
                "operationId": "CreateBankPayment",
                "requestBody": {
                    "description": "Customer object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "bankpayment": {
                                        "$ref": "#/components/schemas/BankPayment"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "bankpayment": {
                                                    "$ref": "#/components/schemas/BankPayment"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplierinvoice": {
            "get": {
                "tags": [
                    "supplierinvoice"
                ],
                "summary": "Get a list of all supplier invoices",
                "description": "Get a list of all supplier invoices with the basic information",
                "operationId": "getListOfAllSupplierInvoices",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    },
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplierinvoices": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/SupplierInvoice"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "supplierinvoice"
                ],
                "summary": "Create a supplier invoice",
                "description": "Create a supplier invoice in Briox",
                "operationId": "CreateSupplierInvoice",
                "requestBody": {
                    "description": "Supplier Invoice object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "supplierinvoice": {
                                        "$ref": "#/components/schemas/SupplierInvoicePost"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplierinvoice": {
                                                    "$ref": "#/components/schemas/SupplierInvoice"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplierinvoice/{supplierinvoiceID}": {
            "get": {
                "tags": [
                    "supplierinvoice"
                ],
                "summary": "Get supplier invoice",
                "description": "Use the supplier invoice ID to retrieve the supplier invoice",
                "operationId": "getSupplierInvoiceByID",
                "parameters": [
                    {
                        "name": "supplierinvoiceID",
                        "in": "path",
                        "description": "The ID used to retrieve the supplier invoice",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplierinvoice": {
                                                    "$ref": "#/components/schemas/SupplierInvoice"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "supplierinvoice"
                ],
                "summary": "Update a supplier invoice",
                "description": "Update a supplier invoice in Briox",
                "operationId": "UpdateSupplierInvoice",
                "parameters": [
                    {
                        "name": "supplierinvoiceID",
                        "in": "path",
                        "description": "Supplier invoice object to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Supplier Invoice object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "supplierinvoice": {
                                        "$ref": "#/components/schemas/SupplierInvoicePost"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplierinvoice": {
                                                    "$ref": "#/components/schemas/SupplierInvoice"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplierinvoice/{supplierinvoiceID}/authorise": {
            "put": {
                "tags": [
                    "supplierinvoice"
                ],
                "summary": "Authorise a supplier invoice",
                "description": "Authorise a supplier invoice, like payment or posting authorisation",
                "operationId": "authorise",
                "parameters": [
                    {
                        "name": "supplierinvoiceID",
                        "in": "path",
                        "description": "Supplier invoice object to authorise",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Authorisation type to be made on the supplier invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "authorisationtype": {
                                        "description": "Authorisation type to be made on the supplier\n\t\t *                                                  invoice",
                                        "type": "string",
                                        "format": "max char: 1024",
                                        "example": "authorise_payment"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/SupplierInvoiceToAuthorise"
                                            }
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplierinvoice/{supplierinvoiceID}/comment": {
            "post": {
                "tags": [
                    "supplierinvoice"
                ],
                "summary": "Add comment to a supplier invoice",
                "description": "Add comment to a supplier invoice",
                "operationId": "comment",
                "parameters": [
                    {
                        "name": "supplierinvoiceID",
                        "in": "path",
                        "description": "Supplier invoice object to authorise",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "The comment to add",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "comment": {
                                        "type": "string",
                                        "format": "max char: 1024",
                                        "example": "Could you please look at this as soon as possible!"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "comment": {
                                                    "$ref": "#/components/schemas/SupplierInvoiceComment"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/batch/usernotification/process": {
            "put": {
                "tags": [
                    "batch"
                ],
                "summary": "Process user notifications",
                "description": "Process a batch of user notifications",
                "operationId": "ProcessUserNotification",
                "requestBody": {
                    "description": "An array of object containing user notification ID.",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "properties": {
                                        "user_notification_id": {
                                            "description": "Id of User Notification",
                                            "type": "string",
                                            "format": "max char: 1024",
                                            "example": "42"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/batch/supplierinvoice/authorise": {
            "put": {
                "tags": [
                    "batch"
                ],
                "summary": "Authorise supplier invoices",
                "description": "Authorise a batch of supplier invoices, like payment or posting authorisation",
                "operationId": "AuthoriseSupplierInvoice",
                "requestBody": {
                    "description": "An array of object containing supplier invoice ID and the type of authorisation that should be made on the invoice.",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/SupplierInvoiceAuthorisation"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "properties": {
                                                    "status": {
                                                        "description": "Status for transaction. Can either be 200 or 400.",
                                                        "type": "string",
                                                        "format": "max char: 1024",
                                                        "example": "400"
                                                    },
                                                    "body": {
                                                        "properties": {
                                                            "supplierinvoiceid": {
                                                                "description": "Supplier invoice number",
                                                                "type": "string",
                                                                "format": "max char: 1024",
                                                                "example": "10"
                                                            },
                                                            "authorisationtype": {
                                                                "description": "Authorisation type",
                                                                "format": "max char: 1024",
                                                                "example": "payment"
                                                            },
                                                            "errormessage": {
                                                                "description": "Error message if something went wrong",
                                                                "format": "max char: 1024",
                                                                "example": "Posting authorisation must be made before payment authorisation"
                                                            }
                                                        },
                                                        "type": "object"
                                                    }
                                                },
                                                "type": "object"
                                            }
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/application": {
            "get": {
                "tags": [
                    "application"
                ],
                "summary": "Get a list of all program applications",
                "description": "Get a list of all program applications with their names, descriptions, ids",
                "operationId": "getListOfAllApplications",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "applications": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/BrioxApplication"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/connect/claimcompany": {
            "post": {
                "tags": [
                    "brioxconnect"
                ],
                "summary": "Claim company page on Briox Connect",
                "description": "Claim company page on Briox Connect",
                "operationId": "ClaimConnectCompanyPage",
                "requestBody": {
                    "description": "Company info",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "company_info": {
                                        "$ref": "#/components/schemas/ConnectObject"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/connect/confirmclientmanager": {
            "get": {
                "tags": [
                    "brioxconnect"
                ],
                "summary": "Confirm that the user has client managaer access",
                "description": "Confirm that the user has client managaer access",
                "operationId": "ConfirmClientManager",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/clientaccesstoken": {
            "post": {
                "tags": [
                    "clientaccesstoken"
                ],
                "summary": "Get a client access token",
                "description": "Get a client access token for Briox account",
                "operationId": "fa09b278c410532dc8ebf8b2d866fe18",
                "requestBody": {
                    "description": "Client Access Token Data",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "accesstokendata": {
                                        "$ref": "#/components/schemas/ClientAccessTokenRequest"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "accesstoken": {
                                                    "$ref": "#/components/schemas/ClientAccessToken"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/contract": {
            "get": {
                "tags": [
                    "contract"
                ],
                "summary": "Get a list of all recurring invoicing contracts",
                "description": "Get a list of all recurring invoicing contracts with the basic information",
                "operationId": "getListOfAllContracts",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "contracts": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/ContractList"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/costcenter": {
            "get": {
                "tags": [
                    "costcenter"
                ],
                "summary": "Get a list of all cost centers",
                "description": "Get a list of all cost centers with the basic information",
                "operationId": "getListOfAllCostCenters",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "costcenters": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/CostCenter"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "costcenter"
                ],
                "summary": "Create a cost center",
                "description": "Create a cost center in Briox",
                "operationId": "CreateCostCenter",
                "requestBody": {
                    "description": "Cost Center object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "costcenter": {
                                        "$ref": "#/components/schemas/CostCenter"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/CostCenter"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/costcenter/{code}": {
            "get": {
                "tags": [
                    "costcenter"
                ],
                "summary": "Get a cost center by its code",
                "description": "Get a cost center with the basic information",
                "operationId": "getCostCenterByCode",
                "parameters": [
                    {
                        "name": "code",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/CostCenter"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "costcenter"
                ],
                "summary": "Update a cost center",
                "description": "Update a cost center in Briox",
                "operationId": "UpdateCostCenter",
                "parameters": [
                    {
                        "name": "code",
                        "in": "path",
                        "description": "Cost Center Code",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Cost Center object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "costcenter": {
                                        "$ref": "#/components/schemas/CostCenter"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/CostCenter"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "costcenter"
                ],
                "summary": "Delete a cost center",
                "description": "Delete a cost center from Briox",
                "operationId": "DeleteCostCenter",
                "parameters": [
                    {
                        "name": "code",
                        "in": "path",
                        "description": "Cost Center Code",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customer": {
            "get": {
                "tags": [
                    "customer"
                ],
                "summary": "Get a list of all customers",
                "description": "Get a list of all customers with the basic information",
                "operationId": "getListOfAllCustomers",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/companynumber"
                    },
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customers": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/CustomerList"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "customer"
                ],
                "summary": "Create a customer",
                "description": "Create a customer in Briox",
                "operationId": "CreateCustomer",
                "requestBody": {
                    "description": "Customer object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customer": {
                                        "$ref": "#/components/schemas/Customer"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customer": {
                                                    "$ref": "#/components/schemas/Customer"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customer/{customerID}": {
            "get": {
                "tags": [
                    "customer"
                ],
                "summary": "Get customer",
                "description": "Use the customer ID to retrieve the customer",
                "operationId": "getCustomerByID",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "path",
                        "description": "The ID used to retrieve the customer",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customer": {
                                                    "$ref": "#/components/schemas/Customer"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "customer"
                ],
                "summary": "Update a customer",
                "description": "Update a customer in Briox",
                "operationId": "UpdateCustomer",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "path",
                        "description": "Customer id to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Customer object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customer": {
                                        "$ref": "#/components/schemas/Customer"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customer": {
                                                    "$ref": "#/components/schemas/Customer"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "customer"
                ],
                "summary": "Delete customer",
                "description": "Use the customer ID to delete the customer",
                "operationId": "deleteCustomerByID",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "path",
                        "description": "The ID used to retrieve the customer",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customer/email/{customerEmail}": {
            "get": {
                "tags": [
                    "customer"
                ],
                "summary": "Get customer",
                "description": "Use the customer email address to retrieve the customer",
                "operationId": "getCustomerByEmail",
                "parameters": [
                    {
                        "name": "customerEmail",
                        "in": "path",
                        "description": "The email used to retrieve the customer",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customer": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Customer"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customer/{customerID}/einvoice-settings/send-request": {
            "get": {
                "tags": [
                    "customer"
                ],
                "summary": "Send e-invoice request to a customer",
                "description": "Use the customer ID to send a request to the customer to enable e-invoice",
                "operationId": "requestCustomerEinvoice",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "path",
                        "description": "The ID used to send request to the customer",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "message": {
                                                    "type": "string",
                                                    "example": "The request has been sent"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice": {
            "get": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Get a list of all customer invoices",
                "description": "Get a list of all customer invoices with the basic information",
                "operationId": "getListOfAllCustomerInvoices",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    },
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/customerinvoicefilter"
                    },
                    {
                        "$ref": "#/components/parameters/customerinvoicetype"
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "invoices": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/CustomerInvoiceResponse"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Create a customer invoice",
                "description": "Create a customer invoice in Briox",
                "operationId": "CreateCustomerInvoice",
                "requestBody": {
                    "description": "Customer invoice object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoice": {
                                        "$ref": "#/components/schemas/CustomerInvoice"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoice": {
                                                    "$ref": "#/components/schemas/CustomerInvoice"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/{customerinvoiceID}": {
            "get": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Get customer invoice",
                "description": "Use the customer invoice ID to retrieve the customer invoice",
                "operationId": "getCustomerInvoiceByID",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID used to retrieve the customer invoice",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoice": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Update a customer invoice",
                "description": "Update a customer invoice in Briox",
                "operationId": "UpdateCustomerInvoice",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "Customer invoice id to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Customer invoice object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoice": {
                                        "$ref": "#/components/schemas/CustomerInvoice"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoice": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/factoring": {
            "get": {
                "tags": [
                    "customerinvoicefactoring"
                ],
                "summary": "Get customer invoice factoring list",
                "description": "Get a list of all customer invoices that are in a factoring process",
                "operationId": "getCustomerInvoiceFactoring",
                "parameters": [
                    {
                        "name": "lastmodified",
                        "in": "query",
                        "description": "Get list of factoring invoices with a last modified newer than parameter value",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "description": "Get list of factoring invoices filtered by factoring status",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoicefactoring": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceFactoringResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/factoring/{customerinvoiceID}": {
            "get": {
                "tags": [
                    "customerinvoicefactoring"
                ],
                "summary": "Get customer invoice factoring",
                "description": "Use the customer invoice ID to retrieve the customer invoice factoring information",
                "operationId": "getCustomerInvoiceFactoringByID",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID used to retrieve the customer invoice factoring",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoicefactoring": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceFactoringResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "customerinvoicefactoring"
                ],
                "summary": "Update a customer invoice factoring status",
                "description": "Update a customer invoice factoring status in Briox",
                "operationId": "UpdateCustomerInvoiceFactoring",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID used to update the customer invoice factoring status",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Customer Invoice Factoring status to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoicefactoring": {
                                        "$ref": "#/components/schemas/CustomerInvoiceFactoringUpdate"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoicefactoring": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceFactoringResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/duedate/{customerinvoiceID}": {
            "put": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Update due date on a customer invoice",
                "description": "Update due date on a posted customer invoice in Briox",
                "operationId": "UpdateCustomerInvoiceDueDate",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "Customer invoice id to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Customer Invoice Due Date status to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoiceduedate": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDueDate"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoice": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceDueDateResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/debtcollection/{customerinvoiceID}": {
            "put": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Update debt collection status on a customer invoice",
                "description": "Update debt collection status on a posted customer invoice in Briox",
                "operationId": "UpdateCustomerInvoiceDebtCollection",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "Customer invoice id to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Customer Invoice Debt Collector status to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoicedebtcollection": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDebtCollection"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoicedebtcollection": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceDebtCollectionResponse"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/void/{customerinvoiceID}": {
            "put": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Void a customer invoice",
                "description": "A customer invoice can be voided if it hasn't been posted in Briox",
                "operationId": "VoidCustomerInvoice",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "Customer invoice id to be voided",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/{customerinvoiceID}/print": {
            "get": {
                "tags": [
                    "customerinvoice"
                ],
                "summary": "Get print of invoice",
                "description": "Use the customer invoice ID to get link to print of invoice",
                "operationId": "getInvoicePrintByCustomerInvoiceID",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID used to retrieve the customer invoice printout",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "template_type",
                        "in": "query",
                        "description": "Possible value are invoice, reminder and invoice_factoring. Default is invoice.",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "is_preview",
                        "in": "query",
                        "description": "Define if printing for preliminary preview. Default is false.",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "file_link": {
                                                    "type": "string",
                                                    "format": "max char: 1024",
                                                    "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=print&fid=d0f5bba21224469091322bacc4a33874&file_id=6374d9be10df5"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/{customerinvoiceID}/sendaseinvoice": {
            "post": {
                "tags": [
                    "customerinvoicedelivery"
                ],
                "summary": "Send the invoice as Electronic Invoice",
                "description": "Send the invoice as Electronic Invoice",
                "operationId": "SendCustomerInvoiceAsElectronicInvoice",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID of invoice to be sent as E-Invoice",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "E-invoice information needed to send the invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "einvoice_info": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDeliveryEinvoice"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/{customerinvoiceID}/sendasemail": {
            "post": {
                "tags": [
                    "customerinvoicedelivery"
                ],
                "summary": "Send the invoice as E-mail",
                "description": "Send the invoice as E-mail.",
                "operationId": "SendCustomerInvoiceAsEmail",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID of invoice to be sent as E-mail",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "E-mail information needed to send the invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "email_info": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDeliveryEmail"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/reminder/{customerinvoiceID}/sendtoprintservice": {
            "post": {
                "tags": [
                    "customerinvoicedelivery"
                ],
                "summary": "Send the invoice reminder to Print service",
                "description": "Send the invoice reminder to Print service",
                "operationId": "SendCustomerInvoicereminderToPrintService",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID of invoice to be sent as a reminder to Print Service",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "E-invoice information needed to send the invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "einvoice_info": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDeliveryEinvoice"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/reminder/{customerinvoiceID}/sendasemail": {
            "post": {
                "tags": [
                    "customerinvoicedelivery"
                ],
                "summary": "Send the invoice reminder as E-mail",
                "description": "Send the invoice reminder as E-mail.",
                "operationId": "SendCustomerInvoiceReminderAsEmail",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID of invoice to be sent reminder for as E-mail",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "E-mail information needed to send the invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "email_info": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDeliveryEmail"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/{customerinvoiceID}/sendtokivra": {
            "post": {
                "tags": [
                    "customerinvoicedelivery"
                ],
                "summary": "Send the invoice to Kivra",
                "description": "Send the invoice to Kivra.",
                "operationId": "SendCustomerInvoiceToKivra",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID of invoice to be sent as E-mail",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "E-mail information needed to send the invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "data": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDeliveryKivra"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "kivra": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceDeliveryKivraSent"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/customerinvoice/reminder/{customerinvoiceID}/sendtokivra": {
            "post": {
                "tags": [
                    "customerinvoicedelivery"
                ],
                "summary": "Send reminder invoice to Kivra",
                "description": "Send the invoice to Kivra.",
                "operationId": "SendCustomerReminderInvoiceToKivra",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID of invoice to be sent as E-mail",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "E-mail information needed to send the invoice",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "data": {
                                        "$ref": "#/components/schemas/CustomerInvoiceDeliveryKivra"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "kivra": {
                                                    "$ref": "#/components/schemas/CustomerInvoiceDeliveryKivraSent"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/defaultaccount": {
            "get": {
                "tags": [
                    "defaultaccount"
                ],
                "summary": "Get a list of default accounts",
                "description": "Get a list of all default accounts with the basic information",
                "operationId": "getListOfAllDefaultAccounts",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "accounts": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/DefaultAccount"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/defaultaccount/{defaultAccountID}": {
            "get": {
                "tags": [
                    "defaultaccount"
                ],
                "summary": "Retrieve default account by id",
                "description": "Retrieve an account number by default account id",
                "operationId": "getDefaultAccountByCode",
                "parameters": [
                    {
                        "name": "defaultAccountID",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/DefaultAccount"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/educationorder/{educatorID}": {
            "get": {
                "tags": [
                    "educationorder"
                ],
                "summary": "Confirm an educator ID",
                "description": "Confirm that an educator ID exists and an education order can be made",
                "operationId": "ConfirmEducatorID",
                "parameters": [
                    {
                        "name": "educatorID",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/educationorder": {
            "post": {
                "tags": [
                    "educationorder"
                ],
                "summary": "Create an education order",
                "description": "An activation link will be sent to contact's email. Make sure that educator ID is confirmed",
                "operationId": "CreateEducationOrder",
                "requestBody": {
                    "description": "Product Order object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "educationorder": {
                                        "$ref": "#/components/schemas/EducationOrder"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/EducationOrder"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/financialyear": {
            "get": {
                "tags": [
                    "financialyear"
                ],
                "summary": "Get a list of all financial years",
                "description": "Get a list of all financial years with the basic information",
                "operationId": "getListOfAllFinancialYears",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "financialyears": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/FinancialYear"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/financialyear/{yearID}": {
            "get": {
                "tags": [
                    "financialyear"
                ],
                "summary": "Get a financial year by its ID",
                "description": "Get a financial year by its ID. Fetches the basic information",
                "operationId": "retrieve",
                "parameters": [
                    {
                        "name": "yearID",
                        "in": "path",
                        "description": "The ID used to retrieve a financial year",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/FinancialYear"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/financialyear/date/{date}": {
            "get": {
                "tags": [
                    "financialyear"
                ],
                "summary": "Get a financial year by its date",
                "description": "Get a financial year by its date. Fetches the basic information",
                "operationId": "retrieveByDate",
                "parameters": [
                    {
                        "name": "date",
                        "in": "path",
                        "description": "The date used to retrieve a financial year",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/FinancialYear"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/graph/netprofit": {
            "get": {
                "tags": [
                    "graph"
                ],
                "summary": "Get company's net profit graph",
                "description": "Get company's net profit graph covering the past 12 months till today",
                "operationId": "getNetProfitGraph",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "graph": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/GraphObject"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/householdservices/{date}": {
            "get": {
                "tags": [
                    "householdservices"
                ],
                "summary": "Get list of household services by date",
                "description": "Get list of household services and their categories by date",
                "operationId": "getAllByDate",
                "parameters": [
                    {
                        "name": "date",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "householdservices": {
                                                    "$ref": "#/components/schemas/HouseholdServices"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/householdservices/togglesetting": {
            "put": {
                "tags": [
                    "householdservices"
                ],
                "summary": "Activitate/Deactivate household services",
                "description": "Will activate/deactivate household setting for the database",
                "operationId": "ToggleHouseholdServicesSetting",
                "requestBody": {
                    "description": "Activate/deactivate the household services setting",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "household_service_setting": {
                                        "example": "true"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/item": {
            "get": {
                "tags": [
                    "item"
                ],
                "summary": "Get a list of all Items",
                "description": "Get a list of all items with the basic information",
                "operationId": "getListOfAllItems",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "items": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Item"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "item"
                ],
                "summary": "Create an item",
                "description": "Create an item in Briox",
                "operationId": "CreateItem",
                "requestBody": {
                    "description": "Item object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "item": {
                                        "$ref": "#/components/schemas/Item"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Item"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/item/{itemID}": {
            "get": {
                "tags": [
                    "item"
                ],
                "summary": "Get an item by its ID",
                "description": "Get an item by its ID. Fetches the basic information",
                "operationId": "getItemByID",
                "parameters": [
                    {
                        "name": "itemID",
                        "in": "path",
                        "description": "The ID used to retrieve an item",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Item"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "item"
                ],
                "summary": "Update a item",
                "description": "Update a item in Briox",
                "operationId": "UpdateItem",
                "parameters": [
                    {
                        "name": "itemID",
                        "in": "path",
                        "description": "Item object ID to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Item object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "item": {
                                        "$ref": "#/components/schemas/Item"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Item"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "item"
                ],
                "summary": "Delete item",
                "description": "Use the item ID to delete the item",
                "operationId": "deleteItemByID",
                "parameters": [
                    {
                        "name": "itemID",
                        "in": "path",
                        "description": "The ID used to delete the item",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/item/ean/{itemEAN}": {
            "get": {
                "tags": [
                    "item"
                ],
                "summary": "Get an item by its EAN-code",
                "description": "Get an item by its Ean-code. Fetches the basic information",
                "operationId": "getItemByEAN",
                "parameters": [
                    {
                        "name": "itemEAN",
                        "in": "path",
                        "description": "The EAN used to retrieve an item",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Item"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/journal": {
            "post": {
                "tags": [
                    "journal"
                ],
                "summary": "Create a journal",
                "description": "Create a journal in Briox",
                "operationId": "CreateJournal",
                "requestBody": {
                    "description": "Journal object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "journal": {
                                        "$ref": "#/components/schemas/Journal"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "journal": {
                                                    "$ref": "#/components/schemas/Journal"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/journal/{financialyear}": {
            "get": {
                "tags": [
                    "journal"
                ],
                "summary": "Get a list of journals",
                "description": "Get a list of journals from briox",
                "operationId": "GetJournals",
                "parameters": [
                    {
                        "name": "financialyear",
                        "in": "path",
                        "description": "The financial year filter",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "journals": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Journal"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/journal/{financialyear}/{series}": {
            "get": {
                "tags": [
                    "journal"
                ],
                "summary": "Get a list of journals by series",
                "description": "Get a list of journals by series from briox",
                "operationId": "GetJournalsBySeries",
                "parameters": [
                    {
                        "name": "financialyear",
                        "in": "path",
                        "description": "The financial year filter",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "series",
                        "in": "path",
                        "description": "The series filter",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "journals": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Journal"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/journal/{financialyear}/{series}/{journalID}": {
            "get": {
                "tags": [
                    "journal"
                ],
                "summary": "Get a specific journal",
                "description": "Get a specific journal from briox",
                "operationId": "GetJournal",
                "parameters": [
                    {
                        "name": "financialyear",
                        "in": "path",
                        "description": "The financial year",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "series",
                        "in": "path",
                        "description": "The series",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "journalID",
                        "in": "path",
                        "description": "The journal id",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "journal": {
                                                    "$ref": "#/components/schemas/Journal"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "journal"
                ],
                "summary": "Delete journal",
                "description": "Use the path params to delete the last journal in the series.",
                "operationId": "deleteJournal",
                "parameters": [
                    {
                        "name": "financialyear",
                        "in": "path",
                        "description": "The financial year",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "series",
                        "in": "path",
                        "description": "The series",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "journalID",
                        "in": "path",
                        "description": "The journal id",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/journal/series/{financialyear}": {
            "get": {
                "tags": [
                    "journal"
                ],
                "summary": "Get a list of journal series",
                "description": "Get a list of journal series by financial year from briox",
                "operationId": "GetJournalSeries",
                "parameters": [
                    {
                        "name": "financialyear",
                        "in": "path",
                        "description": "The financial year",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "journalseries": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/JournalSeries"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/integration/kivra/activate": {
            "post": {
                "tags": [
                    "integration"
                ],
                "summary": "Activate the Kivra integration",
                "description": "Activate the Kivra integration for a single company in Briox.",
                "operationId": "ActivateKivra",
                "requestBody": {
                    "description": "Kivra object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "data": {
                                        "$ref": "#/components/schemas/KivraActivate"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/KivraActivate"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/integration/kivra/status": {
            "put": {
                "tags": [
                    "integration"
                ],
                "summary": "Deactivate or activate the Kivra integration",
                "description": "Deactivate or activate the Kivra integration for a single company in Briox.",
                "operationId": "UpdateKivraStatus",
                "requestBody": {
                    "description": "Kivra object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "data": {
                                        "$ref": "#/components/schemas/KivraUpdateActiveStatus"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/KivraUpdateActiveStatus"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocument": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all unlinked documents",
                "description": "Get a list of all unlinked documents with the basic information",
                "operationId": "getListOfAllUnlinkedDocuments",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "files": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Document"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "documents"
                ],
                "summary": "Create a linked document",
                "description": "Create a linked document in Briox",
                "operationId": "CreateLinkedDocument",
                "requestBody": {
                    "description": "Input data format",
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "required": [
                                    "uploadedfile"
                                ],
                                "properties": {
                                    "uploadedfile": {
                                        "description": "Linked document to be uploaded. Add square brackets for multiple file upload",
                                        "type": "file",
                                        "format": "binary"
                                    },
                                    "comment": {
                                        "description": "Comment to be attached to the uploaded document",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "doctype": {
                                        "description": "Linked document type key, for example: 'receipt', 'invoice', 'payroll', 'customer_invoice'",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "doccategory": {
                                        "description": "Linked document category ID, for example: 8",
                                        "type": "integer",
                                        "format": "integer"
                                    },
                                    "filename": {
                                        "description": "A file name that will be assigned to the saved document, for example:\n\t\t *                  receipt.pdf",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "converttopdf": {
                                        "description": "Convert uploaded file to PDF format. False by default, unless multiple files\n\t\t *                  are uploaded",
                                        "type": "boolean",
                                        "format": "boolean"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Document"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocumentfromapp": {
            "post": {
                "tags": [
                    "documents"
                ],
                "summary": "Create receipt as a linked document from App",
                "description": "Create a linked document in Briox From Briox App",
                "operationId": "CreateLinkedDocumentFromAppen",
                "requestBody": {
                    "description": "Input data format",
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "required": [
                                    "uploadedfile",
                                    "azoraremoteID"
                                ],
                                "properties": {
                                    "uploadedfile": {
                                        "description": "Linked document to be uploaded. Add square brackets for multiple file upload",
                                        "type": "file",
                                        "format": "binary"
                                    },
                                    "comment": {
                                        "description": "Comment to be attached to the uploaded document",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "doccategory": {
                                        "description": "Linked document category ID, for example: 8",
                                        "type": "integer",
                                        "format": "integer"
                                    },
                                    "filename": {
                                        "description": "A file name that will be assigned to the saved document, for example:\n\t\t *                  receipt.pdf",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "converttopdf": {
                                        "description": "Convert uploaded file to PDF format. False by default, unless multiple files\n\t\t *                  are uploaded",
                                        "type": "boolean",
                                        "format": "boolean"
                                    },
                                    "azoraremoteID": {
                                        "description": "Remote file ID at azora",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "receipttotal": {
                                        "description": "Total value of the receipt",
                                        "type": "number",
                                        "format": "float"
                                    },
                                    "receiptvat": {
                                        "description": "Total VAT of the receipt",
                                        "type": "number",
                                        "format": "float"
                                    },
                                    "receiptdate": {
                                        "description": "Receipt date in format YYYY-MM-DD",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "receiptdescription": {
                                        "description": "Place of purchase or other description",
                                        "type": "string",
                                        "format": "string"
                                    },
                                    "paymentmethod": {
                                        "description": "How was the payment made, as an expense or with company card ('company_card', 'expense')",
                                        "type": "string",
                                        "format": "string"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Document"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/archive": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all unlinked documents",
                "description": "Get a list of all unlinked documents with the basic information",
                "operationId": "getListOfAllArchiveDocuments",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "files": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Document"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "documents"
                ],
                "summary": "Upload a file to the archive",
                "description": "Upload a file to the Briox archive main folder",
                "operationId": "CreateArchiveDocument",
                "requestBody": {
                    "description": "Input data format",
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "required": [
                                    "uploadedfile"
                                ],
                                "properties": {
                                    "uploadedfile": {
                                        "description": "A document to be uploaded to the archive",
                                        "type": "file",
                                        "format": "binary"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Document"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocument/journal/{fileID}": {
            "put": {
                "tags": [
                    "documents"
                ],
                "summary": "Connect a linked document to journal",
                "description": "Connect a linked document to journal in Briox",
                "operationId": "ConnectLinkedDocumentToJournal",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "Linked document ID to be uploaded",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Journal to be connected to",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "journal": {
                                        "$ref": "#/components/schemas/LinkedJournal"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LinkedDocumentToJournalResponse"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocument/supplierinvoice/{fileID}": {
            "put": {
                "tags": [
                    "documents"
                ],
                "summary": "Connect a linked document to a supplier invoice",
                "description": "Connect a linked document to supplier invoice in Briox",
                "operationId": "ConnectLinkedDocumentToSupplierInvoice",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "Linked document ID to be uploaded",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Supplierinvoice to be connected to",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "supplierinvoice": {
                                        "$ref": "#/components/schemas/LinkedSupplierInvoice"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LinkedDocumentToInvoiceResponse"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocument/customerinvoice/{fileID}": {
            "put": {
                "tags": [
                    "documents"
                ],
                "summary": "Connect a linked document to a customer invoice",
                "description": "Connect a linked document to customer invoice in Briox",
                "operationId": "ConnectLinkedDocumentToCustomerInvoice",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "Linked document ID to be uploaded",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Customer invoice to be connected to",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoice": {
                                        "$ref": "#/components/schemas/LinkedCustomerInvoice"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LinkedDocumentToInvoiceResponse"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/incomingdocuments/{fileID}": {
            "put": {
                "tags": [
                    "documents"
                ],
                "summary": "Update an incoming document expense",
                "description": "Update document category, comment and document type on an expense",
                "operationId": "UpdateIncomingDocumentExpense",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "ID to file that are being updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Incoming document that is going to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "incomingdocumentexpense": {
                                        "$ref": "#/components/schemas/IncomingDocumentExpense"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/IncomingDocumentExpenseResponse"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "documents"
                ],
                "summary": "Delete an incoming document",
                "description": "Use file ID to delete the document",
                "operationId": "DeleteIncomingDocument",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "The ID used to deletet the document",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocumenttypes": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all document types",
                "description": "Get a list of all document types the basic information",
                "operationId": "getListOfDocumentTypes",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "types": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/DocumentType"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/linkeddocumentcategories": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all document categories",
                "description": "Get a list of all document categories the basic information",
                "operationId": "getListOfDocumentCategories",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "categories": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/DocumentCategory"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/dashboardreport": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all dashboard reports",
                "description": "Get a list of all the dashboard reports with the basic information",
                "operationId": "getListOfAllDashboardReports",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "reports": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/DashboardReport"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/dashboardreportlink/{report_id}": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a link to one of the dashboard reports",
                "description": "Fetch the link where a dashboard report is available.",
                "operationId": "retrieveDashboardReportLink",
                "parameters": [
                    {
                        "name": "report_id",
                        "in": "path",
                        "description": "The file ID from dashboard report",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/FileLink"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/retrievearchivefilelink/{fileID}": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a link to a document",
                "description": "Get a link to a document",
                "operationId": "retrieveArchiveFileLink",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "The file ID",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/FileLink"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/retrievearchivefile/{fileID}": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a file as stream from archive",
                "description": "Retreive the file data based on a file id",
                "operationId": "retrievearchivefile",
                "parameters": [
                    {
                        "name": "fileID",
                        "in": "path",
                        "description": "The file ID",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "multipart/form-data": {
                                "schema": {
                                    "properties": {
                                        "": {
                                            "type": "file",
                                            "format": "binary"
                                        }
                                    },
                                    "type": "object"
                                }
                            },
                            "application/pdf": {
                                "schema": {
                                    "properties": {
                                        "": {
                                            "type": "file",
                                            "format": "binary"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/incomingdocuments": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all unlinked documents",
                "description": "Get a list of all unlinked documents with the basic information",
                "operationId": "getListOfAllIncomingDocuments",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "description": "The document type",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "description": "The document status",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "files": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/IncomingDocument"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "metainformation": {
                                            "$ref": "#/components/schemas/MetaInformation"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/processedincomingdocument": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all processed documents",
                "description": "Get a list of all processed documents with the basic information",
                "operationId": "getListOfAllProcessedIncomingDocuments",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/frommodifieddate"
                    },
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/orderby"
                    },
                    {
                        "$ref": "#/components/parameters/orderdirection"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "files": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/IncomingDocument"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        },
                                        "metainformation": {
                                            "$ref": "#/components/schemas/MetaInformation"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payrolldocuments": {
            "get": {
                "tags": [
                    "documents"
                ],
                "summary": "Get a list of all payroll documents",
                "description": "Get the list of documents uploaded by the user himself only. Both linked and unlinked",
                "operationId": "getListOfPayrollDocuments",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "description": "Payroll document status which is either processed or unprocessed",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "files": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/IncomingDocument"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/log/scanner": {
            "get": {
                "tags": [
                    "logs"
                ],
                "summary": "Get logs for mobile scanner uploads for the logged-in user",
                "description": "Get logs for mobile scanner uploads for the logged-in user",
                "operationId": "GetLogsFoScannedDocuments",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "logs": {
                                                    "type": "array",
                                                    "items": {
                                                        "allOf": [
                                                            {
                                                                "$ref": "#/components/schemas/Log"
                                                            },
                                                            {
                                                                "$ref": "#/components/schemas/ScannerLogDataObject"
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/openingbalance/{year}/{accountID}": {
            "get": {
                "tags": [
                    "openingbalance"
                ],
                "summary": "Get opening balance",
                "description": "Use the account ID to retrieve the opening balance",
                "operationId": "getOpeningBalanceByID",
                "parameters": [
                    {
                        "name": "year",
                        "in": "path",
                        "description": "The financial year used to retrieve the opening balance",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "accountID",
                        "in": "path",
                        "description": "The account number used to retrieve the opening balance",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "openingbalance": {
                                                    "$ref": "#/components/schemas/OpeningBalance"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/openingbalance/{year}": {
            "get": {
                "tags": [
                    "openingbalance"
                ],
                "summary": "Get a list of all opening balance",
                "description": "Get a list of all opening balance with the basic information",
                "operationId": "getListOfAllOpeningBalance",
                "parameters": [
                    {
                        "name": "year",
                        "in": "path",
                        "description": "The financial year used to retrieve the opening balance",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "openingbalances": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/OpeningBalance"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payment/customerinvoice/{customerinvoiceID}": {
            "get": {
                "tags": [
                    "payment"
                ],
                "summary": "Get customer invoice payments for a single invoice",
                "description": "Use the customer invoice ID to retrieve the customer invoice payments",
                "operationId": "getCustomerInvoicePaymentsByID",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "The ID used to retrieve the customer invoice payments",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "customerinvoicepayments": {
                                                    "$ref": "#/components/schemas/InvoicePayment"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "payment"
                ],
                "summary": "Register a payment on a customer invoice",
                "description": "Creates a payment voucher that is linked to a customer Invoice",
                "operationId": "UpdateCustomerInvoiceRegisterPayment",
                "parameters": [
                    {
                        "name": "customerinvoiceID",
                        "in": "path",
                        "description": "Customer invoice id to be paid",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Payment Information to be saved",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "customerinvoicepayment": {
                                        "$ref": "#/components/schemas/InvoicePayment"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/InvoicePayment"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payment/method": {
            "get": {
                "tags": [
                    "payment"
                ],
                "summary": "Get a list of all payment methods",
                "description": "Get a list of all payment methods with the basic information",
                "operationId": "getListOfAllPaymentMethods",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "paymentmethods": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/PaymentMethod"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payment/term": {
            "get": {
                "tags": [
                    "payment"
                ],
                "summary": "Get a list of all payment terms",
                "description": "Get a list of all payment terms with the basic information",
                "operationId": "getListOfAllPaymentTerms",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "paymentterms": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/PaymentTerm"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payroll/salarylist": {
            "get": {
                "tags": [
                    "payroll"
                ],
                "summary": "Get a list of all salary payments for an employee",
                "description": "Get a list of all salary payments for an employee",
                "operationId": "getSalaryList",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "salarylist": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Payroll"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/payroll/salaryspecification/{calculationID}": {
            "get": {
                "tags": [
                    "payroll"
                ],
                "summary": "Get specific salary specification pdf for employee",
                "description": "Get specific salary specification pdf for employee",
                "operationId": "getSalarySpecification",
                "parameters": [
                    {
                        "name": "calculationID",
                        "in": "path",
                        "description": "The ID used to retrieve an salary specification",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "pdf_link": {
                                                    "type": "string",
                                                    "format": "max char: 1024",
                                                    "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=payslip&fid=d0f5bba21224469091322bacc4a33874&file_id=6374d9be10df5"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pricelist": {
            "get": {
                "tags": [
                    "pricelist"
                ],
                "summary": "Get a list of all price lists",
                "description": "Get a list of all price lists with the basic information",
                "operationId": "getListOfAllPricelists",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "pricelists": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/PriceList"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "pricelist"
                ],
                "summary": "Create a pricelist",
                "description": "Create a pricelist in Briox",
                "operationId": "CreatePricelist",
                "requestBody": {
                    "description": "Pricelist object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "pricelist": {
                                        "$ref": "#/components/schemas/PriceList"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/PriceList"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/pricelist/{priceListCode}": {
            "get": {
                "tags": [
                    "pricelist"
                ],
                "summary": "Get a pricelist",
                "description": "Use the price list code to retrieve the price list",
                "operationId": "getPriceListByCode",
                "parameters": [
                    {
                        "name": "priceListCode",
                        "in": "path",
                        "description": "The code used to retrieve the price list",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/PriceList"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "pricelist"
                ],
                "summary": "Update a pricelist",
                "description": "Update a pricelist in Briox",
                "operationId": "UpdatePricelist",
                "parameters": [
                    {
                        "name": "priceListCode",
                        "in": "path",
                        "description": "Price list code to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Pricelist object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "pricelist": {
                                        "$ref": "#/components/schemas/PriceList"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/PriceList"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "pricelist"
                ],
                "summary": "Delete price list",
                "description": "Use the prioe list code to delete the price list",
                "operationId": "deletePriceListByCode",
                "parameters": [
                    {
                        "name": "priceListCode",
                        "in": "path",
                        "description": "The Code of price list to be deleted",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/productorder": {
            "post": {
                "tags": [
                    "productorder"
                ],
                "summary": "Create a product order",
                "description": "Create a product order with an activation link that is sent to contact's email",
                "operationId": "CreateProductOrder",
                "requestBody": {
                    "description": "Product Order object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "productorder": {
                                        "$ref": "#/components/schemas/ProductOrder"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/ProductOrder"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/project": {
            "get": {
                "tags": [
                    "project"
                ],
                "summary": "Get a list of all projects",
                "description": "Get a list of all projects with the basic information",
                "operationId": "getListOfAllProjects",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "projects": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/Project"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "project"
                ],
                "summary": "Create a project",
                "description": "Create a project in Briox",
                "operationId": "CreateProject",
                "requestBody": {
                    "description": "Project object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "project": {
                                        "$ref": "#/components/schemas/Project"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "project": {
                                                    "$ref": "#/components/schemas/Project"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/project/{projectID}": {
            "get": {
                "tags": [
                    "project"
                ],
                "summary": "Get a project by its ID",
                "description": "Get a project by its ID the basic information",
                "operationId": "getProjectByID",
                "parameters": [
                    {
                        "name": "projectID",
                        "in": "path",
                        "description": "The ID used to retrieve a project",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "project": {
                                                    "$ref": "#/components/schemas/Project"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "project"
                ],
                "summary": "Update a project",
                "description": "Update a project in Briox",
                "operationId": "UpdateProject",
                "parameters": [
                    {
                        "name": "projectID",
                        "in": "path",
                        "description": "Project object ID to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Project object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "project": {
                                        "$ref": "#/components/schemas/Project"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "project": {
                                                    "$ref": "#/components/schemas/Project"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "project"
                ],
                "summary": "Delete project",
                "description": "Use the project ID to delete the project",
                "operationId": "deleteProjectByID",
                "parameters": [
                    {
                        "name": "projectID",
                        "in": "path",
                        "description": "The ID used to retrieve the project",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/salesorder": {
            "get": {
                "tags": [
                    "salesorder"
                ],
                "summary": "Get a list of all sales orders",
                "description": "Get a list of all sales orders with the basic information",
                "operationId": "getListOfAllSalesOrders",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/fromdate"
                    },
                    {
                        "$ref": "#/components/parameters/todate"
                    },
                    {
                        "$ref": "#/components/parameters/salesorderfilter"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "orders": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/SalesOrder"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "salesorder"
                ],
                "summary": "Create a sales order",
                "description": "Create a sales order in Briox",
                "operationId": "CreateSalesOrder",
                "requestBody": {
                    "description": "Sales Order object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "salesorder": {
                                        "$ref": "#/components/schemas/SalesOrder"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "salesorder": {
                                                    "$ref": "#/components/schemas/SalesOrder"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/salesorder/{salesorderID}": {
            "get": {
                "tags": [
                    "salesorder"
                ],
                "summary": "Get sales order",
                "description": "Use the sales order ID to retrieve the sales order",
                "operationId": "getSalesOrderByID",
                "parameters": [
                    {
                        "name": "salesorderID",
                        "in": "path",
                        "description": "The ID used to retrieve the sales order",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "salesorder": {
                                                    "$ref": "#/components/schemas/SalesOrder"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "salesorder"
                ],
                "summary": "Update a sales order",
                "description": "Update a sales order in Briox",
                "operationId": "UpdateSalesOrder",
                "parameters": [
                    {
                        "name": "salesorderID",
                        "in": "path",
                        "description": "The ID used to update the sales order",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Sales Order object to be updated",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "salesorder": {
                                        "$ref": "#/components/schemas/SalesOrder"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "salesorder": {
                                                    "$ref": "#/components/schemas/SalesOrder"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplierinvoicesimple": {
            "post": {
                "tags": [
                    "supplierinvoicesimple"
                ],
                "summary": "Create a supplier invoice",
                "description": "Create a supplier invoice simple in Briox",
                "operationId": "CreateSupplierInvoiceSimple",
                "requestBody": {
                    "description": "Supplier Invoice object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "supplierinvoicesimple": {
                                        "$ref": "#/components/schemas/SupplierInvoiceSimple"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplierinvoice": {
                                                    "$ref": "#/components/schemas/SupplierInvoice"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/sie/{financialYear}/{type}": {
            "get": {
                "tags": [
                    "sie"
                ],
                "summary": "Get a Sie File as a stream",
                "description": "Get a Sie File as a stream",
                "operationId": "retrieveSieFile",
                "parameters": [
                    {
                        "name": "financialYear",
                        "in": "path",
                        "description": "Financial year ID",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "type",
                        "in": "path",
                        "description": "Type of Sie file if no valid type is provided 4 is used as default.",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/octet-stream": {
                                "schema": {
                                    "properties": {
                                        "": {
                                            "type": "string",
                                            "format": "binary"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplier": {
            "get": {
                "tags": [
                    "supplier"
                ],
                "summary": "Get a list of all suppliers",
                "description": "Get a list of all suppliers with the basic information",
                "operationId": "getListOfAllSuppliers",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/page"
                    },
                    {
                        "$ref": "#/components/parameters/limit"
                    },
                    {
                        "$ref": "#/components/parameters/companynumber"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "suppliers": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/SupplierList"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "post": {
                "tags": [
                    "supplier"
                ],
                "summary": "Create a supplier",
                "description": "Create a supplier in Briox",
                "operationId": "CreateSupplier",
                "requestBody": {
                    "description": "Supplier object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "supplier": {
                                        "$ref": "#/components/schemas/Supplier"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplier": {
                                                    "$ref": "#/components/schemas/Supplier"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplier/{supplierID}": {
            "get": {
                "tags": [
                    "supplier"
                ],
                "summary": "Get supplier",
                "description": "Use the supplier ID to retrieve the supplier",
                "operationId": "getSupplierByID",
                "parameters": [
                    {
                        "name": "supplierID",
                        "in": "path",
                        "description": "The ID used to retrieve the supplier",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplier": {
                                                    "$ref": "#/components/schemas/Supplier"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "supplier"
                ],
                "summary": "Update a supplier",
                "description": "Update a supplier in Briox",
                "operationId": "UpdateSupplier",
                "parameters": [
                    {
                        "name": "supplierID",
                        "in": "path",
                        "description": "Supplier object to be updated",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Supplier object to be created",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "supplier": {
                                        "$ref": "#/components/schemas/Supplier"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "supplier": {
                                                    "$ref": "#/components/schemas/Supplier"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "supplier"
                ],
                "summary": "Delete supplier",
                "description": "Use the supplier ID to delete the supplier",
                "operationId": "deleteSupplierByID",
                "parameters": [
                    {
                        "name": "supplierID",
                        "in": "path",
                        "description": "The ID used to retrieve the supplier",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/supplier/search": {
            "get": {
                "tags": [
                    "supplier"
                ],
                "summary": "Search for suppliers",
                "description": "Search for suppliers by name, vat id and organisation number",
                "operationId": "searchSupplier",
                "parameters": [
                    {
                        "name": "suppliername",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "vatnumber",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "companynumber",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "suppliers": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/SupplierList"
                                                    }
                                                },
                                                "metainformation": {
                                                    "$ref": "#/components/schemas/MetaInformation"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/token": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Create a access token",
                "description": "Create a access token in Briox",
                "operationId": "CreateAccessToken",
                "parameters": [
                    {
                        "name": "clientid",
                        "in": "query",
                        "description": "Client identifier to be exchanged for a Access Token",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "token",
                        "in": "query",
                        "description": "Authentication token be exchanged for a Access Token",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Accesstoken"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/tokenrefresh": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Refresh the access token",
                "description": "Refresh the access token in Briox",
                "operationId": "RefreshAccessToken",
                "parameters": [
                    {
                        "name": "refreshtoken",
                        "in": "query",
                        "description": "Refresh Token to be exchanged for a Access Token",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "token",
                        "in": "query",
                        "description": "Current Access Token be exchanged for a new Access Token",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Accesstoken"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/login": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Login and generate an authentication token",
                "description": "Login and generate an authentication token in Briox",
                "operationId": "LoginGenerateAuthToken",
                "requestBody": {
                    "description": "Login object required for authentication and token generation",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "login": {
                                        "$ref": "#/components/schemas/LoginObject"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/AuthenticationToken"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/switchaccount": {
            "get": {
                "tags": [
                    "token"
                ],
                "summary": "Once authorized, generate an authentication token for another account",
                "description": "Generate an authentication token for another account that belongs to the currently authorized user and current application",
                "operationId": "SwitchGenerateAuthToken",
                "parameters": [
                    {
                        "name": "database",
                        "in": "query",
                        "description": "Target database ID; example: 9933706455",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/AuthenticationToken"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/fetchaccounts": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Fetch a list of available user accounts",
                "description": "Fetch a list of available user accounts connected to a specific application",
                "operationId": "FetchUserAccountList",
                "requestBody": {
                    "description": "Login object required for authentication and token generation",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "userdata": {
                                        "$ref": "#/components/schemas/UserDataObject"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "accounts": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/UserAccount"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/fetchclientaccounts": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Fetch a list of available client accounts",
                "description": "Fetch a list of available client accounts connected to a specific application",
                "operationId": "FetchClientAccountList",
                "requestBody": {
                    "description": "Login object required for authentication and token generation",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "userdata": {
                                        "$ref": "#/components/schemas/UserDataObject"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "accounts": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/UserAccount"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/logout": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Logout and delete access token",
                "description": "Logout and delete access token in Briox",
                "operationId": "LogoutDeleteAccessToken",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/resetpassword": {
            "post": {
                "tags": [
                    "token"
                ],
                "summary": "Request reset password email to be sent",
                "description": "Request reset password email to be sent to provided email address",
                "operationId": "ResetPassword",
                "requestBody": {
                    "description": "User email",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "user_email": {
                                        "example": "john.doe@briox.se"
                                    },
                                    "user_language": {
                                        "example": "en_GB"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "example": "Further instructions have been sent to the email address you provided"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/user/rights": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Get a list of access rights for the authorized user",
                "description": "Get a list of access rights for the authorized user",
                "operationId": "getAuthorizedUserRightsList",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "rights": {
                                                    "$ref": "#/components/schemas/UserRights"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/user/info": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Get personal user information",
                "description": "Get personal user information for the authorized user",
                "operationId": "getAuthorizedUserInfo",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "info": {
                                                    "$ref": "#/components/schemas/UserInfo"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "user"
                ],
                "summary": "Update user company info",
                "description": "Update company info",
                "operationId": "UpdateCompanyInfo",
                "requestBody": {
                    "description": "New company information",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "account": {
                                        "$ref": "#/components/schemas/UserAccountPost"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/UserAccountPost"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/user/logo": {
            "post": {
                "tags": [
                    "user"
                ],
                "summary": "Upload user company logotype",
                "description": "Upload user company logotype",
                "operationId": "UploadUserLogo",
                "requestBody": {
                    "description": "Input data format",
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "required": [
                                    "uploadedfile"
                                ],
                                "properties": {
                                    "uploadedfile": {
                                        "description": "Logotype file",
                                        "type": "file",
                                        "format": "binary"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "logotype": {
                                                    "type": "string",
                                                    "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=logotype&fid=qj4nlglth0lkd1zvod1r9fq75os2r5lt"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "delete": {
                "tags": [
                    "user"
                ],
                "summary": "Delete user company logotype",
                "description": "Delete user company logotype",
                "operationId": "DeleteUserLogo",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string",
                                            "example": "The company logo has been deleted"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/user/info/all": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Get user information for all users",
                "description": "Get user information for all users. Account databases that other users have access to will not be shown.",
                "operationId": "retrieveAllUserInfo",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/UserInfo"
                                            }
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/user/agencycontact": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Get agency contact information for client user",
                "description": "Get agency contact information if the user is a client and his/her agency provides the contact information",
                "operationId": "getAuthorizedUserAgencyContact",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/AgencyContact"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usernotification": {
            "get": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Get a list of user notifications",
                "description": "Get a list of all user notifications with the basic information",
                "operationId": "GetListOfAllUserNotifications",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "usernotifications": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/UserNotification"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usernotification/{user_notification_id}/process": {
            "put": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Process user notification",
                "description": "Mark user notification as processed",
                "operationId": "UserNotificationProcess",
                "parameters": [
                    {
                        "name": "user_notification_id",
                        "in": "path",
                        "description": "User notification ID to be processed",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usernotification/settings": {
            "get": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Get a list of user notification settings",
                "description": "Get a list of all user notification settings",
                "operationId": "GetListOfAllUserNotificationSettings",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "usernotification_settings": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/UserNotificationSettings"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Update a setting for user notifications",
                "description": "Update a setting for a single type/key combination",
                "operationId": "UpdateUserNotificationSettings",
                "requestBody": {
                    "description": "",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "usernotification_settings": {
                                        "$ref": "#/components/schemas/UserNotificationSettings"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usernotification/emailfrequency": {
            "get": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Get user notification email frequency settings",
                "description": "Get user notification email frequency settings",
                "operationId": "GetEmailFrequencyUserNotificationSettings",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "usernotification_emailfrequency": {
                                                    "$ref": "#/components/schemas/UserNotificationEmailFrequency"
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            },
            "put": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Update email frequency for user notifications",
                "description": "Update email frequency for user notifications",
                "operationId": "UpdateEmailFrequencyUserNotificationSettings",
                "requestBody": {
                    "description": "",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "usernotification_emailfrequency": {
                                        "$ref": "#/components/schemas/UserNotificationEmailFrequency"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usernotification/devicetoken": {
            "put": {
                "tags": [
                    "usernotification"
                ],
                "summary": "Update device token",
                "description": "Update device token for push notifications",
                "operationId": "UpdateDeviceTokenUserNotificationSettings",
                "requestBody": {
                    "description": "",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "usernotification_devicetoken": {
                                        "$ref": "#/components/schemas/UserNotificationDeviceToken"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usersettings/language": {
            "put": {
                "tags": [
                    "usersettings"
                ],
                "summary": "Switch system language",
                "description": "Switch system language for the authorized user in Briox",
                "operationId": "SwitchUserLanguage",
                "requestBody": {
                    "description": "Selected language code",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "language": {
                                        "example": "en_GB"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/usersettings/languages": {
            "get": {
                "tags": [
                    "usersettings"
                ],
                "summary": "Get a list of available system languages",
                "description": "Get a list of available system languages",
                "operationId": "getSystemLanguages",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "languages": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/SystemLanguage"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/vatcode": {
            "get": {
                "tags": [
                    "vatcode"
                ],
                "summary": "Get a list of all the vat codes",
                "description": "Get a list of all vat codes with the basic information",
                "operationId": "getListOfAllVatCodes",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "properties": {
                                                "vatcodes": {
                                                    "type": "array",
                                                    "items": {
                                                        "$ref": "#/components/schemas/VatCode"
                                                    }
                                                }
                                            },
                                            "type": "object"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        },
        "/vatcode/{vatcode}": {
            "get": {
                "tags": [
                    "vatcode"
                ],
                "summary": "Get avat code by id",
                "description": "Get a a single vatcode with the basic information",
                "operationId": "getVatCodeById",
                "parameters": [
                    {
                        "name": "vatcode",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/VatCode"
                                        }
                                    },
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "404": {
                        "description": "Model not found",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "405": {
                        "description": "Method not allowed",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [
                    {
                        "Bearer": []
                    }
                ]
            }
        }
    },
    "components": {
        "schemas": {
            "Accesstoken": {
                "properties": {
                    "client_id": {
                        "type": "string",
                        "example": "35649125"
                    },
                    "access_token": {
                        "type": "string",
                        "example": "3d04fb6e-1d55-44ef-8c92-4ab9c4150792"
                    },
                    "expire_date": {
                        "type": "string",
                        "example": "1970-01-01 00:00:00"
                    },
                    "expire_timestamp": {
                        "type": "string",
                        "example": "1640772931"
                    },
                    "refresh_token": {
                        "type": "string",
                        "example": "11Gdfb6e-1d55-44ef-8c92-4ab9c4150792"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "Accesstoken"
                }
            },
            "Account": {
                "required": [
                    "id",
                    "year"
                ],
                "properties": {
                    "id": {
                        "description": "Account number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1001"
                    },
                    "year": {
                        "description": "Financial year ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2"
                    },
                    "vat_code": {
                        "description": "Connection to vat code. Found on path /vatcode",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "MP1"
                    },
                    "active": {
                        "description": "If account is active or not",
                        "type": "string",
                        "format": "boolean, 1 OR 0",
                        "example": "0"
                    },
                    "description": {
                        "description": "Account description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Perustamismenot"
                    },
                    "incoming_balance": {
                        "description": "Account incoming balance",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "translations": {
                        "description": "Account description translations",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "properties": {
                                "en_GB": {
                                    "type": "string",
                                    "example": "Formation expenses"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "account"
                }
            },
            "Activities": {
                "description": "An object containing activities",
                "properties": {
                    "activity_id": {
                        "type": "string",
                        "example": 1
                    },
                    "assignment_id": {
                        "type": "string",
                        "example": 1
                    },
                    "description": {
                        "type": "string",
                        "example": "Vacation"
                    },
                    "unit": {
                        "type": "string",
                        "example": "h"
                    },
                    "unit_key": {
                        "type": "string",
                        "example": "h"
                    },
                    "name": {
                        "type": "string",
                        "example": "Vacation"
                    },
                    "balance": {
                        "type": "string",
                        "example": 0
                    },
                    "activity_lock": {
                        "type": "string",
                        "example": 0
                    }
                },
                "type": "object",
                "xml": {
                    "name": "Activities"
                }
            },
            "Address": {
                "description": "An object containing customer address.",
                "properties": {
                    "type": {
                        "description": "Address type",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "addressline1": {
                        "description": "Customer address 1",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "addressline2": {
                        "description": "Customer address 2",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "visitaddress": {
                        "description": "Customer visiting address",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "zip": {
                        "description": "Customer zip",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "city": {
                        "description": "Customer city",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "country": {
                        "description": "Customer country",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "countrycode": {
                        "description": "Country code",
                        "type": "string",
                        "format": "max char: 2"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "Address"
                }
            },
            "AddressPost": {
                "description": "An object containing customer address for posting",
                "properties": {
                    "addressline1": {
                        "description": "Customer address 1",
                        "type": "string",
                        "format": "max char:1024"
                    },
                    "zip": {
                        "description": "Customer zip",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "city": {
                        "description": "Customer city",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "country": {
                        "description": "Customer country",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "countrycode": {
                        "description": "Country code",
                        "type": "string",
                        "format": "max char: 2"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "AddressPost"
                }
            },
            "AgencyContact": {
                "properties": {
                    "accountant_name": {
                        "description": "Main contact accountant name",
                        "type": "string",
                        "example": "John Doe"
                    },
                    "accountant_phone": {
                        "description": "Main contact accountant phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "accountant_email": {
                        "description": "Main contact accountant email address",
                        "type": "string",
                        "example": "accountant@briox.fi"
                    },
                    "agency_id": {
                        "description": "Agency ID",
                        "type": "string",
                        "example": "99999999"
                    },
                    "agency_name": {
                        "description": "Agency name",
                        "type": "string",
                        "example": "Accountants Inc."
                    },
                    "agency_email": {
                        "description": "Agency email address",
                        "type": "string",
                        "example": "agency@briox.fi"
                    },
                    "agency_phone": {
                        "description": "Agency phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "agency_opening_hours": {
                        "description": "Agency opening hours in user's preferred time format",
                        "type": "string",
                        "example": "09:00 - 16:00"
                    },
                    "agency_website": {
                        "description": "Agency webpage",
                        "type": "string",
                        "example": "www.accountantsinc.se"
                    },
                    "agency_logotype": {
                        "description": "URL to where logotype for the accountant can be downloaded",
                        "example": ""
                    }
                },
                "type": "object",
                "xml": {
                    "name": "agencycontact"
                }
            },
            "Assignment": {
                "properties": {
                    "assignment_id": {
                        "description": "Assignment ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "contact_name": {
                        "description": "Contact name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Test"
                    },
                    "description": {
                        "description": "Description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Test"
                    },
                    "name": {
                        "description": "Name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1:Time"
                    },
                    "closed": {
                        "description": "Closed",
                        "type": "boolean",
                        "example": false
                    },
                    "project_id": {
                        "description": "Project ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "assignment_template_id": {
                        "description": "Assignment Template ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "notes": {
                        "description": "Notes",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Used for time reporting"
                    },
                    "quote_id": {
                        "description": "Quote ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "internal_time_reporting": {
                        "description": "Internal Time Reporting",
                        "type": "boolean",
                        "example": true
                    },
                    "activities": {
                        "description": "Activities for an assignment",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Activities"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "assignment"
                }
            },
            "AuthenticationToken": {
                "properties": {
                    "authentication_token": {
                        "description": "A token required to get an access token",
                        "type": "string",
                        "example": "3d34fc6e-1r55-43tg-8g92-4ab3c4158792"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "AuthenticationToken"
                }
            },
            "BankDetails": {
                "description": "An object containing bank details",
                "properties": {
                    "bank_name": {
                        "description": "Name of the bank",
                        "type": "string",
                        "example": "Swedbank"
                    },
                    "account_holder": {
                        "description": "Name of the account holder",
                        "type": "string",
                        "example": "John Smith"
                    },
                    "clearing_code": {
                        "description": "Clearing code for your bank",
                        "type": "string",
                        "example": "8888-8"
                    },
                    "account_number": {
                        "description": "Account number",
                        "type": "string",
                        "example": "1234567890"
                    },
                    "bic": {
                        "description": "BIC",
                        "type": "string",
                        "example": "SWEDSESS"
                    },
                    "iban": {
                        "description": "IBAN",
                        "type": "string",
                        "example": "FI4444444444444444"
                    },
                    "bg": {
                        "description": "Bankgiro",
                        "type": "string",
                        "example": "1234-5678"
                    },
                    "pg": {
                        "description": "Plusgiro",
                        "type": "string",
                        "example": "1234567-8"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "BankDetails"
                }
            },
            "BankDetailsPost": {
                "description": "An object containing bank details",
                "properties": {
                    "bank_name": {
                        "description": "Name of the bank",
                        "type": "string",
                        "example": "Swedbank"
                    },
                    "bic": {
                        "description": "BIC",
                        "type": "string",
                        "example": "SWEDSESS"
                    },
                    "iban": {
                        "description": "IBAN",
                        "type": "string",
                        "example": "FI4444444444444444"
                    },
                    "bg": {
                        "description": "Bankgiro",
                        "type": "string",
                        "example": "1234-5678"
                    },
                    "pg": {
                        "description": "Plusgiro",
                        "type": "string",
                        "example": "1234567-8"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "BankDetails"
                }
            },
            "BankPayment": {
                "required": [
                    "paymentdate",
                    "totalamount"
                ],
                "properties": {
                    "paymentdate": {
                        "description": "Payment date",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2022-03-28"
                    },
                    "paymentperioddescription": {
                        "description": "Payment period",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "January / 2022-01-01 - 2022-01-31"
                    },
                    "paymenttypecode": {
                        "description": "Payment type code",
                        "type": "string",
                        "format": "max char: 6",
                        "example": "SALARY"
                    },
                    "totalamount": {
                        "description": "Payment total amount",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "321"
                    },
                    "bank_payment_transactions": {
                        "description": "Bank transaction row list. See BankPaymentTransaction model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/BankPaymentTransaction"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "bankpayment"
                }
            },
            "BankPaymentTransaction": {
                "description": "An object containing information for each bank payment transaction row.",
                "properties": {
                    "amount": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "321"
                    },
                    "currency": {
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    },
                    "creditorname": {
                        "description": "Creditors name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Firstname Lastname"
                    },
                    "creditoriban": {
                        "description": "Creditors iban",
                        "type": "string",
                        "format": "max char: 34",
                        "example": "FI1234567891234567"
                    },
                    "creditorbic": {
                        "description": "Creditors BIC/SWIFT code",
                        "type": "string",
                        "format": "max char: 8 OR 11",
                        "example": "AABAFI22"
                    },
                    "creditorreference": {
                        "description": "Creditors reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "RF111232"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "BankPaymentTransaction"
                }
            },
            "BrioxApplication": {
                "properties": {
                    "application_id": {
                        "type": "string",
                        "example": "1"
                    },
                    "application_descr": {
                        "type": "string",
                        "example": "Accounting"
                    },
                    "application_name": {
                        "type": "string",
                        "example": "bf"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "BrioxApplication"
                }
            },
            "ClientAccessToken": {
                "description": "Client Access Token required to login into Briox",
                "properties": {
                    "access_token": {
                        "description": "Client Access Token",
                        "type": "string",
                        "example": "ea1edd18-4843-4c5f-8acb-563848297973"
                    },
                    "expire_date": {
                        "description": "Client token expire date and time",
                        "type": "string",
                        "example": "2018-05-25 09:14:43"
                    },
                    "client_id": {
                        "description": "Client database ID",
                        "type": "string",
                        "example": "1234567890"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "ClientAccessToken"
                }
            },
            "ClientAccessTokenRequest": {
                "description": "Client access token data required to generate an access token",
                "properties": {
                    "user_email": {
                        "description": "User Email",
                        "type": "string",
                        "example": "john.doe@briox.fi"
                    },
                    "application_id": {
                        "description": "Briox Application ID",
                        "type": "string",
                        "example": "77C4A5D700-5FC2-C284-4525-C3B9F6A7709D"
                    },
                    "company_id": {
                        "description": "Organization number",
                        "type": "string",
                        "example": "1453687-3"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "ClientAccessTokenRequest"
                }
            },
            "ConnectObject": {
                "description": "An object containing information to handle Briox Connect requests",
                "properties": {
                    "company_name": {
                        "description": "Company name in Briox account",
                        "type": "string"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "connectobject"
                }
            },
            "ContractList": {
                "required": [
                    "name",
                    "custno"
                ],
                "properties": {
                    "id": {
                        "description": "Contract number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "customername": {
                        "description": "Customer name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Steven Work"
                    },
                    "custno": {
                        "description": "Customer number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1023"
                    },
                    "templatename": {
                        "description": "Contract template name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "template 2"
                    },
                    "latestinvoicedate": {
                        "description": "Latest invoice date",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "status": {
                        "description": "Contract status",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Active"
                    },
                    "contractlength": {
                        "description": "Contract duration",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "12"
                    },
                    "reportingperiod": {
                        "description": "Customer company number",
                        "type": "string",
                        "format": "max char: 9",
                        "example": "1"
                    },
                    "startdate": {
                        "description": "Contract start date",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2019-01-01"
                    },
                    "enddate": {
                        "description": "Contract end date",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2019-12-31"
                    },
                    "invoicesremaining": {
                        "description": "Invoices remaining",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "5"
                    },
                    "total": {
                        "description": "The total sum of the contract",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "221.32"
                    },
                    "currency": {
                        "description": "Customer default currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "contractlist"
                }
            },
            "CostCenter": {
                "required": [
                    "code",
                    "text"
                ],
                "properties": {
                    "code": {
                        "description": "Cost Center code",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CC"
                    },
                    "text": {
                        "description": "Cost Center description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Briox Cost Center One"
                    },
                    "active": {
                        "description": "Cost Center active or inactive",
                        "type": "boolean",
                        "example": true
                    },
                    "translations": {
                        "description": "Cost Center description translations",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "properties": {
                                "en_GB": {
                                    "type": "string",
                                    "example": "Briox Cost Center One"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "costcenter"
                }
            },
            "Customer": {
                "required": [
                    "name",
                    "custno"
                ],
                "properties": {
                    "custno": {
                        "description": "Customer number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "name": {
                        "description": "Customer name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "active": {
                        "description": "Customer active or not",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "1"
                    },
                    "customerbusinesstype": {
                        "description": "Customer a company or private",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "1"
                    },
                    "phone": {
                        "description": "Customer phone number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "55555-555"
                    },
                    "phone2": {
                        "description": "Alternative phone number",
                        "type": "string",
                        "example": "55555-551"
                    },
                    "email": {
                        "description": "Customer email address",
                        "type": "string",
                        "example": "customer@briox.fi"
                    },
                    "fax": {
                        "description": "Customer fax number",
                        "type": "string",
                        "example": "55555-552"
                    },
                    "companynumber": {
                        "description": "Company number",
                        "type": "string",
                        "example": "11122233311"
                    },
                    "vatnumber": {
                        "description": "Customer VAT number. Starts with 2 letter country code.",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "FI12345678"
                    },
                    "currency": {
                        "description": "Customer default currency",
                        "type": "string",
                        "format": "max char: 3(ISO_4217)",
                        "example": "EUR"
                    },
                    "deliveryname": {
                        "description": "Delivery address name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Company AB"
                    },
                    "deliveryphone": {
                        "description": "Delivery address phone",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "555-555555"
                    },
                    "deliveryphone2": {
                        "description": "Delivery address alternative phone",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "555-555555"
                    },
                    "deliveryfax": {
                        "description": "Delivery address fax number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "555-555551"
                    },
                    "description": {
                        "description": "A short free text description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Wants their invoice sent to them by mail."
                    },
                    "einvoice": {
                        "description": "E-Invoice address",
                        "type": "string",
                        "format": "max char: 18",
                        "example": "003778451236547614"
                    },
                    "eaddress": {
                        "description": "EAN localisation code (EDI)",
                        "type": "string",
                        "format": "max char: 18",
                        "example": "003778451236547625"
                    },
                    "edi_operator_id": {
                        "description": "E-invoice operator ID",
                        "type": "string"
                    },
                    "contractref": {
                        "description": "Reference for commercial deal",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "ourref": {
                        "description": "Own reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "customerref": {
                        "description": "Customer reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "includevat": {
                        "description": "If you want the item rows on all the customer’s invoices to be displayed including VAT, 0-1",
                        "type": "boolean",
                        "format": "max char: 1",
                        "example": "0"
                    },
                    "costcenter": {
                        "description": "Set cost center here to apply a default cost center for customer transactions",
                        "type": "string",
                        "format": "max char: 50",
                        "example": ""
                    },
                    "project": {
                        "description": "Set project Id here to apply a default project for customer transactions",
                        "type": "string",
                        "format": "max char: 50",
                        "example": ""
                    },
                    "paymentterms": {
                        "description": "Customer payment terms key. Must be present in account",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "21"
                    },
                    "deliveryterms": {
                        "description": "Customer delivery terms key. Must be present in account",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "DDU"
                    },
                    "deliverymethod": {
                        "description": "Customer delivery method key. Must be present in account",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "p"
                    },
                    "pricelist": {
                        "description": "Setting for default item pricelist has to be set in the account if this value is left empty.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A"
                    },
                    "salesaccount": {
                        "description": "Default sales account. If an account has not been registered on the item, the account will be fetched from the Sales account registered on the selected customer. If nothing has been registered here, the account will be retrieved from: Registry - Chart of Accounts - Default Accounts",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "3000"
                    },
                    "claimacct": {
                        "description": "Customer predefined receivable account",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "12345"
                    },
                    "customertype": {
                        "description": "Domestic VAT = 0, Domestic construction VAT = 1, EU reverse charge VAT = 2, EU VAT = 3, Export VAT = 4, Tax border(FINLAND ONLY)  = 5",
                        "type": "integer",
                        "example": "0"
                    },
                    "interestinvoicing": {
                        "description": "If interest invoicing should be activated on the customer, 0-1",
                        "type": "boolean",
                        "format": "max char: 1",
                        "example": "0"
                    },
                    "invoicetext": {
                        "description": "Text displayed on the customer invoices",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Thank you for choosing us!"
                    },
                    "invoicediscount": {
                        "description": "A percentage that will be applied to all of the customer’s invoices. Numeric value with two decimals",
                        "type": "number",
                        "format": "float",
                        "example": "10"
                    },
                    "invoicecharge": {
                        "description": "Invoice charge for specific customer. Empty value will mean that the default invoice charge will be used.",
                        "type": "number",
                        "format": "float",
                        "example": "7"
                    },
                    "shippingcharge": {
                        "description": "Shipping charge for specific customer. Empty value will mean that the default shipping charge will be used.",
                        "type": "string",
                        "example": "11122233311"
                    },
                    "invoicedocumentdeliverymethod": {
                        "description": "Type of invoice document delivery. Default: 00 (print). Valid values: 00 (print), 01 (printservice), 02 (E-Invoice), 03 (email). 01-02 functionality needs to be activated in the account.",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "quotedocumentdeliverymethod": {
                        "description": "Type of quote document delivery. Default: 00 (print). Valid values: 00 (print), 03 (email)",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "reminderdocumentdeliverymethod": {
                        "description": "Type of reminder document delivery. Default: 00 (print). Valid values: 00 (print), 01 (printservice), 03 (email)",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "orderdocumentdeliverymethod": {
                        "description": "Type of order document delivery. Default: 00 (print). Valid values: 00 (print), 03 (email)",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "bank": {
                        "description": "Name of customers bank",
                        "type": "string",
                        "example": "Swedbank"
                    },
                    "iban": {
                        "description": "Customers IBAN",
                        "type": "string",
                        "format": "max char: 34",
                        "example": "LV08HABA0123456789123"
                    },
                    "bic": {
                        "description": "Customers BIC",
                        "type": "string",
                        "format": "max char: 11",
                        "example": "HABALV22"
                    },
                    "ossvat": {
                        "description": "Customer use One stop shop vat",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "0"
                    },
                    "property_designation": {
                        "description": "Household services, Fastighetsbeteckning Sweden only",
                        "type": "string",
                        "example": "Ort Hus 1:1"
                    },
                    "housing_org_no": {
                        "description": "Household services, BRF org. nr Sweden only",
                        "type": "string",
                        "example": "123456-7890"
                    },
                    "housing_apartment_number": {
                        "description": "Household services, BRF lgh. nr Sweden only",
                        "type": "string",
                        "example": "123"
                    },
                    "einvoice_preference": {
                        "description": "Customer einvoice receiving preference with Crediflow. Possible values: allowed|requires_request|not_allowed|pending|non_existent|unknown",
                        "format": "max char: 50",
                        "example": "allowed"
                    },
                    "address": {
                        "description": "Customer invoice or delivery address. See Address model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Address"
                        },
                        "example": [
                            {
                                "type": "invoice",
                                "addressline1": "Albertinkatu 36 B",
                                "addressline2": "Albertinkatu 36 B",
                                "visitaddress": "Albertinkatu 36 B",
                                "zip": "00180",
                                "city": "Helsinki",
                                "country": "Finland",
                                "countrycode": "FI"
                            },
                            {
                                "type": "delivery",
                                "addressline1": "Albertinkatu 36 B",
                                "addressline2": "Albertinkatu 36 B",
                                "visitaddress": "Albertinkatu 36 B",
                                "zip": "00180",
                                "city": "Helsinki",
                                "country": "Finland",
                                "countrycode": "FI"
                            }
                        ]
                    },
                    "edocument": {
                        "description": "Allows multiple Edocument objects for each type of Edocument model. See Edocument model.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Edocument"
                        }
                    },
                    "sni_codes": {
                        "description": "The Swedish Standard Industrial Classification codes",
                        "type": "array",
                        "items": {
                            "properties": {
                                "sni_codes": {
                                    "type": "integer",
                                    "format": "integer",
                                    "example": "[10511, 10310]"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "customer"
                }
            },
            "CustomerInvoice": {
                "required": [
                    "customerid",
                    "id"
                ],
                "properties": {
                    "attachment_link": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=dashboardreport&archive_id=b8f3c414-4c89-4996-8fd7-2bbfd1fa1a1a&fid=c3db8f0a515744899860ba3a4fdded31"
                    },
                    "saldo": {
                        "description": "Customer invoice saldo",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "150.00"
                    },
                    "total": {
                        "description": "The total sum of the customer invoice",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "221.32"
                    },
                    "total_excl_vat": {
                        "description": "The total sum of the customer invoice excluding VAT",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "168.20"
                    },
                    "ocr": {
                        "description": "Reference number on the customer invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "12342345445"
                    },
                    "currency": {
                        "description": "Customer default currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    },
                    "currate": {
                        "description": "Currency rate of invoice",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "11.1819"
                    },
                    "curunit": {
                        "description": "Currency unit of invoice",
                        "type": "integer",
                        "format": "max char: 10",
                        "example": "1"
                    },
                    "customerid": {
                        "description": "Customer ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "customer_name": {
                        "description": "Customer name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "invoicedate": {
                        "description": "When invoice has been created",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "invoicedate_extra": {
                        "description": "Particular date for invoice",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "paymentdate": {
                        "description": "When invoice is to be paid",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "duedate": {
                        "description": "When invoice is to be paid, Same as paymentdate",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "deliverydate": {
                        "description": "When ordered items or services are to be delivered",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "admfee": {
                        "description": "Administrative fee, default to zero if nothing is to be added here",
                        "type": "number",
                        "format": "float",
                        "example": "2234"
                    },
                    "shipping": {
                        "description": "Shipping charge, default to zero if nothing is to be added here",
                        "type": "number",
                        "format": "float",
                        "example": "2234"
                    },
                    "orderno": {
                        "description": "Refer to a order by adding order id here",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "1"
                    },
                    "refo": {
                        "description": "Connect invoice to order by adding order id here",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "1"
                    },
                    "credit_note_reference": {
                        "description": "If the invoice is a credit note, this is the reference to its original invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "1"
                    },
                    "document_type": {
                        "description": "Readonly. Type of invoice transaction, whether it is an invoice (F) or a credit note (C)",
                        "type": "string",
                        "format": "max char: 1",
                        "example": "F"
                    },
                    "invoicetype": {
                        "description": "Invoice type. 0 for regular, 3 for cash invoice",
                        "type": "integer",
                        "format": "max char: 2",
                        "example": "1"
                    },
                    "language": {
                        "description": "Invoice language",
                        "type": "string",
                        "example": "en_GB"
                    },
                    "paymentterm": {
                        "description": "Payment term id. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "PF"
                    },
                    "shippingmethod": {
                        "description": "Delivery method id. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "N"
                    },
                    "shippingcondition": {
                        "description": "Terms of delivery id. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CIP"
                    },
                    "yourreference": {
                        "description": "Name of reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "ourreference": {
                        "description": "Name of reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CC"
                    },
                    "project": {
                        "description": "Project key. Must be present in database",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "1"
                    },
                    "invoicetext": {
                        "description": "Text displayed on the customer invoices",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A special customer invoice description"
                    },
                    "post": {
                        "description": "The field defines if the invoice is to be posted when saved or updated. When retrieving invoices indicates if the invoice has been posted",
                        "type": "boolean",
                        "format": "max char: 5, true or false",
                        "example": "true"
                    },
                    "reminder_fee": {
                        "description": "Shows the total reminder fee on the invoice. This value is beyond the invoice total. Does not apply when saving or updating an invoice.",
                        "type": "number",
                        "format": "$numeric. max: char 1024",
                        "example": "10.00"
                    },
                    "reminder_last_date": {
                        "description": "Shows the date when the last reminder was sent to customer. Does not apply when saving or updating an invoice.",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "reminder_count": {
                        "description": "Number of reminders sent to customer. Does not apply when saving or updating an invoice.",
                        "type": "integer",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "debtcollection_status": {
                        "description": "Status of debt collection. Should only be updated by debt collection agency. 1 = Ready for debt collection, 2 = Received by debt collection service.",
                        "type": "integer",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "interest_rate": {
                        "description": "Shows the interest rate in percentage.",
                        "type": "number",
                        "format": "$numeric. max: char 1024",
                        "example": "11.50"
                    },
                    "bank": {
                        "description": "Name of customers bank",
                        "type": "integer",
                        "example": "Swedbank"
                    },
                    "iban": {
                        "description": "Customers IBAN",
                        "type": "integer",
                        "format": "max char: 34",
                        "example": "LV08HABA0123456789123"
                    },
                    "custom_number_series_id": {
                        "description": "Custom number series id",
                        "type": "integer",
                        "format": "integer",
                        "example": ""
                    },
                    "bic": {
                        "description": "Customers BIC",
                        "type": "integer",
                        "format": "max char: 11",
                        "example": "HABALV22"
                    },
                    "ossvat": {
                        "description": "Invoice use One stop shop vat",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "0"
                    },
                    "file_links": {
                        "description": "Attachment list.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/InvoiceAttachment"
                        }
                    },
                    "ecsaleslist": {
                        "description": "Invoice use EC Sales List",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "0"
                    },
                    "show_rows_incl_vat": {
                        "description": "Row totals are including VAT",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "0"
                    },
                    "full_paid": {
                        "description": "Indicates whether an invoice is fully paid or not",
                        "type": "boolean",
                        "format": "max char: 5, true or false",
                        "example": "true"
                    },
                    "notes": {
                        "description": "Text displayed on the customer invoices",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A internal note"
                    },
                    "customer_address": {
                        "description": "Customer invoice or delivery address. See Address model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Address"
                        },
                        "example": [
                            {
                                "type": "invoice",
                                "addressline1": "Albertinkatu 36 B",
                                "addressline2": "Albertinkatu 36 B",
                                "zip": "00180",
                                "city": "Helsinki",
                                "country": "Finland",
                                "countrycode": "FI",
                                "phone1": "0113456789",
                                "phone2": "0223456789"
                            },
                            {
                                "type": "delivery",
                                "name": "Albert",
                                "addressline1": "Albertinkatu 36 B",
                                "addressline2": "Albertinkatu 36 B",
                                "zip": "00180",
                                "city": "Helsinki",
                                "country": "Finland",
                                "countrycode": "FI"
                            }
                        ]
                    },
                    "invoice_rows": {
                        "description": "Invoice row list. See InvoiceRow model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/InvoiceRow"
                        }
                    },
                    "history_events": {
                        "description": "List of historical events.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/InvoiceHistoryEvent"
                        }
                    },
                    "household_saldo": {
                        "description": "Readonly. Customer invoice household saldo (total - household_person_total_deduction)",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "63"
                    },
                    "household_max_total_deduction": {
                        "description": "Readonly. Customer invoice max total deduction",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "62"
                    },
                    "household_person_total_deduction": {
                        "description": "Readonly. Customer invoice combined person applied deduction (cannot be more than max total deduction)",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "62"
                    },
                    "household_total_deduction_basis": {
                        "description": "Readonly. Customer invoice total deduction basis (the total of the deductable rows)",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "125.00"
                    },
                    "household_service_type": {
                        "description": "Household service type, '', rot', 'rut' or 'green'",
                        "type": "string",
                        "format": "string",
                        "example": "rot"
                    },
                    "property_designation": {
                        "description": "Fastighetsbeteckning / Property designation, needed for ROT",
                        "type": "string",
                        "format": "string",
                        "example": "Abc 123"
                    },
                    "housing_org_no": {
                        "description": "BRF org. nr / Housing assoc. no",
                        "type": "string",
                        "format": "string",
                        "example": "112233-1122"
                    },
                    "housing_apartment_number": {
                        "description": "BRF lgh. nr / Housing apartment. no",
                        "type": "string",
                        "format": "string",
                        "example": "12"
                    },
                    "household_service_persons": {
                        "description": "List of persons applying for tax decuction.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/InvoiceHouseholdServicePerson"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "customerinvoice"
                }
            },
            "CustomerInvoiceDebtCollection": {
                "required": [
                    "invoiceid",
                    "id"
                ],
                "properties": {
                    "debtcollection_status": {
                        "description": "Debt collection status",
                        "type": "integer",
                        "format": "max char: 10",
                        "enum": [
                            0,
                            1,
                            2
                        ],
                        "example": "2"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "customerinvoicedebtcollection"
                }
            },
            "CustomerInvoiceDebtCollectionResponse": {
                "required": [
                    "id"
                ],
                "type": "object",
                "allOf": [
                    {
                        "properties": {
                            "id": {
                                "description": "Customer invoice number",
                                "type": "string",
                                "format": "max char: 1024",
                                "example": "10"
                            }
                        },
                        "type": "object"
                    },
                    {
                        "$ref": "#/components/schemas/CustomerInvoiceDebtCollection"
                    }
                ]
            },
            "CustomerInvoiceDeliveryEinvoice": {
                "properties": {
                    "include_attachment": {
                        "description": "True if attachment to the invoice also should be sent",
                        "type": "boolean",
                        "format": "boolean",
                        "example": true
                    },
                    "delivery_method": {
                        "description": "E-invoice delivery method, e.g. '01' for print service & '02' for e-invoice. Default is\n\t\t *     '02'",
                        "type": "string",
                        "example": "02"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "CustomerInvoiceDeliveryEinvoice"
                }
            },
            "CustomerInvoiceDeliveryEmail": {
                "required": [
                    "to",
                    "reply_to",
                    "subject",
                    "message"
                ],
                "properties": {
                    "to": {
                        "description": "Recipient e-mail address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "john.smith@gmail.com"
                    },
                    "cc": {
                        "description": "Carbon copy e-mail address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "jane.johnsson@gmail.com"
                    },
                    "bcc": {
                        "description": "Blind carbon copy e-mail address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "james.lewis@gmail.com"
                    },
                    "reply_to": {
                        "description": "E-mail address used for responding",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "info@mycompany.com"
                    },
                    "from_name": {
                        "description": "Name of the sender",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "My Company Oy"
                    },
                    "subject": {
                        "description": "E-mail subject",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Invoice from MyCompany"
                    },
                    "message": {
                        "description": "E-mail message",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Here is your invoice"
                    },
                    "include_attachment": {
                        "description": "True if attachment to the invoice also should be sent",
                        "type": "boolean",
                        "format": "boolean",
                        "example": true
                    }
                },
                "type": "object",
                "xml": {
                    "name": "CustomerInvoiceDeliveryEmail"
                }
            },
            "CustomerInvoiceDeliveryKivra": {
                "required": [
                    "include_attachment"
                ],
                "properties": {
                    "include_attachments": {
                        "description": "True if attachment to the invoice also should be sent",
                        "type": "boolean",
                        "format": "boolean",
                        "example": true
                    }
                },
                "type": "object",
                "xml": {
                    "name": "CustomerInvoiceDeliveryKivra"
                }
            },
            "CustomerInvoiceDeliveryKivraSent": {
                "required": [
                    "include_attachment"
                ],
                "properties": {
                    "is_sent": {
                        "description": "True if the invoice was sent",
                        "type": "boolean",
                        "format": "boolean",
                        "example": true
                    }
                },
                "type": "object",
                "xml": {
                    "name": "CustomerInvoiceDeliveryKivraSent"
                }
            },
            "CustomerInvoiceDueDate": {
                "required": [
                    "invoiceid",
                    "id"
                ],
                "properties": {
                    "duedate": {
                        "description": "Due date on a posted invoice",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "2020-01-01"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "customerinvoiceduedate"
                }
            },
            "CustomerInvoiceDueDateResponse": {
                "required": [
                    "id"
                ],
                "type": "object",
                "allOf": [
                    {
                        "properties": {
                            "id": {
                                "description": "Customer invoice number",
                                "type": "string",
                                "format": "max char: 1024",
                                "example": "10"
                            }
                        },
                        "type": "object"
                    },
                    {
                        "$ref": "#/components/schemas/CustomerInvoiceDueDate"
                    }
                ]
            },
            "CustomerInvoiceFactoring": {
                "required": [
                    "invoice_id",
                    "id"
                ],
                "properties": {
                    "product": {
                        "description": "Factoring product",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "name_of_factoring_product"
                    },
                    "status": {
                        "description": "Factoring status of the invoice",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "available/pending/factored/not_factored/reminded/collection/reverted"
                    },
                    "last_modified": {
                        "description": "Date and time for last modification of factoring status",
                        "type": "string",
                        "format": "max char: 19",
                        "example": "2022-09-01T12:34:00"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "customerinvoicefactoring"
                }
            },
            "CustomerInvoiceFactoringResponse": {
                "required": [
                    "invoice_id"
                ],
                "type": "object",
                "allOf": [
                    {
                        "properties": {
                            "invoice_id": {
                                "description": "Customer invoice number",
                                "type": "string",
                                "format": "max char: 1024",
                                "example": "10"
                            }
                        },
                        "type": "object"
                    },
                    {
                        "$ref": "#/components/schemas/CustomerInvoiceFactoring"
                    }
                ]
            },
            "CustomerInvoiceFactoringUpdate": {
                "required": [
                    "status"
                ],
                "type": "object",
                "allOf": [
                    {
                        "properties": {
                            "status": {
                                "description": "Customer invoice factoring status",
                                "type": "string",
                                "format": "max char: 1024",
                                "example": "factoring_status"
                            }
                        },
                        "type": "object"
                    },
                    {
                        "$ref": "#/components/schemas/CustomerInvoiceFactoringUpdate"
                    }
                ]
            },
            "CustomerInvoiceFilter": {
                "required": [
                    "false"
                ],
                "type": "string",
                "allOf": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "enum": [
                                "all",
                                "unposted",
                                "notcancelled",
                                "unsettled",
                                "overdue",
                                "notpayedoverdue",
                                "finalpayed",
                                "cancel",
                                "paypend",
                                "notpaypend",
                                "paypendoverdue",
                                "debtcollection"
                            ]
                        },
                        "default": "all"
                    }
                ]
            },
            "CustomerInvoiceResponse": {
                "required": [
                    "id"
                ],
                "type": "object",
                "allOf": [
                    {
                        "properties": {
                            "id": {
                                "description": "Customer invoice number",
                                "type": "string",
                                "format": "max char: 1024",
                                "example": "10"
                            }
                        },
                        "type": "object"
                    },
                    {
                        "$ref": "#/components/schemas/CustomerInvoice"
                    }
                ]
            },
            "CustomerInvoiceType": {
                "required": [
                    "false"
                ],
                "type": "string",
                "allOf": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "enum": [
                                "invoice",
                                "cashinvoice"
                            ]
                        },
                        "default": "invoice"
                    }
                ]
            },
            "CustomerList": {
                "required": [
                    "name",
                    "custno"
                ],
                "properties": {
                    "name": {
                        "description": "Customer name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Steven Work"
                    },
                    "custno": {
                        "description": "Customer number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1023"
                    },
                    "active": {
                        "description": "Customer active or not",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "1"
                    },
                    "customerbusinesstype": {
                        "description": "Customer a company or private",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "1"
                    },
                    "address": {
                        "description": "Customer address 1",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "zip": {
                        "description": "Customer zip",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "00180"
                    },
                    "city": {
                        "description": "Customer city",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Helsinki"
                    },
                    "country": {
                        "description": "Customer country",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Finland"
                    },
                    "countrycode": {
                        "description": "Customer country code",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "FI"
                    },
                    "companynumber": {
                        "description": "Customer company number",
                        "type": "string",
                        "format": "max char: 9",
                        "example": "2389132-8"
                    },
                    "phone": {
                        "description": "Customer phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "email": {
                        "description": "Customer email address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "yourref": {
                        "description": "Name of reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "ourref": {
                        "description": "Name of reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "description": {
                        "description": "A short free text description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Wants their invoice sent to them by mail."
                    },
                    "visitaddress": {
                        "description": "Customer visit address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "deladdress": {
                        "description": "Customer delivery address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "delvisitaddress": {
                        "description": "Customer delivery visit address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "delzip": {
                        "description": "Customer delivery zip",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "00180"
                    },
                    "delcity": {
                        "description": "Customer delivery city",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Helsinki"
                    },
                    "delcountry": {
                        "description": "Customer delivery city",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Finland"
                    },
                    "delphone": {
                        "description": "Customer delivery phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "invoicedocumentdeliverymethod": {
                        "description": "Type of invoice document delivery. Default: 00 (print). Valid values: 00 (print), 01 (printservice), 02 (E-Invoice), 03 (email). 01-02 functionality needs to be activated in the account.",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "quotedocumentdeliverymethod": {
                        "description": "Type of quote document delivery. Default: 00 (print). Valid values: 00 (print), 03 (email)",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "reminderdocumentdeliverymethod": {
                        "description": "Type of reminder document delivery. Default: 00 (print). Valid values: 00 (print), 01 (printservice), 03 (email)",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "orderdocumentdeliverymethod": {
                        "description": "Type of order document delivery. Default: 00 (print). Valid values: 00 (print), 03 (email)",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "00"
                    },
                    "cc": {
                        "description": "Customer email address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "ccname": {
                        "description": "Customer email name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Steven Work"
                    },
                    "projectfollowupid": {
                        "description": "Customer project follow up ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1213232424"
                    },
                    "project_name": {
                        "description": "Customer project name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Somename"
                    },
                    "currency": {
                        "description": "Customer default currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    },
                    "pricelist": {
                        "description": "Customer price list. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A"
                    },
                    "invoice_invdisc": {
                        "description": "Customer invoice",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "null"
                    },
                    "paymentterms": {
                        "description": "Customer payment terms key. Must be present in account",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "21"
                    },
                    "vatnumber": {
                        "description": "Customer VAT number. Starts with 2 letter country code.",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "FI12345678"
                    },
                    "customertype": {
                        "description": "Domestic VAT = 0, Domestic construction VAT = 1, EU reverse charge VAT = 2, EU VAT = 3, Export VAT = 4, Tax border(FINLAND ONLY)  = 5",
                        "type": "integer",
                        "example": "0"
                    },
                    "includevat": {
                        "description": "If true the item rows on all the customer’s invoices are displayed including VAT, 0-1",
                        "type": "boolean",
                        "format": "max char: 1",
                        "example": "0"
                    },
                    "einvoice_preference": {
                        "description": "Customer einvoice receiving preference with Crediflow. Possible values: allowed|requires_request|not_allowed|pending|non_existent|'' ",
                        "format": "max char: 50",
                        "example": "allowed"
                    },
                    "property_designation": {
                        "description": "Household services, Fastighetsbeteckning Sweden only",
                        "type": "string",
                        "example": "Ort Hus 1:1"
                    },
                    "housing_org_no": {
                        "description": "Household services, BRF org. nr Sweden only",
                        "type": "string",
                        "example": "123456-7890"
                    },
                    "housing_apartment_number": {
                        "description": "Household services, BRF lgh. nr Sweden only",
                        "type": "string",
                        "example": "123"
                    },
                    "edocument": {
                        "description": "Allows multiple Edocument objects for each type of Edocument model. See Edocument model.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Edocument"
                        }
                    },
                    "sni_codes": {
                        "description": "The Swedish Standard Industrial Classification codes",
                        "type": "array",
                        "items": {
                            "properties": {
                                "sni_codes": {
                                    "type": "integer",
                                    "format": "integer",
                                    "example": "[10511, 10310]"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "customerlist"
                }
            },
            "DashboardReport": {
                "required": [
                    "id"
                ],
                "properties": {
                    "file_id": {
                        "description": "File ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "199dee26-362a-4617-8782-097c29529b37"
                    },
                    "file_name": {
                        "description": "File name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "pexels-photo-364109.jpeg"
                    },
                    "created_date": {
                        "description": "File edit date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-04-30"
                    },
                    "state": {
                        "description": "The state of the report or, in other words, consultant's reaction to it",
                        "type": "string",
                        "example": "good|stable|down|alarm|none"
                    },
                    "subject": {
                        "description": "The subject of the report provided by the consultant when report is published",
                        "type": "string",
                        "example": "Result report May"
                    },
                    "comment": {
                        "description": "Comment or a message supplied by the consultant when publishing the report",
                        "type": "string",
                        "example": "Congratulations! This month's report looks impressive ..."
                    },
                    "created_by": {
                        "description": "The name of the consultant who published the report",
                        "type": "string",
                        "example": "John Consultant"
                    },
                    "due_date": {
                        "description": "Report published until date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-04-30"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "dashboardreport"
                }
            },
            "DefaultAccount": {
                "properties": {
                    "id": {
                        "description": "Briox default account code",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CUSTCLAIM"
                    },
                    "account_number": {
                        "description": "Myyntisaamiset 1",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1701"
                    },
                    "description": {
                        "description": "Default account description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Accounts receivable"
                    },
                    "translations": {
                        "description": "Default account description translations",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "properties": {
                                "en_GB": {
                                    "type": "string",
                                    "example": "Accounts receivable"
                                },
                                "sv_SE": {
                                    "type": "string",
                                    "example": "Kundfordringar"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "defaultaccount"
                }
            },
            "Difference": {
                "required": [
                    "account",
                    "amount"
                ],
                "properties": {
                    "account": {
                        "description": "Account number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1120"
                    },
                    "project": {
                        "type": "string",
                        "example": "2"
                    },
                    "costcenter": {
                        "type": "string",
                        "example": "CC2"
                    },
                    "transactioninfo": {
                        "type": "string",
                        "example": "A new stapler"
                    },
                    "amount": {
                        "type": "string",
                        "example": "1234.56"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "difference"
                }
            },
            "Document": {
                "required": [
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "File ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "199dee26-362a-4617-8782-097c29529b37"
                    },
                    "name": {
                        "description": "File name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "pexels-photo-364109.jpeg"
                    },
                    "size": {
                        "description": "File size",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "52.1 kb"
                    },
                    "edit_date": {
                        "description": "File edit date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-03-09 10:37"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "document"
                }
            },
            "DocumentCategory": {
                "required": [
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Document type ID",
                        "type": "integer",
                        "format": "number",
                        "example": "1"
                    },
                    "description": {
                        "description": "Document category description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Travel expence"
                    },
                    "comment_prompt": {
                        "description": "Category comment prompt",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "State why and who was there"
                    },
                    "comment_is_mandatory": {
                        "description": "Specify if the comment on a document with this category is mandatory",
                        "type": "boolean",
                        "example": "true"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "documentcategory"
                }
            },
            "DocumentType": {
                "required": [
                    "key"
                ],
                "properties": {
                    "id": {
                        "description": "Document type ID",
                        "type": "integer",
                        "format": "number",
                        "example": "1"
                    },
                    "description": {
                        "description": "Document type description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Receipt"
                    },
                    "key": {
                        "description": "Document type key",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "receipt"
                    },
                    "is_default": {
                        "description": "Specify if the document type is default type used by the user",
                        "type": "boolean",
                        "example": "true"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "documenttype"
                }
            },
            "Edocument": {
                "description": "An object containing addresses for specific document types.",
                "properties": {
                    "type": {
                        "description": "Valid types are: invoice, order, quote, reminder",
                        "type": "string",
                        "example": "invoice"
                    },
                    "email": {
                        "type": "string",
                        "example": "customer@briox.fi"
                    },
                    "cc": {
                        "type": "string",
                        "example": "cc@briox.fi"
                    },
                    "bcc": {
                        "type": "string",
                        "example": "history@briox.fi"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "Edocument"
                }
            },
            "EducationOrder": {
                "properties": {
                    "contact_name": {
                        "type": "string",
                        "example": "Company Contact"
                    },
                    "contact_phone": {
                        "type": "string",
                        "example": "35649125"
                    },
                    "person_firstname": {
                        "type": "string",
                        "example": "John"
                    },
                    "person_lastname": {
                        "type": "string",
                        "example": "Doe"
                    },
                    "person_email": {
                        "type": "string",
                        "example": "john.doe@briox.fi"
                    },
                    "educator_id": {
                        "description": "Use an ID that has been confirmed",
                        "type": "string",
                        "example": "p63p54p87"
                    },
                    "language": {
                        "type": "string",
                        "example": "en_GB"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "EducationOrder"
                }
            },
            "FeatureStatus": {
                "description": "An object containing status of features",
                "properties": {
                    "electronic_invoice_enabled": {
                        "description": "Shows if electronic invoice is enabled or not",
                        "type": "boolean",
                        "example": "true"
                    },
                    "kivra_onboarding_enabled": {
                        "description": "Shows if kivra onboarding is enabled or not",
                        "type": "boolean",
                        "example": "true"
                    },
                    "kivra_enabled": {
                        "description": "Shows if kivra is enabled or not",
                        "type": "boolean",
                        "example": "true"
                    },
                    "kivra_supplier_invoice_recieving_enabled": {
                        "description": "Shows if kivra supplier invoice recieving is enabled or not",
                        "type": "boolean",
                        "example": "true"
                    },
                    "household_services_enabled": {
                        "description": "Shows if household services are enabled or not",
                        "type": "boolean",
                        "example": "true"
                    },
                    "interpretation_enabled": {
                        "description": "Shows if interpretation is enabled or not",
                        "type": "boolean",
                        "example": "true"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "FeatureStatus"
                }
            },
            "FileLink": {
                "required": [
                    "id",
                    "name",
                    "type"
                ],
                "properties": {
                    "id": {
                        "description": "File ID",
                        "type": "string",
                        "format": "string",
                        "example": "729bdadb-e1b1-459a-a64f-4b321d5b9edd"
                    },
                    "name": {
                        "description": "File name",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "MyFile.pdf"
                    },
                    "type": {
                        "description": "type of file",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "DashboardReport"
                    },
                    "file_type": {
                        "description": "type of file, pdf, png...",
                        "type": "string",
                        "format": "CharacterVarying(10)",
                        "example": "pdf"
                    },
                    "link": {
                        "description": "link to file",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=dashboardreport&archive_id=b8f3c414-4c89-4996-8fd7-2bbfd1fa1a1a&fid=c3db8f0a515744899860ba3a4fdded31"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "filelink"
                }
            },
            "FinancialYear": {
                "required": [
                    "name",
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Financial year number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "fromdate": {
                        "description": "Financial year from date",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2009-10-01"
                    },
                    "todate": {
                        "description": "Financial year to date",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2009-10-01"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "financialyear"
                }
            },
            "GraphObject": {
                "description": "An object containing graph data",
                "type": "array",
                "items": {
                    "properties": {
                        "label": {
                            "description": "Graph data label",
                            "type": "string",
                            "example": "Oct 2021"
                        },
                        "name": {
                            "description": "Graph data name",
                            "type": "string",
                            "example": "Oct 2021"
                        },
                        "value": {
                            "description": "Graph data value",
                            "type": "string",
                            "example": "2500.00"
                        }
                    },
                    "type": "object"
                },
                "xml": {
                    "name": "GraphObject"
                }
            },
            "HouseholdServices": {
                "properties": {
                    "type": {
                        "description": "Household service type",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "rot"
                    },
                    "max_deduction_per_year": {
                        "description": "Max deduction per person and year",
                        "type": "float",
                        "format": "float",
                        "example": 50000
                    },
                    "description": {
                        "description": "Description of household service",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "ROT"
                    },
                    "household_services_categories": {
                        "description": "Household service category row list. See HouseholdServicesCatagory model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/HouseholdServicesCatagory"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "householdServices"
                }
            },
            "HouseholdServicesCatagory": {
                "description": "An object containing information for each household service category.",
                "properties": {
                    "type": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "contruction"
                    },
                    "description": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Bygg"
                    },
                    "deduction_percentage": {
                        "description": "Deduction percentage",
                        "type": "int",
                        "format": "int",
                        "example": 50
                    }
                },
                "type": "object",
                "xml": {
                    "name": "HouseholdServicesCatagory"
                }
            },
            "IncomingDocument": {
                "required": [
                    "id"
                ],
                "properties": {
                    "type": {
                        "description": "type of document",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier_invoice"
                    },
                    "file_id": {
                        "description": "File ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "199dee26-362a-4617-8782-097c29529b37"
                    },
                    "file_name": {
                        "description": "File name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "pexels-photo-364109.jpeg"
                    },
                    "file_comment": {
                        "description": "File comment",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "file_inbox": {
                        "description": "Inbox name for file",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "inbox_s"
                    },
                    "supplier_name": {
                        "description": "name of supplier",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Supplier one"
                    },
                    "iban": {
                        "description": "iban",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "FI12345678910"
                    },
                    "bic": {
                        "description": "bic",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "DABAFIHH"
                    },
                    "supplier_no": {
                        "description": "supplier number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "reference_number": {
                        "description": "reference number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "123545656"
                    },
                    "invoice_number": {
                        "description": "invoice number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "invoice_date": {
                        "description": "invoice date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-08-25"
                    },
                    "due_date": {
                        "description": "invoice due date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-09-25"
                    },
                    "receipt_date": {
                        "description": "receipt date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-08-25"
                    },
                    "journal_series": {
                        "description": "journal series",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A"
                    },
                    "total": {
                        "description": "total amount",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "100"
                    },
                    "vat": {
                        "description": "vat amount",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "20"
                    },
                    "status": {
                        "description": "match status",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "FULL_MATCH"
                    },
                    "accounts": {
                        "description": "accounts",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "20"
                    },
                    "description": {
                        "description": "match description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "20"
                    },
                    "einvoice_id": {
                        "description": "einvoice id",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "3"
                    },
                    "esupplier_vat_ratepercent": {
                        "description": "esupplier vat rate percent",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "20"
                    },
                    "created_date": {
                        "description": "created date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2022-08-17"
                    },
                    "document_category": {
                        "description": "document_category",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Parking"
                    },
                    "document_type": {
                        "description": "document_type",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Receipt"
                    },
                    "processed": {
                        "description": "processed",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "true"
                    },
                    "comment_mandatory": {
                        "description": "Comment is mandatory or not",
                        "type": "boolean",
                        "format": "max char: 1024",
                        "example": true
                    }
                },
                "type": "object",
                "xml": {
                    "name": "incomingdocument"
                }
            },
            "IncomingDocumentExpense": {
                "description": "A incoming document expense that is going to be updated",
                "properties": {
                    "linkeddocumenttypeid": {
                        "type": "string",
                        "example": "1"
                    },
                    "comment": {
                        "type": "string",
                        "example": "Test"
                    },
                    "linkeddocumentcategoryid": {
                        "type": "string",
                        "example": "1"
                    },
                    "filename": {
                        "type": "string",
                        "example": "ReceiptFromMay"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "IncomingDocumentExpense"
                }
            },
            "IncomingDocumentExpenseResponse": {
                "description": "Http response on 200 OK",
                "properties": {
                    "data": {
                        "type": "string",
                        "example": "The incoming document was updated"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "IncomingDocumentExpenseResponse"
                }
            },
            "InvoiceAttachment": {
                "description": "An object containing links to the attachments",
                "properties": {
                    "attachment_link": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=dashboardreport&archive_id=b8f3c414-4c89-4996-8fd7-2bbfd1fa1a1a&fid=c3db8f0a515744899860ba3a4fdded31"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "InvoiceAttachment"
                }
            },
            "InvoiceHistoryEvent": {
                "description": "An object containing a history event",
                "properties": {
                    "date": {
                        "description": "Date and time of the event",
                        "type": "string",
                        "format": "YYYY-MM-DD HH:MM:SS",
                        "example": "2024-04-02 15:23:55"
                    },
                    "event_type": {
                        "description": "Code for the event type",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "customer_invoice_sent_as_einvoice"
                    },
                    "description": {
                        "description": "Description of the event",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "The invoice was sent as an e-invoice"
                    },
                    "user": {
                        "description": "Name of the user that made the event",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Smith"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "InvoiceHistoryEvent"
                }
            },
            "InvoiceHouseholdServicePerson": {
                "description": "An object containing a person",
                "properties": {
                    "personal_id": {
                        "description": "Personal identification number of the person",
                        "type": "string",
                        "format": "max char: 11",
                        "example": "XXXXXX-XXXX"
                    },
                    "person_name": {
                        "description": "Full name of the person",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Smith"
                    },
                    "person_applied_deduction": {
                        "description": "Person applied deduction amount",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "62"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "InvoiceHouseholdServicePerson"
                }
            },
            "InvoicePayment": {
                "required": [
                    "invoiceid",
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Identifier of payment",
                        "type": "integer",
                        "example": "12"
                    },
                    "paymentdate": {
                        "description": "When payment has been made",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2022-10-19"
                    },
                    "paymentmethod": {
                        "description": "What method of payment was used",
                        "type": "integer",
                        "example": "32"
                    },
                    "amount": {
                        "description": "The sum of payment",
                        "type": "string",
                        "example": "32.00"
                    },
                    "set_differences_as_currency_diff": {
                        "description": "Only applicable to currency invoices. If true a currency invoice will be final paid and all difference will be set as a currency difference.\n\t\t \tNOTE: If true the differences array will be disregarded.",
                        "type": "boolean",
                        "format": "boolean",
                        "example": false
                    },
                    "differences": {
                        "description": "Allows multiple Difference objects. See Difference model.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Difference"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "invoicepayment"
                }
            },
            "InvoicePaymentResponse": {
                "required": [
                    "id"
                ],
                "type": "object",
                "allOf": [
                    {
                        "properties": {
                            "id": {
                                "description": "Customer invoice number",
                                "type": "string",
                                "format": "max char: 1024",
                                "example": "10"
                            }
                        },
                        "type": "object"
                    },
                    {
                        "$ref": "#/components/schemas/InvoicePayment"
                    }
                ]
            },
            "InvoiceRow": {
                "description": "An object containing information for each invoice row.",
                "properties": {
                    "itemno": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "30"
                    },
                    "description": {
                        "type": "string",
                        "format": "max char: 50",
                        "example": "Order description"
                    },
                    "unit": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "h"
                    },
                    "amount": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "1"
                    },
                    "price": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "100"
                    },
                    "discount": {
                        "description": "an array of discount and discount type",
                        "properties": {
                            "value": {
                                "type": "string",
                                "example": "0"
                            },
                            "type": {
                                "type": "string",
                                "example": "1"
                            }
                        },
                        "type": "object",
                        "format": "numeric. max char: 1024"
                    },
                    "account": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "3000"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "project": {
                        "description": "Project follow up ID",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "21"
                    },
                    "ossvatrate": {
                        "description": "OSS VAT rate of the invoice row. Only used for OSS invoices. Can be specified with a number or a string like 10%",
                        "type": "string",
                        "format": "numeric. max char: 3",
                        "example": ""
                    },
                    "vatrate": {
                        "description": "VAT rate of the invoice row. Read-only value.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "25"
                    },
                    "rowtotal": {
                        "description": "Total row amount including discounts but excl. VAT. Read-only value.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "100.00"
                    },
                    "household_service": {
                        "description": "Row is household service and deduction should be counted for it, if 0 and category set it will count as Materials",
                        "type": "boolen",
                        "format": "max char: 1, 1 or 0",
                        "example": "0"
                    },
                    "household_category_type": {
                        "description": "Household category id",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "construction"
                    },
                    "household_hours": {
                        "description": "Household hours",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "InvoiceRow"
                }
            },
            "Item": {
                "required": [
                    "itemid",
                    "description"
                ],
                "properties": {
                    "item_id": {
                        "description": "Item number. If missing when posting it will be set to next available by system.",
                        "type": "string",
                        "format": "max char: 50",
                        "example": "123456"
                    },
                    "description": {
                        "description": "Item description",
                        "type": "string",
                        "format": "max char: 50",
                        "example": "Example Item"
                    },
                    "unit": {
                        "description": "the unit of which the item is grouped.",
                        "type": "string",
                        "example": "each"
                    },
                    "ean": {
                        "description": "Item ean code",
                        "type": "string",
                        "format": "max char: 13",
                        "example": "7393032997503"
                    },
                    "type": {
                        "description": "Item type. Goods or Service",
                        "type": "string",
                        "example": "Goods"
                    },
                    "supplier_number": {
                        "description": "Supplier number. Must exist in the database.",
                        "type": "string",
                        "example": "1234"
                    },
                    "supplier": {
                        "description": "Supplier name. Ignored on save and update. Sent when fetching returning results.",
                        "type": "string",
                        "example": "Example supplier"
                    },
                    "supplier_item_number": {
                        "description": "Supplier item number.",
                        "type": "string",
                        "example": "6789-A"
                    },
                    "manufacturer": {
                        "description": "Manufacturer name.",
                        "type": "string",
                        "example": "Example manufacturer"
                    },
                    "manufacturer_item_number": {
                        "description": "Manufacturer item number.",
                        "type": "string",
                        "example": "12345-E"
                    },
                    "stock_item": {
                        "description": "Is item a stock item?",
                        "type": "boolean",
                        "example": true
                    },
                    "stock": {
                        "description": "Number of items in stock",
                        "type": "number",
                        "format": "float",
                        "example": 150
                    },
                    "purchase_price": {
                        "description": "Cost of purchase",
                        "type": "number",
                        "format": "float",
                        "example": 150.990000000000009094947017729282379150390625
                    },
                    "stock_value": {
                        "description": "Total value of the items in stock. Not used when saving or updating. (Will be calculated by system)",
                        "type": "number",
                        "format": "float",
                        "example": 22648.5
                    },
                    "reserved_units": {
                        "description": "Reserved units. Not used when saving or updating. (Will be calculated by system)",
                        "type": "number",
                        "format": "float",
                        "example": 30
                    },
                    "available_units": {
                        "description": "Available units. Not used when saving or updating. (Will be calculated by system)",
                        "type": "number",
                        "format": "float",
                        "example": 120
                    },
                    "stock_warning": {
                        "description": "Stock warning. At this level or below the system will warn that the stock is running out.",
                        "type": "number",
                        "format": "float",
                        "example": 10
                    },
                    "stock_location": {
                        "description": "Stock location.",
                        "type": "string",
                        "format": "max char: 100",
                        "example": "shelf 3b"
                    },
                    "active": {
                        "description": "Is item active",
                        "type": "boolean",
                        "example": true
                    },
                    "notes": {
                        "description": "Notes about the item",
                        "type": "string",
                        "example": "Item notes"
                    },
                    "long_description": {
                        "description": "Longer description of item",
                        "type": "string",
                        "example": "Item long description"
                    },
                    "sales_account": {
                        "description": "Account used when item is sold",
                        "type": "string",
                        "example": "3000"
                    },
                    "purchase_account": {
                        "description": "Account used when item is purchased",
                        "type": "string",
                        "example": "4000"
                    },
                    "prices": {
                        "description": "Array of prices. Key is Price list code, value is price",
                        "type": "array",
                        "format": "number",
                        "items": {
                            "properties": {
                                "price_list": {
                                    "type": "string",
                                    "example": "A"
                                },
                                "price": {
                                    "type": "string",
                                    "example": 18.550000000000000710542735760100185871124267578125
                                }
                            },
                            "type": "object"
                        }
                    },
                    "vat_rate": {
                        "description": "Vatrate of the item",
                        "type": "number",
                        "example": 24
                    },
                    "household_service": {
                        "description": "Item is household service (Sweden only)",
                        "type": "boolean",
                        "example": true
                    },
                    "household_category_type": {
                        "description": "Household category type (Sweden only)",
                        "type": "string",
                        "example": "construction"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "item"
                }
            },
            "Journal": {
                "required": [
                    "series",
                    "transactiondate",
                    "journalrows"
                ],
                "properties": {
                    "year": {
                        "description": "Financial year",
                        "type": "integer",
                        "format": "integer",
                        "example": "1"
                    },
                    "series": {
                        "description": "Journal series, type of journal",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "A"
                    },
                    "id": {
                        "description": "Journal id, id in the series. Ignored when POST is used. Series is enforced to be sequential.",
                        "type": "integer",
                        "format": "integer",
                        "example": "1"
                    },
                    "descr": {
                        "description": "Journal description of it's purpose",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "Receipt"
                    },
                    "transactiondate": {
                        "description": "Journal transaction date",
                        "type": "string",
                        "format": "YYYY-MM-DD(ISO_8601)",
                        "example": "2018-01-01"
                    },
                    "costcenter": {
                        "description": "Journal cost center key",
                        "type": "string",
                        "format": "CharacterVarying",
                        "example": "CC"
                    },
                    "project": {
                        "description": "Journal project",
                        "type": "integer",
                        "format": "integer",
                        "example": ""
                    },
                    "journalrows": {
                        "description": "Allows multiple JournalRow objects. See JournalRow model.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/JournalRow"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "journal"
                }
            },
            "JournalRow": {
                "description": "An object containing information for each journal row.",
                "properties": {
                    "account": {
                        "type": "string",
                        "format": "four digit",
                        "example": "3000"
                    },
                    "debit": {
                        "type": "string",
                        "example": "20.80"
                    },
                    "credit": {
                        "type": "string",
                        "example": "20.15"
                    },
                    "removed": {
                        "description": "Removed row (Modified journals can have removed rows)",
                        "type": "string",
                        "example": "1"
                    },
                    "description": {
                        "type": "string",
                        "example": "This description will be ignored"
                    },
                    "transactioninfo": {
                        "type": "string",
                        "example": "A new stapler"
                    },
                    "costcenter": {
                        "type": "string",
                        "example": "CC"
                    },
                    "project": {
                        "type": "string",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "JournalRow"
                }
            },
            "JournalSeries": {
                "properties": {
                    "id": {
                        "description": "Unique identifier for a journal series, used as series in journal",
                        "type": "string",
                        "format": "string",
                        "example": "A"
                    },
                    "journaltype": {
                        "description": "Unique identifier for a predefined journal type",
                        "type": "string",
                        "format": "string",
                        "example": "SAL"
                    },
                    "language": {
                        "description": "Series Description and translations",
                        "type": "array",
                        "items": {
                            "properties": {
                                "language": {
                                    "description": "with Key Value",
                                    "type": "string",
                                    "example": "en_GB"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "JournalSeries"
                }
            },
            "KivraActivate": {
                "required": [
                    "displayname",
                    "companyname",
                    "vatnumber"
                ],
                "properties": {
                    "display_name": {
                        "description": "Company display name for Kivra.",
                        "type": "string",
                        "format": "string",
                        "example": "Company Name"
                    },
                    "company_name": {
                        "description": "Company name for Kivra.",
                        "type": "string",
                        "format": "string",
                        "example": "Company Name AB"
                    },
                    "vat_number": {
                        "description": "Company VAT-number.",
                        "type": "string",
                        "format": "string",
                        "example": "SE123456789101"
                    },
                    "org_number": {
                        "description": "Company organisation number.",
                        "type": "string",
                        "format": "string",
                        "example": "123456-7891"
                    },
                    "has_accepted_kivra_terms": {
                        "description": "true/false if the Kivra terms are accepted.",
                        "type": "boolean",
                        "format": "boolean",
                        "example": "true"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "kivraactivate"
                }
            },
            "KivraUpdateActiveStatus": {
                "required": [
                    "is_kivra_active"
                ],
                "properties": {
                    "is_kivra_active": {
                        "description": "true/false if the Kivra integration is active.",
                        "type": "boolean",
                        "format": "boolean",
                        "example": "true"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "kivraupdateactivestatus"
                }
            },
            "LinkedCustomerInvoice": {
                "description": "A customer invoice that is linked to the document",
                "properties": {
                    "customerinvoiceid": {
                        "type": "string",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "LinkedCustomerInvoice"
                }
            },
            "LinkedDocumentToInvoiceResponse": {
                "description": "Http response on 200 OK",
                "properties": {
                    "data": {
                        "type": "string",
                        "example": "The file is now connected to the invoice"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "LinkedDocumentToInvoiceResponse"
                }
            },
            "LinkedDocumentToJournalResponse": {
                "description": "Http response on 200 OK",
                "properties": {
                    "data": {
                        "type": "string",
                        "example": "The file is now connected to the journal"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "LinkedDocumentToJournalResponse"
                }
            },
            "LinkedJournal": {
                "description": "A journal object that is linked to the document",
                "properties": {
                    "year": {
                        "type": "string",
                        "example": "1"
                    },
                    "series": {
                        "type": "string",
                        "example": "B"
                    },
                    "id": {
                        "type": "string",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "LinkedJournal"
                }
            },
            "LinkedSupplierInvoice": {
                "description": "A supplier invoice that is linked to the document",
                "properties": {
                    "supplierinvoiceid": {
                        "type": "string",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "LinkedSupplier"
                }
            },
            "Log": {
                "required": [
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Id for log entry",
                        "type": "string",
                        "format": "integer",
                        "example": "156262"
                    },
                    "date": {
                        "description": "Log date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2021-12-17"
                    },
                    "time": {
                        "description": "Log time",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": " 14:31"
                    },
                    "user": {
                        "description": "User name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "text": {
                        "description": "Activity description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A new file was uploaded"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "document"
                }
            },
            "LoginObject": {
                "description": "An object containing information to authenticate and generate an authentication token",
                "properties": {
                    "username": {
                        "description": "User's username",
                        "type": "string",
                        "example": "customer@briox.fi"
                    },
                    "password": {
                        "description": "User's password",
                        "type": "string",
                        "example": "verySecurePasswrd"
                    },
                    "application": {
                        "description": "User's application id",
                        "type": "string",
                        "example": "CEA56DP0-FD5U-205L-50PD-12343F34E399"
                    },
                    "database": {
                        "description": "User's database id",
                        "type": "string",
                        "example": "1234567890"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "LoginObject"
                }
            },
            "MetaInformation": {
                "description": "Meta information for 'list all' responses",
                "properties": {
                    "current_page": {
                        "type": "integer",
                        "example": "2"
                    },
                    "limit": {
                        "type": "integer",
                        "example": "5"
                    },
                    "total_pages": {
                        "type": "integer",
                        "example": "5"
                    },
                    "total_count": {
                        "type": "integer",
                        "example": "25"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "MetaInformation"
                }
            },
            "NationalIdentificationNumberObject": {
                "description": "An object containing information to handle National Identification Number requests",
                "properties": {
                    "national_identification_number": {
                        "description": "National identification number of the user.",
                        "type": "string"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "nationalidentificationnumberobject"
                }
            },
            "OpeningBalance": {
                "required": [
                    "name",
                    "openingbalance"
                ],
                "properties": {
                    "account": {
                        "description": "Opening balance id",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1120"
                    },
                    "value": {
                        "description": "Opening balance ib value",
                        "type": "string",
                        "format": "max char: 1024. Digits only",
                        "example": "1"
                    },
                    "year": {
                        "description": "The financial year id.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "openingbalance"
                }
            },
            "OrderRow": {
                "description": "An object containing information for each order row.",
                "properties": {
                    "itemno": {
                        "type": "string",
                        "format": "Can be empty string",
                        "example": ""
                    },
                    "description": {
                        "type": "string",
                        "format": "max char: 50",
                        "example": "Order description"
                    },
                    "unit": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "h"
                    },
                    "amount": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "221"
                    },
                    "price": {
                        "type": "string",
                        "format": "float",
                        "example": "333"
                    },
                    "discount": {
                        "description": "an array of discount and discount type",
                        "properties": {
                            "value": {
                                "type": "string",
                                "example": "0"
                            },
                            "type": {
                                "type": "string",
                                "example": "1"
                            }
                        },
                        "type": "object",
                        "format": "numeric. max char: 1024"
                    },
                    "account": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "3000"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": ""
                    },
                    "project": {
                        "description": "Project follow up ID",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "OrderRow"
                }
            },
            "PaymentMethod": {
                "required": [
                    "name",
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Payment method id",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "3"
                    },
                    "account": {
                        "description": "Payment account number",
                        "type": "integer",
                        "format": "max char: 1024",
                        "example": "1900"
                    },
                    "isDefault": {
                        "description": "Payment method default",
                        "type": "boolean",
                        "example": "false"
                    },
                    "language": {
                        "description": "List of payment methods' translations",
                        "type": "string",
                        "format": "string array",
                        "example": "['fi_FI':'Kassa','sv_SE':'Kassa']"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "paymentmethod"
                }
            },
            "PaymentTerm": {
                "required": [
                    "name",
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Payment term id",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "PF"
                    },
                    "language": {
                        "description": "List of payment terms' translations",
                        "type": "string",
                        "format": "string array",
                        "example": "[fi_FI:Postiennakko,sv_SE:Postförskott]"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "paymentterm"
                }
            },
            "Payroll": {
                "properties": {
                    "calculation_id": {
                        "description": "Calculation Id",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "6B29FC40-CA47-1067-B31D-00DD010662DA"
                    },
                    "salary_date": {
                        "description": "Salary Date",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "2023-01-01"
                    },
                    "salary": {
                        "description": "Salary",
                        "type": "string",
                        "example": "2000"
                    },
                    "tax": {
                        "description": "Tax",
                        "type": "string",
                        "example": "500"
                    },
                    "salary_before_tax": {
                        "description": "Salary before tax",
                        "type": "integer",
                        "example": 500
                    }
                },
                "type": "object",
                "xml": {
                    "name": "payroll"
                }
            },
            "PriceList": {
                "required": [
                    "code",
                    "description"
                ],
                "properties": {
                    "code": {
                        "description": "Price list code or id",
                        "type": "string",
                        "format": "string",
                        "example": "A"
                    },
                    "description": {
                        "description": "Description of price list",
                        "type": "string",
                        "format": "string",
                        "example": "Price list A"
                    },
                    "translations": {
                        "description": "Translations for the price list description",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "properties": {
                                "en_GB": {
                                    "type": "string",
                                    "example": "Price list A"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "comment": {
                        "description": "Comment",
                        "type": "string",
                        "format": "string",
                        "example": "This is the pricelist for our very special customers"
                    },
                    "default_price_list": {
                        "description": "Is this the system default price list",
                        "type": "boolean",
                        "format": "boolean",
                        "example": "true|false"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "pricelist"
                }
            },
            "ProductOrder": {
                "properties": {
                    "contact_name": {
                        "type": "string",
                        "example": "Company Contact"
                    },
                    "contact_address": {
                        "type": "string",
                        "example": "Contact address"
                    },
                    "contact_postcode": {
                        "type": "string",
                        "example": "35252"
                    },
                    "contact_city": {
                        "type": "string",
                        "example": "Vaxjo"
                    },
                    "client_manager_id": {
                        "description": "Id of client manager that will get connected to the new schema.",
                        "type": "integer",
                        "example": "35843242342"
                    },
                    "client_manager_username": {
                        "description": "Email of the client manager account to be connected to the new schema. Must exist in client manager schema.",
                        "type": "integer",
                        "example": "john.doe@briox.fi"
                    },
                    "contact_phone": {
                        "type": "string",
                        "example": "35649125"
                    },
                    "person_firstname": {
                        "type": "string",
                        "example": "John"
                    },
                    "person_lastname": {
                        "type": "string",
                        "example": "Doe"
                    },
                    "person_email": {
                        "type": "string",
                        "example": "john.doe@briox.fi"
                    },
                    "billing_period": {
                        "type": "string",
                        "example": "12"
                    },
                    "campaign_code": {
                        "type": "string",
                        "example": "CAMPAIGN-CODE"
                    },
                    "language": {
                        "type": "string",
                        "example": "en_GB"
                    },
                    "reseller_id": {
                        "description": "Reseller id",
                        "type": "string",
                        "example": "10a08005-0e9a-52b0-a160-e4ee6dd0658d"
                    },
                    "package_type": {
                        "description": "Package type",
                        "type": "string",
                        "example": "START"
                    },
                    "trial": {
                        "description": "If this value is true, it will be impossible to set Client Manager license",
                        "type": "string",
                        "example": "1"
                    },
                    "order_licences": {
                        "description": "Product licence",
                        "type": "array",
                        "items": {
                            "properties": {
                                "application_id": {
                                    "type": "string",
                                    "example": "1"
                                },
                                "amount": {
                                    "type": "string",
                                    "example": "1"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "tags": {
                        "description": "Database tags",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "type": "string",
                            "example": "PORTAL"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "ProductOrder"
                }
            },
            "Project": {
                "required": [
                    "id",
                    "name"
                ],
                "properties": {
                    "id": {
                        "description": "Project ID",
                        "type": "integer",
                        "format": "bigint",
                        "example": "1"
                    },
                    "name": {
                        "description": "Project name",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "Project One"
                    },
                    "leader": {
                        "description": "Project leader name",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "John Smith"
                    },
                    "status": {
                        "description": "Project status. 0: Not Started, 1: Active, 2: Ended",
                        "type": "integer",
                        "format": "int",
                        "example": "1"
                    },
                    "start_date": {
                        "description": "Project start date",
                        "type": "string",
                        "format": "Date (yyyy-mm-dd)",
                        "example": "2018-01-03"
                    },
                    "end_date": {
                        "description": "Project end date",
                        "type": "string",
                        "format": "Date (yyyy-mm-dd)",
                        "example": "2018-01-30"
                    },
                    "order_time": {
                        "description": "Project order time",
                        "type": "integer",
                        "format": "int",
                        "example": "12"
                    },
                    "order_amount": {
                        "description": "Project order amount",
                        "type": "integer",
                        "format": "int",
                        "example": "12"
                    },
                    "notes": {
                        "description": "Project notes",
                        "type": "string",
                        "format": "CharacterVarying(1024)",
                        "example": "Some extra notes"
                    },
                    "customers": {
                        "description": "Customers involved in the project",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "properties": {
                                "name": {
                                    "description": "This field will be automatically filled in",
                                    "type": "string",
                                    "example": "Customer One"
                                },
                                "custno": {
                                    "type": "string",
                                    "example": "12"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "project"
                }
            },
            "SalesOrder": {
                "required": [
                    "name",
                    "id"
                ],
                "properties": {
                    "id": {
                        "description": "Sales order number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "total": {
                        "description": "The total sum of the sales order",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "96 795,64"
                    },
                    "subtotal": {
                        "description": "The total sum excluding VAT",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "78 061,00"
                    },
                    "customerid": {
                        "description": "Customer ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "customername": {
                        "description": "Customer name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Doe"
                    },
                    "currency": {
                        "description": "Customer default currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    },
                    "orderdate": {
                        "description": "When invoice has been created",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-12-10"
                    },
                    "deliverydate": {
                        "description": "When ordered items or services are to be delivered",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-12-10"
                    },
                    "admfee": {
                        "description": "Administrative fee, default to zero if nothing is to be added here",
                        "type": "number",
                        "format": "float",
                        "example": "2234"
                    },
                    "shipping": {
                        "description": "Shipping charge, default to zero if nothing is to be added here",
                        "type": "number",
                        "format": "float",
                        "example": "2234"
                    },
                    "orderno": {
                        "description": "Order number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "paymentterm": {
                        "description": "Payment term id. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "PF"
                    },
                    "shippingmethod": {
                        "description": "Delivery method id. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "N"
                    },
                    "shippingcondition": {
                        "description": "Terms of delivery id. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CIP"
                    },
                    "yourreference": {
                        "description": "Name of reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "ourreference": {
                        "description": "Name of reference",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": ""
                    },
                    "project": {
                        "description": "Project key. Must be present in database",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "1"
                    },
                    "work_in_progress": {
                        "description": "Sales order is open",
                        "type": "string",
                        "format": "smallint max char: 1",
                        "example": "1"
                    },
                    "invoice_id": {
                        "description": "Invoice id that was created from sales order",
                        "type": "string",
                        "format": "bigint",
                        "example": "42"
                    },
                    "ordertext": {
                        "description": "Text displayed on the sales order",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "A sales order description"
                    },
                    "customer_address": {
                        "description": "Customer invoice or delivery address. See Address model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Address"
                        },
                        "example": [
                            {
                                "type": "invoice",
                                "addressline1": "Albertinkatu 36 B",
                                "addressline2": "Albertinkatu 36 B",
                                "zip": "00180",
                                "city": "Helsinki",
                                "country": "Finland",
                                "countrycode": "FI"
                            },
                            {
                                "type": "delivery",
                                "addressline1": "Albertinkatu 36 B",
                                "addressline2": "Albertinkatu 36 B",
                                "zip": "00180",
                                "city": "Helsinki",
                                "country": "Finland",
                                "countrycode": "FI"
                            }
                        ]
                    },
                    "order_rows": {
                        "description": "Allows multiple OrderRow objects",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/OrderRow"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "salesrorder"
                }
            },
            "SalesOrderFilter": {
                "required": [
                    "false"
                ],
                "type": "string",
                "allOf": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "enum": [
                                "all",
                                "expired",
                                "billed",
                                "notbilled",
                                "notbilledanddelivered",
                                "workinprogress",
                                "cancel"
                            ]
                        },
                        "default": "all"
                    }
                ]
            },
            "ScannerLogDataObject": {
                "description": "An object containing information about the scanned document",
                "properties": {
                    "document_category": {
                        "description": "Document category name",
                        "example": "Travel"
                    },
                    "document_type": {
                        "description": "Document type name",
                        "example": "Receipt"
                    },
                    "document_name": {
                        "description": "Scanned file name",
                        "example": "MyScannedFile.pdf"
                    },
                    "document_category_id": {
                        "description": "Document category ID in Briox",
                        "example": "1"
                    },
                    "document_type_key": {
                        "description": "Document type key in Briox",
                        "example": "receipt"
                    },
                    "document_id": {
                        "description": "Document ID in Briox",
                        "example": "a9375623-4403-4c18-a751-11a90e70a222"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "ScannerLogDataObject"
                }
            },
            "Supplier": {
                "required": [
                    "name",
                    "supplierno"
                ],
                "properties": {
                    "supplierno": {
                        "description": "Supplier number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "name": {
                        "description": "Supplier name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Steven Work"
                    },
                    "active": {
                        "description": "Supplier active or not",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "1"
                    },
                    "addressline1": {
                        "description": "Supplier address 1",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "addressline2": {
                        "description": "Supplier address 2",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "visitaddress": {
                        "description": "Supplier visit address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "zip": {
                        "description": "Supplier zip",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "00180"
                    },
                    "city": {
                        "description": "Supplier city",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Helsinki"
                    },
                    "phone": {
                        "description": "Supplier phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "phone2": {
                        "description": "Secondary supplier phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "email": {
                        "description": "Supplier email address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "fax": {
                        "description": "Supplier fax number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "countrycode": {
                        "description": "Supplier country code",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "FI"
                    },
                    "companynumber": {
                        "description": "Supplier company number",
                        "type": "string",
                        "format": "max char: 9",
                        "example": "2389132-8"
                    },
                    "vatnumber": {
                        "description": "Supplier VAT number",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "FI12345678"
                    },
                    "description": {
                        "description": "Supplier description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Supplier 1 is a great supplier"
                    },
                    "poemail": {
                        "description": "Supplier purchase order email address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "poemailbcc": {
                        "description": "Supplier purchase order email bcc",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "poemailcc": {
                        "description": "Supplier purchase order email cc",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "paymentterms": {
                        "description": "Supplier payment terms key. Must be present in account",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "PE294857PE"
                    },
                    "paymentcode": {
                        "description": "Supplier Charge Code",
                        "type": "integer",
                        "format": "max char: 1, 2 = Beneficiary pays 0 = Sender pays",
                        "example": "2"
                    },
                    "currency": {
                        "description": "Supplier default currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    },
                    "inactivepaymentfile": {
                        "description": "Supplier deactivate payment file",
                        "type": "boolean",
                        "format": "max char: 1, 1 = deactivated 0 = active",
                        "example": "1"
                    },
                    "intracommunityacquisition": {
                        "description": "IntraCommunity Aquisition (ICA) means that items are purchased from an EU country and therefore no VAT is paid on the purchase",
                        "type": "boolean",
                        "format": "max char: 1, 1 = ICA 0 = Not ICA",
                        "example": "1"
                    },
                    "constructionsupplier": {
                        "description": "Construction supplier means that the buyer handles VAT",
                        "type": "integer",
                        "format": "1 = Construction supplier",
                        "example": "1"
                    },
                    "ourcustno": {
                        "description": "Our customer number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "preacct": {
                        "description": "Supplier predefined purchase account",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "12345"
                    },
                    "claimacct": {
                        "description": "Supplier predefined payable account",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "12345"
                    },
                    "project": {
                        "description": "Supplier project key. Must be present in account",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "0"
                    },
                    "bank": {
                        "description": "Name of the suppliers bank",
                        "type": "string",
                        "format": "max char: 40",
                        "example": "Bank of America"
                    },
                    "bankaddress": {
                        "description": "The street name where the bank is located",
                        "type": "string",
                        "format": "max char: 40",
                        "example": "Queen Street 2772"
                    },
                    "bankcountrycode": {
                        "description": "The country code of the country in which the bank is located",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "FI"
                    },
                    "clearingno": {
                        "description": "Supplier clearing code specified by ISO20022.",
                        "type": "integer",
                        "format": "max char: 6-35",
                        "example": "USABA123456789"
                    },
                    "accountholder": {
                        "description": "Supplier account holder",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "James Bond"
                    },
                    "bankaccountno": {
                        "description": "Supplier account number",
                        "type": "integer",
                        "format": "max char: 6-10",
                        "example": "1234567"
                    },
                    "iban": {
                        "description": "Supplier IBAN",
                        "type": "string",
                        "format": "max char: 31",
                        "example": "FI12ABCD1234567"
                    },
                    "bic": {
                        "description": "Supplier BIC/SWIFT code",
                        "type": "string",
                        "format": "max char: 8 OR 11",
                        "example": "ABCDFI12112"
                    },
                    "bg": {
                        "description": "Supplier Bankgiro if applicable",
                        "type": "string",
                        "format": "must be 7 or 8 digits long",
                        "example": "130-8311"
                    },
                    "pg": {
                        "description": "Supplier Plusgiro if applicable",
                        "type": "string",
                        "format": "must be 3 to 8 digits long",
                        "example": "82 00 04-0"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplier"
                }
            },
            "SupplierInvoice": {
                "required": [
                    "id",
                    "suplierid"
                ],
                "properties": {
                    "attachment_link": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=dashboardreport&archive_id=b8f3c414-4c89-4996-8fd7-2bbfd1fa1a1a&fid=c3db8f0a515744899860ba3a4fdded31"
                    },
                    "id": {
                        "description": "Supplier invoice number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "supplierid": {
                        "description": "Supplier ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "suppliername": {
                        "description": "Supplier Name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "J"
                    },
                    "invoicedate": {
                        "description": "When supplier invoice has been created",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "paymentdate": {
                        "description": "When suplier invoice is to be paid",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "referencenumber": {
                        "description": "Referencenumber on the supplier invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "12342345445"
                    },
                    "invoicenumber": {
                        "description": "Invoice number on the supplier invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "54356543"
                    },
                    "yourreference": {
                        "description": "Name of reference on supplier side",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "ourreference": {
                        "description": "Name of reference on buyer side",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database in order to create or update.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CC"
                    },
                    "project": {
                        "description": "Project key. Must be present in database in order to create or update",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "1"
                    },
                    "total": {
                        "description": "The total sum of the supplier invoice. Ignored when creating or updating supplier invoice. But sent when fetching",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 221.31999999999999317878973670303821563720703125
                    },
                    "currency": {
                        "description": "The currency of the supplier invoice.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "SEK"
                    },
                    "currate": {
                        "description": "The currency rate of the supplier invoice.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 0.11200000000000000233146835171282873488962650299072265625
                    },
                    "post": {
                        "description": "The field defines if the invoice is to be posted when saved or updated. When retrieving invoices indicates if the invoice has been posted",
                        "type": "boolean",
                        "format": "max char:\n\t\t *                             5, true or false",
                        "example": "true"
                    },
                    "vat": {
                        "description": "VAT amount of the supplier invoice.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 15.32000000000000028421709430404007434844970703125
                    },
                    "vatrate": {
                        "description": "VAT rate of the supplier invoice. Can be specified with a number or a string like 0%, Exempt.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "24"
                    },
                    "iban": {
                        "description": "Supplier IBAN",
                        "type": "string",
                        "format": "max char: 31",
                        "example": "FI12ABCD1234567"
                    },
                    "bic": {
                        "description": "Supplier BIC/SWIFT code",
                        "type": "string",
                        "format": "max char: 8 OR 11",
                        "example": "ABCDFI12112"
                    },
                    "paymentstatus": {
                        "description": "Supplier invoice payment status. Possible values: 'payment_in_process'|'voided'|'paid'|'awaiting_posting_authorisation'|'awaiting_review_lvl_1'|'awaiting_review_lvl_2'|'awaiting_payment_authorisation'|'ready_for_payment'|'unposted'|'unknown'",
                        "type": "string",
                        "format": "max char: 8 OR 11",
                        "example": "payment_in_process"
                    },
                    "paidat": {
                        "description": "The date the final payment was made",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "supplier_created_from_einvoice": {
                        "description": "If the supplier was created from an elektronic invoice.",
                        "type": "boolean",
                        "example": "true"
                    },
                    "supplier_data_confirmed": {
                        "description": "If supplier data has been confirmed by the supplier.",
                        "type": "boolean",
                        "example": "true"
                    },
                    "supplier_invoice_rows": {
                        "description": "Supplier Invoice row list. See SupplierInvoiceRow model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceRow"
                        }
                    },
                    "file_links": {
                        "description": "Attachment list.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceAttachment"
                        }
                    },
                    "deviations": {
                        "description": "Deviation list.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceDeviation"
                        }
                    },
                    "bg": {
                        "description": "Supplier Bankgiro if applicable",
                        "type": "string",
                        "format": "must be 7 or 8 digits long",
                        "example": "130-8311"
                    },
                    "pg": {
                        "description": "Supplier Plusgiro if applicable",
                        "type": "string",
                        "format": "must be 3 to 8 digits long",
                        "example": "82 00 04-0"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplierinvoice"
                }
            },
            "SupplierInvoiceAttachment": {
                "description": "An object containing links to the attachments",
                "properties": {
                    "attachment_link": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=dashboardreport&archive_id=b8f3c414-4c89-4996-8fd7-2bbfd1fa1a1a&fid=c3db8f0a515744899860ba3a4fdded31"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoiceAttachment"
                }
            },
            "SupplierInvoiceAuthorisation": {
                "required": [
                    "supplierinvoiceid",
                    "authorisationid"
                ],
                "properties": {
                    "supplierinvoiceid": {
                        "description": "Supplier invoice number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "authorisationtype": {
                        "description": "Type of authorisation to be made on the supplier invoice",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "authorise_payment"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplierinvoiceauthorisation"
                }
            },
            "SupplierInvoiceAuthorisationType": {
                "properties": {
                    "type": {
                        "description": "Authorisation type",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "authorise_payment"
                    },
                    "label": {
                        "description": "Label for authorisation",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Payment"
                    },
                    "description": {
                        "description": "Description of the authorisation type",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "This type is used when authorising a supplier invoice for payment"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplierinvoiceauthorisationtype"
                }
            },
            "SupplierInvoiceComment": {
                "description": "An object containing comments.",
                "properties": {
                    "id": {
                        "description": "Comment ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "121"
                    },
                    "createddate": {
                        "description": "Date when comment was created.",
                        "type": "date",
                        "format": "YYYY-MM-DD",
                        "example": "2022-04-15 10:23"
                    },
                    "createdbyname": {
                        "description": "Name of the user who created the comment.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "John Smith"
                    },
                    "comment": {
                        "description": "Text for the comment.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Please look at this as soon as possible."
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoiceComment"
                }
            },
            "SupplierInvoiceDeviation": {
                "description": "An object containing deviation information",
                "properties": {
                    "deviation_type": {
                        "type": "string",
                        "example": "SUPPLIER_INVOICE_AMOUNT_DEVIATION"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoiceDeviation"
                }
            },
            "SupplierInvoiceLinkedDocument": {
                "description": "An object containing information about linked documents.",
                "properties": {
                    "id": {
                        "description": "File ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "8991bee7-70f3-49f5-b892-4554bd474842"
                    },
                    "filename": {
                        "description": "File name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Invoice.pdf"
                    },
                    "contenttype": {
                        "description": "Content type of the file",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "application/pdf"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoiceLinkedDocument"
                }
            },
            "SupplierInvoicePost": {
                "description": "SupplierInvoice Post Object",
                "required": [
                    "id",
                    "suplierid"
                ],
                "properties": {
                    "supplierid": {
                        "description": "Supplier ID",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "invoicedate": {
                        "description": "When supplier invoice has been\n\t *                                          created",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "paymentdate": {
                        "description": "When suplier invoice is to be paid",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "referencenumber": {
                        "description": "Referencenumber on the supplier\n\t *                                              invoice",
                        "format": "max char: 30",
                        "example": "12342345445"
                    },
                    "invoicenumber": {
                        "description": "Invoice number on the supplier\n\t *                                            invoice",
                        "format": "max char: 30",
                        "example": "54356543"
                    },
                    "yourreference": {
                        "description": "Name of reference on supplier\n\t *                                            side",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "ourreference": {
                        "description": "Name of reference on buyer\n\t *                                           side",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in\n\t *                                         database in order to create or update.",
                        "format": "max char: 1024",
                        "example": "CC"
                    },
                    "project": {
                        "description": "Project key. Must be present in database in order\n\t *                                      to create or update",
                        "format": "max char: 9, only digits",
                        "example": "1"
                    },
                    "total": {
                        "description": "The total sum of the supplier invoice. Ignored\n\t *                                    when creating or updating supplier invoice. But sent when fetching",
                        "format": "numeric. max char: 1024",
                        "example": 221.31999999999999317878973670303821563720703125
                    },
                    "currency": {
                        "description": "The currency of the supplier invoice.",
                        "format": "max char: 1024",
                        "example": "SEK"
                    },
                    "currate": {
                        "description": "The currency rate of the supplier invoice.",
                        "format": "numeric. max char: 1024",
                        "example": 0.11200000000000000233146835171282873488962650299072265625
                    },
                    "post": {
                        "description": "The field defines if the invoice is to be posted\n\t *                                   when saved or updated. When retrieving invoices indicates if the invoice has\n\t *                                   been posted",
                        "format": "max char: 5, true or false",
                        "example": "true"
                    },
                    "vat": {
                        "description": "VAT amount of the supplier invoice.",
                        "format": "numeric. max char: 1024",
                        "example": 15.32000000000000028421709430404007434844970703125
                    },
                    "vatrate": {
                        "description": "VAT rate of the supplier invoice. Can be\n\t *                                             specified with a number or a string like 0%, Exempt.",
                        "format": "numeric. max char: 1024",
                        "example": "24"
                    },
                    "supplier_invoice_rows": {
                        "description": "Supplier\n\t *                                                                                         Invoice row list. See\n\t *                                                                                         SupplierInvoiceRow\n\t *                                                                                         model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceRow"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoicePost"
                }
            },
            "SupplierInvoiceRow": {
                "description": "An object containing information for each supplier invoice row. The rows must balance between credit and debit",
                "properties": {
                    "account": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "2870"
                    },
                    "description": {
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "Account, description. Will be ignored when creating or updating"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database",
                        "type": "string",
                        "format": "max char: 1024"
                    },
                    "project": {
                        "description": "Project follow up ID",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "21"
                    },
                    "credit": {
                        "description": "Row amount for credit",
                        "type": "number",
                        "format": "numeric. max char: 1024",
                        "example": 221.31999999999999317878973670303821563720703125
                    },
                    "debit": {
                        "description": "Row amount for credit",
                        "type": "number",
                        "format": "numeric. max char: 1024",
                        "example": 221.31999999999999317878973670303821563720703125
                    },
                    "transactioninformation": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Example transaction info"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoiceRow"
                }
            },
            "SupplierInvoiceSimple": {
                "required": [
                    "id",
                    "suplierid"
                ],
                "properties": {
                    "id": {
                        "description": "Supplier invoice number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "supplierid": {
                        "description": "Supplier ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "1"
                    },
                    "suppliername": {
                        "description": "Supplier Name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "J"
                    },
                    "invoicedate": {
                        "description": "When supplier invoice has been created",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2018-09-07"
                    },
                    "paymentdate": {
                        "description": "When suplier invoice is to be paid",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2018-09-07"
                    },
                    "referencenumber": {
                        "description": "Referencenumber on the supplier invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "12342345445"
                    },
                    "invoicenumber": {
                        "description": "Invoice number on the supplier invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "54356543"
                    },
                    "yourreference": {
                        "description": "Name of reference on supplier side",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "ourreference": {
                        "description": "Name of reference on buyer side",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Benny Jackson"
                    },
                    "costcenter": {
                        "description": "Cost center key. Must be present in database in order to create or update.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "CC"
                    },
                    "project": {
                        "description": "Project key. Must be present in database in order to create or update",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "1"
                    },
                    "transactioninformation": {
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Example transaction info"
                    },
                    "total": {
                        "description": "The total sum of the supplier invoice. Ignored when creating or updating supplier invoice. But sent when fetching",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 122.5
                    },
                    "currency": {
                        "description": "The currency of the supplier invoice.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "SEK"
                    },
                    "currate": {
                        "description": "The currency rate of the supplier invoice.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 0.11200000000000000233146835171282873488962650299072265625
                    },
                    "post": {
                        "description": "The field defines if the invoice is to be posted when saved or updated. When retrieving invoices indicates if the invoice has been posted",
                        "type": "boolean",
                        "format": "max char:\n\t\t *                             5, true or false",
                        "example": "true"
                    },
                    "supplier_invoice_rows": {
                        "description": "Supplier Invoice row list. See SupplierInvoiceSimpleRow model",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceSimpleRow"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplierinvoicesimple"
                }
            },
            "SupplierInvoiceSimpleRow": {
                "description": "An object containing information for each supplier invoice.",
                "properties": {
                    "amount": {
                        "description": "Amount for supplier invoice",
                        "type": "number",
                        "format": "numeric. max char: 1024",
                        "example": "125"
                    },
                    "vatrate": {
                        "description": "Vat in percent, 25%, 12%, 6% or 0%",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "25%"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SupplierInvoiceRow"
                }
            },
            "SupplierInvoiceToAuthorise": {
                "properties": {
                    "id": {
                        "description": "Supplier invoice number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "supplierid": {
                        "description": "Supplier ID",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "11"
                    },
                    "suppliername": {
                        "description": "Supplier Name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Candy Cane Ltd"
                    },
                    "invoicedate": {
                        "description": "When supplier invoice has been created",
                        "type": "date",
                        "format": "YYYY-MM-DD",
                        "example": "2022-04-12"
                    },
                    "paymentdate": {
                        "description": "When suplier invoice is to be paid",
                        "type": "date",
                        "format": "YYYY-MM-DD",
                        "example": "2022-05-11"
                    },
                    "total": {
                        "description": "The total sum of the supplier invoice.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 188.479999999999989768184605054557323455810546875
                    },
                    "currency": {
                        "description": "Supplier invoice currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    },
                    "vat": {
                        "description": "VAT amount of the supplier invoice.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": 36.47999999999999687361196265555918216705322265625
                    },
                    "vatrate": {
                        "description": "VAT rate of the supplier invoice.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "24"
                    },
                    "onhold": {
                        "description": "If invoice is on hold then no authorisation can be made.",
                        "type": "string",
                        "format": "numeric. max char: 1024",
                        "example": "1"
                    },
                    "nextauthorisationtype": {
                        "description": "Next type of authorisation that is needed for the invoice.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "authorise_payment"
                    },
                    "performedauthorisationtypes": {
                        "description": "A list of authorisation types that have been performed on the supplier invoice.",
                        "type": "array",
                        "items": {
                            "type": "string",
                            "example": "authorisation_payment"
                        }
                    },
                    "paymentstatus": {
                        "description": "Supplier invoice payment status. Possible values: 'payment_in_process'|'voided'|'paid'|'awaiting_posting_authorisation'|'awaiting_review_lvl_1'|'awaiting_review_lvl_2'|'awaiting_payment_authorisation'|'ready_for_payment'|'unposted'|'unknown'",
                        "type": "string",
                        "format": "max char: 8 OR 11",
                        "example": "payment_in_process"
                    },
                    "paidat": {
                        "description": "The date the final payment was made",
                        "type": "string",
                        "format": "YYYY-MM-DD",
                        "example": "2017-10-19"
                    },
                    "iban": {
                        "description": "Supplier IBAN",
                        "type": "string",
                        "format": "max char: 31",
                        "example": "FI12ABCD1234567"
                    },
                    "bic": {
                        "description": "Supplier BIC/SWIFT code",
                        "type": "string",
                        "format": "max char: 8 OR 11",
                        "example": "ABCDFI12112"
                    },
                    "bg": {
                        "description": "Supplier Bankgiro if applicable",
                        "type": "string",
                        "format": "must be 7 or 8 digits long",
                        "example": "130-8311"
                    },
                    "pg": {
                        "description": "Supplier Plusgiro if applicable",
                        "type": "string",
                        "format": "must be 3 to 8 digits long",
                        "example": "82 00 04-0"
                    },
                    "referencenumber": {
                        "description": "Referencenumber on the supplier invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "12342345445"
                    },
                    "invoicenumber": {
                        "description": "Invoice number on the supplier invoice",
                        "type": "integer",
                        "format": "max char: 30",
                        "example": "54356543"
                    },
                    "costcenters": {
                        "description": "A list of cost centers that exist on the supplier invoice, either in the head or on the rows.",
                        "type": "array",
                        "items": {
                            "properties": {
                                "code": {
                                    "description": "Cost center code",
                                    "type": "string",
                                    "example": "H"
                                },
                                "text": {
                                    "description": "Cost center name",
                                    "type": "string",
                                    "example": "Helsinki"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "projects": {
                        "description": "A list of projects that exist on the supplier invoice, either in the head or on the rows.",
                        "type": "array",
                        "items": {
                            "properties": {
                                "id": {
                                    "description": "Project ID",
                                    "type": "integer",
                                    "example": "1"
                                },
                                "name": {
                                    "description": "Project name",
                                    "type": "string",
                                    "example": "Project One"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "linkedfiles": {
                        "description": "Linked documents to a supplier invoice.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceLinkedDocument"
                        }
                    },
                    "comments": {
                        "description": "Comments on a supplier invoice.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/SupplierInvoiceComment"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplierinvoicetoauthorise"
                }
            },
            "SupplierList": {
                "required": [
                    "name",
                    "supplierno"
                ],
                "properties": {
                    "supplierno": {
                        "description": "Supplier number",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "10"
                    },
                    "name": {
                        "description": "Supplier name",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Steven Work"
                    },
                    "active": {
                        "description": "Supplier active or not",
                        "type": "boolean",
                        "format": "max char: 1, 1 or 0",
                        "example": "1"
                    },
                    "address": {
                        "description": "Supplier address 1",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "address2": {
                        "description": "Supplier address 2",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "visitaddress": {
                        "description": "Supplier visit address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Albertinkatu 36 B"
                    },
                    "zip": {
                        "description": "Supplier zip",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "00180"
                    },
                    "city": {
                        "description": "Supplier city",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Helsinki"
                    },
                    "phone": {
                        "description": "Supplier phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "email": {
                        "description": "Supplier email address",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier@briox.fi"
                    },
                    "countrycode": {
                        "description": "Supplier country code",
                        "type": "string",
                        "format": "max char: 2",
                        "example": "SE"
                    },
                    "companynumber": {
                        "description": "Supplier company number",
                        "type": "string",
                        "format": "max char: 9",
                        "example": "2389132-8"
                    },
                    "vatnumber": {
                        "description": "Supplier VAT number",
                        "type": "string",
                        "format": "max char: 10",
                        "example": "FI12345678"
                    },
                    "description": {
                        "description": "Supplier description",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "Supplier 1 is a great supplier"
                    },
                    "currency": {
                        "description": "Supplier default currency",
                        "type": "string",
                        "format": "max char: 3",
                        "example": "EUR"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "supplierlist"
                }
            },
            "SystemLanguage": {
                "description": "A system language available in Briox",
                "properties": {
                    "language": {
                        "type": "string",
                        "example": "en_GB"
                    },
                    "label": {
                        "type": "string",
                        "example": "English"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "SystemLanguage"
                }
            },
            "UserAccount": {
                "properties": {
                    "database_id": {
                        "description": "Client database ID",
                        "type": "string",
                        "example": "1234567890"
                    },
                    "database_label": {
                        "description": "Client database label",
                        "type": "string",
                        "example": "My Account Name"
                    },
                    "organization_number": {
                        "description": "Client organization number",
                        "type": "string",
                        "example": "1111111-1"
                    },
                    "vat_number": {
                        "description": "Client VAT number",
                        "type": "string",
                        "example": "FI22222222"
                    },
                    "vat_registered": {
                        "description": "Is client company VAT registred",
                        "type": "boolean",
                        "example": true
                    },
                    "company_tax": {
                        "description": "Is client company approved for 'F-skatt'",
                        "type": "boolean",
                        "example": true
                    },
                    "phone": {
                        "description": "Client phone number",
                        "type": "string",
                        "example": "0789-123456"
                    },
                    "email": {
                        "description": "Client email",
                        "type": "string",
                        "example": "name@company.com"
                    },
                    "website": {
                        "description": "Client website",
                        "type": "string",
                        "example": "customerwebsite.com"
                    },
                    "address": {
                        "description": "Address details",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Address"
                        }
                    },
                    "bank_details": {
                        "description": "Bank details",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/BankDetails"
                        }
                    },
                    "feature_status": {
                        "description": "Shows if the specified features is enabled or not in the account",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/FeatureStatus"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "UserAccount"
                }
            },
            "UserAccountPost": {
                "description": "UserAccount Post Object",
                "properties": {
                    "database_label": {
                        "description": "Client database label",
                        "type": "string",
                        "example": "My Account Name"
                    },
                    "organization_number": {
                        "description": "Client organization number",
                        "type": "string",
                        "example": "1111111-1"
                    },
                    "vat_number": {
                        "description": "Client VAT number",
                        "type": "string",
                        "example": "FI22222222"
                    },
                    "phone": {
                        "description": "Client phone number",
                        "type": "string",
                        "example": "0789-123456"
                    },
                    "email": {
                        "description": "Client email",
                        "type": "string",
                        "example": "name@company.com"
                    },
                    "website": {
                        "description": "Client website",
                        "type": "string",
                        "example": "customerwebsite.com"
                    },
                    "address": {
                        "$ref": "#/components/schemas/AddressPost"
                    },
                    "bank_details": {
                        "$ref": "#/components/schemas/BankDetailsPost"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "ApiUserAccountPost"
                }
            },
            "UserDataObject": {
                "description": "An object containing information to request list of accounts that belong to a user",
                "properties": {
                    "username": {
                        "description": "User's username",
                        "type": "string",
                        "example": "customer@briox.fi"
                    },
                    "password": {
                        "description": "User's password",
                        "type": "string",
                        "example": "verySecurePasswrd"
                    },
                    "application": {
                        "description": "User's application id",
                        "type": "string",
                        "example": "CEA56DP0-FD5U-205L-50PD-12343F34E399"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "UserAccountListRequestObject"
                }
            },
            "UserInfo": {
                "properties": {
                    "language": {
                        "description": "User's system language",
                        "type": "string",
                        "example": "en_GB"
                    },
                    "user_id": {
                        "description": "User id",
                        "type": "integer",
                        "example": "3"
                    },
                    "global_user_id": {
                        "description": "Global user id",
                        "type": "string",
                        "example": "0f5e32c0-faaa-4dce-8f53-0cb81b360f96"
                    },
                    "date_format": {
                        "description": "User's date format",
                        "type": "string",
                        "example": "Y-m-d"
                    },
                    "time_format": {
                        "description": "User's time format",
                        "type": "string",
                        "example": "H:i"
                    },
                    "decimal_point": {
                        "description": "User's decimal point",
                        "type": "string",
                        "example": ","
                    },
                    "thousand_delimiter": {
                        "description": "User's thousand delimiter",
                        "type": "string",
                        "example": " "
                    },
                    "email": {
                        "description": "User email address",
                        "type": "string",
                        "example": "customer@briox.fi"
                    },
                    "first_name": {
                        "description": "User first name",
                        "type": "string",
                        "example": "John"
                    },
                    "last_name": {
                        "description": "User last name",
                        "type": "string",
                        "example": "Doe"
                    },
                    "company_name": {
                        "description": "Company name",
                        "type": "string",
                        "example": "Cupcakes Enterprises"
                    },
                    "phone": {
                        "description": "User phone number",
                        "type": "string",
                        "format": "max char: 1024. Only digits, brackets and +",
                        "example": "+35(8) 9-345-297"
                    },
                    "status": {
                        "description": "User status: 1 = client user, 2 = consultant",
                        "type": "integer",
                        "format": "max char: 1024. Only digits",
                        "example": "1"
                    },
                    "logotype": {
                        "description": "URL to where logotype for the company can be downloaded",
                        "type": "string",
                        "example": "https://ext-fi.briox.space/externalresources/get_file.php?type=logotype&fid=qj4nlglth0lkd1zvod1r9fq75os2r5lt"
                    },
                    "national_identification_number": {
                        "description": "National identification number of the user",
                        "type": "string",
                        "example": "19750101-1234"
                    },
                    "accounts": {
                        "description": "List of user accounts that have access to current application",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/UserAccount"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "userinfo"
                }
            },
            "UserNotification": {
                "properties": {
                    "id": {
                        "description": "User notification number",
                        "type": "string",
                        "format": "max char: 9",
                        "example": "3"
                    },
                    "message": {
                        "description": "Contents of the user notification",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "User left a comment on supplier invoice"
                    },
                    "time_added": {
                        "description": "When a user notification was added",
                        "type": "string",
                        "format": "YYYY-MM-DD HH:MM:SS",
                        "example": "2022-02-03 13:47:50"
                    },
                    "processed": {
                        "description": "If a notifications is marked as read/processed",
                        "type": "boolean",
                        "example": true
                    },
                    "processed_on": {
                        "description": "When a user notification was marked as read/processed",
                        "type": "string",
                        "format": "YYYY-MM-DD HH:MM:SS",
                        "example": "2022-02-03 13:47:50"
                    },
                    "related_object_id": {
                        "description": "Related content id",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "12"
                    },
                    "detailed_object_id": {
                        "description": "Detailed content id",
                        "type": "string",
                        "format": "max char: 9, only digits",
                        "example": "42"
                    },
                    "type": {
                        "description": "Related content type",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier_invoice"
                    },
                    "key": {
                        "description": "Key of the user notification",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier_invoice_comment_mention"
                    },
                    "desktop_only": {
                        "description": "If a user notification is only available for desktop/email",
                        "type": "boolean",
                        "example": false
                    }
                },
                "type": "object",
                "xml": {
                    "name": "usernotification"
                }
            },
            "UserNotificationDeviceToken": {
                "properties": {
                    "device_id": {
                        "description": "Unique device id to identify a single device",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "b0411cd5-542b-4f9b-a871-bc217d10fffb"
                    },
                    "device_platform": {
                        "description": "Which platform is the device running (iOS/Android)",
                        "type": "max char: 1024",
                        "example": "ios"
                    },
                    "device_token": {
                        "description": "Unique token used to push the notification to the users devices",
                        "type": "max char: 1024",
                        "example": "d1840f13-681d-4822-819a-eeb0bf6cadf1"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "usernotification"
                }
            },
            "UserNotificationEmailFrequency": {
                "properties": {
                    "freq_type": {
                        "description": "Type frequency of email user notification",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "weekly|daily|immediately"
                    },
                    "freq_day": {
                        "description": "Day in a week to receive user notifications, starting with Monday as 0",
                        "type": "int",
                        "example": 2
                    },
                    "freq_hour": {
                        "description": "Hour of day to receive the email user notification",
                        "type": "int",
                        "example": 8
                    }
                },
                "type": "object",
                "xml": {
                    "name": "usernotification"
                }
            },
            "UserNotificationSettings": {
                "properties": {
                    "type": {
                        "description": "Type of user notification setting",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier_invoice"
                    },
                    "key": {
                        "description": "Key belonging to the type of the user notification",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "supplier_invoice_comment_mention"
                    },
                    "allow_list": {
                        "description": "If user notification is allowed in list",
                        "type": "bool",
                        "example": true
                    },
                    "allow_email": {
                        "description": "If user notification is allowed as mail notification",
                        "type": "bool",
                        "example": true
                    },
                    "allow_push": {
                        "description": "If user notification is allowed as push notification",
                        "type": "bool",
                        "example": true
                    },
                    "desktop_only": {
                        "description": "If a user notification is only available for desktop/email",
                        "type": "bool",
                        "example": false
                    }
                },
                "type": "object",
                "xml": {
                    "name": "usernotification"
                }
            },
            "UserRights": {
                "properties": {
                    "is_sysadmin": {
                        "description": "Is user a system admin?",
                        "type": "boolean",
                        "example": true
                    },
                    "app_sub_rights": {
                        "description": "Object containing user app sub rights",
                        "properties": {
                            "fins": {
                                "description": "Financial statements",
                                "properties": {
                                    "access": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "dashrep": {
                                "description": "Dashboard reports",
                                "properties": {
                                    "access": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "bf": {
                                "description": "Accounting",
                                "properties": {
                                    "voucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "savevoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "bookvoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "delvoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "altervoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "readcommentsvoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "writecommentsvoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "dailytakings": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createaltervoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "accountreconciliation": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "accountreconciliationlockaccount": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createvoucheraccrual": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "performaccrualvoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "performaccrualsinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "performaccrualinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "importvoucher": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "sinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "savesinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "booksinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "changebookedsinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "booksinvoicepay": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "lb": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "revertlb": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "modproject": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "cancelsinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "readcommentssinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "writecommentssinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createaltersinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createsinvoiceaccrual": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "report": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "historylog": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "economicoverview": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "showvoucherrows": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "bank": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "banking": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "coa": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "banking_statements": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "submit_vat": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "submit_income_tax_returns": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_supp": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_supplier_amend": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_supplier_import": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_cc_amend": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_curr_amend": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_budget_amend": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_closeperiod_amend": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "kf": {
                                "description": "Invoicing",
                                "properties": {
                                    "invoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "saveinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "bookinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "changebookedinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "bookinvoicepay": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "modcustomer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "modproject": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "importcust": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "cancelinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createinvoiceaccrual": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createalterinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "tbtginvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "item": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "saveitem": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "importitem": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "report": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "historylog": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "listcontract": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createcontract": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createcontracttemplate": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createcontractinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "contractinvoicing": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "registry": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "registry_customers": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_curr_amend": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "crm": {
                                "description": "CRM",
                                "properties": {
                                    "viewcompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "addcompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "editcompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "deletecompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "addevent": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "editevent": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "archiveevent": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "groupevent": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "grouptag": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "import": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "masstagevents": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "oof": {
                                "description": "Sales order",
                                "properties": {
                                    "offer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "addoffer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createoffer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "deloffer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createalteroffer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "tbtgoffer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "order": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "addorder": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "cancelorder": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createalterorder": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "tbtgorder": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_curr_amend": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "da": {
                                "description": "Archive",
                                "properties": {
                                    "archive": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "group": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "linkeddocuments": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "ld": {
                                "description": "Archive",
                                "properties": {
                                    "linkeddocuments": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "po": {
                                "description": "Purchase order",
                                "properties": {
                                    "createpo": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "deletepo": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "authorizepo": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createsinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "viewhistory": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "createalterpo": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "item": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_curr_amend": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "time": {
                                "description": "Time reporting",
                                "properties": {
                                    "time": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "others": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "attest": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "invoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "register": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "assignment": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "customer": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "item": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "activitygroup": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "report": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "asset": {
                                "description": "Asset registry",
                                "properties": {
                                    "asset": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "save": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "delete": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "writeoff": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "writeoffperform": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "writeoffreset": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "auth": {
                                "description": "Authorisation",
                                "properties": {
                                    "authorizations": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "authorizebookkeep": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "paymentsuggestion": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "authorizepayment": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "invoicereview_level_1": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "invoicereview_level_2": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "readcommentssinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "writecommentssinvoice": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "pr": {
                                "description": "Payroll",
                                "properties": {
                                    "view_bank_payments": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "edit_bank_payments": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "ass": {
                                "description": "Accounting assistant",
                                "properties": {
                                    "assistant_task_view": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "assistant_task_edit": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "assistant_task_share": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "assistant_task_amend_time": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_assistant_view": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_assistant_assignments_edit": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_assistant_assignments_inactivate": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "reg_assistant_assignment_templates_edit": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "bflc": {
                                "description": "Accounting assistant",
                                "properties": {
                                    "viewcompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "addcompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "editcompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "deletecompany": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "clientmanadersave": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "clientmanagerlogin": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "portalview": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "portalamend": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "portaltoggle": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "emp": {
                                "description": "Employee",
                                "properties": {
                                    "payroll_scanner": {
                                        "type": "string",
                                        "example": "1"
                                    },
                                    "view_payslip": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            },
                            "ptime": {
                                "description": "Personal time reporting",
                                "properties": {
                                    "access": {
                                        "type": "string",
                                        "example": "1"
                                    }
                                },
                                "type": "object"
                            }
                        },
                        "type": "object",
                        "format": "object"
                    },
                    "app_access_rights": {
                        "description": "Object containing user application ACCESS rights.",
                        "properties": {
                            "po": {
                                "description": "Purchase order",
                                "type": "string",
                                "example": "1"
                            },
                            "oof": {
                                "description": "Sales order",
                                "type": "string",
                                "example": "1"
                            },
                            "time": {
                                "description": "Time reporting",
                                "type": "string",
                                "example": "1"
                            },
                            "pr": {
                                "description": "Payroll",
                                "type": "string",
                                "example": "1"
                            },
                            "fins": {
                                "description": "Financial statements",
                                "type": "string",
                                "example": "1"
                            },
                            "asset": {
                                "description": "Asset registry",
                                "type": "string",
                                "example": "1"
                            },
                            "auth": {
                                "description": "Authorisation",
                                "type": "string",
                                "example": "1"
                            },
                            "bf": {
                                "description": "Accounting",
                                "type": "string",
                                "example": "1"
                            },
                            "kf": {
                                "description": "Invoicing",
                                "type": "string",
                                "example": "1"
                            },
                            "crm": {
                                "description": "CRM",
                                "type": "string",
                                "example": "1"
                            },
                            "da": {
                                "description": "Archive",
                                "type": "string",
                                "example": "1"
                            },
                            "dashrep": {
                                "description": "Dashboard reports",
                                "type": "string",
                                "example": "1"
                            },
                            "emp": {
                                "description": "Employee",
                                "type": "string",
                                "example": "1"
                            },
                            "ptime": {
                                "description": "Personal time reporting",
                                "type": "string",
                                "example": "1"
                            }
                        },
                        "type": "object"
                    },
                    "app_admin_rights": {
                        "description": "Object containing user application ADMIN rights.",
                        "properties": {
                            "po": {
                                "description": "Purchase order",
                                "type": "string",
                                "example": "1"
                            },
                            "oof": {
                                "description": "Sales order",
                                "type": "string",
                                "example": "1"
                            },
                            "time": {
                                "description": "Time reporting",
                                "type": "string",
                                "example": "1"
                            },
                            "pr": {
                                "description": "Payroll",
                                "type": "string",
                                "example": "1"
                            },
                            "fins": {
                                "description": "Financial statements",
                                "type": "string",
                                "example": "1"
                            },
                            "asset": {
                                "description": "Asset registry",
                                "type": "string",
                                "example": "1"
                            },
                            "auth": {
                                "description": "Authorisation",
                                "type": "string",
                                "example": "1"
                            },
                            "bf": {
                                "description": "Accounting",
                                "type": "string",
                                "example": "1"
                            },
                            "kf": {
                                "description": "Invoicing",
                                "type": "string",
                                "example": "1"
                            },
                            "crm": {
                                "description": "CRM",
                                "type": "string",
                                "example": "1"
                            },
                            "da": {
                                "description": "Archive",
                                "type": "string",
                                "example": "1"
                            }
                        },
                        "type": "object"
                    }
                },
                "type": "object",
                "xml": {
                    "name": "userrights"
                }
            },
            "VatCode": {
                "properties": {
                    "code": {
                        "description": "Vat Code. Main identifier. Used in account to connect to correct VAT.",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "MP1"
                    },
                    "description": {
                        "description": "Short description of Vat Code",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "VAT Default"
                    },
                    "vatpercentage": {
                        "description": "Vat percentage connected to code in number format",
                        "type": "string",
                        "format": "max char: 1024",
                        "example": "24"
                    },
                    "translations": {
                        "description": "Vat code description translations",
                        "type": "array",
                        "format": "max char: 1024",
                        "items": {
                            "properties": {
                                "en_GB": {
                                    "type": "string",
                                    "example": "Moms Standard"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
                "type": "object",
                "xml": {
                    "name": "vatcode"
                }
            }
        },
        "parameters": {
            "fromdate": {
                "name": "from date",
                "in": "query",
                "description": "Optionally filter by a start date.",
                "required": false,
                "schema": {
                    "type": "string"
                }
            },
            "todate": {
                "name": "to date",
                "in": "query",
                "description": "Optionally filter by an end date.",
                "required": false,
                "schema": {
                    "type": "string"
                }
            },
            "frommodifieddate": {
                "name": "from last modified date",
                "in": "query",
                "description": "Optionally fetch objects that were modified after the given date.",
                "required": false,
                "schema": {
                    "type": "string",
                    "format": "YYYY-MM-DD HH:MM"
                }
            },
            "companynumber": {
                "name": "companynumber",
                "in": "query",
                "description": "Optionally filter by a company number.",
                "required": false,
                "schema": {
                    "type": "string"
                }
            },
            "customerinvoicefilter": {
                "name": "CustomerInvoiceFilter",
                "in": "query",
                "description": "Optionally filter by invoice status.",
                "required": false,
                "schema": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CustomerInvoiceFilter"
                    }
                }
            },
            "customerinvoicetype": {
                "name": "CustomerInvoiceType",
                "in": "query",
                "description": "Optionally filter by invoice type. Possible filters are invoice and cashinvoice. Invoice is default.",
                "required": false,
                "schema": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CustomerInvoiceType"
                    }
                }
            },
            "salesorderfilter": {
                "name": "SalesOrderFilter",
                "in": "query",
                "description": "Optionally filter by sales order status.",
                "required": false,
                "schema": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/SalesOrderFilter"
                    }
                }
            },
            "page": {
                "name": "page",
                "in": "query",
                "required": false,
                "schema": {
                    "type": "integer"
                }
            },
            "limit": {
                "name": "limit",
                "in": "query",
                "required": false,
                "schema": {
                    "type": "integer"
                }
            },
            "orderby": {
                "name": "orderby",
                "in": "query",
                "description": "Sort the list by column of choice. Options available are id, name, modified",
                "required": false,
                "schema": {
                    "type": "string"
                },
                "example": "modified"
            },
            "orderdirection": {
                "name": "orderdirection",
                "in": "query",
                "description": "Choose in which direction the list should be sorted. asc or desc",
                "required": false,
                "schema": {
                    "type": "string"
                },
                "example": "desc"
            }
        },
        "securitySchemes": {
            "Bearer": {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header",
                "scheme": "bearer"
            }
        }
    },
    "tags": [
        {
            "name": "account",
            "description": "Chart of accounts"
        },
        {
            "name": "application",
            "description": "* This feature is only available to Briox partners"
        },
        {
            "name": "assignment",
            "description": "Assignment"
        },
        {
            "name": "authorisation",
            "description": "Authorisation types for supplier invoices"
        },
        {
            "name": "bankpayment",
            "description": "Bank payment object"
        },
        {
            "name": "batch",
            "description": "Batch operations"
        },
        {
            "name": "brioxconnect",
            "description": "Briox Connect"
        },
        {
            "name": "clientaccesstoken",
            "description": "* This feature is only available to Briox partners"
        },
        {
            "name": "contract",
            "description": "Contract object"
        },
        {
            "name": "costcenter",
            "description": "Cost Center object"
        },
        {
            "name": "customer",
            "description": "Customer object"
        },
        {
            "name": "customerinvoice",
            "description": "Customer Invoice object"
        },
        {
            "name": "customerinvoicedelivery",
            "description": "Customer Invoice Delivery routes"
        },
        {
            "name": "customerinvoicedelivery",
            "description": "Customer Invoice Delivery routes"
        },
        {
            "name": "customerinvoicefactoring",
            "description": "Customer Invoice Factoring routes"
        },
        {
            "name": "defaultaccount",
            "description": "Default account object"
        },
        {
            "name": "documents",
            "description": "Reports, Logos, Archive and Linked Documents"
        },
        {
            "name": "educationorder",
            "description": "* This feature is only available to Briox partners with Educator rights"
        },
        {
            "name": "financialyear",
            "description": "Financial year object"
        },
        {
            "name": "householdservices",
            "description": "Household Services"
        },
        {
            "name": "integration",
            "description": "Integration object"
        },
        {
            "name": "item",
            "description": "Item objects"
        },
        {
            "name": "journal",
            "description": "Journal object"
        },
        {
            "name": "logs",
            "description": "System logs"
        },
        {
            "name": "openingbalance",
            "description": "Opening balance object"
        },
        {
            "name": "payment",
            "description": "Payment object"
        },
        {
            "name": "payroll",
            "description": "Payroll object"
        },
        {
            "name": "pricelist",
            "description": "Price list object"
        },
        {
            "name": "productorder",
            "description": "* This feature is only available to Briox partners"
        },
        {
            "name": "project",
            "description": "Project objects"
        },
        {
            "name": "salesorder",
            "description": "Sales order object"
        },
        {
            "name": "sie",
            "description": "Sie file export"
        },
        {
            "name": "supplier",
            "description": "Supplier object"
        },
        {
            "name": "supplierinvoice",
            "description": "Supplier Invoice object"
        },
        {
            "name": "supplierinvoicesimple",
            "description": "Supplier Invoice Simple object"
        },
        {
            "name": "token",
            "description": "Authentication & Access token objects"
        },
        {
            "name": "user",
            "description": "User object"
        },
        {
            "name": "usernotification",
            "description": "User notifications"
        },
        {
            "name": "usersettings",
            "description": "User settings"
        },
        {
            "name": "vatcode",
            "description": "Vat Code object"
        }
    ]
}