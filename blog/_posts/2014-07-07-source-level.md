---
layout: blog
title: More Source level support for Scala IDE
author: Scala IDE team
disqus: false
---

We are thinking of uniting the development of the Scala IDE to
just a scala 2.11 branch, while still supporting 2.10
projects. For that, we need rock-solid support for 2.10, and
**you** can make a difference. This blog post is here to give you
news about the development — up to the latest nightly — and
enlist your contributions in reporting possible problems or
errors. More details on [how to contribute](#contributing) below.

## Developments in multi-version support

As you [may have heard]({{ site.baseurl }}/blog/Xsource-compatibility.html), the
latest milestone of the Scala IDE comes with the ability to
interpret both 2.10 and 2.11 projects. In the
[latest nightly](http://scala-ide.org/download/nightly.html),
it's now much better.

The executive summary is this: the IDE still comes built on and
embedded with a single version of the Scala compiler (the latest
2.11). It runs it to access your code for all interactive
functions (typechecking, etc). But that *presentation compiler*
now has the ability to run in "*2.10 compatibility*" mode,
interpreting your types and terms with the logic that was valid
in the legacy version of Scala.

For non-interactive functions (i.e. building), the compiler will
send your code to a regular, unmodified 2.10 compiler that we
ship along the IDE.

## Classpath containers

So, when using the IDE, your 2.10 projects shouldn't change. In
particular, their
[classpath](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/classpath.html)
should be that of a regular 2.10 project — that is, they should
have the 2.10 scala-library on classpath. So goes for other jars
and libraries you might use, whether 2.10 projects like play or
other compiler-associated jars, like scala-swing.

Projects created with the Scala IDE, or with
[sbteclipse](https://github.com/typesafehub/sbteclipse/), set the
path to the scala-library using a *classpath container*, an
abstraction designed to help with managing machine-scpecific
paths towards a set of jars. These *classpath containers* (one
for the lirbary, one for the compiler), in particular, represent
the technical notion behind what Eclipse calls
[User Libraries](http://help.eclipse.org/juno/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fpreferences%2Fjava%2Fbuildpath%2Fref-preferences-user-libraries.htm).

These containers, in the latest milestone, always pointed to the
default version of Scala (2.11). To use an IDE-created project
with Scala 2.10, you had to get rid of the classpath container,
and replace it with your own jars in the *Java Build Path*
menu. Or you could use sbteclipse with the
`withBundledScalaContainers := false` option to generate an
Eclipse project which would explicitly link to sbt-provided scala
2.10 libraries.

With the
[latest nightly](http://scala-ide.org/download/nightly.html) (as
of July 4th), you now have the freedom of configuring the content
of the Scala classpath containers.

## New Features

The first user-visible change is that the switch between the 2.10
and 2.11 modes is now a clearer, more visible toggle at the
project-specific compiler options level.

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/compiler-prefs.png">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/compiler-prefs.png"
		width="100%"
	 	alt="The new compiler options preference window."/>
</a>

A dialog will still pop up if your classpath suggests your
project may be configured to run on 2.10, and it has the
same effect as setting the toggle to 2.10 above.

The default for the whole workspace-wide IDE plug-in is still to
run on 2.11 so that you will for now have to make this setting
per-project.

If you now head to the workspace-wide preferences (*Window →
Preferences* on Windows/Linux, or *Eclipse → Preferences* on
OSX), you can see under the Scala heading an *Installed Scalas*
window which lists the Scala versions you can use.

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/installed-scalas.png">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/installed-scalas.png"
		width="100%"
	 	alt="The list of bundles scala installations."/>
</a>

Those translate directly to your classpath containers, that is
**setting the source level toggle selects the corresponding scala
installation for your project**.

To witness that, you can have a look at your project's classpath
(*Java Build Path* in your project's *Properties*). Or you can
unfold your project's details in the *Package Explorer*. You'll
see this for a 2.10 project:

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/project-container.png">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/project-container.png"
		width="80%"
	 	alt="The project's classpath container in the Package explorer."/>
</a>


You also have the option of editing that container (*right-click
→ Properties* in the Package explorer, *double-click* or *Edit*
in the *Java Build Path* window). You can the choose amongst the
installed Scala versions

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/edit-container.png">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/edit-container.png"
		width="100%"
	 	alt="The choice of scala installations for a lirbary container."/>
</a>

Beware, that edition does **not** affect your source-level flag
in and of itself, though consistency checks may pop up a dialog
suggesting you to set the source level according to what you just
put in the container.

## Contributing

We are evaluating the possibility of
[dropping 2.10 builds of the Scala IDE](https://groups.google.com/d/msgid/scala-ide-user/CAOwe9fZten-goCOh_aaYuBZKOBi%2BTOMDvgH%2Bk18AQo2F75fiKg%40mail.gmail.com),
which would save us the time and effort spent maintaining them,
as well as let us enjoy the gains brought by the
[latest scala version](http://docs.scala-lang.org/scala/2.11/). We'd
be able to deliver IDE features much faster ! But this can only
be done if this multi-version support is reliable. For this, we
need testing. **Have any 2.10 projects you want to work on ?
Install the latest nightly, use the 2.10 support, and
[tell us](http://scala-ide.org/docs/community.html) about any
problems you encounter !**

## Known limitations

The source level toggle in compiler settings does not give
immediate feedback on the "Additional parameters" line of
compiler options, even if it adds `-Xsource:2.10
-Ymacro-expand:none` to it. If you save, close the compiler
options dialog and reopen it, you should see those compiler
options added explicitly.

There is currently no option to define a custom scala
installation, and use it to configure the classpath container of
your projects. We are actively working on this.

The
[previous limitations]({{ site.baseurl }}/blog/Xsource-compatibility.html#known-limitations)
of the multiple-scala-version support still apply.
