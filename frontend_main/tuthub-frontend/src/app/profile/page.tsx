"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Settings, Edit, MessageSquare, Briefcase, School, Globe, ChevronRight, CheckCircle2 } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, NY",
  joinDate: "January 2023",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  bio: "Software developer passionate about learning new technologies. Currently focusing on web development and machine learning.",
  position: "Senior Developer",
  company: "Tech Innovations Inc.",
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2015 - 2019",
    },
    {
      id: "2",
      degree: "Master of Science in Artificial Intelligence",
      institution: "National Institute of Technology",
      year: "2019 - 2021",
    },
  ],
  achievements: [
    {
      id: "1",
      title: "Web Development Certificate",
      issuer: "LMSystem",
      date: "May 2023",
      badge: "🏆",
    },
    {
      id: "2",
      title: "Data Science Fundamentals",
      issuer: "LMSystem",
      date: "March 2023",
      badge: "🏅",
    },
    {
      id: "3",
      title: "JavaScript Advanced Concepts",
      issuer: "LMSystem",
      date: "February 2023",
      badge: "🎓",
    },
  ],
  skills: [
    "JavaScript", "React", "Node.js", "Python", "Data Analysis", 
    "Machine Learning", "SQL", "Git", "Docker", "AWS"
  ],
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    { platform: "GitHub", url: "https://github.com/johndoe" },
    { platform: "Twitter", url: "https://twitter.com/johndoe" },
  ],
  enrolledCourses: 12,
  completedCourses: 8,
  certificatesEarned: 6,
};

// Tabs for profile sections
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "settings", label: "Settings" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <MainLayout>
      <div className="container py-10">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
          <div className="relative">
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden relative">
              <Image 
                src={userData.profileImage}
                alt={userData.name}
                fill
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-white">
              <Edit className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
            
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1.5" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1.5" />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1.5" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>Joined {userData.joinDate}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 max-w-2xl">
              {userData.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm">
                <Briefcase className="h-4 w-4 mr-1.5" />
                <span>{userData.position} at {userData.company}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {userData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 bg-muted rounded-full text-xs hover:bg-primary hover:text-white transition-colors"
                >
                  <Globe className="h-3.5 w-3.5 mr-1.5" />
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:self-start mt-4 md:mt-0">
            <Link href="/settings" className="btn btn-outline px-4 py-2 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Edit Profile</span>
            </Link>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="card p-5 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="text-3xl font-bold">{userData.enrolledCourses}</span>
            <span className="text-sm text-muted-foreground">Enrolled Courses</span>
          </div>
          
          <div className="card p-5 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-success/10 text-success mb-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <span className="text-3xl font-bold">{userData.completedCourses}</span>
            <span className="text-sm text-muted-foreground">Completed Courses</span>
          </div>
          
          <div className="card p-5 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-accent/10 text-accent mb-4">
              <Award className="h-5 w-5" />
            </div>
            <span className="text-3xl font-bold">{userData.certificatesEarned}</span>
            <span className="text-sm text-muted-foreground">Certificates Earned</span>
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium -mb-px ${
                  activeTab === tab.id
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === "overview" && (
          <div>
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Achievements</h2>
                <button 
                  className="text-sm text-primary flex items-center hover:underline"
                  onClick={() => setActiveTab("achievements")}
                >
                  View all
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {userData.achievements.slice(0, 2).map((achievement) => (
                  <div key={achievement.id} className="card p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.badge}</div>
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">Issued by {achievement.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Education</h2>
                <button 
                  className="text-sm text-primary flex items-center hover:underline"
                  onClick={() => setActiveTab("education")}
                >
                  View all
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {userData.education.map((edu) => (
                  <div key={edu.id} className="card p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-muted text-foreground">
                        <School className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "achievements" && (
          <div>
            <h2 className="text-xl font-semibold mb-6">All Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userData.achievements.map((achievement) => (
                <div key={achievement.id} className="card p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{achievement.badge}</div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">Issued by {achievement.issuer}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      <div className="mt-4">
                        <button className="text-xs text-primary flex items-center hover:underline">
                          <Award className="h-3.5 w-3.5 mr-1.5" />
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "education" && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Education History</h2>
            <div className="space-y-6">
              {userData.education.map((edu) => (
                <div key={edu.id} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-muted text-foreground">
                      <School className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-2">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6">
                <button className="btn btn-outline px-4 py-2 flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  <span>Add Education</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "settings" && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            <div className="card p-6 mb-6">
              <h3 className="font-medium mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="input"
                    defaultValue={userData.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="input"
                    defaultValue={userData.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="input"
                    defaultValue={userData.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Location
                  </label>
                  <input 
                    type="text" 
                    className="input"
                    defaultValue={userData.location}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Bio
                </label>
                <textarea 
                  className="input min-h-[100px]"
                  defaultValue={userData.bio}
                />
              </div>
              <div className="flex justify-end">
                <button className="btn btn-primary px-4 py-2">
                  Save Changes
                </button>
              </div>
            </div>
            
            <div className="card p-6 mb-6">
              <h3 className="font-medium mb-4">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Position
                  </label>
                  <input 
                    type="text" 
                    className="input"
                    defaultValue={userData.position}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Company
                  </label>
                  <input 
                    type="text" 
                    className="input"
                    defaultValue={userData.company}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="btn btn-primary px-4 py-2">
                  Save Changes
                </button>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="font-medium mb-4">Account Security</h3>
              <div className="space-y-4">
                <button className="btn btn-outline w-full flex justify-between items-center">
                  <span>Change Password</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="btn btn-outline w-full flex justify-between items-center">
                  <span>Two-Factor Authentication</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="btn btn-outline w-full flex justify-between items-center">
                  <span>Privacy Settings</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 