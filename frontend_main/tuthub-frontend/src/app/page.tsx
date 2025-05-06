"use client";

import React from 'react';
import Link from 'next/link';
import { FaSearch, FaGraduationCap, FaChalkboardTeacher, FaComments } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/course/CourseCard';
import { MockData } from '@/lib/api';

export default function HomePage() {
  // Featured courses - normally would come from an API call
  const featuredCourses = MockData.courses.slice(0, 3);
  
  // Featured teachers - normally would come from an API call
  const featuredTeachers = MockData.users.filter(user => user.role === 'teacher').slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn From The Best Teachers</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Connect with experienced teachers, access quality courses, and elevate your learning journey with TutHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/teachers">Find Teachers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TutHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FaChalkboardTeacher className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
              <p className="text-muted-foreground">
                Learn from qualified and experienced teachers who are passionate about their subjects.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FaGraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Courses</h3>
              <p className="text-muted-foreground">
                Access a wide range of high-quality courses with structured learning materials.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FaComments className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
              <p className="text-muted-foreground">
                Interact directly with teachers to clear doubts and get personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link href="/courses" className="text-primary font-medium hover:underline">
              View all courses →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => {
              const teacherData = MockData.users.find(user => user.id === course.teacher);
              return (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  teacher={{
                    id: teacherData?.id || 0,
                    username: teacherData?.username || 'Unknown Teacher',
                  }}
                  linktoplaylist={course.linktoplaylist}
                  onEnroll={() => console.log(`Would enroll in course ${course.id}`)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Banner */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Looking for a specific course?</h2>
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center border-2 border-white rounded-md">
              <FaSearch className="absolute left-3 text-primary z-10 text-white" />
              <input 
                type="text"
                placeholder="Search courses or teachers..."
                className="w-full pl-10 pr-4 rounded-l-md focus:outline-none bg-white text-black"
              />
              <Button
                className="px-6 rounded-r-md"
                variant="secondary"
                onClick={() => console.log('Search clicked')}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Meet Our Teachers</h2>
            <Link href="/teachers" className="text-primary font-medium hover:underline">
              View all teachers →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTeachers.map((teacher) => (
              <div key={teacher.id} className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center text-primary font-semibold text-xl">
                      {teacher.username.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">{teacher.username}</h3>
                      <p className="text-muted-foreground">{teacher.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{teacher.bio}</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/teachers/${teacher.id}`}>
                      View Profile
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of students who are already learning with TutHub. Register now to start your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
