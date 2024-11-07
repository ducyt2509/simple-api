module.exports = {
  apps: [
    {
      name: 'api-8001',
      script: './index.js',
      args: 'port 8001',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PORT: 8001,
      },
    },
    {
      name: 'api-8002',
      script: './index.js',
      args: 'port 8002',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PORT: 8002,
      },
    },
    {
      name: 'api-8003',
      script: './index.js',
      args: 'port 8003',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PORT: 8003,
      },
    },
  ],
};
