---
layout: blog
title: Scala IDE 3.0.2-RC1 release
author: Scala IDE team
disqus: false
---

We are very happy to announce the simultaneous release of three products today:

* The first release candidate of the 3.0.2 maintenance release of Scala IDE. It is based on the recent Scala 2.10.3-RC2 release.
* A new Scala Search 0.2.0 release, with Type Hierarchy support!
* And a bugfix release of the Play plugin, v0.4.1.

*All releases are available only for Eclipse 4.x (i.e., Juno and Kepler). Support for Eclipse 3.x is discontinued.*

## Scala IDE 3.0.2-RC1

Besides upgrading to the freshly announced Scala 2.10.3-RC2, the great news is that with this release we officially start support for Eclipse 4.x. Therefore, the old Eclipse 3.x platform is abandoned.

But that’s not it, of course this maintenance release comes with a few more goodies:

* Updated the build compiler to use the recently released sbt 0.13.0 (which, among others,
includes an important fix for correctly handling build cancellation, see [sbt pr #812](https://github.com/sbt/sbt/pull/821))
* Semantic highlighting now works also on source attachments [#1000939](https://www.assembla.com/spaces/scala-ide/tickets/1000939).
* Fixed a race-condition that can lead to “Resource XXX does not exist.” errors (see [#1001846](https://www.assembla.com/spaces/scala-ide/tickets/1001846) for details)

For the complete list of fixes, please see our [changelog][changelog].

## Scala Search 0.2.0

Scala Search aims to extend the IDE with a range of search-related features that focus on
improving code navigation and help developers better understand Scala code.

In its first release, it provided [support for Find Occurrences for members (vals, vars and methods)](http://scala-ide.org/blog/release-notes-3.0.1-RC01.html#scala_search).
The spotlight of this new release is Type Hierarchy support, allowing you to easily visualize the inheritance relations existing among types. Read the [documentation](http://scala-ide.org/docs/current-user-doc/features/navigating/type-hierarchy.html) for a short explanation on how to use this new feature. Honestly, how have we been living without Type Hierarchy for all this time?

On the road there have also been a few bugfixes. The most noticeable one is that the workspace is no longer locked while indexing the project. Please, check out the [changelog][scala-search-changelog] for more details.

## Play for Eclipse 0.4.1

The past release of the Play for Eclipse support was an important turning point, as we released
a brand new editor for Play2 Template files that integrates with the Eclipse Web Tools Platform
to provide a first-class HTML editing experience (read [here](http://scala-ide.org/blog/play-0.4.0-announcement.html)
for details).

With this maintenance release we addressed all known regressions introduced by the new editor:

* Broken Maven POM Editor [#176](https://github.com/scala-ide/scala-ide-play2/issues/176)
* Negative style ranges in the Error Log [#177](https://github.com/scala-ide/scala-ide-play2/issues/177).
* Declaring a block with a name starting with 'import' results in an error [#186](https://github.com/scala-ide/scala-ide-play2/issues/186)

Upgrading is a must.

## Update-sites

All the goodness can be installed from our [milestone page](/download/milestone.html), in the *dev* ecosystem:

* Eclipse 4.x: [juno-update-site](http://download.scala-ide.org/sdk/e38/scala210/dev/site/)

## Thanks

We would like to take the opportunity to thank the community and all contributors for the
amazing work they have done to make this release possible. Special thanks go to
[Luc Bourlier](https://github.com/skyluc), [Mirco Dotta](https://github.com/dotta),
[Iulian Dragos](https://github.com/dragos), [François Garillot](https://github.com/huitseeker),
[Jedd Haberstro](https://github.com/jhaberstro), [Mads Hartmann](https://github.com/mads379),
[Grzegorz Kossakowski](https://github.com/gkossakowski), and [Simon Schäfer](https://github.com/sschaef).

Last but not least, we would like to congratulate Mads Hartmann for his excellent work on Scala Search.
If you have enjoyed using Scala Search so far, make sure to cheer him on twitter [@Mads_Hartmann](https://twitter.com/Mads_Hartmann)
and wish him good luck for his master thesis defence!

[changelog]: http://scala-ide.org/docs/changelog.html#3_0_2
[scala-search-changelog]: https://github.com/scala-ide/scala-search/wiki/Changelog