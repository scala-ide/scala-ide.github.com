---
layout: blog
title: Scala IDE 4.7.1 RC1 is out!
author: Scala IDE team
disqus: false
---

We have the great pleasure to inform you that now Scala IDE 4.7.1 RC1 is available. We added tiny but important improvements into Worksheet and Play2 support.

## New and Noteworthy

Scala Worksheet allows for running the code in any Scala version! This is, as we believe, good support for Spark engineers. So expect no more problems with trying your solution in Scala 2.11 or even 2.10.

Scala IDE Play2 plugin supports syntax coloring for .scala.html templates which makes work little bit more comfortable.

## Stats & Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.7.0-vfinal..4.7.1-rc1
# https://github.com/scala-ide/scala-worksheet
% git shortlog -sn --no-merges 4.7.0-vfinal..4.7.1-rc1
# https://github.com/scala-ide/scala-ide-play2
% git shortlog -sn --no-merges 0.10.0-4.7.0-vfinal..4.7.1-rc1
</pre>

<pre>
Commits:
28	Wiesław Popielarski
4	N.S. Cutler
</pre>

More details can be found in [changelog][cl].

[cl]: http://scala-ide.org/docs/changelog.html
