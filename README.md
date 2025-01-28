# React Chat Application

A modern React-based chat application with real-time messaging capabilities, responsive UI.

## Tech Stack

- React 18
- TypeScript
- Vite
- UUID for unique message IDs
- CSS for styling

---

## Component Overview

### Chat Components

- *Chat.tsx*: Main container component that organizes the chat interface
- *MessageList.tsx*: Displays the message history
- *Message.tsx*: Individual message component with timestamp
- *Footer.tsx*: Input area for new messages
- *Sidebar.tsx*: Message history and management
- *Header.tsx*: Application header with user information

### Context

- ChatContext.tsx: Manages global chat state and provides chat functionality to components
- SidebarContext.tsx: Manages the visibility state of a sidebar component. This context provides a simple API for toggling sidebar visibility and accessing the current sidebar state throughout your application.
  

### Custom Hooks

- *useChat.tsx*: Manages chat logic and state
- *useScrollToBottom.tsx*: Handles automatic scrolling to newest messages

---

## Features in Detail

### Message Management

- Send and receive messages in real-time
- Delete messages (affects both sent and received messages)
- Resend previously sent messages
- View message history in sidebar
- Timestamps for all messages

### UI Features

- Collapsible sidebar for message history
- Auto-scroll to latest messages
- Loading states for message sending
- Clean and intuitive interface

---

## Installation
1. Clone the repository: `git clone https://github.com/linbm123/chatBot`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run start`.