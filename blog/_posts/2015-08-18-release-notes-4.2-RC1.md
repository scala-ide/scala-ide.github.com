---
layout: blog
title: Scala IDE 4.2-RC1 is out!
author: Scala IDE team
disqus: false
---

We are happy to announce a new Scala IDE release that contains beside of some bug fixes, especially around refactoring support, also new features like the Async debugger and Auto Edits.

Normally we would say that this release candidate will become the final version if no blockers are found during the next week. Since there are huge new features introduced we extend this time period in order to ensure that enough people have the chance to try it before the stable release is announced.

## New and noteworthy

### Auto Edits

This is definitely the biggest new feature in the IDE. Actually, Auto Edits aren't that new - they already existed but because of various limitations their underlying architecture got a redesign. Auto edit are these little features that support you during typing. Whenever the code is indented for you, a parentheses is automatically closed or some code template is expanded - it is their work. Because not every developer liked these automatic edits, all of them were made optional. It is now in your power to enable them as you wish. The following auto edits are available:

<img src="{{site.url}}/resources/images/auto_edits.png" alt="Auto Edits" style="width: 100%;"/>

You should especially checkout the Auto Edits "Insert template into editor whenever its name is written" and "Surround a block with curly braces". These ones are among the new ones and may be able to improve your live a bit. Check out there description at the bottom of the page (not shown in the above screenshot).

### Async Debugger

The Async Debugger is an improvement to the Scala Debugger. It enables control flow tracking in your cutting edge reactive applications. It is the must for every developer who needs to trace control flow in existing and newly built applications where Scala Future or Akka Actors are playing a key role. This debugger improvement allows you to stop at breakpoints and find the trigger of the suspicious event when it was sent from a different thread.

For the beginning there is the "Async Stack View" introduced. It allows you to jump to the sender of a message in an actor system and to find out about the context where a Future is started. You can see the debugger in action in [this talk][talk] by Iulian Dragos.

### Scala 2.12 support

A new major version of Scala is coming and Scala IDE should of course be able to handle it well. If you want to check out the latest [2.12.0-M1][s212] you can do so. The only thing you have to do in order to make Scala IDE happy is to add it as a Scala installation to your workspace. Read [this article][inst] if you don't know how to add such a Scala installation.


## Stats

As for every release, we'll take a look at some statistics from our bug database.

- 59 tickets closed
- 46 fixed tickets (the difference being due to invalid or duplicate tickets)

<pre>
Tickets fixed:
    27	Simon Schäfer
    14	(unassigned)
    8	Matthias Langer
    5	Wieslaw Popielarski
    3	Iulian Dragos
    1	Lance Finfrock
    1	shaberman
</pre>

## Thanks

The following statistics contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.1.0-vfinal..4.2.0-rc1
# https://github.com/sschaef/scala-refactoring
% git shortlog -sn --no-merges 0.6.3S-4.1.0rc1..0.6.3S-4.2.0rc1
# https://github.com/scala-ide/scala-ide-play2
% g shortlog -sn --no-merges 0.4.6-2..0.5.0
# https://github.com/scala-ide/scala-worksheet
% g shortlog -sn --no-merges 0.3.0..0.4.0
</pre>

<pre>
Commits:
   185  Simon Schäfer
    26  Iulian Dragos
    34  Matthias Langer
    17  Jerzy Müller
    12  Wieslaw Popielarski
     2  Mirco Dotta
     1  Stephen Haberman
     1  lance
</pre>

[s212]: http://www.scala-lang.org/news/2.12.0-M1
[inst]: http://scala-ide.org/blog/scala-installations.html#BYOS
[talk]: https://www.parleys.com/tutorial/rethinking-debugger
