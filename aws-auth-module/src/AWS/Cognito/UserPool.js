import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-north-1_baD1MoUwG",
    ClientId: "4ctovikvedjr1jv4102b24t2lb"
}

export default new CognitoUserPool(poolData);