const AWS = require("aws-sdk");
const router = require("express").Router();

AWS.config.update({
  // accessKeyId: "AKIA32UGKKHVBSQP33B4",
  // secretAccessKey: "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",
  // region: "us-east-1",
});

let SES = new AWS.SES();

router.get("/", (req, res) => {
  const params = {
    EmailAddress: "maanmandaliya9.mm@gmail.com",
  };

  SES.verifyEmailAddress(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
