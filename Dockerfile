# @see https://github.com/refinedev/dockerfiles/blob/main/vite/Dockerfile.nginx

FROM refinedev/node:18 AS base

FROM base as deps

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base as builder

ENV NODE_ENV production

COPY --from=deps /app/refine/node_modules ./node_modules

COPY . .

RUN npm run build

FROM nginx:1.21.3-alpine as runner

ENV NODE_ENV production

COPY --from=builder /app/refine/dist /usr/share/nginx/html

RUN touch /etc/nginx/conf.d/default.conf

RUN <<EOF
echo "server {" >> /etc/nginx/conf.d/default.conf
echo "  listen 80;" >> /etc/nginx/conf.d/default.conf
echo "" >> /etc/nginx/conf.d/default.conf
echo "  gzip on;" >> /etc/nginx/conf.d/default.conf
echo "  gzip_proxied any;" >> /etc/nginx/conf.d/default.conf
echo "  gzip_comp_level 6;" >> /etc/nginx/conf.d/default.conf
echo "  gzip_buffers 16 8k;" >> /etc/nginx/conf.d/default.conf
echo "  gzip_http_version 1.1;" >> /etc/nginx/conf.d/default.conf
echo "  gzip_types text/css application/javascript application/json application/font-woff application/font-tff image/gif image/png image/svg+xml application/octet-stream;" >> /etc/nginx/conf.d/default.conf
echo "  gzip_vary on;" >> /etc/nginx/conf.d/default.conf
echo "" >> /etc/nginx/conf.d/default.conf
echo "  location / {" >> /etc/nginx/conf.d/default.conf
echo "    root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf
echo "    index  index.html index.htm;" >> /etc/nginx/conf.d/default.conf
echo "    try_files $uri /index.html =404;" >> /etc/nginx/conf.d/default.conf
echo "  }" >> /etc/nginx/conf.d/default.conf
echo "" >> /etc/nginx/conf.d/default.conf
echo "  error_page   500 502 503 504  /50x.html;" >> /etc/nginx/conf.d/default.conf
echo "" >> /etc/nginx/conf.d/default.conf
echo "  location = /50x.html {" >> /etc/nginx/conf.d/default.conf
echo "    root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf
echo "  }" >> /etc/nginx/conf.d/default.conf
echo "}" >> /etc/nginx/conf.d/default.conf
EOF

CMD ["nginx", "-g", "daemon off;"]
