"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, FileText, Video, Download, ExternalLink, BookOpen, Folder, Filter, ChevronDown, Share2 } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Mock data for resources
const resourcesData = [
  {
    id: "1",
    title: "Web Development Fundamentals Guide",
    description: "A comprehensive guide covering HTML, CSS, and JavaScript basics.",
    courseId: "1",
    courseName: "Introduction to Web Development",
    type: "document",
    format: "PDF",
    size: "2.4 MB",
    uploadDate: "2023-05-10",
    downloadCount: 145,
  },
  {
    id: "2",
    title: "Data Visualization Techniques",
    description: "Learn how to create effective data visualizations for your projects.",
    courseId: "2",
    courseName: "Data Science Essentials",
    type: "document",
    format: "PDF",
    size: "3.8 MB",
    uploadDate: "2023-05-12",
    downloadCount: 98,
  },
  {
    id: "3",
    title: "Introduction to JavaScript - Tutorial Video",
    description: "A video tutorial on JavaScript fundamentals and programming concepts.",
    courseId: "1",
    courseName: "Introduction to Web Development",
    type: "video",
    format: "MP4",
    size: "45 MB",
    uploadDate: "2023-05-05",
    downloadCount: 210,
  },
  {
    id: "4",
    title: "Business Planning Templates",
    description: "Ready-to-use templates for various business planning documents.",
    courseId: "3",
    courseName: "Business Management Fundamentals",
    type: "document",
    format: "DOCX",
    size: "1.2 MB",
    uploadDate: "2023-05-15",
    downloadCount: 67,
  },
  {
    id: "5",
    title: "Python Data Analysis Code Samples",
    description: "Example code snippets for common data analysis tasks in Python.",
    courseId: "2",
    courseName: "Data Science Essentials",
    type: "code",
    format: "ZIP",
    size: "850 KB",
    uploadDate: "2023-05-08",
    downloadCount: 124,
  },
  {
    id: "6",
    title: "Responsive Design Cheat Sheet",
    description: "Quick reference guide for responsive web design techniques.",
    courseId: "1",
    courseName: "Introduction to Web Development",
    type: "document",
    format: "PDF",
    size: "1.5 MB",
    uploadDate: "2023-05-14",
    downloadCount: 189,
  },
  {
    id: "7",
    title: "Market Analysis Frameworks",
    description: "Frameworks and methodologies for conducting market analysis.",
    courseId: "3",
    courseName: "Business Management Fundamentals",
    type: "document",
    format: "PDF",
    size: "2.1 MB",
    uploadDate: "2023-05-11",
    downloadCount: 76,
  },
  {
    id: "8",
    title: "Machine Learning Models Explained",
    description: "A deep dive into common machine learning algorithms and their applications.",
    courseId: "2",
    courseName: "Data Science Essentials",
    type: "document",
    format: "PDF",
    size: "4.2 MB",
    uploadDate: "2023-05-07",
    downloadCount: 153,
  },
];

// Resource categories
const resourceCategories = [
  { id: "all", name: "All Resources" },
  { id: "document", name: "Documents" },
  { id: "video", name: "Videos" },
  { id: "code", name: "Code Samples" },
];

// Course filters
const courseFilters = [
  { id: "all", name: "All Courses" },
  { id: "1", name: "Introduction to Web Development" },
  { id: "2", name: "Data Science Essentials" },
  { id: "3", name: "Business Management Fundamentals" },
];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [sortBy, setSortBy] = useState("latest"); // "latest", "popular", "name"
  
  // Filter resources based on search, category, and course
  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || resource.type === selectedCategory;
    
    const matchesCourse = selectedCourse === "all" || resource.courseId === selectedCourse;
    
    return matchesSearch && matchesCategory && matchesCourse;
  });
  
  // Sort resources
  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    } else if (sortBy === "popular") {
      return b.downloadCount - a.downloadCount;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  
  // Helper function to get resource icon
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "code":
        return <Folder className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };
  
  // Helper function to get format color
  const getFormatColor = (format: string) => {
    switch (format) {
      case "PDF":
        return "bg-error/10 text-error";
      case "DOCX":
        return "bg-info/10 text-info";
      case "MP4":
        return "bg-primary/10 text-primary";
      case "ZIP":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resources</h1>
          <p className="text-muted-foreground">
            Access course materials, documents, videos, and other resources
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="input pl-10"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <select
                  className="input appearance-none pr-8"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Select resource type"
                >
                  {resourceCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
              
              <div className="relative">
                <select
                  className="input appearance-none pr-8"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  aria-label="Select course"
                >
                  {courseFilters.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-sm text-muted-foreground mb-2 sm:mb-0">
              Showing {sortedResources.length} of {resourcesData.length} resources
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="flex border rounded-lg overflow-hidden">
                <button
                  className={`px-3 py-1.5 text-sm ${
                    sortBy === "latest" ? "bg-primary text-white" : "bg-card hover:bg-muted"
                  }`}
                  onClick={() => setSortBy("latest")}
                >
                  Latest
                </button>
                <button
                  className={`px-3 py-1.5 text-sm ${
                    sortBy === "popular" ? "bg-primary text-white" : "bg-card hover:bg-muted"
                  }`}
                  onClick={() => setSortBy("popular")}
                >
                  Popular
                </button>
                <button
                  className={`px-3 py-1.5 text-sm ${
                    sortBy === "name" ? "bg-primary text-white" : "bg-card hover:bg-muted"
                  }`}
                  onClick={() => setSortBy("name")}
                >
                  Name
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resources List */}
        {sortedResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedResources.map((resource) => (
              <div key={resource.id} className="card group hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-full bg-muted text-primary">
                      {getResourceIcon(resource.type)}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded ${getFormatColor(resource.format)}`}>
                      {resource.format}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`#resource-${resource.id}`} className="hover:underline">
                      {resource.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <Link 
                    href={`/courses/${resource.courseId}`}
                    className="text-xs text-primary hover:underline block mb-4"
                  >
                    {resource.courseName}
                  </Link>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {new Date(resource.uploadDate).toLocaleDateString(undefined, { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span>{resource.size}</span>
                  </div>
                  
                  <div className="mt-5 pt-4 border-t flex items-center justify-between">
                    <button className="btn btn-primary px-4 py-2 h-9 text-sm">
                      <Download className="mr-1.5 h-4 w-4" />
                      Download
                    </button>
                    
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full hover:bg-muted">
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-muted">
                        <Share2 className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-muted/10 rounded-lg">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No resources found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any resources matching your filters.
            </p>
            <button
              className="btn btn-primary px-4 py-2"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedCourse("all");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 