const AWS = require("aws-sdk");

// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
AWS.config.update({
  // accessKeyId: "AKIA6AYF2HQB2HDQ42OR",
  // secretAccessKey: "WPL285O5pK60mntl+t9T15cCYVLWFQ8klxMGq4ew",
});

function invokeLambda(document) {
  return new Promise((resolve, reject) => {
    //here our function should be implemented
    actualLambdaCall(
      document,
      (SuccessResponse) => {
        resolve(SuccessResponse);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}

function actualLambdaCall(uri, successCallback, errorCallback) {
  var lambda = new AWS.Lambda();

  var params = {
    FunctionName: "callTextractFun" /* required */,
    Payload: JSON.stringify(uri),
  };
  lambda.invoke(params, function (err, data) {
    if (err) errorCallback(err); // an error occurred
    else successCallback(data.Payload); // successful response
  });
}

exports.invokeLambda = invokeLambda;
