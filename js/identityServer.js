var identity = {"swagger":"2.0","info":{"description":"Identity Server to Singapur Project","version":"1.0","title":"Leroy Merlin Identity Server","termsOfService":"https://www.everis.com","license":{"name":"everis","url":"https://www.everis.com"}},"host":"localhost:8093","basePath":"/","tags":[{"name":"PasswordRestController","description":"Sesion related operations"},{"name":"SessionRestController","description":"Sesion related operations"},{"name":"TokenRestController","description":"Token related operations"},{"name":"UserRestController","description":"User related operations"},{"name":"alive-controller-impl","description":"Alive Controller Impl"}],"paths":{"/health/live":{"get":{"tags":["alive-controller-impl"],"summary":"keepAlive","operationId":"keepAliveUsingGET","produces":["application/json;charset=UTF-8"],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/oauth/session/logout":{"post":{"tags":["SessionRestController"],"summary":"User logout actions","operationId":"logoutSessionUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"Authorization","in":"header","description":"Authorization","required":true,"type":"string"}],"responses":{"200":{"description":"The user logs out correctly ","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"201":{"description":"Created"},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/oauth/user/{userId}/password":{"post":{"tags":["PasswordRestController"],"summary":"Change the password given by default","operationId":"changeDefaultPasswordUsingPOST","consumes":["application/json"],"produces":["application/json"],"parameters":[{"name":"Authorization","in":"header","description":"Authorization","required":true,"type":"string"},{"in":"body","name":"changeDefaultPasswordRest","description":"credentials","required":true,"schema":{"$ref":"#/definitions/ChangeDefaultPasswordRest"}},{"name":"userId","in":"path","description":"userId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"The default password is changed, the new password meets the requirements","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"201":{"description":"Created"},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false},"put":{"tags":["PasswordRestController"],"summary":"Voluntary change of password","operationId":"changeKnownPasswordUsingPUT","consumes":["application/json"],"produces":["application/json"],"parameters":[{"in":"body","name":"changeKnownPasswordRest","description":"credentials","required":true,"schema":{"$ref":"#/definitions/ChangeKnownPasswordRest"}},{"name":"userId","in":"path","description":"userId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"The previous and new passwords are correct and meet the requeriements","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"201":{"description":"Created"},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/oauth/user/{userId}/temporal":{"post":{"tags":["TokenRestController"],"summary":"Retrives a temporal token for the user to grant them access","operationId":"retrieveTemporalTokenUsingPOST","consumes":["application/json"],"produces":["application/json"],"parameters":[{"name":"Authorization","in":"header","description":"Authorization","required":true,"type":"string"},{"name":"userId","in":"path","description":"userId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"The user id is correct and a token is returned","schema":{"$ref":"#/definitions/SingapurResponse«OAuth2AccessToken»"}},"201":{"description":"Created"},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/oauth/users":{"post":{"tags":["UserRestController"],"summary":"Creates a  new user, saves it into the database","operationId":"createUserUsingPOST","consumes":["application/json"],"produces":["application/json"],"parameters":[{"in":"body","name":"userRest","description":"newUser","required":true,"schema":{"$ref":"#/definitions/UserRest"}}],"responses":{"200":{"description":"The user is correctly created and saved","schema":{"$ref":"#/definitions/SingapurResponse«UserRest»"}},"201":{"description":"Created"},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/oauth/users/{userId}":{"put":{"tags":["UserRestController"],"summary":"Update a user, update his informations into the database","operationId":"updateUserUsingPUT","consumes":["application/json"],"produces":["application/json"],"parameters":[{"name":"userId","in":"path","description":"userId","required":true,"type":"integer","format":"int64"},{"in":"body","name":"userRest","description":"newUser","required":true,"schema":{"$ref":"#/definitions/UserRest"}}],"responses":{"200":{"description":"The user is correctly updated and saved","schema":{"$ref":"#/definitions/SingapurResponse«UserRest»"}},"201":{"description":"Created"},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false},"delete":{"tags":["UserRestController"],"summary":"Deletes a user from the database","operationId":"deleteUserUsingDELETE","produces":["application/json"],"parameters":[{"name":"userId","in":"path","description":"userId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"The user is deleted from the database","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"204":{"description":"No Content","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"400":{"description":"Bad request"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"500":{"description":"Internal server error"}},"deprecated":false}}},"definitions":{"ChangeDefaultPasswordRest":{"type":"object","required":["newPassword"],"properties":{"newPassword":{"type":"string","description":"New password encoded base64"}},"title":"ChangeDefaultPasswordRest"},"ChangeKnownPasswordRest":{"type":"object","required":["currentPassword","newPassword"],"properties":{"currentPassword":{"type":"string","description":"Current password encoded base64"},"newPassword":{"type":"string","description":"New password encoded base64"}},"title":"ChangeKnownPasswordRest"},"OAuth2AccessToken":{"type":"object","properties":{"additionalInformation":{"type":"object"},"expiration":{"type":"string","format":"date-time"},"expired":{"type":"boolean"},"expiresIn":{"type":"integer","format":"int32"},"refreshToken":{"$ref":"#/definitions/OAuth2RefreshToken"},"scope":{"type":"array","items":{"type":"string"}},"tokenType":{"type":"string"},"value":{"type":"string"}},"title":"OAuth2AccessToken"},"OAuth2RefreshToken":{"type":"object","properties":{"value":{"type":"string"}},"title":"OAuth2RefreshToken"},"SingapurResponse«OAuth2AccessToken»":{"type":"object","properties":{"code":{"type":"string","description":"Status code, extra information related to HTTP response"},"data":{"description":"Contain data related to request","$ref":"#/definitions/OAuth2AccessToken"},"message":{"type":"string","description":"Specific message, result of the action"},"status":{"type":"string","description":"Result of the action, for example \"Success\"."}},"title":"SingapurResponse«OAuth2AccessToken»"},"SingapurResponse«UserRest»":{"type":"object","properties":{"code":{"type":"string","description":"Status code, extra information related to HTTP response"},"data":{"description":"Contain data related to request","$ref":"#/definitions/UserRest"},"message":{"type":"string","description":"Specific message, result of the action"},"status":{"type":"string","description":"Result of the action, for example \"Success\"."}},"title":"SingapurResponse«UserRest»"},"SingapurResponse«string»":{"type":"object","properties":{"code":{"type":"string","description":"Status code, extra information related to HTTP response"},"data":{"type":"string","description":"Contain data related to request"},"message":{"type":"string","description":"Specific message, result of the action"},"status":{"type":"string","description":"Result of the action, for example \"Success\"."}},"title":"SingapurResponse«string»"},"UserRest":{"type":"object","properties":{"username":{"type":"string","description":"This atribute contains de emails user \n Must match the regular expression [A-Za-z0-9]+(?:[\\.\\-\\_]?[A-Za-z0-9]+)+@[A-Za-z0-9]+(?:[\\.\\-\\_][A-Za-z0-9]+)*(?:[\\.][A-Za-z0-9]+)+ when mandatory or filled."},"password":{"type":"string","description":"This atribute contains de password \n Encoded in base 64"},"userId":{"type":"integer","format":"int64","description":"Number identifing the user"},"clientId":{"type":"string","description":"Number identifing the user as a client"}},"title":"UserRest"}}}