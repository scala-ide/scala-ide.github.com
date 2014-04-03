---
layout: blog
title: Scala IDE 3.0.3 final
author: Scala IDE team
disqus: false
---

We are very happy to announce the release of the final version of the 3.0.3 maintenance release of Scala IDE.

## What's new

This release upgrades the incremental compiler to a newer version (0.13.1) and latest Scala maintenance release (2.10.4). In addition, we have two fixes for mixed Java/Scala projects:

* No classfiles when building mixed Java/Scala project ([#1001995](https://www.assembla.com/spaces/scala-ide/tickets/1001995))
* Don't scan contents of every file in a Jar to determine if a classfile comes from Scala ([#1001999](https://www.assembla.com/spaces/scala-ide/tickets/1001999))

For the complete list of fixes, please see our [changelog][changelog].

## Ecosystem

As usual, this release is associated with updated versions of the ecosystem plugins:

* Scala Worksheet 0.2.3
* Play plugin 0.4.3
* ScalaTest plugin 2.9.3
* Scala Search 0.2.2

As more plugin writers update their releases to 3.0.3, their plugins will appear in the update site.

## Installing

The release can be installed using the [all-in-one bundle](/download/sdk.html), which contains the latest version of Eclipse, Scala IDE, Play plugin and Scala Worksheet.

To install the release on an existing version of Eclipse, use the [ecosystem update sites](/download/current.html):

* Eclipse 4.x (Juno & Kepler): [juno-update-site](http://download.scala-ide.org/sdk/e38/scala210/stable/site/)


[changelog]: http://scala-ide.org/docs/changelog.html#3_0_3
