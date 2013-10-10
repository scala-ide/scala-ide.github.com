---
layout: blog
title: Scala IDE 3.0.2-RC2
author: Scala IDE team
disqus: false
---

We are happy to announce the second release candidate for [Scala IDE 3.0.2][release-notes]. As usual, it comes with Play support, Scala Search, ScalaTest and Scala Worksheet plug-ins.

Compared to RC1, we have two changes:

* Open Resource dialog no longer shows Scala classfiles ([#1000260][1000260]).
* Build compiler correctly track changes in dependent project ([#1001904][1001904]).

Have a look at the [changelog][changelog] for a comprehensive description of the changes made for this new release.

## Installation

This release is available for both Eclipse Juno (4.2) and Kepler (4.3) using the following update-site: [http://download.scala-ide.org/sdk/e38/scala210/dev/site/](http://download.scala-ide.org/sdk/e38/scala210/dev/site/)

Happy Scala coding!

[changelog]: http://scala-ide.org/docs/changelog.html#3_0_2
[release-notes]: http://scala-ide.org/blog/release-notes-3.0.2-RC01.html
[1000260]: https://www.assembla.com/spaces/scala-ide/tickets/1000260
[1001904]: https://www.assembla.com/spaces/scala-ide/tickets/1001904
