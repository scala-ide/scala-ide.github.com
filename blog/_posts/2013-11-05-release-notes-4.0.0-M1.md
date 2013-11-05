---
layout: blog
title: Scala IDE 4.0.0-M1
author: Scala IDE team
disqus: false
---

We are happy to announce the first milestone for Scala IDE 4.0.0! This is the first step towards the Lithium release, and sets the stage for future improvements in the API for plugin writers.

The IDE team has been hard at work since the 3.0 release, and most of the work was channeled towards Scala IDE plugins. Our development strategy was to provide a quicker release cycle in smaller bites, so you can get access to new features faster, and us to get feedback earlier. And so the [Play plugin][play-ide] and [Scala Search][scala-search] were born!

As the ecosystem grows, we realized that the Scala IDE needs to provide a stable API. Besides the plugins already mentioned, the community stepped up and the excellent ScalaTest plugin, as well as InSynth and (soon!) the [Java to Scala translator][java-scala] are building on top of the core Scala IDE. Rebuilding the whole ecosystem for each release (even release candidates) becomes prohibitive, and often not necessary. We set to change that in 4.0: we plan to provide a clearly delimited API that can support all existing plugins, semantically versioned, so upgrades are painless (and breakages are foreseeable).

## Highlights

The first milestone has a few improvements and new features, but this is mainly a synchronization point with plugin writers. As a first step, we cleaned up our build and stop re-packaging the Scala compiler and library bundles. They are prefectly good OSGi bundles by themselves, and simplifies both our build and plugin writers life. The [upgrade notice] details changes needed in plugins.

Here are some of the new features:

* New quick fixes: [create method][create-method-qf] or class quick-fix, [change capitalization][change-type] of mis-spelled method, [add explicit type] to a definition with inferred types
* Various improvements in completion on imports
* [Completion overwrites][completion-overwrites]
* Improvements in auto-edits and highlighting inside string interpolation or scaladoc comments

Have a look at the [changelog][changelog] for a comprehensive description of the changes made for this new release.

## Thanks

We'd like to welcome two new contributors in this release: [Daniel Chia][danchia] (improvements in completions) and [Donny Nadolny][dnadolny] (various quick fixes)! Congratulations! We'd like to thank Simon Schaefer, Tom Crocket, Rafał Krzewski, Jedd Haberstro, Eric Molitor and Robin Green for their help with this release!

## Installation

This release is available for both Eclipse Juno (4.2) and Kepler (4.3) using the following update-site: [http://download.scala-ide.org/sdk/e38/scala210/dev/site/](http://download.scala-ide.org/sdk/e38/scala210/dev/site/)

Happy Scala coding!

[changelog]: http://scala-ide.org/docs/changelog.html#M1___2013-11-05_
[play-ide]: https://github.com/scala-ide/scala-ide-play2/wiki
[scala-search]: https://github.com/scala-ide/scala-search/wiki/Features
[java-scala]: https://github.com/dnadolny/java-to-scala-plugin
[create-method-qf]: http://scala-ide.org/docs/4.0.x/features/typingviewing/quick-fixes.html
[change-type]: http://scala-ide.org/docs/4.0.x/features/typingviewing/quick-fixes.html#Change_Capitalization
[completion-overwrites]: http://scala-ide.org/docs/4.0.x/features/typingviewing/code-completion.html#Completion_overwrites
[danchia]: https://twitter.com/DanielChiaJH
[dnadolny]: https://github.com/dnadolny