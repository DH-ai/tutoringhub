"use client";

import React, { useState } from "react";
import CourseCard, { CourseCardProps } from "./CourseCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Star, Users, Clock } from "lucide-react";

interface Course {
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
}

interface CourseListProps {
  courses: Course[];
  isLoading?: boolean;
}

export default function CourseList({ courses, isLoading = false }: CourseListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-muted" />
            <div className="p-4 space-y-4">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="flex gap-4">
                <div className="h-4 bg-muted rounded w-1/4" />
                <div className="h-4 bg-muted rounded w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No courses found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link
          key={course.id}
          href={`/courses/${course.id}`}
          className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {course.category}
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {course.level}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.enrolledStudents}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="text-lg font-semibold text-foreground">
                ${course.price.toFixed(2)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 