FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BlackKingdoms/BlackKingdom /root/BlackKingdom
WORKDIR /root/BlackKingdom/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
