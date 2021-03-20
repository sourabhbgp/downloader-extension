export class YoutubeURLChangeEmitter {
  private url: string;

  constructor(url: string) {
    this.url = url;
    this.emit();
  }

  private emit() {
    console.log(this.url);
  }
}
