import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwt-auth.guard';
import { UserModule } from './infra/http/modules/user/user.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { TaskModule } from './infra/http/modules/task/task.module';

@Module({
  imports: [UserModule, AuthModule, TaskModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
