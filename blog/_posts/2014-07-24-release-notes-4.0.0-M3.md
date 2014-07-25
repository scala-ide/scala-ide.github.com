---
layout: blog
title: Scala IDE 4.0.0-M3
author: Scala IDE team
disqus: false
---


# The third milestone for Scala-IDE 4.0.0

We are very happy to announce the third milestone release of
Scala-IDE 4.0.0 ! We are making significant steps towards our
Lithium release, with cool features along the way.

Don't forget those milestone releases are there for *you*, users, to help
work out the possible kinks. So, try them out, and let us know what you
think ! You'll find out how to do that on our
[community page]({{site.baseurl}}/docs/community.html).

There are two major new features in this milestone:

- redesigned support to work with a "hot-swappable" Scala version. The IDE
  now lets you not only choose which Scala version you want building your
  projects, but it also lets you plug in your own custom Scala
  Installation. This integrates with the 2.10/2.11 Scala version support,
  so that a single version of the IDE lets you work on both Scala 2.10 and
  Scala 2.11 projects.

  We have written [a blog post]({{ site.baseurl}}/blog/scala-installations.html) detailing this feature.

- a New Scala File Wizard! We have a new interface for creating new Scala
  Classes, Traits, ... It's minimalistic, and removes everything that's
  not needed for hacking in Scala. It's also more extensible. Have a look
  at [the blog post]({{ site.baseurl}}/blog/new-file-wizard.html) to learn about it. We think you'll like it !

Also, note have an [updated documentation section]({{site.baseurl}}/docs/4.0.x/index.html) for the upcoming 4.0.0.

# Other Highlights

This release fixes many bugs, and we invite you to read the
[Changelog](http://scala-ide.org/docs/changelog.html#m3-2014-07-25) for a full description. Here are some interesting
excerpts:

- a redesigned Bug Report Dialog
- new extraction refactorings, such as Extract Value, Local, Method,
  Parameter, Closure, ...
- the IDE now shows a value on variable hover in suspended Debug mode
- a fix for auto-breaking comment lines

# Thanks

We had great contributions from our users these last few months! Massive
thanks to Simon Schäfer ([@sschaef](https://github.com/sschaef)) for his
contributions, and to Pouria Mellati
([@pmellati](https://github.com/pmellati)) and Lukas Wegmann
([@Luegg](https://github.com/Luegg)) for their pull requests!

# Installation

This release is available for both Eclipse Juno (4.2) and Kepler
(4.3), so head down to the [download page](/downloads/milestone.html) or just use the following update site:

<http://download.scala-ide.org/sdk/lithium/e38/scala211/dev/site/>

We also have experimental support for Eclipse Luna, and you can try it out from the following update site:

<http://download.scala-ide.org/sdk/lithium/e44/scala211/dev/site/>

Happy Scala coding!
