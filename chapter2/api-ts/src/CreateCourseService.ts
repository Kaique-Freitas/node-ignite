interface Course {
    name: string;
    duration: number;
    educator: string;
}

class CreateCourseService {
    execute({ name }: Course) {
        console.log(name)
    }
}

export default new CreateCourseService()