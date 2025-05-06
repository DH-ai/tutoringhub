"use client";

import Link from "next/link";
import { BookOpen, Calendar, Users, Clock, BarChart, BookMarked, Bell, MessageSquare } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import CourseCard from "@/components/courses/CourseCard";

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
    progress: 75,
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
    progress: 45,
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
    progress: 20,
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Project Submission Deadline",
    course: "Introduction to Web Development",
    date: "May 28, 2023",
    time: "11:59 PM",
  },
  {
    id: "2",
    title: "Live Q&A Session",
    course: "Data Science Essentials",
    date: "May 25, 2023",
    time: "3:00 PM",
  },
  {
    id: "3",
    title: "Group Discussion",
    course: "Business Management Fundamentals",
    date: "May 30, 2023",
    time: "2:00 PM",
  },
];

const notifications = [
  {
    id: "1",
    title: "New course material available",
    course: "Introduction to Web Development",
    time: "2 hours ago",
  },
  {
    id: "2",
    title: "Assignment graded",
    course: "Data Science Essentials",
    time: "Yesterday",
  },
  {
    id: "3",
    title: "New announcement",
    course: "Business Management Fundamentals",
    time: "2 days ago",
  },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John! Track your progress and manage your courses.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/courses" className="btn btn-primary px-4 py-2">
              Browse Courses
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard 
            title="Enrolled Courses" 
            value="12" 
            icon={<BookOpen className="h-5 w-5" />}
            trend={{ value: 10, isPositive: true }}
          />
          <StatsCard 
            title="Hours Spent" 
            value="86" 
            description="This month" 
            icon={<Clock className="h-5 w-5" />}
            trend={{ value: 23, isPositive: true }}
          />
          <StatsCard 
            title="Completed Courses" 
            value="8" 
            icon={<BookMarked className="h-5 w-5" />}
            trend={{ value: 5, isPositive: true }}
          />
          <StatsCard 
            title="Certificates Earned" 
            value="6" 
            icon={<BarChart className="h-5 w-5" />}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* In Progress Courses */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">In Progress</h2>
              <Link href="/courses?status=in-progress" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Upcoming Events */}
            <div className="card mb-8">
              <div className="p-5 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Upcoming Events</h3>
                  <Link href="/calendar" className="text-sm text-primary hover:underline">
                    View Calendar
                  </Link>
                </div>
              </div>
              <div className="p-0">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border-b last:border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-muted text-primary mt-1">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{event.course}</p>
                        <div className="mt-2 flex items-center text-xs text-muted-foreground">
                          <span className="font-medium">{event.date}</span>
                          <span className="mx-1">•</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="card">
              <div className="p-5 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Recent Notifications</h3>
                  <Link href="/notifications" className="text-sm text-primary hover:underline">
                    View All
                  </Link>
                </div>
              </div>
              <div className="p-0">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b last:border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-muted text-primary mt-1">
                        <Bell className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{notification.course}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 