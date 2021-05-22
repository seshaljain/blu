---
title: "SpOnGeBoB cAsE"
date: 2021-05-22
tags: [js, scripting]
description: … when you need to mock people online in style
---

This one is going to be short.  
Spongebob Case, according to [KnowYourMeme](https://knowyourmeme.com/memes/mocking-spongebob), consists of an alternation of uppercase and lowercase text, and represents a mocking tone.

I used to do this manually, which was _excruciating_.

Turns out, it is quite simple with JS, and with some modern browser APIs, totally accessible via a bookmarklet.

```js
spongebobText = text
  .split("")
  .map((c) => (Math.random() < 0.5 ? c.toUpperCase() : c.toLowerCase()))
  .join("");
```

To add the clipboard functionality, we use `navigator.clipboard.writeText`

```js
if (nav igator.clipboard) {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }

  spongebobText = text
    .split("")
    .map((c) => (Math.random() < 0.5 ? c.toUpperCase() : c.toLowerCase()))
    .join("");

  navigator.clipboard.writeText(spongebobText);
}
```

Go ahead and install <a href="javascript:if(navigator.clipboard)%7Bvar%20e%3D%22%22%3Bwindow.getSelection%3Fe%3Dwindow.getSelection().toString()%3Adocument.selection%26%26%22Control%22!%3Ddocument.selection.type%26%26(e%3Ddocument.selection.createRange().text)%3BspongebobText%3De.split(%22%22).map(function(a)%7Breturn.5%3EMath.random()%3Fa.toUpperCase()%3Aa.toLowerCase()%7D).join(%22%22)%3Bnavigator.clipboard.writeText(spongebobText)%7D%3Bvoid+    0">SpOnGeBoB cAsE</a> by dragging it to your bookmarks bar.

Select some text, and click the bookmarklet, and SPOngebOB cAse TexT Will BE coPiED tO YOur CliPboArD 😎.

{{< endline >}}
