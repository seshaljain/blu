---
title: "Using Emacs for College Assignments"
date: 2021-01-23
tags: [emacs, latex]
description: How I write my assignments for CS subjects at MANIT, Bhopal.
---

In the 3rd Semester of my Bachelor of Technology in Computer Science course at MANIT, Bhopal, I came across [Emacs](https://www.gnu.org/software/emacs/). I won't be lying when I say it changed my life.

I use Emacs for all my text-based work (more posts on this coming soon!), and it naturally made sense for me to experiment with it for my programming lab assignments.  
The general workflow of the labs I am currently enrolled in is something like this:

1. Professor assigns some task, ex. _Analysis of Various Sorting Algorithms_
2. The student writes relevant code/explanation for the given program
3. The student runs the program in a console, takes screenshots, and prepares a document in Word/Docs
4. The student mails a generated PDF (or even the original file) to the professor

I realised in the first few weeks that this is a very cumbersome process, since we're dealing with images and syntax highlighting.  
It does not make any sense to paste code from an IDE into a word processor, where it loses the syntax highlighting or worse, is typeset into an unreadable sans-serif typeface (Calibri, I'm looking at you) :weary:.

I was exploring [Org Mode](https://orgmode.org/) around the same time, and it is the perfect tool for this use case.  
I now use literate programming to write and run source code in the same file as my explanation, and it is then exported to LaTeX natively by Org to general beautiful, publication-ready PDFs.
Additionally, since all of it is in plain text, I also host my assignments in version control on [Github](https://github.com/seshaljain/semester-four/), where Org files are rendered like regular pages. Awesome :fire:!

---

I have a fully custom Emacs config, you are welcome to check it out on [Github](https://github.com/seshaljain/.doom.d). However, you do not need the entire configuration, the tools should work natively with Emacs too!

## Emacs Setup

On Ubuntu, installing Emacs is as simple as

```shell
sudo apt install emacs
```

This should install Emacs 26.3 as of writing. Go on, launch your Emacs!

{{< figure src="/img/emacs.png" caption="Emacs 26.3 Fresh Install" >}}

## TeX Setup

I use [TinyTeX](https://yihui.org/tinytex) because of its small footprint, but essentially all you need is a TeX processor.  
You can find the install instructions on its website:

```shell
wget -qO- "https://yihui.org/tinytex/install-bin-unix.sh" | sh
```

This will install `tlmgr` and other TeX binaries on your system.  
**Note:** You might need to log out and log in again for the binaries to be accessible on your PATH.

## Org

Org files are saved with a `.org` extension. Org is extremely powerful, with robust support for text formatting and source code blocks. This is extremely helpful, especially for us as you will see.

All Org mode headings start with \*, with the number of \* indicating the depth.  
You can add text as is, somewhat like Markdown. Check out all of Org Mode's features in the [Org Mode Manual](https://orgmode.org/manual/).

Now here's the interesting part. You can write source code inline within Org's source blocks, with complete support for syntax highlighting, code building and auto-completion. :astonished:

For starters, you can use my [ADA Lab 2 Assignment](https://github.com/seshaljain/semester-four/blob/main/ada-lab/lab2/191112436.org) file.  
After opening it in Emacs, you will see that the code blocks are already being highlighted using C++ syntax.
To edit the code, place the cursor somewhere inside the code block and press <kbd>C-c</kbd> <kbd>'</kbd>.  
This will launch a C++ buffer where you can edit the file with C++ language support. Press <kbd>C-c</kbd> <kbd>'</kbd> to confirm the changes or <kbd>C-c</kbd> <kbd>C-k</kbd> to cancel.

As you may have noticed by now, Emacs is very keyboard intensive, you will learn the keybindings with practice over time.  
You can also search for commands via <kbd>M-x</kbd> because almost everything in Emacs is a (searchable) function.

Let's export this Org file now.  
In the main Org file, enter <kbd>C-c</kbd> <kbd>C-e</kbd> to launch the Org Export window. There are a myriad of options available, feel free to play around! I especially like the UTF-8 export when submitting assignments in plaintext. Adds additional flair to your work :wink:.

Oh! By the way, press <kbd>C-g</kbd> almost anywhere in Emacs to cancel the current operation.

To export the file to PDF via TeX, enter <kbd>C-c</kbd> <kbd>C-e</kbd> <kbd>l</kbd> <kbd>p</kbd>. This creates a TeX file from your Org file and uses LaTeX to convert it to a PDF.  
…but wait! There seems to be an error! To open the error log, enter <kbd>C-x</kbd> <kbd>C-b</kbd> and select the buffer named **\* Org PDF LaTeX Output \***.  
You will find a line stating the name of the missing package:

`` ! LaTeX Error: File `<packagename>.sty' not found. ``

This is because TinyTeX is very minimal, it comes only with the bare minimum packages pre-installed. `tlmgr` allows you to install all the TeX packages you need from the CTAN repository. When it shows an error, run the following command to install the relevant package:

```shell
tlmgr install <packagename>
```

Once you install all the missing packages, you should see a `.tex` and a `.pdf` file on the same directory. Open up your very first Org-powered PDF!  
**Protip:** You can open PDFs in Emacs too! Simple use <kbd>C-x</kbd> <kbd>C-f</kbd> on a PDF file.

{{< figure src="img/pdf-plain.png" caption="PDF Reader in Emacs" >}}

This is pretty awesome, but you can do even better! `Minted` adds syntax highlighting functionality to the `SRC` blocks on LaTeX export.

### Minted

`Minted` is a LaTeX package which uses Python's [Pygments](https://pygments.org/) library to generate syntax highlighted code output. This is an external dependecy and also requires some Emacs configuration.

Install `Pygments` via `pip`:

```shell
pip install Pygments
```

**Note:** The `pygmentize` binary must be accessible on your PATH after installation.

Install `minted` via `tlmgr`:

```
tlmgr install minted
```

We have installed the external dependencies, now we need to configure Emacs to use these.

Navigate to the **\* scratch \*** buffer. Switch to Org mode using <kbd>M-x</kbd> <kbd>org-mode</kbd> <kbd>[RET]</kbd>.

Create a Org source block by entering <kbd><s</kbd> <kbd>[TAB]</kbd> and add `emacs-lisp` as the language.

The block should now look like this:

```org
#+BEGIN_SRC emacs-lisp

#+END_SRC
```

In this source block, add the following code:

```emacs-lisp
(setq org-latex-listings 'minted
      org-latex-packages-alist '(("" "minted"))
      org-latex-pdf-process
      '("pdflatex -shell-escape -interaction nonstopmode -output-directory %o %f"
        "pdflatex -shell-escape -interaction nonstopmode -output-directory %o %f"
        "pdflatex -shell-escape -interaction nonstopmode -output-directory %o %f"))
```

You can execute this code, _right here, in this file_ by using <kbd>C-c</kbd> <kbd>C-c</kbd>. This will enable these features for your current session.

To make these changes permanent, open the `~/.emacs.d/init.el` file (create one if it does not exist) and add the Lisp code there.
`init.el` is a special file which is launched at Emacs startup.

Congratulations, you now have a build process to generate beautiful assignments via LaTeX!

{{< figure src="img/pdf-color.png" caption="Syntax highlighted PDF" >}}

## tl;dr

- Org Mode in Emacs supports LaTeX export natively, but requires the TeX binaries to be installed and accessible on PATH
- The `minted` package uses `Pygments` to add syntax highlighting to LaTeX exports
- Emacs can render PDFs natively

{{< endline >}}
