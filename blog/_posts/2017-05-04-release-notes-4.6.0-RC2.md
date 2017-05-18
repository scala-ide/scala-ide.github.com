---
layout: blog
title: Scala IDE 4.6.0-RC2 is out!
author: Scala IDE team
disqus: false
---

We came out of users' expectations to support Scala 2.12.2 so this release candidate is using brand new scala version. Nothing newer is available now. Besides that we upgraded Zinc version to X14 and added interoperability for projects requiring older 2.11 scala version.

Additionally we improved navigation between Breakpoints View and Classfile Editor. Now double-click on breakpoint moves straight to the line in attached source of scala binaries where this breakpoint has been set.

Enjoy.

## New and Noteworthy

Scala 2.12.2 mostly!

## Stats

For the full list of all changes, see the [changelog][cl].

## Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.6.0-rc1..4.6.0-rc2
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.12.0..0.13.0-4.6.0-rc2
</pre>

<pre>
Commits:
    10  Matthias Langer
    10  Wiesław Popielarski
     6  Rafał Krzewski
     6  Simon Schäfer
     1  Melvin Winstroem-Moeller
</pre>

[cl]: http://scala-ide.org/docs/changelog.html
