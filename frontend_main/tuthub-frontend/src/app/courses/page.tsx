"use client";

import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/course/CourseCard';
import { MockData } from '@/lib/api';

const CoursesPage = () => {
  const [courses, setCourses] = useState(MockData.courses);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    
    // Filter courses based on search query
    if (searchQuery.trim()) {
      const filtered = MockData.courses.filter(
        course => 
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setCourses(filtered);
    } else {
      // If search query is empty, show all courses
      setCourses(MockData.courses);
    }
    
    setLoading(false);
  };

  // Reset search when component unmounts
  useEffect(() => {
    return () => {
      setSearchQuery('');
    };
  }, []);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Courses</h1>
          <p className="text-muted-foreground text-lg">
            Discover a wide range of courses taught by expert teachers
          </p>
        </div>

        {/* Search and filter section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative flex w-full max-w-lg">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 text-foreground bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="ml-2"
              >
                Search
              </Button>
            </div>
          </form>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <FaFilter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Courses grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading courses...</p>
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
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
                  onEnroll={() => {/* Would handle enrollment logic here */}}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any courses matching your search criteria.
            </p>
            <Button onClick={() => {
              setSearchQuery('');
              setCourses(MockData.courses);
            }}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage; 