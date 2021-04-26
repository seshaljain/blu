---
title: "Youtube Remaining Time"
date: 2021-04-24
tags: [js, scripting]
description: I wrote a bookmarklet which displays the time remaining in a Youtube playlist
---

I spent most of the previous year’s online class time on Netflix, Youtube[^1], and other less honorable activities. After a year of online classes, I have become accustomed to bingeing course playlists from Youtube channels days before my exams, and it has worked out well (so far).

I was going through a Theory of Computation playlist which had ~100 videos, and I just wanted to know how much time I would need to finish the subject.

There are third-party tools that calculate the total time of a Youtube playlist using the Youtube API, but that isn’t what I needed. If I am on the 62nd video of a course playlist and want an optimistic estimate of the time it will take to finish my course, I wouldn’t go to a different website, would I?

So with ~24 hours remaining for my Endsem Exam, I sat and wrote a small bookmarklet that runs on a Youtube playlist page and calculates the time remaining in the playlist.

I needed to complete `10:40:45` hours[^2] of ToC.  
I did not complete the playlist.  
I spent about an hour inside the browser console and another hour tweaking & refining the script, and then almost two hours fawning over the script and sharing it with people.  
All in all, 4 hours well spent. :innocent:

### Installation

The installation is quite simple, you can try it out right away: <a href="javascript:(function(){PL=Array.from(document.querySelectorAll('.playlist-items ytd-thumbnail-overlay-time-status-renderer'));index=parseInt(document.querySelector('.index-message').innerText.split('/'))-1;if(PL&&PL.length>0){plTime=0;function calcTime(pl){pTime=0;pl.forEach((item)=>{ta=item.innerText.split(':');itemTime=0;(sec=0),(min=0),(hr=0);if(ta&&ta.length>0){sec=parseInt(ta.pop())}if(ta&&ta.length>0){min=parseInt(ta.pop())}if(ta&&ta.length>0){hr=parseInt(ta.pop())}itemTime=sec+min*60+hr*60*60;pTime+=itemTime});return pTime}function timeString(sec){hours=Math.floor(sec/3600);minutes=Math.floor((sec-hours*3600)/60);seconds=Math.floor(sec-hours*3600-minutes*60);if(hours<10){hours='0'+hours}if(minutes<10){minutes='0'+minutes}if(seconds<10){seconds='0'+seconds}return `${ hours }:${ minutes }:${ seconds }`}alert(`Playlist time: ${timeString(calcTime(PL))}\n\nRemaining time: ${timeString(calcTime(PL.slice(index)))}\nAt 1.5x: ${timeString((calcTime(PL.slice(index))*2)/3)}\nAt 2x: ${timeString(calcTime(PL.slice(index))/2)}`)}else{alert('Playlist not found on page')}})();">PlaylistTimer</a> ← drag this to your Bookmarks Bar, and click when on a Youtube playlist page.

### Code

```js
(function () {
  PL = Array.from(
    document.querySelectorAll(".playlist-items ytd-thumbnail-overlay-time-status-renderer"),
  );
  index = parseInt(document.querySelector(".index-message").innerText.split("/")) - 1;

  if (PL && PL.length > 0) {
    plTime = 0;

    function calcTime(pl) {
      pTime = 0;
      pl.forEach((item) => {
        ta = item.innerText.split(":");
        itemTime = 0;
        (sec = 0), (min = 0), (hr = 0);

        if (ta && ta.length > 0) {
          sec = parseInt(ta.pop());
        }

        if (ta && ta.length > 0) {
          min = parseInt(ta.pop());
        }

        if (ta && ta.length > 0) {
          hr = parseInt(ta.pop());
        }

        itemTime = sec + min * 60 + hr * 60 * 60;
        pTime += itemTime;
      });
      return pTime;
    }

    function timeString(sec) {
      hours = Math.floor(sec / 3600);
      minutes = Math.floor((sec - hours * 3600) / 60);
      seconds = Math.floor(sec - hours * 3600 - minutes * 60);

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return `${hours}:${minutes}:${seconds}`;
    }

    alert(
      `Playlist time: ${timeString(calcTime(PL))}\n\nRemaining time: ${timeString(
        calcTime(PL.slice(index)),
      )}\nAt 1.5x: ${timeString((calcTime(PL.slice(index)) * 2) / 3)}\nAt 2x: ${timeString(
        calcTime(PL.slice(index)) / 2,
      )}`,
    );
  } else {
    alert("Playlist not found on page");
  }
})();
```

Fumbling around the page source I found the selector for playlist items. A simple for loop through the timestamps and some parsing gives the total time for the playlist.

The remaining time is calculated by extracting the index of the current item from the item number indicator.

It is not quite production ready, but hey, it works!

{{< endline >}}

[^1]: Looking up Emacs resources. Honest!
[^2]: `05:20:22` hours at 2x speed
