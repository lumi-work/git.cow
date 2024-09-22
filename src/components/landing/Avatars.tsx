"use client";

import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function App() {
  return (
    <AvatarGroup
      isBordered
      max={5}
      total={99}
      renderCount={(count) => (
        <p className="text-small text-foreground font-medium ms-2">
          +{count} supporter
        </p>
      )}
    >
      <Avatar
        src={
          "https://i.pinimg.com/736x/54/d3/55/54d3555c5e8edeeb651fe1ce0033b76f.jpg"
        }
      />
      <Avatar
        src={
          "https://i.pinimg.com/736x/ad/1a/b1/ad1ab1a57c26932348b91b5c3b5e4b2b.jpg"
        }
      />
      <Avatar
        src={
          "https://i.pinimg.com/736x/67/44/b7/6744b77fad781be72bb282748a67581a.jpg"
        }
      />
      <Avatar
        src={
          "https://i.pinimg.com/736x/7b/f0/52/7bf052d16c199bb6cab7ee52c0034bdf.jpg"
        }
      />
      <Avatar
        src={
          "https://i.pinimg.com/736x/c0/35/0d/c0350d16d9e452a20fabdf069473ba5a.jpg"
        }
      />
    </AvatarGroup>
  );
}
