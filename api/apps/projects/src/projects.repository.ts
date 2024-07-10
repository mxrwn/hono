import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class ProjectsRepository extends AbstractRepository<Project> {
  protected readonly logger = new Logger(ProjectsRepository.name);

  constructor(
    @InjectModel(Project.name) projectModel: Model<Project>,
    @InjectConnection() connection: Connection,
  ) {
    super(projectModel, connection);
  }
}
