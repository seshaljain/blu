+++
title = "Youtube Remaining Time"
author = ["Seshal Jain"]
description = "I wrote a bookmarklet which displays the time remaining in a Youtube playlist"
date = 2021-04-24T00:00:00+05:30
tags = ["js", "scripting"]
draft = false
+++

I spent most of the previous year's online class time on Netflix,
Youtube[^fn:1], and other less honorable activities. After a year of
online classes, I have become accustomed to bingeing course playlists
from Youtube channels days before my exams, and it has worked out well
(so far).

I was going through a Theory of Computation playlist which had ~100
videos, and I just wanted to know how much time I would need to finish
the subject.

There are third-party tools that calculate the total time of a Youtube
playlist using the Youtube API, but that isn't what I needed. If I am on
the 62nd video of a course playlist and want an optimistic estimate of
the time it will take to finish my course, I wouldn't go to a different
website, would I?

So with ~24 hours remaining for my Endsem Exam, I sat and wrote a small
bookmarklet that runs on a Youtube playlist page and calculates the time
remaining in the playlist.

I needed to complete `10:40:45` hours[^fn:2] of ToC.<br />
I did not complete the playlist.<br />
I spent about an hour inside the browser console and another hour
tweaking & refining the script, and then almost two hours fawning over
the script and sharing it with people.<br />
All in all, 4 hours well spent. :innocent:

## Installation {#installation}

The installation is quite simple, you can try it out right away: <a
href="javascript:(function()%7BPL%3DArray.from(document.querySelectorAll(%22.playlist-items%20ytd-thumbnail-overlay-time-status-renderer%22))%3Bindex%3DparseInt(document.querySelector(%22.index-message%22).innerText.split(%22%2F%22))-1%3Bif(PL%26%26PL.length%3E0)%7BplTime%3D0%3Bfunction%20calcTime(pl)%7BpTime%3D0%3Bpl.forEach(item%3D%3E%7Bta%3Ditem.innerText.split(%22%3A%22)%3BitemTime%3D0%3Bsec%3D0%2Cmin%3D0%2Chr%3D0%3Bif(ta%26%26ta.length%3E0)%7Bsec%3DparseInt(ta.pop())%7Dif(ta%26%26ta.length%3E0)%7Bmin%3DparseInt(ta.pop())%7Dif(ta%26%26ta.length%3E0)%7Bhr%3DparseInt(ta.pop())%7DitemTime%3Dsec%2Bmin\*60%2Bhr\*60\*60%3BpTime%2B%3DitemTime%7D)%3Breturn%20pTime%7Dfunction%20timeString(sec)%7Bhours%3DMath.floor(sec%2F3600)%3Bminutes%3DMath.floor((sec-hours\*3600)%2F60)%3Bseconds%3DMath.floor(sec-hours\*3600-minutes\*60)%3Bif(hours%3C10)%7Bhours%3D%220%22%2Bhours%7Dif(minutes%3C10)%7Bminutes%3D%220%22%2Bminutes%7Dif(seconds%3C10)%7Bseconds%3D%220%22%2Bseconds%7Dreturn%60%24%7Bhours%7D%3A%24%7Bminutes%7D%3A%24%7Bseconds%7D%60%7Dalert(%60Playlist%20time%3A%20%24%7BtimeString(calcTime(PL))%7D%5Cn%5CnRemaining%20time%3A%20%24%7BtimeString(calcTime(PL.slice(index)))%7D%5CnAt%201.5x%3A%20%24%7BtimeString(calcTime(PL.slice(index))\*2%2F3)%7D%5CnAt%202x%3A%20%24%7BtimeString(calcTime(PL.slice(index))%2F2)%7D%60)%7Delse%7Balert(%22Playlist%20not%20found%20on%20page%22)%7D%7D)()%3B">PlaylistTimer</a>
← drag this to your Bookmarks Bar, and click when on a Youtube playlist page.

## Code {#code}

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

Fumbling around the page source I found the selector for playlist items.
A simple for loop through the timestamps and some parsing gives the
total time for the playlist.

The remaining time is calculated by extracting the index of the current
item from the item number indicator.

It is not quite production ready, but hey, it works!

{{< endline >}}

[^fn:1]: Looking up Emacs resources. Honest!
[^fn:2]: `05:20:22` hours at 2x speed
