var notification = {"swagger":"2.0","info":{"description":"Notification microservice for the Singapur Project. The microservice's objective is offering diferent notifications to the clients \n Email \n SMS \n Push notification \n Confluence URL: https://steps.everis.com/confluence/display/PROLEMER/Microservice+Notification+Server                  ","version":"1.0","title":"Leroy Merlin Notification Server","termsOfService":"https://www.everis.com","license":{"name":"everis","url":"https://www.everis.com"}},"host":"localhost:8011","basePath":"/","tags":[{"name":"Email Rest Controller","description":"Email Operations"},{"name":"Notification Rest Controller","description":"Notification Operations"},{"name":"Push Notification Rest Controller","description":"Push FCM Notification Controller Impl"},{"name":"Push Rest Controller","description":"Push Operations"},{"name":"Sms Rest Controller","description":"Sms Controller Impl"}],"paths":{"/notification/v1/emails":{"post":{"tags":["Email Rest Controller"],"summary":"Sends an email notification to the specified user","operationId":"processSendEmailUsingPOST","consumes":["application/json"],"produces":["application/json"],"parameters":[{"in":"body","name":"sendEmailRequestRest","description":"sendEmailRequestRest","required":true,"schema":{"$ref":"#/definitions/SendEmailRequestRest"}}],"responses":{"200":{"description":"The email has been successfuly sent","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"201":{"description":"Created"},"400":{"description":"Bad request \r\n"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/notification/v1/notifications":{"get":{"tags":["Notification Rest Controller"],"summary":"Retrieve the notification details by the provided reference and notification status","operationId":"getNotificationUsingGET","produces":["application/json;charset=UTF-8"],"parameters":[{"name":"appName","in":"query","description":"appName","required":true,"type":"string"},{"name":"referenceId","in":"query","description":"referenceId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"The notification is found and it's returned to the user","schema":{"$ref":"#/definitions/SingapurResponse«NotificationRest»"}},"400":{"description":"Bad request \r\n"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/notification/v1/pushs":{"post":{"tags":["Push Notification Rest Controller"],"summary":"Sends a push notification to the specified professional","operationId":"processSendPushUsingPOST","consumes":["application/json"],"produces":["application/json"],"parameters":[{"in":"body","name":"pushNotificationRest","description":"pushNotificationRest","required":true,"schema":{"$ref":"#/definitions/PushNotificationRest"}}],"responses":{"200":{"description":"The notification Push has been successfuly sent","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"201":{"description":"Created"},"400":{"description":"Bad request \r\n"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}},"/notification/v1/sms":{"post":{"tags":["Sms Rest Controller"],"summary":"${sms.description}","operationId":"processSendSmsUsingPOST","consumes":["application/json"],"produces":["application/json"],"parameters":[{"in":"body","name":"sendSmsRequestRest","description":"sendSmsRequestRest","required":true,"schema":{"$ref":"#/definitions/SendSmsRequestRest"}}],"responses":{"200":{"description":"The notification Sms has been successfuly sent","schema":{"$ref":"#/definitions/SingapurResponse«string»"}},"201":{"description":"Created"},"400":{"description":"Bad request \r\n"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"},"500":{"description":"Internal server error"}},"deprecated":false}}},"definitions":{"NotificationRest":{"type":"object","properties":{"appName":{"type":"string","description":"Name of the aplication sending the email/push"},"id":{"type":"integer","format":"int64","description":"Notification id"},"referenceId":{"type":"integer","format":"int64","description":"Notification reference Id"},"status":{"type":"string","description":"Status of the notification"},"templateCode":{"type":"string","description":"Template used to give content to the email/push notification"},"type":{"type":"integer","format":"int64","description":"The type of the notification"}},"title":"NotificationRest"},"PushNotificationRest":{"type":"object","required":["appName","referenceId","templateCode"],"properties":{"appName":{"type":"string","description":"Name of the aplication sending the email/push"},"data":{"type":"object","description":"List with a data payload to be sent in a push notification","additionalProperties":{"type":"string"}},"deviceIdKey":{"type":"string","description":"The id of the phone receiver of push notification"},"dynamicParameters":{"type":"object","description":"List of parameters which are different in every email/push notification ","additionalProperties":{"type":"string"}},"referenceId":{"type":"integer","format":"int64","description":"Notification reference Id"},"templateCode":{"type":"string","description":"Template used to give content to the email/push notification"}},"title":"PushNotificationRest"},"SendEmailRequestRest":{"type":"object","required":["appName","receiver","referenceId","templateCode"],"properties":{"appName":{"type":"string","description":"Name of the aplication sending the email/push"},"copy":{"type":"string","description":"People receiving the email in copy"},"dynamicParameters":{"type":"object","description":"List of parameters which are different in every email/push notification ","additionalProperties":{"type":"string"}},"receiver":{"type":"string","description":" The receiver of the email"},"referenceId":{"type":"integer","format":"int64","description":"Notification reference Id"},"templateCode":{"type":"string","description":"Template used to give content to the email/push notification"}},"title":"SendEmailRequestRest"},"SendSmsRequestRest":{"type":"object","required":["appName","receiver","referenceId","templateCode"],"properties":{"appName":{"type":"string","description":"Name of the aplication sending the email/push"},"dynamicParameters":{"type":"object","description":"List of parameters which are different in every email/push notification ","additionalProperties":{"type":"string"}},"receiver":{"type":"string","description":" The receiver of the email"},"referenceId":{"type":"integer","format":"int64","description":"Notification reference Id"},"templateCode":{"type":"string","description":"Template used to give content to the email/push notification"}},"title":"SendSmsRequestRest"},"SingapurResponse«NotificationRest»":{"type":"object","properties":{"code":{"type":"string"},"data":{"$ref":"#/definitions/NotificationRest"},"message":{"type":"string"},"status":{"type":"string"}},"title":"SingapurResponse«NotificationRest»"},"SingapurResponse«string»":{"type":"object","properties":{"code":{"type":"string"},"data":{"type":"string"},"message":{"type":"string"},"status":{"type":"string"}},"title":"SingapurResponse«string»"}}}