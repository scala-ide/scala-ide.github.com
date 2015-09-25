---
layout: blog
title: Scala IDE 4.2-vfinal is out!
author: Scala IDE team
disqus: false
---

We are happy to announce a new Scala IDE release that contains beside of some bug fixes, especially around refactoring support, also new features like the Async debugger and Auto Edits.

## New and noteworthy

### Auto Edits

This is definitely the biggest new feature in the IDE. Actually, Auto Edits aren't that new - they already existed but because of various limitations their underlying architecture got a redesign. Auto edit are these little features that support you during typing. Whenever the code is indented for you, a parentheses is automatically closed or some code template is expanded - it is their work. Because not every developer liked these automatic edits, all of them were made optional. It is now in your power to enable them as you wish. The following auto edits are available:

<img src="{{site.url}}/resources/images/auto_edits.png" alt="Auto Edits" style="width: 100%;"/>

You should especially checkout the Auto Edits "Insert template into editor whenever its name is written" and "Surround a block with curly braces". These ones are among the new ones and may be able to improve your live a bit. Check out there description at the bottom of the page (not shown in the above screenshot).

### Async Debugger

The Async Debugger is an improvement to the Scala Debugger. It enables control flow tracking in your cutting edge reactive applications. It is the must for every developer who needs to trace control flow in existing and newly built applications where Scala Future or Akka Actors are playing a key role. This debugger improvement allows you to stop at breakpoints and find the trigger of the suspicious event when it was sent from a different thread.

For the beginning there is the "Async Stack View" introduced. It allows you to jump to the sender of a message in an actor system and to find out about the context where a Future is started. You can see the debugger in action in [this talk][talk] by Iulian Dragos.

### Scala 2.12 Support

A new major version of Scala is coming and Scala IDE should of course be able to handle it well. If you want to check out the latest [2.12.0-M2][s212] you can do so. The only thing you have to do in order to make Scala IDE happy is to add it as a Scala installation to your workspace. Read [this article][inst] if you don't know how to add such a Scala installation.

For the full list of changes, see the [changelog][cl].

### Configurable Scopes Building

The 4.1 release added a new feature: [Scopes Building][scopes]. The purpose of this feature was to make building of your projects faster by splitting them up in the three different scopes `main`, `tests` and `macros`. This feature is hardwired to source folders, whose names had to match exactly the name of one of the scopes. With this release we lifted this requirement. It is now possible to assign every source folder any build scope you want. This can be done in the project configurations:

<img src="{{site.url}}/resources/images/configurable-scopes-building.png" alt="Configurable Scopes Building" style="width: 100%;"/>

### Improved Refactoring Support

Beside from some new features, especially the Refactoring support of Scala IDE got better in this release. Moving files around in your project or renaming classes and methods is now safer than ever. If you want to know more about which concrete bugs have been fixed, have a look at the [changelog][cl]. Most of the bug fixes were done by [Matthias Langer][mlangc], thank you Matthias!

Together with this Scala IDE release, there is also a new version of scala-refactoring released, which can be consumed as a standalone library. The library is available for 2.10 and 2.11 under the following artifact ID:

<pre>
"org.scala-refactoring" %% "org.scala-refactoring.library" % "0.7.0"
</pre>

## Stats

As for every release, we'll take a look at some statistics from our bug database.

- 73 tickets closed
- 57 fixed tickets (the difference being due to invalid or duplicate tickets)

<pre>
Tickets fixed:
    33	Simon Schäfer
    16	(unassigned)
    9	Matthias Langer
    8	Wieslaw Popielarski
    4	Iulian Dragos
    1	Lance Finfrock
    1	shaberman
    1	Andrey Ilinykh
</pre>

## Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.1.0-vfinal..4.2.0-vfinal
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.6.3S-4.1.0rc1..0.7.0
# https://github.com/scala-ide/scala-ide-play2
% git shortlog -sn --no-merges 0.4.6-2..0.5.0
# https://github.com/scala-ide/scala-worksheet
% git shortlog -sn --no-merges 0.3.0..0.4.0
# https://github.com/scala-ide/scala-search
% git shortlog -sn --no-merges 0.2.4-2..0.2.5
</pre>

<pre>
Commits:
   209  Simon Schäfer
    51  Matthias Langer
    27  Iulian Dragos
    21  Wieslaw Popielarski
    17  Jerzy Müller
     2  Mirco Dotta
     1  Stephen Haberman
     1  Andrey Ilinykh
     1  Lance Finfrock
     1  Jason Zaugg
     1  Seth Tisue
</pre>

[s212]: http://www.scala-lang.org/news/2.12.0-M2
[inst]: http://scala-ide.org/blog/scala-installations.html#BYOS
[talk]: https://www.parleys.com/tutorial/rethinking-debugger
[cl]: http://scala-ide.org/docs/changelog.html
[scopes]: http://scala-ide.org/docs/current-user-doc/features/scalacompiler/index.html
[mlangc]: https://github.com/mlangc/
