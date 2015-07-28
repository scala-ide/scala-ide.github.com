---
layout: blog
title: Scala IDE 4.1.1 is out!
author: Scala IDE team
disqus: false
---

We are happy to announce the release of Scala IDE 4.1.1, the first maintenance release of the 4.1.0 version, based on the recent Scala 2.11.7 release.

## Improvements

This release contains only two changes since the 4.1.0 release. It is a bugfix release - no new features were introduced.

The two fixed bugs are:

* [#1002509](https://www.assembla.com/spaces/scala-ide/tickets/1002509) - Remove key binding for expression evaluator. This key binding conflicted with an already defined key binding, therefore we decided to remove it. If you want to have a key binding for the expression evaluator you can always add one by yourself. Just navigate to `Window > Preferences > Keys` and search for `Send Selection to Scala Expression Evaluator`. Once this item is selected you can add your own key binding.
* [#1002486](https://www.assembla.com/spaces/scala-ide/tickets/1002486) - Solve problem with not compiled Java files when they depend on Scala files. In the 4.1.0 release there was the new scopes builder introduced. It did not compile Java files in some circumstances when they depend on Scala files, a problem which is now resolved.

As usual, this build is available as an [all-in-one bundle](/download/sdk.html) and through the [update sites](/download/current.html), for new installations.

Existing installations can be updated using the `Help -> Check For Updates` feature.


