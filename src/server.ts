/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import { socketHelper } from './app/utils/socket';
import {Server} from 'socket.io'





let server:any

async function main() {
  try {
    await mongoose.connect(config.database_url as string);


    server = app.listen(config.port, () => {
      console.log(`port runnig on ${config.port}`)
    });


   //socket
   const io = new Server(server, {
    pingTimeout:6000,
    cors: {
      origin: '*',
    },
  });
  socketHelper.socket(io);

  //@ts-ignore
  global.io = io;

  } catch (err) {
    console.log(err);
  }
}

main();
