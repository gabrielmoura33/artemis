import { ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { resolve } from 'node:path';
import { MessagingModule } from 'src/messaging/messaging.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,

    MessagingModule,
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: resolve(process.cwd(), 'src/schema.gql'),
      uploads: true,
    }),
  ],
  providers: [],
})
export class HttpModule {}
