import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
const USER_POOL_ID = import.meta.env.VITE_USER_POOL_ID;
const CLIENTID = import.meta.env.VITE_CLIENTID;
const REGION = import.meta.env.VITE_REGION;
const poolData = {
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENTID,
    region: REGION
};
const userPool = new CognitoUserPool(poolData);

const AuthService = {
    authenticate: (username: string, password: string): Promise<any> => {
        const authenticationData = {
            Username: username,
            Password: password
        };
        const authenticationDetails = new AuthenticationDetails(authenticationData);

        const userData = {
            Username: username,
            Pool: userPool
        };
        const cognitoUser = new CognitoUser(userData);

        return new Promise((resolve, reject) => {
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: (session) => {
                    resolve(session);
                },
                onFailure: (err) => {
                    reject(err);
                }
            });
        });
    },

    signOut: (): void => {
        const cognitoUser = userPool.getCurrentUser();
        if (cognitoUser) {
            cognitoUser.signOut();
        }
    },

    isAuthenticated: (): any => {
        const cognitoUser = userPool.getCurrentUser();
        return !!cognitoUser && cognitoUser.getUsername();
    }
};

export default AuthService;
