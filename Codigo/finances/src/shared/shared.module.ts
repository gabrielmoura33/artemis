import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HttpModule } from 'src/http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule],
  exports: [DatabaseModule, HttpModule],
})
export class SharedModule {}
