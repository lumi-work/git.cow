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
          "https://cdn.discordapp.com/attachments/1142449993794469908/1286655508706758778/image.png?ex=66eeb2d2&is=66ed6152&hm=929f2b0b397d4fc3bd9c68699ed25c9e074db0682b59e44992dc125f5cc1670d&"
        }
      />
      <Avatar
        src={
          "https://cdn.discordapp.com/attachments/1142449993794469908/1286655546199511114/image.png?ex=66eeb2db&is=66ed615b&hm=0df0ebcf252fb3228ee31a2ddfbd0e1a4e47c92c8be4ba1ee104415b91bf8bbb&"
        }
      />
      <Avatar
        src={
          "https://cdn.discordapp.com/attachments/1142449993794469908/1286655575660433441/image.png?ex=66eeb2e2&is=66ed6162&hm=691db72715500408fbe77c8846c0354e8a44a0047e87f9773cb9a6f3e005873e&"
        }
      />
      <Avatar
        src={
          "https://cdn.discordapp.com/attachments/1142449993794469908/1286655599827877980/image.png?ex=66eeb2e7&is=66ed6167&hm=385b9e8e69bcaace2eaa5620adb8dad725d9210c01b3ecd1880c5aa9a1f656e4&"
        }
      />
      <Avatar
        src={
          "https://cdn.discordapp.com/attachments/1142449993794469908/1286655633264873544/image.png?ex=66eeb2ef&is=66ed616f&hm=487dc302fb2b3bd25c7d3daa43fb6b321401d5d4ead5c3986fed75f5d9f9ece7&"
        }
      />
    </AvatarGroup>
  );
}
