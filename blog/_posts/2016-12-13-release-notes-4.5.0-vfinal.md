---
layout: blog
title: Scala IDE 4.5.0 is out!
author: Scala IDE team
disqus: false
---

We have the great pleasure to give into your hands the next upgraded version of Scala IDE. This time we were focused on improvements in usability and performance areas. So first of all, we moved to the newest Eclipse platform 4.6 Neon to allow you to explore all enhancements shipped by Eclipse team. The second, we improved the work of Scala Refactoring especially in Organize Imports functionality but not only. From now, we believe, you will enjoy the work with even so advanced libraries like the Shapeless both as a source (yes, it is possible to import this project by Scala IDE) or referenced library dependency. The third, we decided to use the new Zinc compiler with its all advanced features which cause that compilation process is faster.

Besides aforementioned areas we traditionally added a bunch of smaller fixes and enhancements into existing functionalities.

Finally as always, we are aware that Scala IDE still needs improvements and we assure you that we are doing our best to deliver the most reliable and handy tool as possible, with your help as well. Enjoy.

## New and Noteworthy

### Improved Refactoring Support

Refactoring in Scala IDE has always been kind of a risky process. Never to stop talking about the fact that all features of an IDE that require semantic knowledge of code, refactorings are based on the Abstract Syntax Trees (AST) of the Scala compiler. This compiler has originally been designed for command line applications and not for IDEs, which means that it removes lots of information from the trees that are not necessary for the compilation of a program. An IDE however needs all the information it can get to function correctly. Since the information is gone, it was necessary for our refactoring logic to get back this information.

Even though the technical challenges were exhausting, we nevertheless managed to significantly improve refactoring support in some areas. Especially the rename refactoring and the organize imports refactoring should work a lot smoother by now. We got there by giving up on tree transformations completely in some areas. Instead we only use the trees to find the locations where a refactoring needs to introduce changes. Once this is done, we change the source code directly without going through the indirection of doing tree transformations and then printing them back to source code. This approach does not work for all refactorings, since textual code changes can only be done right in simpler cases but for these cases they work extremely well.

There are so many improvements in our refactoring logic that it is difficult to mention them all here but you can have a look at our [changelog][cl] to find out which changes there are exactly. If you are one of the people how also lost faith in our refactoring support we ask you to give them another chance. They may still not be perfect - but we came a lot closer.

### Zinc compiler

Not only refactorings should work better. We decided to use the newest Zinc compiler to improve performance of compilation. For whose of you, who are not familiar with Zinc, it's worth to say that Zinc is a stand-alone version of sbt’s incremental compiler and can be used as an alternative to scalac. Incremental compilation significantly reduces time of compilation because analyzer can find dependent units and limits compilation to them only. So using this powerful tool is the great benefit for Scala IDE.

## Stats

For the full list of all changes, see the [changelog][cl].

As for every release, we'll take a look at some statistics from our bug database.

<pre>
34 tickets closed:
11	Matthias Langer
10	Wieslaw Popielarski
 8	Simon Schäfer
 5	(unassigned)
</pre>

## Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.4.0-rc1..4.5.0-rc1
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.9.1-rc2..0.11.0-rc1
</pre>

<pre>
Commits:
107	Matthias Langer
104	Wieslaw Popielarski
 96	Simon Schäfer
  5	Iulian Dragos
</pre>

[cl]: http://scala-ide.org/docs/changelog.html
