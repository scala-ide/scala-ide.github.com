---
layout: blog
title: Scala IDE 4.0.0-M2
author: Scala IDE team
disqus: false
---


# The second milestone for Scala-IDE 4.0.0

We are very happy to announce the second milestone release of
Scala-IDE 4.0.0 ! We are progressing towards our Lithium release,
with numerous improvements along the way.

We wanted to make this release available to our users as soon as
possible, to get you the many improvements of the last few
months, but also because we need your help: we are going to
implement the possibility to work with projects set to build with
two different Scala versions (2.11 and 2.10 are supported for
now), and we would like your help working out the kinks of this
feature.

So download the milestone, try out the feature, and [let us](https://groups.google.com/forum/#!forum/scala-ide-dev) [know](https://www.assembla.com/spaces/scala-ide/tickets)
what you think!

# Highlights

This release fixes many bugs, and we invite you to read the
Changelog for a full description. Here are some interesting
excerpts:
-   new and improved menus, with cleaner refactoring choices, and
    clearer preferences
-   reactivated, improved [Scala templates](http://scala-ide.org/docs/current-user-doc/features/typingviewing/code-templates.html)
-   file reloads by the Presentation Compiler now happen in sync
    with the [reconciler](http://wiki.eclipse.org/FAQ_How_do_I_use_a_model_reconciler%253F) mechanism of Eclipse, yielding performance
    improvements throughout the interface, notably for semantic
    highlighting.
-   removal of the bundling with scala-continuations plugin
-   [indentation guide](http://scala-ide.org/docs/4.0.x/features/typingviewing/indent-guide.html) to visually help edition of Scala code
-   improvements in indentation
-   more robust integration with the sbt incremental compiler,
    classfiles, virtual files, all yielding performance
    improvements
-   support for several versions of Scala ! This brand-new
    experimental feature is released early to get help from
    beta-testers. Please read the blog post, and [report](https://www.assembla.com/spaces/scala-ide/tickets/) any issues.

# Thanks

We were blessed with great contributions from our users these
last few months! Heartfelt thanks to Simon Schäefer ([@sschaef](https://github.com/sschaef))
for his repeated contributions, Vladimir Nikolaev ([@VladimirNik](https://github.com/VladimirNik)),
Alden Torres ([@aldenml](https://github.com/aldenml)), Jerzy Müller ([@Kwestor](https://github.com/Kwestor)) and Trond
Bjerkestrand ([@tbje](https://github.com/tbje)) for their respective pull requests, and
Scala team members ([@adriaanm](https://github.com/adriaanm), [@retronym](https://github.com/retronym), [@gkossakowski](https://github.com/gkossakowski)) for
their invaluable help.

# Installation

This release is available for both Eclipse Juno (4.2) and Kepler
(4.3) using the following update-site: 

<http://download.scala-ide.org/sdk/e38/scala211/dev/site/>

Happy Scala coding!
