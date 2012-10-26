---
layout: blog
title: Next Scala IDE Milestone
author: Scala IDE team
---

As we are working towards the Helium release, we realize that we need more feedback and a new milestone before the final release is a very good idea. We are more or less feature complete for Helium, and our focus in the next couple of months will be to polish and improve what we have so far.

## Scala Debugger

The Scala Debugger is a major part of the Helium release, and we are now focusing on the final touches. The goal of the [M3 release][m3-milestone] (scheduled for December) is to have a debugger that can replace the Java debugger in our day-to-day debugging. We realized that we are not there yet, and we are putting a lot of effort into making it the first choice when it comes to debugging Scala code. Here's a quick rundown of what will be in there:

* breakpoints, step-into/step-over
* Smart stepping (step over closures)
* step filters (skipping getters/setters/forwards, other Scala compiler artifacts)
* name demangling
* show logical structure

You can find more information about the Scala debugger features on its [dedicated page][scala-debugger].

## Smooth editing

We'll continue to improve the Scala editor experience. We'll keep working on improving the speed of semantic highlighting and mark occurrences, as they are extremely important features, but also the source of some unhapineess.

## Scala 2.10.0 support

We'll continue working with the Scala team to provide the best IDE support out of the box. Scala 2.10 comes with a wealth of new features, and we've been continuously keeping up with the language development. As Scala 2.10 moves into the release candidate mode, we'll be diagnosing and fixing presentation compiler issues that come up.

## What you *won't find* in this release

It is always a tough decision, but in order to reach where we want to be we need to *focus* and leave some things out. We will *not* be fully supporting [Eclipse Juno][juno-0] in this release. We will continue to offer Juno builds (thanks to Eric Molitor for his tireless efforts!), but our main focus will remain Indigo. This is partly motivated by the fact that Juno has proven a [problematic][juno-1] [release][juno-2], and its adoption has been slower than expected. We will revisit this decision after the Helium release.

## How can you help?

The beauty of open-source is that you can help us move faster! Is there a particularly annoying bug or missing feature? [Submit a patch][workflow]! You can find a few ideas in the [enhancements][enhancements] milestone. Or you can start by code-reviewing our pull requests.

[m3-milestone]: https://scala-ide-portfolio.assembla.com/spaces/ae55a-oWSr36hpeJe5avMc/tickets?report[estimate_show]=true&report[id]=0&report[milestone_id_cond]=0&report[milestone_id_val][]=2083963&report[title]=Helium+M3+Tickets&report[total_estimate_show]=true&report[total_invested_hours_show]=true&report[working_hours_show]=true

[scala-debugger]: http://scala-ide.org/docs/helium/features/scaladebugger/index.html
[juno-0]: http://eclipse.org/juno/
[juno-1]: http://stackoverflow.com/questions/11446825/very-slow-eclipse-4-2-how-to-make-it-more-responsive
[juno-2]: http://www.eclipse.org/forums/index.php/m/901301/
[workflow]: http://scala-ide.org/docs/dev/workflow/workflow.html
[enhancements]: https://www.assembla.com/spaces/ae55a-oWSr36hpeJe5avMc/tickets?report[estimate_show]=true&report[id]=0&report[milestone_id_cond]=0&report[milestone_id_val][]=454722&report[title]=Enhancements+Tickets&report[total_estimate_show]=true&report[total_invested_hours_show]=true&report[working_hours_show]=true