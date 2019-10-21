const envs = {
  local: {
    ENV: 'local',
    API_BASE: 'http://localhost:5000'
  },
  development: {
    ENV: 'development',
    API_BASE: 'http://localhost:5000'
  },
  staging: {
    ENV: 'staging'
  },
  production: {
    ENV: 'production',
    API_BASE: 'http://emporioserver-env.buxqh9xxrb.us-east-2.elasticbeanstalk.com'
  }
};

const calculateConfig = () => {
  const envConfig = process.env.NODE_ENV ? envs[process.env.NODE_ENV] : 'development';
  return envConfig;
};

export default calculateConfig();
