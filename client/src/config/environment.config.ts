export interface EnvironmentScheme {
    url: string;
    host: string;
    scheme: string;
    subdomain: string;
    domain: string;
    port?: string;
    path?: string;
    query?: string;
}

export enum Environment {
    LOCALHOST = 'localhost',
    DEVELOPMENT = 'development',
    PRODUCTION = 'production'
}

const environments: {[key in Environment | string]: EnvironmentScheme} = {
    [Environment.PRODUCTION]: {
        url: "https://tm-prod.wroblewskipiotr.pl/api",
        host: "tm-prod.wroblewskipiotr.pl",
        scheme: "https://",
        subdomain: "tm-prod",
        domain: "wroblewskipiotr.pl",
    },
    [Environment.DEVELOPMENT]: {
        url: "https://tm-dev.wroblewskipiotr.pl/api",
        host: "tm-dev.wroblewskipiotr.pl",
        scheme: "https://",
        subdomain: "tm-dev",
        domain: "wroblewskipiotr.pl",
    },
    [Environment.LOCALHOST]: {
        url: "http://localhost:3000/api",
        host: "localhost",
        scheme: "http://",
        subdomain: "",
        domain: "localhost",
        port: "3000",
    },
};

export function getEnvironmentDetails(environment: Environment | string): EnvironmentScheme {
    return  environments[environment];
}
