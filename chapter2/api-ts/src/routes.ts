import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    const body = request.body

    const data = { name: 'Node', duration: 7, educator: 'Kaique' }

    CreateCourseService.execute(data)

    return response.json({ error: false, message: 'Created' })
}
