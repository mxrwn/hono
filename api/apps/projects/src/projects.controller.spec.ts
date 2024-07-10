import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

describe('ProjectsController', () => {
  let projectsController: ProjectsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService],
    }).compile();

    projectsController = app.get<ProjectsController>(ProjectsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(projectsController.getHello()).toBe('Hello World!');
    });
  });
});
