import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import * as joi from 'joi';
import { ProjectsService } from './projects.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { ProjectsRepository } from './projects.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
      }),
      envFilePath: './apps/projects/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsRepository],
})
export class ProjectsModule {}
