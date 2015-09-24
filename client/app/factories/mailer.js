var app = angular.module("onlinelabApp");

app.factory("Mailer", function($http){
    return {
      sendEmail: function(msg){

        var fromEmail = 'order@online-lab.ru';
        var fromName = 'OnlineLab';
        var toEmail = 'ds007007@yandex.ru';
        var replyTo = 'email';
        var key = 'TJdPhYZqNObq2pUPjJnG5w';
        var subject = "Новая заявка с сайта Online-Lab.ru";

        //delete default content-type in header
        delete $http.defaults.headers.common['X-Requested-With']

        return $http.post('https://mandrillapp.com/api/1.0//messages/send.json', {
                      'key': key,
                      'message': {
                          'html': msg,
                          'subject': subject,
                          'from_email': fromEmail,
                          'from_name': fromName,
                          'to': [
                              {
                                  'email': toEmail,
                                  'type': 'to'
                              }
                          ]
                      }
                  })
                  .success(function(data, status, headers, config){
                    
                  });

      }
    };
  }
);