---
layout: blog
title: Scala IDE 2.1.0 Milestone 2

---

Today we are releasing Milestone 2 of the Scala IDE 2.1.0 for Eclipse, available for both 
Scala 2.9 and 2.10.0-M7! The highlights of this release are Scala 2.10 support and the Scala IDE
*ecosystem*. Oh, and one more thing: the [Scala Worksheet][worksheet]!

Let's have a quick round at what happened in the past three months.

### Scala IDE ecosystem

This is one of the most exciting news of this milestone. The Scala IDE ecosystem was 
[officially launched](http://scala-ide.org/blog/scalatest-ecosystem.html) a few weeks ago, and 
we are convinced it will be a great place for finding plugins to boost your productivity with 
Scala. Essentially, the ecosystem is one single update site with Scala-related Eclipse plugins.
If you are an Eclipse plugin developer and you want to make your plugin available to a wider
audience, contact us!

The ScalaTest plugin was the first plugin to become part of the ecosystem, and the today we
release another one, the [Scala Worksheet][worksheet] plugin. More plugins are on the way, so stay tuned!

### Full Scala 2.10 support

We’ve been following closely the development of Scala 2.10.0, so that we could make sure that 
the next release of Scala will be supported by the Scala IDE from day-0. Keeping the IDE 
aligned with Scala development has proven to be challenging, but the investment was worth 
the price. 

With this milestone we already have full support for all 2.10.0 features (value classes, 
string interpolation, macros and reflection, plus a new pattern matcher, just to name a few!).

### Scala Debugger

If you used the new Scala Debugger, you know it was a bit of a hack: you had to explicitly 
enable it in the Scala preferences and it used to rely on a launched JDT debug session. 

Forget the past, the Scala Debugger is finally a first-class citizen in Eclipse and it will 
be the default debugger for all your Scala applications from now on.

You can read more about the new Scala Debugger [here][scala-debugger].

### New Refactoring and Source Generators

While in Milestone 1 we welcomed the new [Move refactoring][move-refactoring], in this 
milestone we have quite a few new refactoring available in your toolbox: 
[change method signature][method-signature-refactoring], [extract trait][extract-trait-refactoring] 
and [extract class' factory][move-constructor]. 

And that's not it. Two new source generators are now available: [generate hashCode and equals][hashcode-equals] 
and [introduce ProductN trait][productN-trait].

Also, many refactoring tickets have been fixed, particularly related to rename refactoring and organize imports.

### Find References

We have initial support for find references. We know it's not production ready, but we need you to 
test it and file bug reports. It's a big improvement already!


## Scala Test plugin

If you are using ScalaTest in your project, you will definitely love this plugin. The ScalaTest team has
been hard at work to provide a full-featured plugin for Scala IDE. More details (and screenshots!) on
the [project page](https://github.com/scalatest/scalatest-eclipse-plugin)

## Scala Worksheet

[Scala worksheet][worksheet] allows experimentation with the Scala language in a new way. A worksheet is a Scala file that is evaluated on save, and the result of each expression is shown in a column to the right of your program. Worksheets are like a REPL session on steroids, and enjoy 1st class editor support: completion, hyperlinking, interactive errors-as-you-type, auto-format, etc.

## Bugfixes

We fixed 119 tickets since milestone 1 was released! For a more detailed list of the most important fixes check the [changelog][changelog]

## Install it now!

The preferred way to install this release is through the [milestone ecosystem][ecosystem]. Just point Eclipse to
the update site and select the Scala IDE and any additional plugins you want to install.

This milestone is available for both [Scala 2.9][scala-29] and [Scala 2.10.0-M7][scala-2.10-m7] and it works with 
[Eclipse 3.7 (Indigo)][indigo]. We have experimental support for Eclipse 4.2 (Juno) in a separate [update site][milestone-download]
(toghether with zipped versions of the Scala IDE).

We hope you will enjoy using it and, please, let us know what you think. This is the perfect time to help us 
with ideas and improvement suggestions, or just contribute them.

## Thanks

We would like to take the opportunity to thank all contributors for the amazing work they have done 
to make this milestone possible. Special thanks go to Luc Bourlier, Chee Seng Chua, Mirco Dotta, 
Iulian Dragos, Michael Holzer, Eric Molitor, Martin Odersky, Simon Schäfer, Mirko Stocker and Matt Russell.


[ide-java7]: /blog/java-7.html
[indigo]: http://www.eclipse.org/downloads/packages/release/indigo/sr2
[roadmap]: /docs/dev/roadmap.html

[scala-debugger]: /docs/helium/features/scaladebugger/index.html
[move-refactoring]: /docs/helium/features/new-refactoring/index.html#move-class-object-or-trait-refactoring
[method-signature-refactoring]: /docs/helium/features/new-refactoring/index.html#method-signature-refactorings
[extract-trait-refactoring]: /docs/helium/features/new-refactoring/index.html#Extract_trait
[move-constructor]: /docs/helium/features/new-refactoring/index.html#Move_constructor_to_companion_object
[hashcode-equals]: /docs/helium/features/source-generators/index.html#Generate_hashCode_and_equals
[productN-trait]: /docs/helium/features/source-generators/index.html#Introduce_ProductN_trait
[milestone-download]: /download/milestone.html
[scala-29]: http://www.scala-lang.org/downloads
[scala-2.10-m7]: http://www.scala-lang.org/node/12797
[worksheet]: http://github.com/scala-ide/scala-worksheet
[changelog]: http://scala-ide.org/docs/changelog.html
[ecosystem]: /download/ecosystem.html