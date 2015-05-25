---
layout: blog
title: Scala IDE 4.1.0 is out!
author: Scala IDE team
disqus: false
---

After the large 4.0 release that arrived at the end of last year, we are happy to announce an update release that contains beside of some bug fixes and performance improvements also some special new features.

This is the first release candidate, and if no blockers are found during the next week or so, it will become the final release.

## New and noteworthy

For this release it is important to mention that the Scala IDE team started to work together with [VirtusLab][vl], which makes a big deal given that they are the creators of the most promising feature contributions.

### Expression evaluator

This is by far the biggest feature in this release and also the most exciting one. Whenever you run an application in the debugger and you hit a breakpoint, you can evaluate Scala code in the context of your breakpoint. This is similar to what the worksheet or the REPL offers, with the difference that everything is evaluated while your application is suspended in debug mode and therefore can take as input the state of your program.

For more information see the [documentation page][ee] of the expression evaluator.

### Hot Code Replacement

Beside of the big expression evaluator, some other nice little improvements went into the debugger. The most important to mention is Hot Code Replacement, a feature of the JVM, that allows a debugger to reload code inside of a running application. Unfortunately this only works for local code, i.e. no definitions that change the structure of your application. This means that you can replace the content of methods, recompile your code, and the debugger will reload the new code into your running application. You can't change any method signatures, nor add new methods or classes - if you want to do that you still have to restart your application. For more information about how to use this feature, see the [HCR docs][hcr].

### New schema of compiling dependent projects

One annoying problem about dependent projects and/or source folders in Scala IDE was so far that if one of them contained an error, all others couldn't be built anymore too. This limitation is now gone for all projects and source folders that can be compiled before the erroneous project or source folder is reached. As an example, if you have three source folders `macros`, `main` and `tests` and the `tests` source folder contains an error it is still possible to compile and run anything in `macros` and `main`. For more information about this feature see its [docs][scopes].

### Removal of old wizards

In 4.0, a [new wizard][new-wizard] has been introduced whose goal it was to be a simpler alternative to the old wizard. In the last months no bugs that couldn't be fixed were found in this new wizard, therefore we now completely replaced the old wizard with the new one.

## Stats

As for every release, we'll take a look at some statistics from our bug database.

- 152 tickets closed
- 76 fixed tickets (the difference being due to invalid or duplicate tickets)

For this release, we went through a cleanup of our ticket database. In doing so a lot of outdated ticket got closed, therefore the top ticket closer for this release is Mr. Unassigned. Overall, the stats are a bit off this time because a lot of time was spent in implementing new features that had no corresponding ticket in the database.

<pre>
Tickets fixed:
    41	(unassigned)
    18	Simon Schäfer
    11	Matthias Langer
    3	Iulian Dragos
    1	Jerzy Müller
    1	Michał Pociecha
    1	Wieslaw Popielarski
</pre>

## Thanks

For this release, old contributors moved away, but new ones arrived. Beside from all the work VirtusLab did, special thanks goes to [Matthias Langer][mlangc] who made a great deal in improving this release.

<pre>
Commits:
    63  Jerzy Müller
    59  Simon Schäfer
    58  Matthias Langer
    13  Iulian Dragos
    11  Piotr Kukiełka
    10  Michał Pociecha
     7  Luc Bourlier
     6  Krzysztof Romanowski
     4  Brook Heisler
     3  François Garillot
     3  Wiesław Popielarski
     2  Aleksander Guryanov
     2  Jason Zaugg
     1  Lukas Rytz
     1  Mirco Dotta
     1  Mirko Stocker
     1  Pawel Batko
     1  The Gitter Badger
     1  Viktor Dragomiretskyy
</pre>

[vl]: http://virtuslab.com/
[ee]: http://scala-ide.org/docs/current-user-doc/features/scaladebugger/expression-evaluator.html
[hcr]: http://scala-ide.org/docs/current-user-doc/features/scaladebugger/index.html#Hot_code_replace_new__since_4_1_
[scopes]: http://scala-ide.org/docs/current-user-doc/features/scalacompiler/index.html
[new-wizard]: http://scala-ide.org/docs/current-user-doc/features/wizards/index.html
[mlangc]: https://github.com/mlangc/
