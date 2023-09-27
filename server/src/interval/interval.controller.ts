import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IntervalService } from "./interval.service";
import { IntervalControllerBase } from "./base/interval.controller.base";

@swagger.ApiTags("intervals")
@common.Controller("intervals")
export class IntervalController extends IntervalControllerBase {
  constructor(
    protected readonly service: IntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
