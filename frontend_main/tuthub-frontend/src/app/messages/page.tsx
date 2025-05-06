"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Send, Paperclip, MoreVertical, Phone, Video, ArrowLeft, Clock, Check, CheckCheck, User, Users, Plus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Mock data for conversations
const conversations = [
  {
    id: "1",
    name: "John Smith",
    role: "Instructor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    lastMessage: "Let me know if you have any questions about the assignment!",
    time: "10:30 AM",
    unread: 2,
    online: true,
    course: "Introduction to Web Development",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Instructor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    lastMessage: "Great work on your latest project submission!",
    time: "Yesterday",
    unread: 0,
    online: false,
    course: "Data Science Essentials",
  },
  {
    id: "3",
    name: "Web Development Study Group",
    role: "Group",
    avatar: "",
    lastMessage: "Michael: Can someone help me with the CSS layout?",
    time: "Yesterday",
    unread: 5,
    online: false,
    isGroup: true,
    members: 8,
    course: "Introduction to Web Development",
  },
  {
    id: "4",
    name: "David Chen",
    role: "Instructor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    lastMessage: "Please submit your assignment by Friday.",
    time: "Mon",
    unread: 0,
    online: true,
    course: "Business Management Fundamentals",
  },
  {
    id: "5",
    name: "Emma Williams",
    role: "Classmate",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    lastMessage: "Thanks for helping me with that problem!",
    time: "Sun",
    unread: 0,
    online: false,
    course: "Introduction to Web Development",
  },
];

// Mock messages for selected conversation
const mockMessages = [
  {
    id: "1",
    sender: "John Smith",
    senderId: "1",
    content: "Hi there! How's your progress with the JavaScript assignment?",
    time: "10:00 AM",
    status: "read",
    isMe: false,
  },
  {
    id: "2",
    sender: "You",
    content: "Hi John! I'm working on it right now. I have a question about functions.",
    time: "10:05 AM",
    status: "read",
    isMe: true,
  },
  {
    id: "3",
    sender: "John Smith",
    senderId: "1",
    content: "Sure, what's your question?",
    time: "10:10 AM",
    status: "read",
    isMe: false,
  },
  {
    id: "4",
    sender: "You",
    content: "I'm having trouble understanding callback functions. Could you explain how they work or point me to some resources?",
    time: "10:15 AM",
    status: "read",
    isMe: true,
  },
  {
    id: "5",
    sender: "John Smith",
    senderId: "1",
    content: "Of course! Callback functions are functions passed as arguments to other functions. They're executed after the parent function has completed. Here's an example:\n\nfunction doSomething(callback) {\n  // do something\n  callback();\n}\n\nfunction sayHi() {\n  console.log('Hi!');\n}\n\ndoSomething(sayHi); // Passes sayHi as a callback",
    time: "10:25 AM",
    status: "read",
    isMe: false,
  },
  {
    id: "6",
    sender: "John Smith",
    senderId: "1",
    content: "I've also shared a document with more examples in the course resources section. Let me know if you have any questions!",
    time: "10:30 AM",
    status: "delivered",
    isMe: false,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileChat, setShowMobileChat] = useState(false);
  
  // Filter conversations based on search
  const filteredConversations = conversations.filter((conversation) => 
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conversation.course.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Send a new message
  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    // In a real application, you would send the message to an API
    // and then update the UI with the response
    console.log("Sending message:", messageInput);
    setMessageInput("");
  };
  
  return (
    <MainLayout>
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[calc(100vh-250px)] min-h-[500px]">
          {/* Conversations List (Hidden on mobile when chat is open) */}
          <div className={`md:col-span-1 border rounded-lg overflow-hidden ${showMobileChat ? 'hidden md:block' : ''}`}>
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-65px)]">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center p-4 gap-3 hover:bg-muted/50 cursor-pointer transition-colors ${
                    selectedConversation.id === conversation.id ? 'bg-muted' : ''
                  }`}
                  onClick={() => {
                    setSelectedConversation(conversation);
                    setShowMobileChat(true);
                  }}
                >
                  <div className="relative">
                    {conversation.isGroup ? (
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    ) : (
                      conversation.avatar ? (
                        <Image
                          src={conversation.avatar}
                          alt={conversation.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                          <User className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )
                    )}
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-background"></div>
                    )}
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{conversation.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <span className="ml-2 px-2 py-0.5 bg-primary text-white text-xs rounded-full whitespace-nowrap">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{conversation.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area (Hidden on mobile when viewing conversation list) */}
          <div className={`md:col-span-2 lg:col-span-3 border rounded-lg overflow-hidden flex flex-col ${!showMobileChat ? 'hidden md:flex' : ''}`}>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center">
                <button 
                  className="md:hidden mr-2 p-1 rounded-full hover:bg-muted"
                  onClick={() => setShowMobileChat(false)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                
                <div className="flex items-center gap-3">
                  {selectedConversation.isGroup ? (
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  ) : (
                    selectedConversation.avatar ? (
                      <Image
                        src={selectedConversation.avatar}
                        alt={selectedConversation.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )
                  )}
                  
                  <div>
                    <h3 className="font-medium">{selectedConversation.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.isGroup 
                        ? `${selectedConversation.members} members • ${selectedConversation.course}` 
                        : `${selectedConversation.role} • ${selectedConversation.course}`
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-muted">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-full hover:bg-muted">
                  <Video className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-full hover:bg-muted">
                  <MoreVertical className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-muted/20">
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${message.isMe ? 'flex-row-reverse' : ''}`}>
                      {!message.isMe && (
                        <div className="flex-shrink-0 mt-1">
                          <Image
                            src={selectedConversation.avatar}
                            alt={selectedConversation.name}
                            width={36}
                            height={36}
                            className="rounded-full"
                          />
                        </div>
                      )}
                      
                      <div>
                        <div 
                          className={`rounded-lg p-3 ${
                            message.isMe 
                              ? 'bg-primary text-white' 
                              : 'bg-card border'
                          }`}
                        >
                          {message.content.split('\n').map((text, i) => (
                            <p key={i} className={`${i > 0 ? 'mt-2' : ''} ${text.trim().startsWith('function') || text.includes('(') ? 'font-mono text-xs whitespace-pre' : ''}`}>
                              {text}
                            </p>
                          ))}
                        </div>
                        
                        <div className={`flex items-center mt-1 text-xs text-muted-foreground ${message.isMe ? 'justify-end' : ''}`}>
                          <span>{message.time}</span>
                          {message.isMe && (
                            <span className="ml-1">
                              {message.status === 'sent' && <Clock className="h-3 w-3" />}
                              {message.status === 'delivered' && <Check className="h-3 w-3" />}
                              {message.status === 'read' && <CheckCheck className="h-3 w-3" />}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-muted">
                  <Paperclip className="h-5 w-5 text-muted-foreground" />
                </button>
                
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input flex-grow"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                
                <button 
                  className={`p-2 rounded-full ${
                    messageInput.trim() ? 'bg-primary text-white' : 'text-muted-foreground hover:bg-muted'
                  }`}
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Message Button (Mobile) */}
        <div className="md:hidden fixed bottom-20 right-4">
          <button className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
            <Plus className="h-6 w-6" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
} 