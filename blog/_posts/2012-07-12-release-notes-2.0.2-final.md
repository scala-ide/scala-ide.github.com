---
layout: blog
title: Scala IDE for Eclipse 2.0.2 released!

---

We are very happy to announce the release of the Scala IDE for Eclipse V2.0.2. This is
a maintenance release containing only bug fixes, and upgrade is recommended for all users.

## What's new?

### Better support for JDK 7

The Scala presentation compiler used to (incorrectly) use the running JDK, instead of the one
configured on the build path. Now it will honor the correct JDK, meaning that Eclipse can run on
JDK 6, but your project can compile against JDK 7.

### Better support for nested projects

Importing your multi-module project in the Scala IDE has never been a problem. However, compilation 
errors in a nested project used to be reported in the top-level project, which was of course 
confusing. That is fixed now, and we know the Maven lovers will like it. 

### Better support for mixed Java/Scala projects

For the many of you working with mixed Java/Scala projects, we have been fixing an annoying issue 
related to ``@throw`` annotation, which was causing incorrect errors to be reported in the Java editor.

## Changelog

* Missing Scala library in run classpath - [#1000786][#1000786], [#1000919][#1000919], [#1001022][#1001022]
* Provide reusable sdt.core.tests bundle - [#1001080][#1001080]
* Problem deleting files on Windows - [#1000909][#1000909], [#1000923][#1000923]
* Removed code generation groups from editor's context menu - [#1000972][#1000972]
* Correctly expose Scala @throw annotation to Java - [#1000707][#1000707], [#1000800][#1000800], [#1001005][#1001005]
* Support nested projects (Maven style) - [#1000881][#1000881], [#1000734][#1000734], [#1000621][#1000621]
* Fixed crash in tooltip launch button - [#1000951][#1000951]
* Made ``Run As Scala Application`` more robust - [#1000911][#1000911]
* Use the configured JDK when instantiating the presentation compiler. - [#1000820][#1000820]
* A fix for the Scala launch configuration. - [#1001096][#1001096]
* A warning dialog is now displayed if JDT Weaving is disabled. - [#1001104][#1001104]
* Fixed NullPointerException occurring when using the ``New > Scala Application`` wizard. - [#1000797][#1000797], [#1001115][#1001115]
* Fixed Assertion exception: ``Marker property value too long``. - [#1001107][#1001107]

[#1000972]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000972
[#1000800]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000800
[#1000881]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000881
[#1000707]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000707
[#1000734]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000734
[#1000786]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000786
[#1000621]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000621
[#1000951]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000951
[#1000909]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000909
[#1000911]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000911
[#1000919]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000919
[#1000923]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000923
[#1000820]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000820
[#1001005]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001005
[#1001022]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001022
[#1001080]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001080
[#1001096]: https://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001096
[#1001104]: https://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001104
[#1000797]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1000797
[#1001115]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001115
[#1001107]: http://scala-ide-portfolio.assembla.com/spaces/scala-ide/tickets/1001107

## [Get 2.0.2 Now!](!SITE_BASEURL!/download/current.html#202)


{{ page.excerpt | replace: '!SITE_BASEURL!', site.baseurl}}
