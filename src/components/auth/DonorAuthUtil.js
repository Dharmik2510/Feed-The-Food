import { Amplify, Auth } from "aws-amplify";

export const DonorAuthConfigure = () => {
  Amplify.configure({
    Auth: {
      // region: "us-west-2",
      // userPoolId: "us-west-2_GiVDlUES0",
      // userPoolWebClientId: "1lvv802tm53co0172n8j37mnrn",
    },
  });
};

export const NGOAuthConfigure = () => {
  Amplify.configure({
    Auth: {
      // region: "us-west-2",
      // userPoolId: "us-west-2_A9U5BMNrN",
      // userPoolWebClientId: "14hqqeapu3n39ihlk3b3btoskd",
    },
  });
};

export const AdminAuthConfigure = () => {
  Amplify.configure({
    Auth: {
      // region: "us-west-2",
      // userPoolId: "us-west-2_9cwyF5qIR",
      // userPoolWebClientId: "8hrm99eenk8dfsvvet9d85ies",
    },
  });
};

export const CreateAccountInDonorPool = (name, email, password) => {
  return Auth.signUp({
    username: email,
    password: password,
    attributes: {
      email: email,
      name: name,
    },
  });
};

export const SignInAsDonor = (email, password) => {
  return Auth.signIn(email, password);
};

export const confirmDonorAccount = (email, code) => {
  return Auth.confirmSignUp(email, code);
};
