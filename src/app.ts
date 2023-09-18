import { envs } from './config';
import { MongoDatabase } from './data/mongodb';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';




(()=> {
  main();
})()



async function main (){
  
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  })

  
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  })
    .start()
}




