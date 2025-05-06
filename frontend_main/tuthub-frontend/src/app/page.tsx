"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Award, Calendar, Clock, Check, CheckCircle2, BarChart, Layout, Bookmark } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const features = [
  {
    name: "Comprehensive Course Library",
    description: "Access thousands of courses across various subjects and disciplines.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    name: "Interactive Learning",
    description: "Engage with course materials through quizzes, assignments, and discussions.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    name: "Progress Tracking",
    description: "Monitor your learning journey with detailed progress analytics.",
    icon: <BarChart className="h-6 w-6" />,
  },
  {
    name: "Certification",
    description: "Earn certificates upon successful course completion to showcase your skills.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    name: "Flexible Learning",
    description: "Learn at your own pace with on-demand access to course content.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    name: "Seamless Organization",
    description: "Keep track of assignments, deadlines, and events with built-in calendar.",
    icon: <Calendar className="h-6 w-6" />,
  },
];

const testimonials = [
  {
    content: "This platform has transformed how I approach learning. The courses are well-structured and the UI is incredibly intuitive.",
    author: "Sarah Johnson",
    role: "Student",
  },
  {
    content: "As an educator, I've found this platform to be the perfect tool for engaging my students and tracking their progress.",
    author: "Dr. Michael Chen",
    role: "Professor",
  },
  {
    content: "The flexibility of this system allows me to continue my education while maintaining my full-time job. Game changer!",
    author: "Alex Rodriguez",
    role: "Professional",
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-muted dark:from-card dark:to-background py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Empower Your Learning Journey with <span className="text-primary">LMSystem</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                A modern learning management system designed to make education accessible, 
                engaging, and effective for both students and educators.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="btn btn-primary px-6 py-3">
                  Explore Courses
                </Link>
                <Link href="/dashboard" className="btn btn-outline px-6 py-3">
                  Go to Dashboard
                </Link>
              </div>
              <div className="mt-10">
                <p className="text-sm font-medium text-muted-foreground mb-4">Trusted by leading institutions</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="h-8 w-20 bg-muted rounded"></div>
                  <div className="h-8 w-24 bg-muted rounded"></div>
                  <div className="h-8 w-20 bg-muted rounded"></div>
                  <div className="h-8 w-24 bg-muted rounded"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-muted h-full w-full">
                  {/* Placeholder for hero image */}
                  <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <Layout className="h-24 w-24 text-primary opacity-50" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Over 10,000 courses</p>
                    <p className="text-xs text-muted-foreground">For all skill levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Features that empower learning</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to create, manage, and participate in educational experiences.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="p-4 rounded-lg bg-muted inline-flex mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-20 bg-muted dark:bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Browse by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Development", icon: <Layout className="h-6 w-6" /> },
              { name: "Business", icon: <BarChart className="h-6 w-6" /> },
              { name: "Design", icon: <Bookmark className="h-6 w-6" /> },
              { name: "Marketing", icon: <Users className="h-6 w-6" /> },
              { name: "Health", icon: <CheckCircle2 className="h-6 w-6" /> },
              { name: "Science", icon: <BookOpen className="h-6 w-6" /> },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/courses?category=${category.name}`}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors text-center gap-3"
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What our users say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how LMSystem is transforming education for students and educators alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <p className="text-lg mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">{testimonial.author.substring(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your learning journey?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
            Join thousands of learners already benefiting from our platform. Get started today!
          </p>
          <div className="mt-10">
            <Link href="/courses" className="btn px-8 py-3 bg-white text-primary hover:bg-opacity-90">
              Browse Courses
            </Link>
          </div>
    </div>
      </section>
    </MainLayout>
  );
}
