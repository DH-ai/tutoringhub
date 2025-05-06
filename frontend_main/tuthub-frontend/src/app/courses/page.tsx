"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import CourseList from "@/components/courses/CourseList";
import { BookOpen, BookMarked, TrendingUp, Star } from "lucide-react";

// Mock data
const mockCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
    instructor: "John Smith",
    thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    enrollmentCount: 342,
    duration: "8 weeks",
    startDate: "May 15",
    category: "Development",
  },
  {
    id: "2",
    title: "Data Science Essentials",
    description: "Master the core concepts of data science, from data analysis to machine learning.",
    instructor: "Sarah Johnson",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    enrollmentCount: 521,
    duration: "10 weeks",
    startDate: "June 1",
    category: "Data Science",
  },
  {
    id: "3",
    title: "Business Management Fundamentals",
    description: "Discover key principles of business management and leadership strategies.",
    instructor: "David Chen",
    thumbnailUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    enrollmentCount: 289,
    duration: "6 weeks",
    startDate: "May 20",
    category: "Business",
  },
  {
    id: "4",
    title: "UX/UI Design Principles",
    description: "Learn the essential principles of user experience and interface design.",
    instructor: "Emma Williams",
    thumbnailUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    enrollmentCount: 412,
    duration: "7 weeks",
    startDate: "June 5",
    category: "Design",
  },
  {
    id: "5",
    title: "Digital Marketing Strategies",
    description: "Master digital marketing channels, analytics, and growth strategies.",
    instructor: "Michael Brown",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    enrollmentCount: 356,
    duration: "6 weeks",
    startDate: "May 25",
    category: "Marketing",
  },
  {
    id: "6",
    title: "Advanced JavaScript Programming",
    description: "Take your JavaScript skills to the next level with advanced concepts and patterns.",
    instructor: "Lisa Parker",
    thumbnailUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    enrollmentCount: 278,
    duration: "9 weeks",
    startDate: "June 10",
    category: "Development",
  },
  {
    id: "7",
    title: "Machine Learning Fundamentals",
    description: "An introduction to machine learning algorithms and applications.",
    instructor: "Robert Kim",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    enrollmentCount: 489,
    duration: "12 weeks",
    startDate: "June 15",
    category: "Data Science",
  },
  {
    id: "8",
    title: "Introduction to Blockchain Technology",
    description: "Understand the fundamentals of blockchain and its applications.",
    instructor: "James Wilson",
    thumbnailUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    enrollmentCount: 235,
    duration: "5 weeks",
    startDate: "May 30",
    category: "Technology",
  },
];

const featuredCategories = [
  { name: "All Courses", icon: <BookOpen className="h-5 w-5" />, count: mockCourses.length },
  { name: "Trending", icon: <TrendingUp className="h-5 w-5" />, count: 12 },
  { name: "New Releases", icon: <Star className="h-5 w-5" />, count: 8 },
  { name: "Top Rated", icon: <BookMarked className="h-5 w-5" />, count: 15 },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = React.useState("All Courses");

  // Filter courses based on the active category
  // This is a simple implementation - in a real app, you'd fetch different courses for each category
  const filteredCourses = activeCategory === "All Courses" ? mockCourses : mockCourses.slice(0, 4);

  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
          <p className="text-muted-foreground">
            Discover a wide range of courses to enhance your skills and knowledge.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {featuredCategories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                activeCategory === category.name
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="flex items-center gap-3">
                <div className={`${activeCategory === category.name ? "text-primary" : "text-muted-foreground"}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="bg-background text-muted-foreground text-xs font-medium py-1 px-2 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Course List Component */}
        <CourseList courses={filteredCourses} title={activeCategory} />
      </div>
    </MainLayout>
  );
} 