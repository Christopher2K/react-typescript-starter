const appEnvs: Record<string, string> = {
  production: 'prod',
  development: 'dev',
}

const reactAppHostEnv = process.env.REACT_APP_HOST_ENV

export const env = reactAppHostEnv ? appEnvs[reactAppHostEnv] || 'local' : 'local'
