from node:carbon-alpine

env BEAT_CONNECT_DIR /opt/BeatConnect
env WEB_SERVICE_PORT 1337
env DATABASE_URI mongodb://localhost:27017/BeatConnect

run mkdir $BEAT_CONNECT_DIR
add . $BEAT_CONNECT_DIR
run mv $BEAT_CONNECT_DIR/launch.sh / \
    && cd $BEAT_CONNECT_DIR \
    && npm install \
    && cd web-service \
    && npm install

run apk add mongodb

expose 4200 4200/tcp
expose $WEB_SERVICE_PORT $WEB_SERVICE_PORT/tcp
expose 27017 27017/tcp

cmd ["/bin/sh", "./launch.sh"]