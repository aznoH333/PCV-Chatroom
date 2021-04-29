export class User{
  constructor(private name: string, private id: number) {}

  public getName(): string{
    return this.name;
  }
  public getId(): number{
    return this.id;
  }
}
