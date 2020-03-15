
import { HttpClient} from "aurelia-http-client";

export class Pipeline {
  public url: string = window.location.host;
  private apiPort: number = 7463;
  public heading: string;
  pipelines: Pipeline[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.heading = 'Pipelines';
  }

  getPipelines(): Pipeline[] {
    console.log("Pipeline service with url: " + this.url);
    this.httpClient.get(this.url + this.apiPort + '/api' + '/pipelines')
      .then(
      data => {
        this.pipelines = data.content;
      }
    )
      .catch(error => {
        console.error("Could not get pipelines: " + error);
      });
    return this.pipelines;
  }

}
