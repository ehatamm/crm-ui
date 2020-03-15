
interface Contact {
  description: string;
  done: boolean;
}
import {inject} from 'aurelia-framework';
import { Pipeline } from './pipeline/pipeline';
export class App {
  pipelines: Pipeline[];

  heading = "Contacts";
  private pipeline: any;

  constructor(pipeline: Pipeline) {
    this.pipeline = pipeline;
    this.pipelines = this.pipeline.getPipelines();
  }
}

