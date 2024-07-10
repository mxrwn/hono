import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getHello(): string {
    return this.projectsService.getHello();
  }
}
