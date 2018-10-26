import { environment } from '../../environments/environment';

export class ApiCollection {
    public static readonly ME = environment.apiUrl + 'me';
    public static readonly PASSWORD = environment.apiUrl + 'me/password';

    public static readonly AUTH_INFO = environment.apiUrl + 'auth/info';
    public static readonly AUTH_LOGIN = environment.apiUrl + 'auth/login';
    public static readonly AUTH_SOCIAL_LOGIN = environment.apiUrl + 'auth/socials';
    public static readonly AUTH_SOCIAL_REGISTER = environment.apiUrl + 'auth/socials/register';
    
    public static readonly HOME = environment.apiUrl + 'home';

    public static readonly APPLICATION_VERSIONS = environment.apiUrl + 'applications/versions';
    public static readonly APPLICATION_VERSION_CHECK = environment.apiUrl + 'applications/versions/check';
}
