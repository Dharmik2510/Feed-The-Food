import { Amplify, Auth } from "aws-amplify";

export const DonorAuthConfigure = () => {
  Amplify.configure({
    Auth: {
    
    },
  });
};

export const NGOAuthConfigure = () => {
  Amplify.configure({
    Auth: {
    
    },
  });
};

export const AdminAuthConfigure = () => {
  Amplify.configure({
    Auth: {
     
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
