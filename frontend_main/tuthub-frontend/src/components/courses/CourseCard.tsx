"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Users } from "lucide-react";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnailUrl: string;
  enrollmentCount: number;
  duration: string;
  startDate: string;
  category: string;
  progress?: number;
}

export default function CourseCard({
  id,
  title,
  description,
  instructor,
  thumbnailUrl,
  enrollmentCount,
  duration,
  startDate,
  category,
  progress,
}: CourseCardProps) {
  return (
    <div className="card overflow-hidden flex flex-col h-full group hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 w-full h-48 relative overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 right-3 bg-accent text-white text-xs font-medium px-2.5 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          <Link href={`/courses/${id}`} className="hover:underline underline-offset-2">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mr-2">
            <span className="text-xs font-medium">{instructor.slice(0, 2)}</span>
          </div>
          <span className="text-sm font-medium">{instructor}</span>
        </div>
        <div className="mt-auto">
          {progress !== undefined && (
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>{startDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-3.5 w-3.5 mr-1" />
              <span>{enrollmentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 