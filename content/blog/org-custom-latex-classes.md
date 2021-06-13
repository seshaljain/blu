+++
title = "Org Custom LaTeX Classes"
author = ["Seshal Jain"]
description = "Defining a LaTeX class for assignments from within Emacs"
date = 2021-01-30T00:00:00+05:30
tags = ["emacs", "latex", "org"]
draft = false
+++

In my [last post]({{< ref
"/blog/using-emacs-for-college-assignments.md" >}}), I described
my setup for writing assignments within Emacs.<br />
I realised that while it works, I may need a more complicated workflow
to write reports and assignments which are more than just one-time
submissions.

Admittedly, I'm still a beginner at LaTeX, it is only through Org-mode's
mighty features that I am able to submit my assignments with ease.

Looking for options to customize the default `article` class, I came
across the `#+LATEX_CLASS` option in a post, _ofcourse_ Emacs has an
option😉. It has excellant documentation, but I could only find a few
dead-end answers online about my specific usecase.

Now coming to what I wanted to achieve,

> Create a report from previous assignments properly formatted with a
> Table of Contents and Title page

This is trivial with Google Docs or MS Word or even with a purely
LaTeX-based setup, and that's completely _fine_. But I would need to
write in Emacs and then copy it to either program, which is a hassle.<br />
So here is what I did:<br />
I searched Stack Overflow 😇.

Now that led to a dead answer, but the Org mailing list referenced there
had a few good tips. This is more of a LaTeX post than an Org one, but
oh well.

The default `article` class isn't exactly made up for writing reports,
and the `report` class has this concept of Chapters which did not make
sense in an assignment. But the sections-on-new-pages feature is what I
want, so I created a class derived from `report`, with a custom title
page and overridden `chaptername` macro.

Org has a variable called `org-latex-classes` which contains classes
available to the `#+LATEX_CLASS` option header. You can look it up (SPC
h v org-latex-classes in Doom Emacs), each entry is of the form

```emacs-lisp
  (class-name
   header-string
   (numbered-section . unnumbered-section)
   ...)
```

I created an `assignment` class. The header string is where the magic
happens.

Org needs `\` to be escaped, so in my `config.org`,

```text
  (after! ox-latex
    (add-to-list 'org-latex-classes
                 '("assignment"
                   "\\documentclass[a4paper,12pt]{report}
  \\renewcommand{\\chaptername}{Lab}
  \\makeatletter
  \\renewcommand{\\maketitle}{
    \\begin{titlepage}
      \\begin{center}
        \\vspace*{2em}
        \\Huge \\textbf{ASSIGNMENT} \\\\
        \\vspace{4em}
        \\Huge \\textbf{\\@title} \\\\
        \\vspace{4em}
        \\Large \\textbf{\\@date} \\\\
        \\bigskip
        \\Large \\textbf{\\@author} \\\\
        \\medskip
        \\large 191112436, CSE-3 \\\\
        \\bigskip
        \\includegraphics[width=16em]{../../manit-logo.png} \\\\
        \\bigskip
        \\large Department of Computer Science \\\\
        \\large MANIT, Bhopal \\\\
      \\end{center}
    \\end{titlepage}
  }
  \\makeatother
  \\usepackage[margin=0.7in]{geometry}"
                   ("\\chapter{%s}" . "\\chapter*{%s}")
                   ("\\section{%s}" . "\\section*{%s}")
                   ("\\subsection{%s}" . "\\subsection*{%s}")
                   ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
                   ("\\paragraph{%s}" . "\\paragraph*{%s}")
                   ("\\subparagraph{%s}" . "\\subparagraph*{%s}"))))
```

**Note:** The `after!` part is just a Doom macro, you can also use
`with-eval-after-load` to achieve the same.

This creates a custom class for Org and LaTeX to use.

Whenever you need to write a report, simply call this class by adding

```org
  #+LATEX_CLASS: assignment
```

to the header of your Org file, for example

```org
  #+TITLE: Software Engineering Lab
  #+SUBTITLE: CSE-229
  #+AUTHOR: Seshal Jain
  #+DATE: January 29, 2021
  #+LATEX_CLASS: assignment
```

You can check out the entire Org file
[here](https://github.com/seshaljain/semester-four/blob/main/se-lab/lab3/README.org).

Now you only have to export this Org file. Run C-c C-e l p to generate a
PDF from your Org file 🎉

{{< figure src="/img/org-latex-output.png" caption="The generated PDF. Isn't it pretty?" >}}

{{< endline >}}
