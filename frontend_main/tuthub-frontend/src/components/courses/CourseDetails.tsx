import { useState } from "react";
import Image from "next/image";
import { Play, Star, Users, Clock, MessageSquare } from "lucide-react";

interface CourseDetailsProps {
  course: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    teacher: {
      id: string;
      name: string;
      avatar?: string;
    };
    category: string;
    level: string;
    price: number;
    rating: number;
    enrolledStudents: number;
    duration: string;
    youtubePlaylistUrl: string;
  };
  isEnrolled?: boolean;
  onEnroll?: () => void;
  onMessageTeacher?: () => void;
}

export default function CourseDetails({
  course,
  isEnrolled = false,
  onEnroll,
  onMessageTeacher,
}: CourseDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg overflow-hidden">
      {/* Course Header */}
      <div className="relative h-64 w-full">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.enrolledStudents} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Teacher Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
            {course.teacher.avatar ? (
              <Image
                src={course.teacher.avatar}
                alt={course.teacher.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                {course.teacher.name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              {course.teacher.name}
            </h3>
            <p className="text-sm text-muted-foreground">Course Instructor</p>
          </div>
          {onMessageTeacher && (
            <button
              onClick={onMessageTeacher}
              className="ml-auto btn btn-outline btn-sm flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Message
            </button>
          )}
        </div>

        {/* Course Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Category
            </h4>
            <p className="text-foreground">{course.category}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Level
            </h4>
            <p className="text-foreground">{course.level}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Price
            </h4>
            <p className="text-foreground">${course.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About This Course</h3>
          <div
            className={`text-muted-foreground ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {course.description}
          </div>
          {course.description.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:underline mt-2"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {isEnrolled ? (
            <a
              href={course.youtubePlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-1 flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4" />
              Start Learning
            </a>
          ) : (
            <button
              onClick={onEnroll}
              className="btn btn-primary flex-1"
            >
              Enroll Now - ${course.price.toFixed(2)}
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 