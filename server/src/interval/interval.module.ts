import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IntervalModuleBase } from "./base/interval.module.base";
import { IntervalService } from "./interval.service";
import { IntervalController } from "./interval.controller";
import { IntervalResolver } from "./interval.resolver";

@Module({
  imports: [IntervalModuleBase, forwardRef(() => AuthModule)],
  controllers: [IntervalController],
  providers: [IntervalService, IntervalResolver],
  exports: [IntervalService],
})
export class IntervalModule {}
