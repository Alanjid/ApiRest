import { decodeToken } from "react-jwt";

const JWTdecrypt = async (access) => {
    const myDecodedToken = decodeToken(access);
    const body = {
        "token" : access,
        "rol" : myDecodedToken.groups[0]
    };

    return (body)
}

export default JWTdecrypt