---
layout: blog
title: Scala IDE 3.0.1-RC1 release
author: Scala IDE team
disqus: false
---

We are very happy to announce the simultaneous release of four products today:

* the first release candidate of the 3.0.1 maintenance release for Scala IDE, based on the fresh Scala 2.10.2 release
* an updated Scala worksheet
* a bugfix release of the Play plugin
* ..and the first preview release of Scala Search, the new semantic search for Scala code, with *Find References* support!

*This release is available only for Scala 2.10.2*

## Scala IDE 3.0.1-RC1 

Besides upgrading to the fresh Scala 2.10.2, we fixed 22 tickets since our 3.0 release in March. Some of the highlights:

* correctly attach the Scala debugger to a running JVM, and support JRebel
* correctly use a configured JDK, other than the one used for running Eclipse
* correctly implemented Skip all breakpoints in the Scala debugger
* much cleaner **Open Type** dialog
* deprecation warnings accumulating

For the complete list of fixes, please see our [changelog][changelog].

## Scala Search

Over the last 4 month we've been hard a work developing a new search infrastructure for the plugin. The goal is to extend the IDE with a range of search-related features that focus on improving code navigation, understanding, as well as some kinds of refactoring. The initial set of features that we're focused on are

- **Find occurrences of any Scala entity**: By selecting the definition of a Scala entity the user should be able to find all occurrence to that specific entity in the workspace
- **Call-Hierarchy**: By selecting a method definition the control graph should be displayed, focusing on that node. That is, it should display all the in- and out-going method references, allowing the user the select any of the references as the new center of the control graph; thus traversing the control graph of the program.
- **Type Hierarchy**: The plugin should be able to show the type hierarchy of any given type, that is, show all the direct sub- and super-types. Again, the user can select any of the super- and sub-types as the new center of the type-hierarchy to traverse it.

24 pull-requests have been through careful review by the IDE team and the project now consists of 3.306 lines of Scala code (without comments & blank lines) where 1.762 of them are tests.

In this first release we've focused on building a solid foundation for the plugin and get all the components working smoothly together, so, this is not a release that boasts a lot of features but it's an important step along the way to the features we want.

For this release we have **Find Occurrences** working for fields (methods, vals, vars). See the [documentation](http://scala-ide.org/docs/current-user-doc/features/navigating/find-occurrences.html) for details on how to use it. 

The plugin is part of the IDE Ecosystem so it should show up in the "Incubation" category if you update your IDE installation. When the Scala Search plugin is more mature it will be merged with the IDE. If you want to see it in action before installing it have a look at this small video on [Youtube](http://www.youtube.com/watch?v=t25LG0yBkmc).

Follow progress on [Github](https://github.com/scala-ide/scala-search)

The Scala Search plugin is the product of Mads Hartmann's (ongoing) master thesis. Ping him on Twitter [@Mads_Hartmann](https://twitter.com/Mads_Hartmann)

## Scala Worksheet

We also upgraded the worksheet to 0.2.0, featuring a few fixes related to encoding, and allowing to set JVM arguments (thanks to [Nadav](https://twitter.com/nadavwr) for this great contribution!).

## Play IDE

The 0.3.0 release of the Play2 plugin is mostly a bug-fix release. We'd like to welcome [Jedd Haberstro](https://twitter.com/jhaberstro) on the team and to thank him for making this release possible!

* auto-format on save in route files
* quick-fix respects formatting of route files
* code-completion on single-word actions
* faster hyperlinking to Java methods

The complete list of tickets is available in the [0.3.0 milestone](https://github.com/scala-ide/scala-ide-play2/issues?milestone=3&page=1&state=closed).

## Update-sites

All the goodness can be installed from our [milestone page](/download/milestone.html), in the *dev* ecosystem:

* Eclipse Indigo: [indigo-update-site](http://download.scala-ide.org/sdk/e37/scala210/dev/site/)
* Eclipse Juno: [juno-update-site](http://download.scala-ide.org/sdk/e38/scala210/dev/site/)

## Thanks

We would like to take the opportunity to thank all contributors for the amazing work they 
have done to make this release possible. Special thanks go to Luc Bourlier,
Mirco Dotta, Iulian Dragos, Jedd Haberstro, Mads Hartmann, Vincent Munier, Simon Schäfer and Nadav Wiener


[changelog]: http://scala-ide.org/docs/changelog.html#3_0_0_-_codename_Helium