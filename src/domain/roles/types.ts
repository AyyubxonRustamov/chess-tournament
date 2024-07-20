export interface IRole {
  id?: string;

  title: string;

  user: {
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };
  role: {
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };

  player: {
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };

  tournament: {
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };

  match: {
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };
}
