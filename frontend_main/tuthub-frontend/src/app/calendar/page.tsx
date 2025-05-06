"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, BookOpen, Video, FileText, Users, Download } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Mock data for calendar events
const mockEvents = [
  {
    id: "1",
    title: "Project Submission Deadline",
    course: "Introduction to Web Development",
    courseId: "1",
    date: "2023-05-28",
    time: "23:59",
    type: "deadline",
  },
  {
    id: "2",
    title: "Live Q&A Session",
    course: "Data Science Essentials",
    courseId: "2",
    date: "2023-05-25",
    time: "15:00",
    type: "webinar",
  },
  {
    id: "3",
    title: "Group Discussion",
    course: "Business Management Fundamentals",
    courseId: "3",
    date: "2023-05-30",
    time: "14:00",
    type: "meeting",
  },
  {
    id: "4",
    title: "Quiz: JavaScript Basics",
    course: "Introduction to Web Development",
    courseId: "1",
    date: "2023-05-26",
    time: "10:00",
    type: "assessment",
  },
  {
    id: "5",
    title: "Guest Lecture: Industry Insights",
    course: "Business Management Fundamentals",
    courseId: "3",
    date: "2023-05-23",
    time: "16:00",
    type: "webinar",
  },
  {
    id: "6",
    title: "Workshop: Data Visualization",
    course: "Data Science Essentials",
    courseId: "2",
    date: "2023-05-24",
    time: "13:00",
    type: "workshop",
  },
];

// Helper function to generate calendar days
const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const days = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  return days;
};

// Helper function to get events for a specific day
const getEventsForDay = (events: any[], year: number, month: number, day: number | null) => {
  if (day === null) return [];
  const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return events.filter(event => event.date === dateString);
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  
  const calendarDays = generateCalendarDays(currentYear, currentMonth);
  
  // Navigate to previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };
  
  // Navigate to next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };
  
  // Get events for the selected day
  const selectedDayEvents = selectedDay 
    ? getEventsForDay(mockEvents, currentYear, currentMonth, selectedDay) 
    : [];
  
  // Get the event icon based on event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'webinar':
        return <Video className="h-4 w-4" />;
      case 'deadline':
        return <Download className="h-4 w-4" />;
      case 'assessment':
        return <FileText className="h-4 w-4" />;
      case 'meeting':
        return <Users className="h-4 w-4" />;
      case 'workshop':
        return <BookOpen className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };
  
  // Get color class based on event type
  const getEventColorClass = (type: string) => {
    switch (type) {
      case 'webinar':
        return 'bg-primary text-white';
      case 'deadline':
        return 'bg-error text-white';
      case 'assessment':
        return 'bg-warning text-white';
      case 'meeting':
        return 'bg-info text-white';
      case 'workshop':
        return 'bg-success text-white';
      default:
        return 'bg-muted text-foreground';
    }
  };
  
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Calendar</h1>
          <p className="text-muted-foreground">
            Keep track of your course schedules, deadlines, and events
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-5 border-b flex items-center justify-between">
                <h2 className="font-semibold">
                  {monthNames[currentMonth]} {currentYear}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-1.5 rounded-full hover:bg-muted"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      setCurrentMonth(today.getMonth());
                      setCurrentYear(today.getFullYear());
                      setSelectedDay(today.getDate());
                    }}
                    className="px-3 py-1 text-sm rounded hover:bg-muted"
                  >
                    Today
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-1.5 rounded-full hover:bg-muted"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-5">
                {/* Calendar grid - day names */}
                <div className="grid grid-cols-7 mb-4">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar grid - days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="h-24"></div>;
                    }
                    
                    const isToday = 
                      day === today.getDate() && 
                      currentMonth === today.getMonth() && 
                      currentYear === today.getFullYear();
                    
                    const isSelected = day === selectedDay;
                    
                    const dayEvents = getEventsForDay(mockEvents, currentYear, currentMonth, day);
                    const hasEvents = dayEvents.length > 0;
                    
                    return (
                      <div
                        key={`day-${day}`}
                        className={`h-24 border rounded-lg p-1 relative cursor-pointer hover:border-primary transition-colors ${
                          isSelected ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedDay(day)}
                      >
                        <div className={`
                          absolute top-1 right-1 h-6 w-6 flex items-center justify-center rounded-full text-xs
                          ${isToday ? 'bg-primary text-white' : ''}
                        `}>
                          {day}
                        </div>
                        
                        <div className="mt-6 text-xs space-y-1">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div 
                              key={event.id}
                              className={`px-1.5 py-0.5 rounded truncate ${getEventColorClass(event.type)}`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-muted-foreground text-center">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Day Details */}
          <div>
            <div className="card">
              <div className="p-5 border-b">
                <h2 className="font-semibold">
                  {selectedDay ? `Events for ${monthNames[currentMonth]} ${selectedDay}, ${currentYear}` : "No day selected"}
                </h2>
              </div>
              
              <div className="p-0">
                {selectedDayEvents.length > 0 ? (
                  selectedDayEvents.map((event) => (
                    <div key={event.id} className="p-4 border-b last:border-b-0">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full mt-1 ${getEventColorClass(event.type)}`}>
                          {getEventIcon(event.type)}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{event.title}</h3>
                          <Link 
                            href={`/courses/${event.courseId}`}
                            className="text-xs text-primary hover:underline block mt-1"
                          >
                            {event.course}
                          </Link>
                          <p className="mt-2 text-xs text-muted-foreground">
                            {new Date(`${event.date}T${event.time}`).toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <CalendarIcon className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-1">No events for this day</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedDay ? "You don't have any scheduled events." : "Please select a day to view events."}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {mockEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className={`p-2 rounded-full ${getEventColorClass(event.type)}`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(event.date).toLocaleDateString()} at {new Date(`${event.date}T${event.time}`).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
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