---
layout: blog
title: Development news : Towards Luna-M4 !
author: Scala IDE Team
disqus: false
---

After more than six weeks since our latest milestone release, we wanted to give you an update on the upcoming Scala-IDE M4 release, and on how things stand in the current development.

# Better Scala Installation support !

First of all, we want to thank every one of you that helped us test  [multiple Scala version support][1], dubbed in-house as "Scala Installations support". We're especially grateful to Scott Carey, Michał Pociecha, Grzegorz Kossakowski, and Benyi Wang for their comments.

Thanks to your requests and bug reports, some features related to Scala installations have already hit the latest nigtly. You can get them at the usual [nightly update-site][2].

- We have improved the persistence of your settings, and your project's choice of Scala Installation, closing a bug in the process. We hope all issues have been found and fixed, but just in case some of you may face some complex interaction we have added detailed logging on the storage of preferences . So, if you think you have seen some of those issues, we'd *really* like to see your logs. Here's how to [activate debug logging][3].

- Many of you have multiple projects which version they want to switch quickly, without having to open project preferences for each project. So, choosing a Scala Installation is now a multi-select action: just choose your target projects, right-click, go to the Scala menu, and choose 'Set the Scala Installation', as below.

<a href="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/multiselect-action.png">
	<img src="{{ site.baseurl }}/resources/images/xsource-screenshots/new-support/multiselect-action.png"
		width="100%"
	 	alt="The new mult-select action for setting a Scala Installation."/>
</a>


- Some of you wanted to import their projects from sbt-eclipse, using the [`withBundledScalaContainers`][4] option (here's [more][5] on how to do this). But Scala-IDE required additional configuration after importing a project from the sbt-eclipse generated files. This is no longer needed : Scala-IDE figures out wich version of scala your project is using from its classpath, and configures itself correctly based on that.

- Finally, we have noticed an [issue][7] in the interaction of this mutli-version support with [m2eclipse-scala][8], and we are working actively with [David Bernard][6] to solve it quickly.

# A New Committer !

[Simon Schäffer][9] has made many fantastic contributions to Scala-IDE over more than two years, most recently leading a [great][10] Google Summer of Code project. Some of our users have thanked him for "saving their eyes". He's such a force behind the improvement of the Scala-IDE that we've given him well-deserved commit rights on the repository.

# Directions and upcoming features

But Scala Installations are just a small part of what we are working on. Of course it would be foolish to promiss anything or announce any deadlines. But here are some next steps we are hopeful about:

- We are hard at work on a long-open enhancement request: displaying Scaladoc on hover and completion. This is work that has its origin in an old pull-request of [Eugene Vigdorchik][11] (which we are tremendously grateful for).

- We want to provide plugin developers with an API. While the developers in our [ecosystem][12] have always been tremendously reactive, we think they would like not having to recompile their plugins with every one of our releases, and working with code they can depend on.

- We have lately seen tremendous work from Simon on a new file wizard, and the look of hovers. He has pursued in this direction of a cleaner, more extensible (and prettier) IDE, and we have a couple of very impressive contributions under review.

# Get Involved !

As we strive towards our Luna release, your tests and comments are more useful than ever, so, chime in on [the mailing list][13], report issues on our [bug tracker][14], and let us know what you think on [twitter][15] !

[1]: /blog/scala-installations.html
[2]: /download/nightly.html
[3]: /docs/current-user-doc/features/logging/index.html
[4]: https://github.com/typesafehub/sbteclipse/wiki/Using-sbteclipse#withbundledscalacontainers
[5]: /blog/Xsource-compatibility.html#using-sbteclipse
[6]: https://github.com/davidB
[7]: https://github.com/sonatype/m2eclipse-scala/issues/30
[8]: https://github.com/sonatype/m2eclipse-scala/
[9]: https://github.com/sschaef
[10]: https://www.google-melange.com/gsoc/proposal/public/google/gsoc2014/sschaef/5629499534213120
[11]: https://github.com/vigdorchik
[12]: https://github.com/scala-ide/ecosystem
[13]: https://groups.google.com/forum/#!forum/scala-ide-user
[14]: https://www.assembla.com/spaces/scala-ide/tickets
[15]: https://twitter.com/ScalaIde