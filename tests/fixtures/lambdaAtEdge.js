'use string';
exports.event = {
    root_object: {
        "Records": [
            {
                "cf": {
                    "config": {
                        "distributionDomainName": "d123.cloudfront.net",
                        "distributionId": "EDFDVBD6EXAMPLE",
                        "eventType": "viewer-request",
                        "requestId": "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
                    },
                    "request": {
                        "body": {
                            "action": "read-only",
                            "data": "eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=",
                            "encoding": "base64",
                            "inputTruncated": false
                        },
                        "clientIp": "2001:0db8:85a3:0:0:8a2e:0370:7334",
                        "querystring": "size=large",
                        "uri": "/",
                        "method": "GET",
                        "headers": {
                            "host": [
                                {
                                    "key": "Host",
                                    "value": "d111111abcdef8.cloudfront.net"
                                }
                            ],
                            "user-agent": [
                                {
                                    "key": "User-Agent",
                                    "value": "curl/7.51.0"
                                }
                            ]
                        },
                        "origin": {
                            "custom": {
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "example.com",
                                "keepaliveTimeout": 5,
                                "path": "/custom_path",
                                "port": 443,
                                "protocol": "https",
                                "readTimeout": 5,
                                "sslProtocols": [
                                    "TLSv1",
                                    "TLSv1.1"
                                ]
                            },
                            "s3": {
                                "authMethod": "origin-access-identity",
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "my-bucket.s3.amazonaws.com",
                                "path": "/s3_path",
                                "region": "us-east-1"
                            }
                        }
                    }
                }
            }
        ]
    },
    file: {
        "Records": [
            {
                "cf": {
                    "config": {
                        "distributionDomainName": "d123.cloudfront.net",
                        "distributionId": "EDFDVBD6EXAMPLE",
                        "eventType": "viewer-request",
                        "requestId": "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
                    },
                    "request": {
                        "body": {
                            "action": "read-only",
                            "data": "eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=",
                            "encoding": "base64",
                            "inputTruncated": false
                        },
                        "clientIp": "2001:0db8:85a3:0:0:8a2e:0370:7334",
                        "querystring": "size=large",
                        "uri": "/file.ext",
                        "method": "GET",
                        "headers": {
                            "host": [
                                {
                                    "key": "Host",
                                    "value": "d111111abcdef8.cloudfront.net"
                                }
                            ],
                            "user-agent": [
                                {
                                    "key": "User-Agent",
                                    "value": "curl/7.51.0"
                                }
                            ]
                        },
                        "origin": {
                            "custom": {
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "example.com",
                                "keepaliveTimeout": 5,
                                "path": "/custom_path",
                                "port": 443,
                                "protocol": "https",
                                "readTimeout": 5,
                                "sslProtocols": [
                                    "TLSv1",
                                    "TLSv1.1"
                                ]
                            },
                            "s3": {
                                "authMethod": "origin-access-identity",
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "my-bucket.s3.amazonaws.com",
                                "path": "/s3_path",
                                "region": "us-east-1"
                            }
                        }
                    }
                }
            }
        ]
    },
    subdirectory: {
        "Records": [
            {
                "cf": {
                    "config": {
                        "distributionDomainName": "d123.cloudfront.net",
                        "distributionId": "EDFDVBD6EXAMPLE",
                        "eventType": "viewer-request",
                        "requestId": "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
                    },
                    "request": {
                        "body": {
                            "action": "read-only",
                            "data": "eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=",
                            "encoding": "base64",
                            "inputTruncated": false
                        },
                        "clientIp": "2001:0db8:85a3:0:0:8a2e:0370:7334",
                        "querystring": "size=large",
                        "uri": "/subdirectory/",
                        "method": "GET",
                        "headers": {
                            "host": [
                                {
                                    "key": "Host",
                                    "value": "d111111abcdef8.cloudfront.net"
                                }
                            ],
                            "user-agent": [
                                {
                                    "key": "User-Agent",
                                    "value": "curl/7.51.0"
                                }
                            ]
                        },
                        "origin": {
                            "custom": {
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "example.com",
                                "keepaliveTimeout": 5,
                                "path": "/custom_path",
                                "port": 443,
                                "protocol": "https",
                                "readTimeout": 5,
                                "sslProtocols": [
                                    "TLSv1",
                                    "TLSv1.1"
                                ]
                            },
                            "s3": {
                                "authMethod": "origin-access-identity",
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "my-bucket.s3.amazonaws.com",
                                "path": "/s3_path",
                                "region": "us-east-1"
                            }
                        }
                    }
                }
            }
        ]
    },
    file_in_subdirectory: {
        "Records": [
            {
                "cf": {
                    "config": {
                        "distributionDomainName": "d123.cloudfront.net",
                        "distributionId": "EDFDVBD6EXAMPLE",
                        "eventType": "viewer-request",
                        "requestId": "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
                    },
                    "request": {
                        "body": {
                            "action": "read-only",
                            "data": "eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=",
                            "encoding": "base64",
                            "inputTruncated": false
                        },
                        "clientIp": "2001:0db8:85a3:0:0:8a2e:0370:7334",
                        "querystring": "size=large",
                        "uri": "/subdirectory/file.ext",
                        "method": "GET",
                        "headers": {
                            "host": [
                                {
                                    "key": "Host",
                                    "value": "d111111abcdef8.cloudfront.net"
                                }
                            ],
                            "user-agent": [
                                {
                                    "key": "User-Agent",
                                    "value": "curl/7.51.0"
                                }
                            ]
                        },
                        "origin": {
                            "custom": {
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "example.com",
                                "keepaliveTimeout": 5,
                                "path": "/custom_path",
                                "port": 443,
                                "protocol": "https",
                                "readTimeout": 5,
                                "sslProtocols": [
                                    "TLSv1",
                                    "TLSv1.1"
                                ]
                            },
                            "s3": {
                                "authMethod": "origin-access-identity",
                                "customHeaders": {
                                    "my-origin-custom-header": [
                                        {
                                            "key": "My-Origin-Custom-Header",
                                            "value": "Test"
                                        }
                                    ]
                                },
                                "domainName": "my-bucket.s3.amazonaws.com",
                                "path": "/s3_path",
                                "region": "us-east-1"
                            }
                        }
                    }
                }
            }
        ]
    }
};

exports.context = {
    webClient: {
        functionName: "testFunction",
        functionVersion: "1",
        invokedFunctionArn: "a",
        memoryLimitInMB: 1,
        awsRequestId: "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE==",
        logGroupName: null,
        logStreamName: null,
        callbackWaitsForEmptyEventLoop: false,
        getRemainingTimeInMillis: () => {
            return 100;
        }
    }
};

exports.callback = (error, response) => {
    if (error !== null) {
        return null;
    }
    return response;
};