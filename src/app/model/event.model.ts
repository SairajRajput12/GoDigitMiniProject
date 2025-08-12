export class Event {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public time?: string,
    public location?: string,
    public image?: string,
  ) {}
}
