---
layout: blog
title: Scala IDE 4.4.1 is out!
author: Scala IDE team
disqus: false
---

We are happy to announce the release of Scala IDE 4.4.1, the first maintenance release of the 4.4.0 version.

## Improvements

This release contains a few bug fixes and one new feature: organize imports on class and method level. Most of the bugs that were fixed were reported after the 4.4.0 release, for a full list of the bug fixes see the [changlelog][cl]. The new ability of organize imports to handle all import statements on class and method level is enabled by default and can be disabled in the preferences:

<img src="{{site.url}}/resources/images/organize-imports-on-class-level.png" alt="Organize imports on class and method level" style="width: 100%;" />

Together with this Scala IDE release, there is also a new version of scala-refactoring released, which can be consumed as a standalone library. The library is available for 2.10 and 2.11 under the following artifact ID:

<pre>
"org.scala-refactoring" %% "org.scala-refactoring.library" % "0.10.0"
</pre>

As usual, this build is available as an [all-in-one bundle](/download/sdk.html) and through the [update sites](/download/current.html), for new installations.

Existing installations can be updated using the `Help -> Check For Updates` feature.

[cl]: http://scala-ide.org/docs/changelog.html
