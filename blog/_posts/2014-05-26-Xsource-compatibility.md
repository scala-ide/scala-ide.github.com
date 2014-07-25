---
layout: blog
title: Scala IDE support for simultaneous 2.11 and 2.10 projects
author: Scala IDE team
disqus: false
---

![Beware]({{ site.baseurl }}/resources/images/arrow.png) **The
 contents of this blog post have been superseded by the most
 recent nightly. Go [there]({{ site.baseurl}}/blog/scala-installations.html)
 for the latest documentation.**

## Using the IDE with a 2.10 project

As you probably know, [Scala 2.11 was released last month](https://typesafe.com/blog/scala-211-has-arrived)! All
crew to the upgrade stations!

But a few weeks ago, @TobiasRoeser [tweeted](https://twitter.com/TobiasRoeser/status/469833321430913024):

> It's a pity, that @ScalaIDE does not support #Scala 2.10 and 2.11
> project at the same time.

Indeed, Scala 2.10 and 2.11 are not binary-compatible, and since
the Scala IDE runs a version of the compilerbased on
either 2.10 or 2.11 (depending on which Scala IDE [flavor](http://scala-ide.org/download/milestone.html) you
download), it couldn't deal with projects based on mixed major
versions of Scala.

Now, don't get me wrong: if you have the opportunity of upgrading
to [Scala 2.11](http://www.scala-lang.org/news/2014/04/21/release-notes-2.11.0.html), you most *definitely* should: the new compiler is
faster, has a lot of [new features](http://docs.scala-lang.org/scala/2.11/), and the lack of language-level
changes allow for a quick and painless upgrade.

But if you're dependent on projects that haven't upgraded yet, or
more generally if you work on a legacy code base, you couldn't
use projects working on two different major versions of Scala in
the same workspace on Scala IDE.

Until now, that is.

An **experimental** flag has been introduced in the Scala 2.11
compiler. Adding `-Xsource:2.10` makes the type checker run in
"legacy" mode. It will not report errors in some situations where
the 2.11 compiler would (the 2.11 type checker being usually a
bit stricter).

Beware, however: this setting is for now considered **fragile** and
**extremely sensitive** (as with all ambitious things related to the
typechecker). Please [report](https://issues.scala-lang.org/) any and all issues of the type
checker doing weird things on your favorite 2.10 project.

But this allows us, on a per-project basis, to make the Scala IDE
deal with projects in 2.10 mode ! You can now add `-Xsource:2.10`
to the compiler options of your project, and have the Scala IDE
report errors, completions, semantic highlighting just as it
would if it was based on Scala 2.10. Moreover, since we are now
bundling another set of jars for Scala 2.10 in the Scala IDE
plugin (and doing a little bit of wiring), we'll have the IDE
build your projects using an authentic Scala 2.10 compiler.

## How to configure your project

Configuration for the Scala IDE is still business as usual: the
projects you import in your workspace are still assumed to run
with the bundled version of Scala (2.11), and you will need to
make a few changes to make the editor understand your project has
a 2.10 source and build.

First, go to the preference page of your project, and click "Use
project-specific settings" to turn on project-specific
configuration (you'll have to repeat those steps for every
project for which you want to use the compatibility mode).

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/project-settings.jpg">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/project-settings.jpg" 
		width="100%"
		alt="Turning on project-pecific settings"/>
</a>

Second, click on the source-level option, setting the source for
this project to 2.10. This will automatically add `-Xsource:2.10
-Ymacro-expand:none` to your compiler settings.

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/2.11-sourcelevel-before.jpg">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/2.11-sourcelevel-before.jpg"
		width="100%"
		alt="Turning on the source level"/>
</a>

After you close the project, any errors about the classpath in
the problems view should disappear. If you reopen properties,
you'll see the `-Xsource` and `-Ymacro-expand` options have been
added to compiler options.

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/2.11-sourcelevel-after.jpg">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/2.11-sourcelevel-after.jpg"
		width="100%"
		alt="Turning on the source level"/>
</a>

## Detecting projects which could use the 2.10 flag

In case the Scala IDE finds a project configured with a
classpath requiring a 2.10 version of the scala compiler or
library, it will prompt you about it, asking whether you want to
turn on the 2.10 source level configuration using the following
dialog:

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/error-message.jpg">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/error-message.jpg"
		width="100%" 
	 	alt="The error message on seeing a previous classpath."/>
</a>

Clicking 'Yes' on this dialog has the same effect as setting the
source Level to 2.10 above.

## Using sbteclipse

sbteclipse creates an eclipse configuration from your [sbt](http://www.scala-sbt.org/)-based
project. In that process, it usually rewrites the required
classpath of your project, to replace the scala-compiler and
scala-library with a generic, version-less compiler
(resp. library) bundle that will automatically match the IDE's
bundled version.

In the case of a 2.10 project, you don't want that. You want the
classpath to unambiguously require a 2.10 scala compiler or
library version, which matches the one in your sbt configuration.

To do that, sbteclipse introduces since version 2.5.0 an option
`with-bundled-scala-containers` (default value: true) which lets
you specify that you want to keep scala-compiler and
scala-library versioning information in creating an Eclipse
configuration.

You can run sbteclipse with the line:
`sbt -with-bundled-scala-containers=false eclipse`

You should then get a Scala project that will ask for the exact
same version of the compiler as the one it's configured to run
with in sbt.

## Known limitations

First, the compatibility mode introduced by the `-Xsource` flag
can only be used on a per-project basis. If you want a
workspace-wide 2.10 IDE, you should turn to the 2.10 flavors of
the Scala IDE download.

Since whitebox macros have some [incompatible improvements](http://docs.scala-lang.org/overviews/macros/changelog211.html) between
2.11 and 2.10, the IDE is not able to expand macros for you in
compatibility mode. This probably will remain a long-term
limitation of this mode. This is why the `-Ymacro-expand:none`
setting works conjointly with the `-Xsource:2.10` setting.

Finally, in case your classpath is not valid, the dialog
described above will appear. However, some classpath checks are
triggered by events sent from the eclipse platform we have little
control over, so that in some cases, you may see this dialogue
pop up twice, one after the other. The second occurence
should not affect any settings. We are very eager for detailed,
reproducible [bug reports](https://www.assembla.com/spaces/scala-ide/tickets/) that would let us know precisely about
when this happens.

<sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup> The [Presentation Compiler](http://scala-ide.org/docs/dev/architecture/presentation-compiler.html)
