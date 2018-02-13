import { ENV } from './../core/env.config';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'KG4DCeLksnYobp5RyvgzteTVBXtZsI5T',
    CLIENT_DOMAIN: 'jwhardwick.au.auth0.com',
    AUDIENCE: 'https://jwhardwick.au.auth0.com/userinfo',
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile'
};
