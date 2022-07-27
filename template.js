var template =
  '<body>\r\n  <div style="font-family: Arial, Helvetica, sans-serif;">\r\n    <div\r\n      style="max-width: 900px;display: block;margin-left: auto; margin-right: auto"\r\n    >\r\n      <div\r\n        style="max-width: 900px; background-color:#ffffff; border-radius: 12px;  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05); margin-bottom: 12px;"\r\n      >\r\n        <div id="header" style="padding:12px; text-align: center;">\r\n          <span style="font-size: 1.8em; font-weight:600; margin-top:3em"\r\n            >Feed The Food.</span\r\n          >\r\n        </div>\r\n        <div style="padding:12px; text-align: center; ">\r\n          <img\r\n            style="width: 100%; border-top-left-radius: 9pt;  border-top-right-radius: 9pt"\r\n            src="https://post.healthline.com/wp-content/uploads/2020/09/vegetarian-diet-plan-732x549-thumbnail.jpg"\r\n          />\r\n        </div>\r\n        <div style="padding:3em 1.5em 6em 1.5em;">\r\n          <h1 style="color:#151a22">Hello,</h1>\r\n          <h1 style="color:#151a22">{{name}}</h1>\r\n\r\n          <p style="color:#3a4758; font-size: 1.2em">\r\n            Thank you \uD83D\uDE09 for subscribing to Feed The Food.\r\n          </p>\r\n          <p style="color:#3a4758; font-size: 1.2em">\r\n            Congratulations!! you have successfully registered with Feed The Food famliy. And we are happy to have you as a newest friend!! \u2764\uFE0F Donate the food to society and make it better place to live!!.\r\n          </p>\r\n        </div>\r\n\r\n        <div\r\n          style="width:100%; background-color:#ffffff; border-radius: 12px;  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05); text-align: center; margin:1.2em 0"\r\n        >\r\n        </div>\r\n\r\n        <div\r\n          style="background: linear-gradient(90deg, rgba(83,55,210,1) 0%, rgba(68,88,206,1) 60%); height: 4.5rem; text-align: center; "\r\n        >\r\n          <div style="padding-top: 24px">\r\n            <a\r\n              href="http://localhost:3000/"\r\n              style="text-decoration:none; color:#ffffff; font-size: 1.2em"\r\n              >Donate with us</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n';

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "REGION" });

// Create createTemplate params
var params = {
  Template: {
    TemplateName: "welcome_email_template" /* required */,
    HtmlPart: template,
    SubjectPart: "Welcome {{name}} to Feed The Food",
    TextPart: "Test email body",
  },
};

// Create the promise and SES service object
var templatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
  .createTemplate(params)
  .promise();

// Handle promise's fulfilled/rejected states
templatePromise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
