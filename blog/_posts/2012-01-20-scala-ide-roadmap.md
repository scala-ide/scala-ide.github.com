---
layout: blog
title: Scala IDE Roadmap
disqus: true

---

After an exciting end of the year, concluded with the release of the Scala IDE V2.0 for Eclipse, it 
is now time to focus our efforts on the next Scala IDE's release, code name *Helium*. During the 
past week we have prepared a tentative roadmap, which we would like to share with the community.

We will have *three milestones*, each of them containing both new functionalities and major 
redesign of the current plugin's architecture. In fact, one important goal of the future release is to provide a clean and 
simple API to developers interested in building plugins on top of the Scala IDE.

Here follows the complete [roadmap](http://scala-ide.org/docs/dev/roadmap.html):

**Milestone 1** - mid-March 2012

* Implicit highlighting - *Jin Mingjian, David Bernard and Mirko Stocker* <span class="label success">done</span>
* Semantic highlighting - *Matt Russell* 
* Move to Eclipse Indigo - *Eric Molitor* <span class="label success">done</span>
* Design and implement a Scala model - *Typesafe team*
* Create an abstraction layer with the Scala compiler - *Typesafe team*
* Use the Scala model for the Outline view - *Typesafe team*
* Smoother step over/in in the debugger - *Typesafe team*
* Create a worksheet (like a REPL but in an editor) - *Typesafe team*
* Create a new JDT model builder, using the compiled classes - *Typesafe team*
* Extract the presentation compiler in its own project - *Typesafe team*

**Milestone 2** - mid-May 2012

* Add support for Find References - *Typesafe team*
* Create a real Scala Editor (with all completion, indentation, formatting, ... support) - *Typesafe team* 
* Improve dependency tracking - *Typesafe team*

**Milestone 3** - mid-July 2012

* Add support for Type Hierarchy (both in JDT and Scala specific) - *Typesafe team*
* Scala Search (implicit use) - *Typesafe team*
* Add support Call Hierarchy - *Typesafe team*
* Finalize the API in Scala IDE - *Typesafe team*

**Not aligned**

* More refactoring support - *Mirko Stocker, Michael Holzer*
* Specs2 support - *Eric Torreborre?*
* ScalaTest support - *Bill Venners?*

Items marked with <span class="label success">done</span> are already available in the nightly 
builds. If you like staying on the cutting edge, you can install the Scala IDE Helium through one 
of the update sites available in the 
[Nightlies download page](http://scala-ide.org/download/nightly.html).

If you would like to contribute to the Scala IDE project, we believe this is the perfect time to 
get involved. Come and help us pushing the Scala IDE to the next level!
