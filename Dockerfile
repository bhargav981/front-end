# Stage 1 - the build process
FROM node:11.14.0 as deps

ARG ssh_prv_key
RUN mkdir -p /root/.ssh
RUN echo "$ssh_prv_key" > /root/.ssh/id_rsa && \
   chmod 600 /root/.ssh/id_rsa
RUN ssh -o StrictHostKeyChecking=no -vT git@code.knolskape.com 2>&1 | grep -i aut

# WORKDIR  /src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn build

FROM nginx

COPY --from=deps ./build /usr/share/nginx/html


EXPOSE 80 443
