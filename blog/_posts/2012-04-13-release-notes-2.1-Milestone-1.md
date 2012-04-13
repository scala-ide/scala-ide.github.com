---
layout: blog
title: Scala IDE 2.1 Milestone 1

---

Today we released an early preview of the Scala IDE V2.1 for Eclipse! While the goal of V2.0 was to 
provide a reliable environment for your Scala coding, with V2.1 we want to bring your Scala 
development experience to a whole new level!

In this milestone there are a whole lot of new features for you to try out: *implicit 
highlight*, *move refactoring*, *scala debugger * and *semantic highlight* are the most 
exciting ones. If you are like us, once you start using them you will no longer be able go back. 
They are simply too addictive!

Let's have a quick round at the new available features.

### Implicit Highlight

Implicits are a powerful Scala construct, but it is often hard to guess when they are applied. 
With implicit highlight you get immediate visual feedback in the editor and, by pressing 
Cmd/Ctrl+1, you can turn an implicit into an explicit call. [Read more...][implicit-highlight-doc]

Mantra: de-obfuscate code!

### Move Refactoring

There is a new refactoring available in your toolbox. Move refactoring will let you move a source 
file between packages or extract a class/object/trait definition (from a file with multiple 
definitions) and move it to a new location. And, of course, it will make sure to keep your imports 
sane. [Read more...][move-refactoring-doc]

Forget copy/paste!

### Scala Debugger

You have been asking for better debugging support, we have been listening. 

A few weeks ago we started to work on a full-fledged Scala Debugger and today you can have an early look at what is 
going to offer. As of now, you can already step through closures and have a Scala-aware display of 
debugging information. [Read more...][scala-debugger-doc]

Profit.

### Semantic Highlight

Semantic highlight colors identifiers based on their meaning, which goes a long way into 
improving readability. All the contextual information about identifiers are available right at the 
usage site, which means you no longer need to jump to the declaration to tell what kind of Scala 
element you are looking at. [Read more...][semantic-highlight-doc]

Embrace semantic highlight and say "au revoir" to the old habit!

## A glance at the future

While we are really excited about this milestone, we are already working on the next "big things" 
planned for V2.1. One important addition is the creation of an API to ease the development of 
plugins on top of the Scala IDE. We are confident that this will incetivate developers, and hopefully 
we will soon have an exciting plugins' ecosystem.

Have a look at the [Roadmap][roadmap] and see what is planned next. 

## Install it now!

[Follow this link and grab the update-site!][milestone-download]

This milestone is available only for [Scala 2.9][scala] and it works with 
[Eclipse 3.7 (Indigo)][indigo]. We developed and tested it using Java 6, but Java 7 can be used 
[with some caveats][ide-java7].

We hope you will enjoy using it and, please, let us know what you think. This is the perfect time to help us 
with ideas and improvement suggestions, or just contribute them.

## Thanks

We would like to take the opportunity to thank all contributors for the amazing work they have done 
to make this milestone possible. Special thanks go to David Bernard, Luc Bourlier, Mirco Dotta, 
Iulian Dragos, Jeremy Heiner, Dan Kilman, Heather Miller, Jin Mingjian, Eric Molitor, 
Martin Odersky, Hubert Plociniczak, Matt Russell and Mirko Stocker.

[scala]: http://www.scala-lang.org/
[ide-java7]: /blog/java-7.html
[indigo]: http://www.eclipse.org/downloads/packages/release/indigo/sr2
[roadmap]: /docs/dev/roadmap.html
[milestone-download]: /download/milestone.html
[move-refactoring-doc]: /docs/helium/features/moverefactoring.html
[implicit-highlight-doc]: /docs/helium/features/implicit-highlighting/index.html
[scala-debugger-doc]: /docs/helium/features/scaladebugger/index.html
[semantic-highlight-doc]: /docs/helium/features/semantic-highlighting/index.html