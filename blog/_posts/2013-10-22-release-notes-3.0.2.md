---
layout: blog
title: Scala IDE 3.0.2 final
author: Scala IDE team
disqus: false
---

We are very happy to announce the release of the final version of the 3.0.2 maintenance release of Scala IDE.

## What's new

In addition to the upgrade to the recent Scala 2.10.3 version, it is the first release with official support for Eclipse 4.x (Juno and Kepler). The old Eclipse 3.x platform support is abandoned.

The other main improvements are:

* Updated the build compiler to use the recently released sbt 0.13.0 (which, among others,
includes an important fix for correctly handling build cancellation, see [sbt pr #812](https://github.com/sbt/sbt/pull/821))
* Semantic highlighting now works also on source attachments [#1000939](https://www.assembla.com/spaces/scala-ide/tickets/1000939).
* Fixed a race-condition that can lead to “Resource XXX does not exist.” errors (see [#1001846](https://www.assembla.com/spaces/scala-ide/tickets/1001846) for details)

For the complete list of fixes, please see our [changelog][changelog].

## Ecosystem

As usual, this release is associated with updated versions of the ecosystem plugins (check the [previous announcement](/blog/release-notes-3.0.2-RC01.html) for more details):

* Scala Worksheet 0.2.1
* Play plugin 0.4.1
* ScalaTest plugin 2.9.3
* Scala Search 0.2.0

## Installing

The release can be installed using the [all-in-one bundle](/download/sdk.html), which contains the latest version of Eclipse, Scala IDE, Play plugin and Scala Worksheet.

To install the release on an existing version of Eclipse, use the [ecosystem update sites](/download/current.html):

* Eclipse 4.x (Juno & Kepler): [juno-update-site](http://download.scala-ide.org/sdk/e38/scala210/stable/site/)

## Thanks

We would like to take the opportunity to thank the community and all contributors for the
amazing work they have done to make this release possible. Special thanks go to
[Luc Bourlier](https://github.com/skyluc), [Mirco Dotta](https://github.com/dotta),
[Iulian Dragos](https://github.com/dragos), [François Garillot](https://github.com/huitseeker),
[Jedd Haberstro](https://github.com/jhaberstro), [Mads Hartmann](https://github.com/mads379),
[Grzegorz Kossakowski](https://github.com/gkossakowski), and [Simon Schäfer](https://github.com/sschaef).

[changelog]: http://scala-ide.org/docs/changelog.html#3_0_2
