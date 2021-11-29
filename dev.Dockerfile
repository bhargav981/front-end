FROM node:11

ARG ssh_prv_key

RUN mkdir -p /root/.ssh && \
    echo "$ssh_prv_key" > /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa
RUN ssh -o StrictHostKeyChecking=no -vT git@code.knolskape.com 2>&1 | grep -i aut

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT [ "yarn", "start" ]