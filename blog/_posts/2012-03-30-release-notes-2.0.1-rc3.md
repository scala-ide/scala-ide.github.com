---
layout: blog
title: Scala IDE for Eclipse 2.0.1 RC03
disqus: false
---

We are very happy to announce a new release candidate for the next maintenance release of the Scala 
IDE for Eclipse. [Scala IDE 2.0.1 RC3](!SITE_BASEURL!/download/current.html#201rc) is available 
now!

The only change with respect to 2.0.1 RC2 is the bundled Scala, which is now Scala 2.9.2-RC3.

## What is new in 2.0.1?

### Builder improvements

In 2.0.0 the IDE delivered better incremental compilation by building on the already
proven [Sbt][sbt] incremental compiler. In 2.0.1 we improve on the Eclipse builder by following Sbt
more closely when dealing with *dependent projects*: 

* when a project has build errors, dependent projects are not rebuilt
* fine-grained information about changes in a project are propagated to downstream dependent
  projects, leading to even less files being recompiled

In 2.0.1, the Eclipse builder compiles exactly the same number of files at the command line Sbt.

### Editor improvements

We fixed a couple of small, but annoying editor issues: double braces are inserted and deleted
together, completions that need an additional import won't mess up the file, and `Open Declaration`
works when called from the contextual menu.

### Compiler improvements

This release is based on [Scala 2.9.2-RC3][scala], and includes a couple of improvements in the way compiler
plugins are loaded, including the continuations plugin. Now you can have several compiler plugins loaded
side-by-side, and properly use the [`Xpluginsdir`](http://scala-ide.org/docs/tutorials/continuations-plugin/index.html) option.

For a complete list of changes, please see the [Changelog][clog]

### The fine print

This version works with both Eclipse 3.6 (Helios) and 3.7 (Indigo). We developed and tested it using 
Java 6, but Java 7 can be used [with some caveats][ide-java7].

[clog]: /docs/changelog.html#release-scala-ide-2-0-x
[sbt]: http://www.scala-sbt.org/
[scala]: http://www.scala-lang.org/
[ide-java7]: /blog/java-7.html

{{ page.excerpt | replace: '!SITE_BASEURL!', site.baseurl}}
