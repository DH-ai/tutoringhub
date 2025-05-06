import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
  isRead: boolean;
}

interface MessageThreadProps {
  recipientId: string;
  recipientName: string;
  recipientAvatar?: string;
  currentUserId: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export default function MessageThread({
  recipientId,
  recipientName,
  recipientAvatar,
  currentUserId,
  messages,
  onSendMessage,
}: MessageThreadProps) {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage("");
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b">
        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
          {recipientAvatar ? (
            <Image
              src={recipientAvatar}
              alt={recipientName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-muted-foreground">
              {recipientName.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{recipientName}</h3>
          <p className="text-sm text-muted-foreground">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === currentUserId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.senderId === currentUserId
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.senderId === currentUserId
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {formatTimestamp(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="input flex-1"
          />
          <button
            type="submit"
            className="btn btn-primary p-2"
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
} 