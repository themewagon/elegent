export const rootPaths = {
    root: '/',
    pagesRoot: 'pages',
    authRoot: 'authentication',
    errorRoot: 'error',
}

export default {
    home: `/${rootPaths.root}`,
    login: `/${rootPaths.authRoot}/login`,
    signup: `/${rootPaths.authRoot}/sign-up`,
    404: `/${rootPaths.errorRoot}/404`
}