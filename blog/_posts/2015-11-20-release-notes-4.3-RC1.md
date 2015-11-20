---
layout: blog
title: Scala IDE 4.3-RC1 is out!
author: Scala IDE team
disqus: false
---

We are happy to announce a new Scala IDE release that contains beside of some bug fixes, a new Outline View and a so called Statistics Tracker.

## New and Noteworthy

### New Outline View

The old Outline View, which shows you the structure of the Scala file that is shown in the active editor, got a replacement by a new implementation. The old implementation was provided by the Java IDE of Eclipse and therefore was never a good fit for Scala code. The Scala IDE translated its internal information into a format that could be understood by the Java IDE but this conversion was not without its drawbacks. Since not all syntactic valid Scala elements have a representation in Java, some elements were shown wrong or not at all. The new implementation is a complete rewrite in Scala for Scala code and therefore is a huge improvement over what was available before.

The new Outline looks like this:

<img src="{{site.url}}/resources/images/new-outline.png" alt="New Outline View" />

Note, that the Outline only shows syntactic information. It doesn't show anything that you can't already see in the source code. This means that for example no return type for a method is shown, when there is none in the sources. In case you want more semantic information about your currently opened Scala file, you should have a look to the [scala-search][ss] project, which can be installed through the update-site.

A further note is that all import declarations are collapsed by default. If you want to change this behavior, navigate to `Preferences > Scala > Editor` and disable the behavior in the Outline section.

### Statistics Tracker

Another new feature is the Statistics Tracker. It tracks all the features you use in the Scala IDE and shows you a statistic in the preferences. It can be found in `Preferences > Scala > Statistics` and looks like this:

<img src="{{site.url}}/resources/images/statistics.png" alt="Statistics Tracker" style="width: 100%;" />

The storage location for the statistics tracker can be changed in `Preferences > Scala` to any location you like. Note, that it is possible to share the storage location between multiple instances of Scala IDE running at the same time. In case you do not wish that any data is shared, you need to configure multiple storage locations.

<!--
### Expression Evaluator Improvements

The Expression Evaluator (EE) has a problem with importing members from nested classes and objects. Since we where not able to completely fix this problem, we changed the default setting of the EE. It no longer automatically makes local classes and objects available. Instead you have to import them explicitly if you want to access their values during a debugging session. Concretely, this means that it is now possible to set a breakpoint in a case like this:

    class C {
      def inner = new Inner1()
      class Inner1 {
        object Inner2 {
          def test = {
            val value = "a value"
            value.map(_.toInt) // <- Breakpoint on this line
          }
        }
      }
    }

Once, the Debugger stops at the breakpoint, you can use the EE to access the `value`, which was not possible before.

<img src="{{site.url}}/resources/images/ee-improvements.png" alt="EE Improvements" style="width: 100%;" />

-->

### Async Debugger Improvements

By using the "Step until next message is arrived" functionality of the Async Debugger, it doesn't always allow you to go straight to the expected `receive` method when it is wrapped in another `receive` method. Example:

    def receive = LoggingReceive {
      case msg => foo
    }

Instead it stops in the first `receive` method it can find, which in this case is the one of `LoggingReceive`. In order to avoid using the "Step until next message is arrived" multiple times, the Async Debugger now allows you to skip `receive` methods by defining classes or packages that should not be considered by the Async Debugger. You can do this per runtime configuration. Go to the runtime configuration of your choice (for example by navigating to `Run > Run Configurations...`) and then select the tab "Scala Debugger". Here you can configure all the classes and packages that should be skipped.

<img src="{{site.url}}/resources/images/scala-debugger-tab.png" alt="Scala Debugger Tab" style="width: 100%;" />

Note, that each entry needs to stay in its own line.

### Improved Refactoring Support

As it was the case for the previous release, this release also comes with some improvements in the refactoring support. Another useful import strategy was added as well, it is called "Preserve only wildcards; one import statement per importee otherwise". It basically allows you to explicitly add wildcard imports without Organize Imports destroying it because it wants to add only single import statements. This option can be chosen in `Preferences > Scala > Editor > Organize Imports`.

## Stats

For the full list of all changes, see the [changelog][cl].

As for every release, we'll take a look at some statistics from our bug database.

<pre>
52 tickets closed:
    15	Andrey Ilinykh
    14	(unassigned)
    10	Matthias Langer
    10	Simon Schäfer
    3	Wieslaw Popielarski
</pre>

## Thanks

For this release we want to thank especially [Andrey Ilinykh][andr], who contributed the new excellent Outline View.

The following statistic contains the accumulated commits of the following repositories:

<pre>
# https://github.com/scala-ide/scala-ide
% git shortlog -sn --no-merges 4.2.0-vfinal..4.3.0-rc1
# https://github.com/scala-ide/scala-refactoring
% git shortlog -sn --no-merges 0.7.0..0.8.0-rc1
# https://github.com/scala-ide/scala-ide-play2
% git shortlog -sn --no-merges 0.5.0..0.5.2
</pre>

<pre>
Commits:
    71  Simon Schäfer
    46  Matthias Langer
    21  Andrey Ilinykh
    21  Wiesław Popielarski
     5  Iulian Dragos
     1  Krzysztof Romanowski
     1  Mirko Stocker
     1  Mirco Dotta
</pre>

[andr]: https://github.com/andrey-ilinykh
[cl]: http://scala-ide.org/docs/changelog.html
[ss]: https://github.com/scala-ide/scala-search
