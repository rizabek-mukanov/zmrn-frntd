import { useEffect, useState } from 'react';

import io from 'socket.io-client';

import { Message } from '@/types';
import { getLatestMessages } from '@/utils';

import {
  ChatList,
  ChatHeader,
  Header,
  LoginModal,
  MessagePlaceholder,
  Messages,
} from '@/components';

const url = process.env.PROD_URL as string;

const socket = io(url);

export default function Home() {
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [message, setMessage] = useState('');

  const [currentRoom, setCurrentRoom] = useState<string | null>(null);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSubmit = (name: string) => {
    socket.emit('login', name);
    localStorage.setItem('username', name);
    setShowLoginModal(false);
  };

  const handleChange = (text: string) => {
    setMessage(text);
  };

  const handleUsernameChange = (name: string) => {
    setUsername(name);
  };

  const sendMessage = () => {
    if (!message || !currentRoom) {
      return;
    }
    const newMessage: Message = {
      sender: 'user',
      text: message,
      timestamp: Date.now(),
      room: currentRoom,
      username,
    };
    socket.emit('message', { message: newMessage, roomName: currentRoom });
    setMessages((prev) => [...prev, newMessage]);
    setMessage('');
  };

  const joinRoom = (roomName: string) => {
    setCurrentRoom(roomName);
  };

  const logout = () => {
    setUsername('');
    setMessages([]);
    setMessage('');
    setCurrentRoom(null);
    localStorage.removeItem('username');
  };

  const logInOut = () => {
    if (username) {
      logout();
    } else {
      setShowLoginModal(true);
    }
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const backToChatlist = () => {
    setCurrentRoom(null);
  };

  const showChat = !!currentRoom;
  const latestMessages = getLatestMessages(messages);

  useEffect(() => {
    socket.on('messageResponse', (data: Message) => {
      setMessages([...messages, data]);
    });
    socket.on('chatRestore', (data: Message[]) => {
      if (username) {
        setMessages([...messages, ...data]);
      }
    });
    socket.on('disconnect', () => {
      logout();
    });
  }, [messages, username]);

  useEffect(() => {
    socket.emit('join', currentRoom);
  }, [currentRoom]);

  useEffect(() => {
    const checkPrevUser = () => {
      const prevUser = localStorage.getItem('username');
      if (prevUser) {
        handleLoginSubmit(prevUser);
      }
    };
    checkPrevUser();
  }, []);

  return (
    <>
      <Header
        onClick={logInOut}
        username={username}
      />
      <div className="scrollbar-none flex h-body flex-row items-start justify-start overflow-scroll">
        <ChatList
          lastMessages={latestMessages}
          showChat={showChat}
          onClick={joinRoom}
        />
        <div
          className={`h-full w-full md:w-2/3  ${showChat && currentRoom ? '' : 'max-sm:hidden'}`}
        >
          <ChatHeader
            onClick={backToChatlist}
            name={currentRoom}
          />
          <div className="h-full w-full pb-16 pt-19 md:pt-23">
            <Messages
              currentRoom={currentRoom}
              messages={messages}
            />
            <MessagePlaceholder
              disabled={username.length === 0 || currentRoom === null}
              autoFocus={!showLoginModal}
              text={message}
              onChange={handleChange}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
      <LoginModal
        show={showLoginModal}
        closeModal={closeModal}
        username={username}
        onUsernameChange={handleUsernameChange}
        onSubmit={handleLoginSubmit}
      >
        <div>
          <h1>Hello</h1>
        </div>
      </LoginModal>
    </>
  );
}
