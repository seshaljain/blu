+++
title = "Stream Youtube Playlists via VLC"
author = ["Seshal Jain"]
date = 2021-02-24T00:00:00+05:30
tags = ["scripting"]
draft = false
+++

I came across
[this](https://gist.github.com/p3g4asus/597050997e01f8fd1fcf473fe6545a4f)
Lua script which parses Youtube playlist links and adds them to a VLC
playlist. It seems to work only on Windows though so I made a few tweaks
to make it run on Linux.

<!--more-->

## Some context {#some-context}

Youtube has loads of amazing channels for learning, and I like to
bingewatch tutorials and courses at ~3x speed.<br />
I use uBlock Origin on Firefox, it efficiently eliminates the the
primary hurdle to bingewatching, ads.

However, learning from Youtube has a significant risk.<br />
It is _distracting_.

I'll admit that damned sidebar of recommendations has lead me astray on
several occasions, I found myself looking at
[questionable videos](https://www.youtube.com/watch?v=dQw4w9WgXcQ) at
odd times instead of pending Watch Later videos I have piled up.

Sure, browser extensions exist for this purpose, but I wanted to play
with VLC addon scripts.<br />
I'm very happy with the results 🤩

## Script {#script}

{{< gist seshaljain 220d5f2db9c574f4b5d2ca80343963ca >}}

## Installation {#installation}

### On Linux: {#on-linux}

Save the script in `~/.local/share/vlc/lua/playlist/` along with
[JSON.lua](http://regex.info/code/JSON.lua) and the `youtube-dl`
[binary](https://youtube-dl.org/latest) for Linux.

The folder structure should look like this:

```text
  ~/.local/share/vlc/lua/playlist
  ├── JSON.lua
  ├── youtube-dl
  └── yt-playlist.lua
```

### On Windows: {#on-windows}

Save
[this](https://gist.github.com/p3g4asus/597050997e01f8fd1fcf473fe6545a4f)
script in `%APPDATA%\vlc\lua\playlist\` along with
[JSON.lua](http://regex.info/code/JSON.lua) and the `youtube-dl`
[binary](https://youtube-dl.org/latest) for Windows.

The folder structure should look like this:

```text
  C:\USERS\<username>\APPDATA\ROAMING\VLC
  └───lua
      └───playlist
          ├───JSON.lua
          ├───youtube-dl.exe
          └───yt-playlist.lua
```

## Usage {#usage}

After installation, relaunch VLC and open the `Open Media` > `Network`
menu (C-n), and enter the Youtube playlist URL.

It will be parsed automatically and added to the current playlist. You
can save the playlist as a `.xspf` file and share it as well!
