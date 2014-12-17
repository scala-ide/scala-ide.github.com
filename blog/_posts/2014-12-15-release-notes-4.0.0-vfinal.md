---
layout: blog
title: Scala IDE 4.0-final is out!
author: Scala IDE team
disqus: false
---


After almost one and a half years of development, the next major release of the Scala IDE for Eclipse is out! This is the biggest release so far, packed with new features and improvements, so make sure to try it out right away by checking out our [download page](/download/current.html).

## New and noteworthy

### Multiple Scala versions support

This was, without any doubt, the biggest shortcoming of the Scala IDE: support for only one version of Scala in a given installation. Finally, this is no longer the case: Scala IDE can now handle projects with different Scala versions in the same workspace. By default, you get two predefined *Scala Installations*, one for 2.11 and one for 2.10. You can add more and assign any of them to your project. More details can be found [here][scala-installation].

### ScalaDoc

See beautifully rendered ScalaDoc right in your favorite IDE! ScalaDoc is currently available in code completion and hover windows, and fully implements the ScalaDoc specification: inherited documentation, macro support and variable substitution. Try it out on the most complex APIs (like Scala reflection) and see how things become so much easier!

### Save Actions

The Scala editor now has specific actions that can be performed on every save: *Format code*, *Remove trailing whitespace* or *Add newline at the end of the file*.

### New File Wizard

In addition to the existing Scala wizards you can now use a simple [New File][new-wizard] wizard that can use user-configured templates for the contents. Quickly create a trait or a class, and you can even change your mind in the middle: no need to start a new wizard.

### More efficient resource management

The Scala presentation compiler is a powerful tool, but comes with a large memory footprint. In this release we completely reworked the way *errors as you type* are handled, and buffer changes until the user stops typing or invokes a semantic action, such as code completion. At that point we ship all changes to the compiler, leading to vastly improved allocation rates while typing.

In addition to that, unused compilers are shutdown after a configurable amount of time. This should bring down memory consumption in workspaces with lots of projects.

### Editor improvements

Many changes went into making the Scala editor more convenient. From better handling of spaces and TABs, to [smarter code completion][code-completion] patterns, auto-indentation and template handling or [indentation guides][indent-guides].

Hovers have been revamped, and now you can change the font and rendering of anything displayed in the Scala hover window using CSS or the usual preferences window. Debug hovers now let you inspect a variable when debugging, just like the *Variables* view does.

A few more [quickfixes][quickfixes], like *Implement Abstract Member*, *Create Method* or *Add Explicit Type* make coding even easier.

### Scala color theme

The Scala IDE packaged download now comes with better defaults (UTF-8, auto-refresh, building in the background), and with a special edition of [Solarized Light][color-theme], better suited for Scala code. Make sure to try it out by selecting it from **General -> Appearance -> Eclipse Color Theme**.

<a href="{{ site.baseurl }}/resources/images/blog/scala-color-theme.png">
    <img src="{{ site.baseurl }}/resources/images/blog/scala-color-theme.png" align="center" />
</a>


## Stats

As for every major release, we'll take a look at some statistics from our bug database.

- 519 tickets closed
- 322 fixed tickets (the difference being due to invalid or duplicate tickets)
- the median time for a bug being open is 49 days. This large interval is due to our cleaning up the bug database and closing some really old and outdated tickets. If we consider only tickets created *after* the 3.0 release, the median time goes down to 16 days


<pre>
Tickets fixed:
    78	Simon Schäfer
    61	Iulian Dragos
    40	(unassigned)
    33	Mirco Dotta
    29	Mads Hartmann Jensen
    26	François Garillot
    17	Luc Bourlier
    15	Mirko Stocker
    5	Donny Nadolny
    3	nicolas.scarcella
    2	danstryder
    2	Grzegorz Kossakowski
    2	Jerzy.Muller
    2	Trond Bjerkestrand
    1	Anonymous
    1	David Bernard
    1	Hubert Plociniczak
    1	Michał Pociecha
    1	odersky
    1	pelotom
    1	Pouria Mellati
</pre>

The large number of unassigned tickets can be explained by having tickets that stand for bugs in upstream projects, like the presentation compiler or scala-refactoring. In other cases the person that fixed the bug stopped watching the Assembla repository, so we couldn't assign the ticket to them anymore (thanks Assembla!). In other cases we simply couldn't identify who fixed the problem: typically an old bug that was fixed as a side-effect of fixing another issue. 

Lastly, we looked at the distribution of the day of the week when a ticket was fixed or created. It seems that Monday is the least productive day (not counting weeekends), while tickets are created rather evenly throughout the week, with a significant drop during weekends.

<a href="{{ site.baseurl }}/resources/images/blog/tickets-closed-created.png">
	<img src="{{ site.baseurl }}/resources/images/blog/tickets-closed-created.png" width="100%"/>
</a>


## Thanks

This release packs an incredible number of features, and includes the work of many Scala enthusiasts. We'd like to thank every one of them for their tremendous support.

<pre>
Commits:
   371  Simon Schaefer
   187  Iulian Dragos
   162  François Garillot
    92  Luc Bourlier
    90  Mirco Dotta
    15  Daniel Chia
    12  Donny Nadolny
     8  Adriaan Moors
     8  Michał Pociecha
     5  François Garillot
     4  Jerzy Müller
     4  Grzegorz Kossakowski
     4  Jedd Haberstro
     4  Lukas Wegmann
     4  VladimirNik
     3  Trond Bjerkestrand
     2  Alden Torres
     2  Tom Crockett
     2  nscarcella
     2  Pouria Mellati
     2  Jason Zaugg
     1  Robin Green
     1  Emac
     1  Jerzy Muller
     1  Rafał Krzewski
     1  Matthias Langer
     1  Mirco Dotta
     1  Eric Molitor
     1  Mirko Stocker
     1  Eugene Vigdorchik
 </pre>


[scala-installation]: http://scala-ide.org/blog/scala-installations.html
[quickfixes]: http://scala-ide.org/docs/4.0.x/features/typingviewing/quick-fixes.html
[code-completion]: http://scala-ide.org/docs/4.0.x/features/typingviewing/code-completion.html
[indent-guides]: http://scala-ide.org/docs/4.0.x/features/typingviewing/indent-guide.html
[new-wizard]: http://scala-ide.org/docs/4.0.x/features/wizards/index.html
[color-theme]: http://eclipsecolorthemes.org/?view=theme&id=31291
[scala-installation]: http://scala-ide.org/blog/scala-installations.html
