import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComicsModule } from './comics/comics.module';
import { CreatorsModule } from './creators/creators.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/maison-infinity'), ComicsModule, CreatorsModule, CharactersModule],
})
export class AppModule {}
