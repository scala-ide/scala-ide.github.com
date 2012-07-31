---
layout: blog
title: Scala IDE 2.1 Milestone 2

---

Today we are releasing Milestone 2 of the Scala IDE V2.1 for Eclipse, available for both 
Scala 2.9 and 2.10.0-M6. 

So much has improved 
since Milestone 1,
While the goal of V2.0 was to 
provide a reliable environment for your Scala coding, with V2.1 we want to bring your Scala 
development experience to a whole new level.

In this milestone there are a whole lot of new features for you to try out: *implicit 
highlight*, *move refactoring*, *scala debugger * and *semantic highlight* are the most 
exciting ones. If you are like us, once you start using them you will no longer be able go back. 
They are simply too addictive!

Let's have a quick round at what happened in the past three months.

### Scala IDE ecosystem and ScalaTest plugin

This is one of the most exciting news of this milestone. The Scala IDE ecosystem was 
[officially launched](http://scala-ide.org/blog/scalatest-ecosystem.html) last week, and 
we are convinced it will be a great place for finding plugins to boost your productivity with 
Scala.

The ScalaTest plugin is already part of the ecosystem, and more plugins are on the way (e.g., 
sbt console, smart quick fixes, specs2, play2, and more!).

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

[Should also mention that many refactoring tickets have been fixed, particularly related to rename refactoring and organize imports]

### Find References

We have initial support for find references...


## A glance at the future

Worksheet...


While we are really excited about this milestone, we are already working on the next "big things" 
planned for V2.1. One important addition is the creation of an API to ease the development of 
plugins on top of the Scala IDE. We are confident that this will incentivize developers, and hopefully 
we will soon have an exciting plugins' ecosystem.

Have a look at the [Roadmap][roadmap] and see what is planned next. 

## Install it now!

[Follow this link and grab the update-site!][milestone-download]

This milestone is available for both [Scala 2.9][scala-29] and [Scala 2.10.0-M6][scala-2.10-m6] it works with 
[Eclipse 3.7 (Indigo)][indigo]. We developed and tested it using Java 6, but Java 7 can be used 
[with some caveats][ide-java7].

We hope you will enjoy using it and, please, let us know what you think. This is the perfect time to help us 
with ideas and improvement suggestions, or just contribute them.

## Thanks

We would like to take the opportunity to thank all contributors for the amazing work they have done 
to make this milestone possible. Special thanks go to Luc Bourlier, Chee Seng Chua, Mirco Dotta, 
Iulian Dragos, Michael Holzer, Eric Molitor, Martin Odersky, Mirko Stocker and Matt Russell.


[ide-java7]: /blog/java-7.html
[indigo]: http://www.eclipse.org/downloads/packages/release/indigo/sr2
[roadmap]: /docs/dev/roadmap.html

[scala-debugger]: docs/helium/features/scaladebugger/index.html
[move-refactoring]: docs/helium/features/new-refactoring/index.html#move-class-object-or-trait-refactoring
[method-signature-refactoring]: docs/helium/features/new-refactoring/index.html#method-signature-refactorings
[extract-trait-refactoring]: docs/helium/features/new-refactoring/index.html#Extract_trait
[move-constructor-refactoring]: docs/helium/features/new-refactoring/index.html#Move_constructor_to_companion_object
[hashcode-equals]: docs/helium/features/source-generators/index.html#Generate_hashCode_and_equals
[productN-trait]: docs/helium/features/source-generators/index.html#Introduce_ProductN_trait
[milestone-download]: /download/milestone.html
[scala-29]: http://www.scala-lang.org/downloads
[scala-2.10-m6]: FIXME