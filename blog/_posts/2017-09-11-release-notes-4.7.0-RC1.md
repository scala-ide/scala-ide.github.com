---
layout: blog
title: Scala IDE 4.7.0-RC1 is out!
author: Scala IDE team
disqus: false
---

We have the great pleasure to give into your hands Release Candidate of Scala IDE 4.7.0. This time we added support for Lagom projects, so from now, when you are working on Lagom project, you can run Lagom infrastructure services from Scala IDE directly.

Besides that we bumped up Scala version to 2.12.3 and for older projects to 2.11.11 and 2.10.6. We also updated Zinc Compiler to version 1.0.0 being the first user of its official release. Finally we upgraded Scalariform to version 0.2.3 and Scala Refactoring to 0.13.0.

As usual we delivered bunch of fixes and small enhancements too.

The last but not least we are lined up with newest Eclipse Oxygen version.

## New and Noteworthy

Scala 2.12.3 available now.

Scala 2.11.11 and 2.10.6 available for older projects.

Zinc version updated to 1.0.0 which makes Scala IDE the first user of Zinc Compiler offical release.

Lagom support available. No need to run Lagom services from outside of Scala IDE. Code of services is easily available for debugging. See feature doc for more info.

Scalariform updated to 0.2.3.

Scala Refactoring supports default imports grouping. See feature doc for more info.

## Stats

For the full list of all changes, see the [changelog][cl].

## Thanks

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.6.1-vfinal..4.7.0-rc1
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.13.0-4.6.1-vfinal..0.14.0-4.7.0-rc1
</pre>

<pre>
Commits:
23	Simon Schäfer
20	Wieslaw Popielarski
8	Rafał Krzewski
1	Jimin Hsieh
1	N.S. Cutler
</pre>

[cl]: http://scala-ide.org/docs/changelog.html
