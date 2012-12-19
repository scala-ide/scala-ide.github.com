---
layout: blog
title: Scala IDE 2.1.0 Milestone 3
author: Scala IDE team
disqus: false
---

Today we are releasing Milestone 3 of the Scala IDE V2.1.0, available for both Scala 2.9 
and 2.10.0-RC5. The highlights of this release are an improved Scala Debugger, JUnit4 
support, better relevance metrics in code completion, and several stability improvements 
for mark occurrences and semantic highlighting.

Let's have a quick round at what happened in the past four months.

### Scala Debugger

While debugging, have you ever tried to *step over* a ``map`` or ``foreach`` call on a 
collection class? Sure you have! And, didn't you find it annoying that the existing Java 
debugger would not actually step *inside* the closure passed in argument?
Or, have you ever needed to look at the content of a Scala ``List`` in the debugger view? 
Then you know that to check its content you need to **manually** unfold the list. 
Sounds like something a debugger should do for you.

The Scala Debugger has gone through some heavy restyling, and we believe it is now ready 
to be adopted as the default debugger; make sure to use it every time you are chasing down 
a bug. Since last milestone we have improved it in many ways, and we kept on adding new 
features. For instance, we now have support for remote debugging, enabling/disabling 
breakpoints during execution, step filters for Scala specific features (yes, the Scala 
Debugger knows it's debugging Scala code!) and much more.

Keep reading [here][scala-debugger] to find out about the supported features and how to 
make it the default debugger for all your Scala projects.

### JUnit4 Support

Many of you have been asking for better JUnit4 support; we heard you. With this milestone 
we ship a completely re-written module to fully support automatic lookup and execution of 
both your Scala and Java JUnit4 tests. Right click on a project, package or source, and 
run your tests via the ``Scala JUnit Test`` runner.

You can read more about the Scala JUnit4 runner [here][scala-junit4]

### Editor Enhancements

We have also found the time to squeeze in some great enhancement:

* Code completion proposals are now sorted according to their distance, i.e., local 
 definitions (local variables, local methods) are shown at the top.

* A brand new Quick Fix for automatically correct your code when a *type missmatch error* 
 occurs. For instance, if a method expects an ``Option[T]`` to be returned, and your 
 implementation currently returns a value of type ``T``, you will get a suggestion to 
 wrap the returned value in an ``Option.apply``.

### General improvements

We have been fixing over 90 tickets since milestone 2 was released. You will notice many 
stability improvements affecting the Scala editor, semantic highlighting and update 
occurrences. You want to know all the glory details? Have a read at the 
[changelog][changelog].

## Install it now!

The preferred way to install this release is through one of the 
[milestone update-site][milestone-download].

This milestone is available for both [Scala 2.9][scala-29] and 
[Scala 2.10.0-RC5][scala-2.10-rc5] and it works with [Eclipse 3.7 (Indigo)][indigo] and 
[Eclipse 4.2 (Juno)][juno]. Make sure to use the update-site that matches the Eclipse 
version you are using, or the Scala IDE plugin will refuse to install.

Furthermore, each update-site contains a number of additional plugins that you can install 
together with the Scala IDE: the [ScalaTest Eclipse plugin][scalatest] and the 
[Scala worksheet][worksheet] are already available!

If you are using the [Typesafe Scala IDE][typesafe-scalaide], you can install this new 
Milestone 3 release by simply clicking on ``Help > Check for Updates``, and following the 
update process.

## Road to the final

What's left to make this a final? Not much to be honest, we are confident this 
milestone release will make many of you happy. But, before making it a final, we still 
need to work on improving performances in both the Scala Debugger and the Scala Editor. 
This will be our focus for the next month: we plan to enter RC mode in early February.

Don't miss the chance to give this milestone a spin, this is the perfect time to 
[report back issues][issues-tracker], if you want to see them fixed in time for the final 
release.

## Welcoming Simon Schäfer

We are happy to announce [Simon Schäfer][simon] as the latest addition to the 
[Scala IDE Team][scala-ide-team]. Simon joined the project just about six months ago, 
and we have been simply amazed by the high-quality contributions and his great positive 
attitude.

Simon is a computer science student in Germany, at the 
[Karlsruhe Institute of Technology][kit], currently carrying out his 3rd semester bachelor. 
His main interest is compiler construction, and he started to contribute on the Scala 
IDE to gain experience on that topic.

Wonder how he spends his free time?

> Hmmm, programming? Scala is so much fun, there is no need to have another hobby. Ok, 
> I'm doing some martial arts, but that often feels to be harder work than working for 
> the Scala IDE. ;)

Simon, we are really glad to have you on the team.

## Thanks

We would like to take the opportunity to thank all contributors for the amazing work they 
have done to make this milestone possible. Special thanks go to Luc Bourlier, Chee Seng Chua, 
Mirco Dotta, Iulian Dragos, Ivan Kuraj, Michael Holzer, Eric Molitor, Simon Schäfer, Amir 
Shaikhha, Mirko Stocker, Matt Russell and Eugene Vigdorchik.

#### Merry Christmas to everyone!


[ide-java7]: /blog/java-7.html
[indigo]: http://www.eclipse.org/downloads/packages/release/indigo/sr2
[juno]: http://www.eclipse.org/downloads/packages/release/juno/sr1

[scala-debugger]: /docs/helium/features/scaladebugger/index.html
[scala-junit4]: /docs/helium/features/test-finder/index.html#scala-junit-test-finder

[changelog]: http://scala-ide.org/docs/changelog.html
[milestone-download]: /download/milestone.html

[worksheet]: https://github.com/scala-ide/scala-worksheet/wiki/Getting-Started
[scalatest]: http://www.scalatest.org/user_guide/using_scalatest_with_eclipse

[typesafe-scalaide]: http://typesafe.com/stack/scala_ide_download

[scala-29]: http://www.scala-lang.org/downloads
[scala-2.10-rc5]: http://www.scala-lang.org/node/25942
[issues-tracker]: https://scala-ide-portfolio.assembla.com/spaces/scala-ide/support/tickets
[scala-ide-team]: http://scala-ide.org/team.html
[kit]: http://kit.edu
[simon]: https://github.com/sschaef