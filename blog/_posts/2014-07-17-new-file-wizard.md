---
layout: blog
title: New Scala Wizard
author: Scala IDE Team
isqus: true
---

With Scala IDE 4.0.0-M3 a new wizard finds its way into the codebase. In contrast to the existing wizards, which are based on the concept of the Java wizards, this new wizard goes a completely different way.

The design goal was to provide less configuration options in order to be simpler and easier to use for everyone. The following screenshot depicts this design goal best:

![New Scala Wizard]({{ site.baseurl }}/resources/images/new-file-wizard.png)

You can reach this new wizard by pressing `Ctrl+3` to open the quick access search field, where it can be found under the name "New Scala File":

<a href="{{ site.baseurl }}/resources/images/search-field-scala-file-entry.png">
  <img src="{{ site.baseurl }}/resources/images/search-field-scala-file-entry.png" width="100%" alt="Quick Access Search Field" />
</a>

Another way to navigate to reach the wizard is to navigate to the "New" menu of Eclipse and select "New Scala File":

![New Menu Scala File Entry]({{ site.baseurl }}/resources/images/new-menu-scala-file-entry.png)

Please note that your Eclipse may cache the wizard entries in the "New" menu. Therefore, if you can't see the entry "New Scala File" you have to navigate to `Windows → Customize Perspective → Shortcut → New → Scala Wizards` and select the option "New Scala File".

# Why the change?

The former functionality that allowed you to select a lot of different options to configure the contents of a created file was replaced with basically only three options: The kind of a file, the project and source folder where the file should be put into and its fully qualified name.

This more focused approach shall allow new users to easily understand how to create the file they want. For experienced users it means that the wizards sends them as fast as possible back to the editor, where they can do everything what the old wizards could do but even more.

One further special highlight of this wizard is that its new underlying architecture allows other developers, who want to extend the Scala IDE, to easily build upon it. This basically means that they can create their own file kinds and templates which can be used by the wizard. This makes it easier for Scala IDE users to startup with a specific library or framework once they have third party extensions installed.

We believe that this wizard is easier to understand and to use for everyone and we would like to hear if you agree with that. Whether you like the new wizard or not, tell us your opinion - here on the blog or on the [mailing lists](https://groups.google.com/forum/#!forum/scala-ide-user) - we need your feedback to improve the IDE further.

The old wizards do still coexist with the new one to make it easy for you to compare them or to fall back to them if the new one still contains a bug. However, the plan is to remove them with the final release of the upcoming Scala IDE 4, which means that you should definitely speak up if you find a bug or miss some behavior of the old wizards.

You can find a more detailed user guide for the new wizard in our [user docs](http://scala-ide.org/docs/4.0.x/features/wizards/index.html) and if you are interested in the new developer API you should take a look at our [dev docs](http://scala-ide.org/docs/dev/ide-extensions/wizards/index.html).

