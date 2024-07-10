import { AbstractDocument } from '@app/common';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Project extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  picture: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
