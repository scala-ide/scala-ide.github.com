---
layout: blog
title: Scala IDE 4.0.0-M1 on Scala 2.11.0-M7
author: Scala IDE team
disqus: false
---

As usual, we are happy to join the announcement of Scala 2.11.0-M7, the latest milestone from the Scala team, with a rebuild of Scala IDE 4.0.0-M1, our own latest milestone.

## Improvements

The Scala IDE code itself is the one for milestone 1, but we did some work on parts of the compiler used by the IDE. This results in small improvements, like in hyperlinking ([SI-7915]) or completion ([SI-7280]). 

The complete list of changes is available in the [Scala announcement][scala-changelog].

Other fixes like these are in the work, and will become available as new versions of Scala are released. And for the impatient, our [nightlies] always contain the latest fixes, as they are merged.

## Plugins

Living on the bleeding edge doesn't mean losing all confront. New builds of the Scala worksheet and Scala search, compatible with the new release, are available. And they also take advantage of some of the improvements.

## Installation

This release is available for both Eclipse Juno (4.2) and Kepler (4.3) using the following update-site: [http://download.scala-ide.org/sdk/e38/scala211/dev/site/](http://download.scala-ide.org/sdk/e38/scala211/dev/site/).

Happy Scala coding!

[SI-7915]: https://issues.scala-lang.org/browse/SI-7915
[SI-7280]: https://issues.scala-lang.org/browse/SI-7280
[scala-changelog]: http://www.scala-lang.org/news/2013/11/27/release-notes-v2.11.0-M7.html
[nightlies]: /download/nightly.html
