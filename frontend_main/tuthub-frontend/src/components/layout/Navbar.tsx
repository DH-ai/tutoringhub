"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, LogOut, Menu, User, X, MessageSquare, Plus, Search } from "lucide-react";

const studentNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Courses", href: "/courses" },
  { name: "Messages", href: "/messages" },
];

const teacherNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "My Courses", href: "/teacher/courses" },
  { name: "Create Course", href: "/teacher/courses/create" },
  { name: "Messages", href: "/messages" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Mock user role - in real app, this would come from auth context
  const isTeacher = true;

  return (
    <header className="bg-white dark:bg-card border-b sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <BookOpen className="h-8 w-auto text-primary" />
            <span className="text-xl font-semibold text-foreground">TutorHub</span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses or teachers..."
              className="input pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6">
          {(isTeacher ? teacherNavigation : studentNavigation).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="lg:hidden p-2 rounded-full hover:bg-muted"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <Link href="/messages" className="p-2 rounded-full hover:bg-muted relative">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-primary rounded-full"></span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 text-sm font-semibold leading-6 text-foreground"
            >
              <span>John Doe</span>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-card py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Your Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Settings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted"
                  onClick={() => console.log('Sign out')}
                >
                  <div className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <BookOpen className="h-8 w-auto text-primary" />
                <span className="text-xl font-semibold text-foreground">TutorHub</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search courses or teachers..."
                  className="input pl-10 w-full"
                />
              </div>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {(isTeacher ? teacherNavigation : studentNavigation).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">John Doe</p>
                      <p className="text-xs text-muted-foreground">{isTeacher ? 'Teacher' : 'Student'}</p>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-muted w-full text-left"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      console.log('Sign out');
                    }}
                  >
                    <div className="flex items-center">
                      <LogOut className="mr-2 h-5 w-5" />
                      <span>Sign out</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={() => setSearchOpen(false)} />
          <div className="fixed inset-x-0 top-0 z-50 bg-card p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses or teachers..."
                className="input pl-10 w-full"
                autoFocus
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 