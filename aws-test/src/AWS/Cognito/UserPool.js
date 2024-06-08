import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_N4RTo2z3C",
    ClientId: "5kvjc0g471884e73ill79sojtp"
}

export default new CognitoUserPool(poolData);