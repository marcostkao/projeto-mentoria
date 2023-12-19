import { Request, Response } from "express";
import { ApplicationsService } from "../services/ApplicationService";

const applicationsService = new ApplicationsService();

class ApplicationsController {
  handle(request: Request, response: Response) {
    const { name, shortDescription, longDescription, authors } = request.body;

    const listOfAuthors = authors.split(",");

    const createdAuthors = applicationsService.execute({
      name,
      shortDescription,
      longDescription,
      authors: listOfAuthors,
    });

    return response.json(createdAuthors);
  }

  list(request: Request, response: Response) {
    const applicationsList = applicationsService.list();
    return response.json(applicationsList);
  }
}

export { ApplicationsController };
