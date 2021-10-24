import { Module } from '@nestjs/common';
import { TextResolver } from './text.resolver';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [AppService, TextResolver],
})
export class AppModule {}
