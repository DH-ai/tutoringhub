"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BookOpen, Clock, Calendar, Users, Award, FileText, Video, Play, CheckCircle2, ArrowLeft, Star, MessageSquare, Download } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Mock data for a specific course
const courseData = {
  id: "1",
  title: "Introduction to Web Development",
  description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. This comprehensive course will take you from beginner to proficient in building responsive websites.",
  longDescription: "This comprehensive course covers everything you need to know to get started with web development. You'll learn HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll be able to build responsive websites from scratch and understand the core principles of modern web development. Perfect for beginners with no prior coding experience.",
  instructor: {
    name: "John Smith",
    role: "Senior Web Developer",
    bio: "John has over 10 years of experience in web development and has worked with companies like Google and Facebook. He's passionate about teaching and has helped over 50,000 students learn web development.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  enrollmentCount: 342,
  duration: "8 weeks",
  startDate: "May 15, 2023",
  category: "Development",
  level: "Beginner",
  rating: 4.8,
  reviewCount: 128,
  language: "English",
  syllabus: [
    {
      id: "1",
      title: "Introduction to HTML",
      description: "Learn the basics of HTML structure and elements.",
      duration: "2 hours",
      contentItems: [
        { id: "1-1", title: "HTML Basics", type: "video", length: "25 min" },
        { id: "1-2", title: "Document Structure", type: "video", length: "30 min" },
        { id: "1-3", title: "Semantic Elements", type: "reading", length: "15 min" },
        { id: "1-4", title: "Exercise: Build a Simple Page", type: "exercise", length: "45 min" },
      ],
    },
    {
      id: "2",
      title: "CSS Fundamentals",
      description: "Master CSS styling and layouts.",
      duration: "2.5 hours",
      contentItems: [
        { id: "2-1", title: "CSS Selectors", type: "video", length: "35 min" },
        { id: "2-2", title: "Box Model", type: "video", length: "30 min" },
        { id: "2-3", title: "Flexbox & Grid", type: "video", length: "45 min" },
        { id: "2-4", title: "Exercise: Styling Your Page", type: "exercise", length: "40 min" },
      ],
    },
    {
      id: "3",
      title: "JavaScript Basics",
      description: "Introduction to JavaScript programming.",
      duration: "3 hours",
      contentItems: [
        { id: "3-1", title: "JavaScript Syntax", type: "video", length: "40 min" },
        { id: "3-2", title: "Variables & Data Types", type: "video", length: "35 min" },
        { id: "3-3", title: "Functions & Events", type: "video", length: "45 min" },
        { id: "3-4", title: "DOM Manipulation", type: "video", length: "40 min" },
        { id: "3-5", title: "Exercise: Interactive Elements", type: "exercise", length: "50 min" },
      ],
    },
    {
      id: "4",
      title: "Responsive Web Design",
      description: "Create websites that work on all devices.",
      duration: "2.5 hours",
      contentItems: [
        { id: "4-1", title: "Media Queries", type: "video", length: "35 min" },
        { id: "4-2", title: "Responsive Layouts", type: "video", length: "40 min" },
        { id: "4-3", title: "Mobile-First Approach", type: "reading", length: "20 min" },
        { id: "4-4", title: "Exercise: Responsive Website", type: "exercise", length: "55 min" },
      ],
    },
  ],
  prerequisites: [
    "Basic computer skills",
    "No prior coding experience required",
    "A computer with internet access",
  ],
  objectives: [
    "Build and deploy responsive websites from scratch",
    "Understand HTML5, CSS3, and JavaScript fundamentals",
    "Implement modern web design principles",
    "Create interactive web pages with JavaScript",
    "Debug and troubleshoot common web development issues",
  ],
  features: [
    "24 video lessons (8+ hours)",
    "12 practical exercises",
    "4 quizzes",
    "Final project with feedback",
    "Certificate of completion",
    "Lifetime access to materials",
  ],
};

export default function CourseDetailPage() {
  const params = useParams();
  const [activeModule, setActiveModule] = useState(courseData.syllabus[0]?.id || "");
  
  // In a real app, fetch the course by ID
  // const { id } = params;
  // const [course, setCourse] = useState(null);
  // useEffect(() => { fetch course data here }, [id]);
  
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mb-6">
          <Link href="/courses" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
              
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <Image 
                  src={courseData.thumbnailUrl}
                  alt={courseData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white">
                    <Play className="h-8 w-8" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {courseData.duration}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  Starts {courseData.startDate}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {courseData.enrollmentCount} students
                </div>
                <div className="flex items-center text-muted-foreground">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {courseData.level}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="h-4 w-4 mr-1" />
                  Certificate
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(courseData.rating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">{courseData.rating}</span>
                <span className="ml-2 text-sm text-muted-foreground">({courseData.reviewCount} reviews)</span>
              </div>
              
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-3">About This Course</h2>
                <p className="text-muted-foreground mb-6">{courseData.longDescription}</p>
                
                <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {courseData.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
                <ul className="mb-6">
                  {courseData.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center mr-2 shrink-0 mt-0.5">
                        <span className="text-xs">{index + 1}</span>
                      </div>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6">Course Content</h2>
                <div className="border rounded-lg overflow-hidden">
                  {courseData.syllabus.map((module) => (
                    <div key={module.id} className="border-b last:border-b-0">
                      <button
                        className={`w-full text-left p-4 ${activeModule === module.id ? 'bg-muted' : ''}`}
                        onClick={() => setActiveModule(activeModule === module.id ? "" : module.id)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{module.title}</h3>
                          <div className="flex items-center text-sm">
                            <span className="mr-3">{module.duration}</span>
                            <span className="transform transition-transform">
                              {activeModule === module.id ? '-' : '+'}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
                      </button>
                      
                      {activeModule === module.id && (
                        <div className="border-t px-4 py-2 bg-muted/50">
                          {module.contentItems.map((item) => (
                            <div key={item.id} className="py-3 flex items-center justify-between">
                              <div className="flex items-center">
                                {item.type === 'video' && <Video className="h-4 w-4 mr-3 text-primary" />}
                                {item.type === 'reading' && <FileText className="h-4 w-4 mr-3 text-primary" />}
                                {item.type === 'exercise' && <Download className="h-4 w-4 mr-3 text-primary" />}
                                <span className="text-sm">{item.title}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{item.length}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">About the Instructor</h2>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full relative overflow-hidden">
                    <Image 
                      src={courseData.instructor.avatarUrl}
                      alt={courseData.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{courseData.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{courseData.instructor.role}</p>
                    <p className="text-sm">{courseData.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="card sticky top-6">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-2xl font-bold">$49.99</span>
                    <span className="text-muted-foreground line-through ml-2">$99.99</span>
                    <span className="ml-2 bg-success/10 text-success text-xs px-2 py-1 rounded">50% off</span>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Sale ends in:</p>
                    <div className="flex gap-2">
                      <div className="bg-muted p-2 rounded text-center">
                        <span className="text-lg font-semibold">2</span>
                        <p className="text-xs text-muted-foreground">Days</p>
                      </div>
                      <div className="bg-muted p-2 rounded text-center">
                        <span className="text-lg font-semibold">18</span>
                        <p className="text-xs text-muted-foreground">Hours</p>
                      </div>
                      <div className="bg-muted p-2 rounded text-center">
                        <span className="text-lg font-semibold">45</span>
                        <p className="text-xs text-muted-foreground">Minutes</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-full py-3 mb-3">Enroll Now</button>
                  <button className="btn btn-outline w-full py-3 mb-6">Add to Wishlist</button>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">This Course Includes:</h3>
                    <ul className="space-y-3">
                      {courseData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-b py-4 my-6 text-center">
                    <p className="text-sm">Not sure? All courses have a 30-day money-back guarantee</p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button className="text-sm text-primary hover:underline flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Have a question? Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 