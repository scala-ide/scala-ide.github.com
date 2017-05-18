---
layout: blog
title: Scala IDE 4.6.0 is out!
author: Scala IDE team
disqus: false
---

We have the great pleasure to give into your hands the latest Scala IDE which is fully compatible with Scala 2.12.2. This time we have devoted almost all our efforts to migrate Scala IDE functionality to Scala 2.12.2 together with related plugins. So Search, Worksheet, ScalaTest and Refactoring plugins are now available for the newest Scala version! Unfortunately we could not be able to deliver you Play 2 plugin because of too many interactions between other plugins and Scala 2.12. The good news is that we are planning very soon (next 1-2 weeks) release 4.6.1 which will contain support for Play 2.6 templates. Actually full work has been done already.

Besides that we traditionally added a bunch of smaller fixes and enhancements into existing functionalities.

Finally as always, we are aware that Scala IDE still needs improvements, especially now, and we assure you that we are doing our best to deliver the most reliable and handy tool as possible, with your help as well. Enjoy.

## New and Noteworthy

### Improved Refactoring Support

There are so many tiny improvements in our logic that it is difficult to mention them all here but you can take a look at our [changelog][cl] to find out which changes there are exactly. They may still not be perfect - but we came a lot closer.

## Stats

For the full list of all changes, see the [changelog][cl].

## Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.5.0-vfinal..4.6.0-vfinal
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.11.0..0.13.0-4.6.0-vfinal
</pre>

<pre>
Commits:
69	Wieslaw Popielarski
49	Simon Schäfer
41	Matthias Langer
 6	Rafał Krzewski
 2	Sam Halliday
 1	Melvin Winstroem-Moeller
</pre>

[cl]: http://scala-ide.org/docs/changelog.html
