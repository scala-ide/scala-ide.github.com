---
layout: blog
title: Scala IDE 4.4-RC2 is out!
author: Scala IDE team
disqus: false
---

We are happy to announce a new Scala IDE release where we concentrated all of our efforts on improving the overall developer experience. This means that we focused to create a lot of small cleanups of the IDE behavior and to fix as many bugs as possible, especially in the refactoring logic. This also means that no major new features have been introduced, but that can hardly be seen as a bad thing, since new features always introduce new bugs and therefore would stand against the overall goal of this release.

This is the second release candidate and if no further blockers are found during the next week or so, it will become the final release. In contrast to the first release candidate a small bug has been fixed and the new Scala 2.11.8 release has been included in this IDE release.

## New and Noteworthy

### Improved Refactoring Support

Refactoring in Scala IDE has always been kind of a risky process. Many of our users lost faith in our refactoring support since they either introduced compile errors or simply changed the formatting of code. In some cases even parts of the code like comments or annotations were completely removed. For the shortcomings of our refactoring logic exist reasonable technical explanations even though they can't be used for an excuse of the broken behavior: As all features of an IDE that require semantic knowledge of code, refactorings are based on the Abstract Syntax Trees (AST) of the Scala compiler. This compiler has originally been designed for command line applications and not for IDEs, which means that it removes lots of information from the trees that are not necessary for the compilation of a program. An IDE however needs all the information it can get to function correctly. Since the information is gone, it was necessary for our refactoring logic to get back this information. Over the years we developed quite a complex solution that allowed us to obtain the missing information but we never succeeded in developing a perfect solution. Too often comments or annotations of Scala code, which are removed by scalac, couldn't be reconstructed and are therefore removed by the refactoring. Broken formatting also suffers from the same issues and even refactorings whose only purpose it was to change simple tree nodes, like the rename refactoring, could not work perfectly well, since Scalas syntax contains many edge cases, which are not directly reflected in trees.

Even though the technical challenges were exhausting, we nevertheless managed to significantly improve refactoring support in some areas. Especially the rename refactoring and the organize imports refactoring should work a lot smoother by now. We got there by giving up on tree transformations completely in some areas. Instead we only use the trees to find the locations where a refactoring needs to introduce changes. Once this is done, we change the source code directly without going through the indirection of doing tree transformations and then printing them back to source code. This approach does not work for all refactorings, since textual code changes can only be done right in simpler cases but for these cases they work extremely well.

There are so many improvements in our refactoring logic that it is difficult to mention them hall here but you can have a look at our [changelog][cl] to find out which changes there are exactly. If you are one of the people how also lost faith in our refactoring support we ask you to give them another chance. They may still not be perfect - but we came a lot closer.

### Improved Debugger Stability

Not only refactorings should work smoother - the debugger also got some new foundations. As for refactorings there have been mainly internal changes with the goal to make the debugger more stable. None of these changes should be visible in terms of changed behavior of the debugger.

## Stats

For the full list of all changes, see the [changelog][cl].

As for every release, we'll take a look at some statistics from our bug database.

<pre>
67 tickets closed:
    23	(unassigned)
    20	Simon Schäfer
    13	Matthias Langer
    10	Wieslaw Popielarski
    1	Iulian Dragos
</pre>

## Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.3.0-vfinal..4.4.0-rc2
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.8.0..0.9.1-rc2
# https://github.com/scala-ide/scala-search
% git shortlog -sn --no-merges 0.2.5..0.3.0
</pre>

<pre>
Commits:
    90  Simon Schäfer
    63  Wieslaw Popielarski
    56  Matthias Langer
     9  Iulian Dragos
     3  Andrey Ilinykh
     1  Josef Vlach
     1  Eric Casteleijn
</pre>

[cl]: http://scala-ide.org/docs/changelog.html
