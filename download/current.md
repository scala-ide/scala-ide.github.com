---
layout: current-download
title: Download the 4.6 Release of the Scala IDE for Eclipse
---

# Get Started

If you are new to Eclipse or Scala, watch the *Getting Started with the Scala IDE* above. The screencast will guide you through the installation of the Scala IDE for Eclipse, and you will also learn how to create and run your first Scala project.

If you already know Eclipse and you want to find out more about features available in the Scala IDE, make sure not to miss the [Scala IDE Features Overview]({{ site.baseurl }}/index.html), on the front page. A complete list of features is available in the expandable menu on the [front page]({{ site.baseurl }}/index.html#features).

## 4.6.0 Release

This is the most recent release of Scala IDE for Eclipse. See the [release notes][relnotes] or the complete
[Changelog][clog] for a complete list of changes.

The simplest way to get started is to download a pre-configured version of Eclipse by going to the [download page][sdkpage]. Here we provide update sites for those who want to continue using their existing Eclipse installation and add the Scala plugin.

### Eclipse 4.6 (Neon)

#### Update site installation

{% assign divId = 'download-210-juno' %}
{% assign downloadUrl = 'http://download.scala-ide.org/sdk/lithium/e46/scala212/stable' %}

{% include download-box.txt %}

#### Drag and Drop installation

{% include dnd-box.txt %}

This Scala IDE release includes:

* Scala 2.12.2 with Scala 2.11.8 and Scala 2.10.6
* Zinc 1.0.0-X14
* Scalariform 0.1.5
* Scala Refactoring 0.13.0
* Scala Worksheet 0.7.0
* Scala Search 0.6.0
* ScalaTest 2.10.0.v-4-2_12

### Requirements
{% include requirements-stable.txt %}

### [Older versions](prev-stable.html)

[clog]: /docs/changelog.html
[relnotes]: /blog/release-notes-4.6.0-vfinal.html
[sdkpage]:/download/sdk.html
