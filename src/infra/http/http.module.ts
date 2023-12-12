import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { StorageModule } from '../storage/storage.module'
import { AuthModule } from '../auth/auth.module'

import { AuthenticateAdministratorController } from './controllers/administrators/authenticate-administrator.controller'
import { AuthenticateAdministratorUseCase } from '@/domain/logistic/application/use-cases/administrators/authenticate-administrator'
import { RegisterAdministratorController } from './controllers/administrators/register-administrator.controller'
import { RegisterAdministratorUseCase } from '@/domain/logistic/application/use-cases/administrators/register-administrator'
import { RegisterDeliverymanController } from './controllers/deliverymans/register-deliveryman.controller'
import { RegisterDeliverymanUseCase } from '@/domain/logistic/application/use-cases/deliveryman/register-deliveryman'
import { AuthenticateDeliverymanController } from './controllers/deliverymans/authenticate-deliveryman.controller'
import { AuthenticateDeliverymanUseCase } from '@/domain/logistic/application/use-cases/deliveryman/authenticate-deliveryman'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule, AuthModule],
  controllers: [
    AuthenticateAdministratorController,
    RegisterAdministratorController,
    RegisterDeliverymanController,
    AuthenticateDeliverymanController,
  ],
  providers: [
    AuthenticateAdministratorUseCase,
    RegisterAdministratorUseCase,
    RegisterDeliverymanUseCase,
    AuthenticateDeliverymanUseCase,
  ],
})
export class HttpModule {}
