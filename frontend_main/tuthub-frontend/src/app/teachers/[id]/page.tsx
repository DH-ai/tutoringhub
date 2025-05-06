"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaEnvelope, FaArrowLeft, FaChalkboardTeacher } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import CourseCard from '@/components/course/CourseCard';
import { MockData } from '@/lib/api';
import { useTuthub } from '@/providers/TuthubProvider';
import { toast } from 'sonner';

const TeacherDetailPage = () => {
  const params = useParams();
  const teacherId = Number(params.id);
  const { authState } = useTuthub();
  
  const [teacher, setTeacher] = useState<any>(null);
  const [teacherCourses, setTeacherCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching teacher details and their courses
  useEffect(() => {
    const fetchTeacherData = () => {
      setLoading(true);
      
      // Find the teacher in mock data
      const foundTeacher = MockData.users.find(user => user.id === teacherId);
      
      if (foundTeacher) {
        setTeacher(foundTeacher);
        
        // Find courses taught by this teacher
        const courses = MockData.courses.filter(course => course.teacher === teacherId);
        setTeacherCourses(courses);
      }
      
      setLoading(false);
    };
    
    fetchTeacherData();
  }, [teacherId]);

  // Handle sending a message to the teacher
  const handleContactTeacher = () => {
    if (!authState.isAuthenticated) {
      toast.error('Please sign in to contact the teacher');
      return;
    }

    // In a real app, this would navigate to the messages page with this teacher
    toast.success('Message feature would open here');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-muted/30 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Teacher Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The teacher you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/teachers">
              <FaArrowLeft className="mr-2" />
              Back to Teachers
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/teachers" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <FaArrowLeft size={14} />
              Back to Teachers
            </Link>
          </Button>
        </div>

        {/* Teacher profile header */}
        <div className="bg-background p-8 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="flex-shrink-0">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarFallback className="bg-primary/10 text-primary text-4xl">
                  {teacher.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{teacher.username}</h1>
                  <div className="flex items-center gap-1 text-muted-foreground mt-1">
                    <FaChalkboardTeacher />
                    <span>Teacher</span>
                  </div>
                </div>
                <Button onClick={handleContactTeacher} className="w-full md:w-auto">
                  <FaEnvelope className="mr-2" />
                  Contact Teacher
                </Button>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-muted-foreground">
                  {teacher.bio || 'This teacher has not added a bio yet.'}
                </p>
              </div>

              {/* For demo purposes, adding some fictional stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/30 p-4 rounded text-center">
                  <div className="font-semibold text-2xl text-foreground">{teacherCourses.length}</div>
                  <div className="text-muted-foreground">Courses</div>
                </div>
                <div className="bg-muted/30 p-4 rounded text-center">
                  <div className="font-semibold text-2xl text-foreground">{Math.floor(Math.random() * 100) + 20}</div>
                  <div className="text-muted-foreground">Students</div>
                </div>
                <div className="bg-muted/30 p-4 rounded text-center">
                  <div className="font-semibold text-2xl text-foreground">{Math.floor(Math.random() * 1000) + 100}</div>
                  <div className="text-muted-foreground">Enrollments</div>
                </div>
                <div className="bg-muted/30 p-4 rounded text-center">
                  <div className="font-semibold text-2xl text-foreground">{(Math.random() * 2 + 3).toFixed(1)}</div>
                  <div className="text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher's courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Courses by {teacher.username}</h2>
          
          {teacherCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacherCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  teacher={{
                    id: teacher.id,
                    username: teacher.username,
                  }}
                  linktoplaylist={course.linktoplaylist}
                  onEnroll={() => {/* Would handle enrollment logic here */}}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No courses yet</h3>
              <p className="text-muted-foreground">
                This teacher hasn't published any courses yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailPage; 