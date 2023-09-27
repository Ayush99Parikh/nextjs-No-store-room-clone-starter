import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntervalServiceBase } from "./base/interval.service.base";

@Injectable()
export class IntervalService extends IntervalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
