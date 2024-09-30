const currUrl = window.location.href;

const REDIRECT_BASE_URL = currUrl.includes("localhost")
  ? "http://localhost:3000"
  : "https://ppomoppomo.netlify.app";

const OAUTH_CLIENT_ID = {
  GOOGLE:
    "1058287761952-u8cgiflfpg23viilo4md87p0ultildo6.apps.googleusercontent.com",
  GITHUB: "",
};
const OAUTH_REDIRECT_URL = {
  GOOGLE: `${REDIRECT_BASE_URL}/oauth/gmail`,
  GITHUB: `${REDIRECT_BASE_URL}/oauth/github`,
};

export const GOOGLE_SOCIAL_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CLIENT_ID["GOOGLE"]}&redirect_uri=${OAUTH_REDIRECT_URL["GOOGLE"]}&response_type=code&scope=email profile`;

export const GITHUB_SOCIAL_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${OAUTH_CLIENT_ID["GITHUB"]}&redirect_uri=${OAUTH_REDIRECT_URL["GITHUB"]}&scope=user`;
