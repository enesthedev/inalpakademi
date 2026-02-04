import { type Course } from "@/app/actions/courses";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-card">
      <div className="flex h-full flex-col space-y-6">
        <div className="flex flex-col space-y-1 px-8 pt-8">
          <h3 className="text-xl font-semibold text-foreground">
            {course.title}
          </h3>
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <span className="font-medium">{course.date}</span>
            <span className="px-2 text-xs text-muted-foreground/50">|</span>
            <span>{course.time}</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-8">
          <span className="text-sm text-muted-foreground">
            {course.location}
          </span>
          <div
            className={`h-fit rounded-full px-3 py-1 text-xs font-semibold uppercase ${
              course.type === "face-to-face"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {course.type === "face-to-face" ? "Yüz Yüze" : "Online"}
          </div>
        </div>

        <div className="mt-auto flex flex-col items-center space-y-4 border-t border-border px-8 pb-6 pt-4">
          <div className="flex w-full items-center space-x-4">
            <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                {course.instructor.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {course.instructor.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActiveCoursesSectionProps {
  courses: Course[];
}

export function ActiveCoursesSection({ courses }: ActiveCoursesSectionProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-surface py-20">
      <h2 className="mb-10 text-4xl font-semibold text-foreground">
        Aktif Dersler
      </h2>
      <div className="w-full max-w-screen-xl columns-1 gap-4 px-4 sm:columns-2 lg:columns-3">
        {courses.map((course) => (
          <div key={course.id} className="mb-4 break-inside-avoid">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
