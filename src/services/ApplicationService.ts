interface IApplication {
  name: string;
  shortDescription: string;
  longDescription: string;
  authors: string[];
}

class ApplicationsService {
  private applications: IApplication[];

  constructor() {
    this.applications = [];
  }

  execute({ name, shortDescription, longDescription, authors }: IApplication) {
    const newApplication: IApplication = {
      name,
      shortDescription,
      longDescription,
      authors,
    };

    this.applications.push(newApplication);
    return newApplication;
  }

  list() {
    return this.applications;
  }
}

export { ApplicationsService };
