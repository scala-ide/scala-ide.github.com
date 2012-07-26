---
layout: blog
title: Two giter8 templates to create Scala IDE plugin projects
disqus: true
author: Luc Bourlier

---

The [Scala IDE ecosystem]({{ site.baseurl }}scalatest-ecosystem.html) which was just announced will be a great place for find tools to develop application in Scala. But they have to be plugins to be included in one of the update sites.

So developers will need to create Scala IDE plugin version of their tools. To bootstrap in this process, we provide two [giter8](https://github.com/n8han/giter8/) templates to generate complete maven projects, containing plugin skeletons, features and update site:

* [scala-ide/scala-plugin.g8](https://github.com/scala-ide/scala-plugin.g8) - a set of projects to develop an Eclipse plugin written in Scala.
* [scala-ide/scala-ide-plugin.g8](https://github.com/scala-ide/scala-ide-plugin.g8) - a set of projects to develop an Eclipse plugin on top of Scala IDE.

To use them, after having install giter8, invoke it and provide the requested information:

    $ g8 scala-ide/scala-ide-plugin.g8
    name [Scala IDE Sample plugin]: My Plugin
    provider [org.example]: my.domain
    pluginName [org.example.plugin]: my.domain.plugin
    className [SampleAction]: MyAction
    providerName [Scala IDE]: Me

    Applied scala-ide/scala-ide-plugin.g8 in my-plugin

    $

The generated README contains some details about the projects. The result should build successfully. Developers can then concentrate on integrating their tools with Scala IDE.

----

