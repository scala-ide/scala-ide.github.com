---
layout: blog
title: Release Notes 2.0
disqus: true

---

We released the Scala IDE V2.0 for Eclipse today! After 9 months of
intensive work by the community contributors, users and the IDE team
we are really proud to release the new version. Not only is it
robust and reliable but also comes with much improved
performance and responsiveness. There are a whole lot of new features
that make it a real pleasure to use, Report errors as you type,
Project builder with dependency tracking, 
Definition Hyperlinking and Inferred type hovers, Code completion and
better integration with Java build tools, and lots more. You can
learn more about them all below. We hope you will enjoy using the new
version and continue to help us with ideas and improvement
suggestions, or just contribute them.

While working on V2.0 the team has been listening hard to what the IDE
users need. Simply stated faster compilation, better debugging and
better integration with established Java tools like Maven. The good
news is the team is ready for and excited by the challenge. Doing V2.0
we learned a lot about the build process and now understand what is
needed to make significant gains in large project compile times. This and providing a solid debugging
capability will be the main thrust of the next IDE development
cycle. More details will be laid out as we go through the project
planning phase and establish milestones. Contributors will be most
welcome and we have made it a lot easier to be one. So if you want us
to get the next version faster, come and help!
  
A lot of effort has gone into this version of the IDE and we would
like to recognize the people who have contributed so much time and
energy to the success of the project. 

## A bit of history

The Scala IDE project began a few years back, when
[Miles Sabin](http://www.chuusai.com/) laid down the foundations of the open source project and
an enthusiastic community formed around the effort to create a free,
open-source, Eclipse-based IDE for Scala. In late 2010 the 
[Typesafe](http://www.typesafe.com) team decided to support the open
source project, and in September [Eugene
Vigdorchik](https://plus.google.com/100086673455015900487/posts)
became the first full-time engineer to work on the project, supported
part-time by [Hubert Plociniczak](https://github.com/hubertp) from the
EPFL team. Typesafe
founder and Scala creator [Martin
Odersky](http://lamp.epfl.ch/~odersky/) led the redesign of the Scala presentation
compiler, the engine behind the IDE semantic actions.

## Version 2.0

For version 2.0 we had some tough decisions to take, and development
started with a very limited number of features, aiming for a very
reliable core. Naturally, this raised the need for early and frequent
feedback from our users:
on March 28 we had the first beta of the upcoming 2.0 release. This
was followed by a stream of betas (12 in total!), packing around
**300** closed tickets over the next months. As
Eugene moved on to other projects, several other
[Typesafe](http://www.typesafe.com) engineers joined the IDE team: [Iulian
Dragos](http://twitter.com/jaguarul) and [Mirco
Dotta](https://twitter.com/#!/mircodotta), followed by [Luc
Bourlier](https://plus.google.com/106787944777810934000/) in
September. Together with the great community ([Mirko
Stocker](http://misto.ch/) and [Matt
Russell](https://twitter.com/#!/MattRussellUK) just to name a few),
the IDE took great strides to reach its first production-ready
release.

## Diversity

As things moved forward and the 2.0 branch became the main version in
use, it became clear that we needed to have more than one IDE
version: 2.0 remained the rock-solid branch, where only bug-fixing
happens, while 2.1 is the place where new features, such as semantic
highlighting or implicit highlighting are developed.

Besides the two IDE versions, we support three versions of the Scala
compiler: 2.8.x, 2.9.x and 2.10 (Scala trunk), with nightlies for all
of them, so you can choose what suits you the best: the latest IDE developments on
a stable Scala compiler, the stable IDE on the bleeding edge Scala
compiler, or even the latest and greatest of both -- like the core
Scala team, who uses the Eclipse IDE for their daily scalac development! The choice is yours.

## Community

While the IDE always had a vibrant community around it, contributing
to the project itself was sometimes challenging for newcomers. On
October 4 we moved the project to
[Github](https://github.com/scala-ide/scala-ide), leading to a much
simpler process for contributors. In just a few weeks we had 17 forks,
some of which are extremely interesting developments in their own
right (check out
[ScalaGWT](https://github.com/gkossakowski/scala-ide), who brings
Scala to the GWT framework).

## Website

Today we also release a redesign of the Scala IDE website, along with
reworked documentation, including screencasts. Thanks [Heather](http://people.epfl.ch/heather.miller) for the awesome
work (also, check out the screencasts)! We believe that the current version is not only pretty, but
makes it much easier to find documentation, both for users and
contributors (and everyone is a potential contributor!). The website is
backed by Github too, so you can contribute by using
the awesome Pull Request button!

## A look at the future

Even though it's been a long ride, today's release is not the end of the road, but rather a
beginning. We can now look at adding new features on a solid base, and
great things will come, such as /find references/, or a Scala
/debugger/. [Suggest your favorite
feature](https://groups.google.com/forum/?hl=en#!forum/scala-ide-dev),
and [help us](https://github.com/scala-ide/scala-ide) build the next
great IDE!

After the 2.0.0 release we will continue to support the 2.0 branch
with maintenance releases including important bug fixes. However, the
focus will shift to the 2.1 development, and concentrate on the
upcoming features. Also, 2.0.0 is the last version that supports the
2.8 compiler. This decision was not taken lightly, but the effort to
support 2.8 is way too high and slowed us down too much. We
believe that 2.0.0 is a solid release that can help people who cannot
upgrade to 2.9.x in the immediate future.

## Features

Scala IDE version 2 improves developer productivity through a large
number of features. Below we highlight the main ones, but don't forget
to check out the full list on the [website](http://www.scala-ide.org), and
watch the screencast to see them in action.

#### Report errors as you type

The IDE saves you time by type-checking your program as you
type, and notifying you of errors before you build. This greatly
reduces the number of times you need to build your project.

#### Project builder with dependency tracking

The IDE saves you time even when you *do* have to build your project:
by using Sbt's engine for tracking dependencies between source files
(even between dependent projects), the IDE only builds the 
sources that need to be built. This is often much less than all the sources in your project.

#### Definition Hyperlinking

Ctrl-click on an identifier to navigate to its definition. This allows
you to concentrate on your program, since you don't need to remember in
what source file a certain definition lies. Try it out surfing through
the Scala collection library!

#### Code Completion

Hit Ctrl-space to see a list of all members you could invoke at a
certain point in your program. Even members added through *implicit*
conversions are available. Moreover, you can find a class on
your classpath, even if it wasn't imported in your file yet (and the
completion engine takes care of adding the import).

#### Inferred type hovers

Hover with the mouse over an identifier to see its type. This comes in
handy when the compiler infers a different type than what you expect.

And there is more! Check out the full list of features, and download
Scala IDE 2.0 today at www.scala-ide.org!
