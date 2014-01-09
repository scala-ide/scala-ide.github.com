---
layout: current-download
title: Download the 3.0 Release of the Scala IDE for Eclipse
---

# Get Started

If you are new to Eclipse or Scala, watch the *Getting Started with the Scala IDE* above. The screencast will guide you through the installation of the Scala IDE for Eclipse, and you will also learn how to create and run your first Scala project.

If you already know Eclipse and you want to find out more about features available in the Scala IDE, make sure not to miss the [Scala IDE Features Overview]({{ site.baseurl }}/index.html), on the front page. A complete list of features is available in the expandable menu on the [front page]({{ site.baseurl }}/index.html#features).


# Improved in This Release
{% include current-download-features.txt %}

# 3.0.2 Release

The 3.0.2 release is the second maintenance release of the 3.0 version. It is available
for Scala 2.10, on Eclipse 3.8/4.2/4.3 (Juno & Kepler).

## Eclipse 3.8/4.2 (Juno) and Eclipse 4.3 (Kepler)

### Requirements
{% include requirements-juno-kepler.txt %}

#### For Scala 2.10.x

{% assign divId = 'download-210-juno' %}
{% assign downloadUrl = 'http://download.scala-ide.org/sdk/helium/e38/scala210/stable' %}

{% include download-box.txt %}

# 3.0.1 Release

The 3.0.1 release is the first maintenance release of the 3.0 version, and is the last one
compatible with Eclipse 3.7.

## Eclipse 3.7 (Indigo)

### Requirements
{% include requirements-indigo.txt %}

#### For Scala 2.10.x
{% assign divId = 'download-210-indigo' %}
{% assign downloadUrl = 'http://download.scala-ide.org/sdk/helium/e37/scala210/stable' %}

{% include download-box.txt %}


# 3.0.0 Release

The 3.0.0 release is the last supporting Scala 2.9, and is available for Eclipse 3.7 (Indigo)
or Eclipse 3.8/4.2 (Juno).
This release is available for both *Scala 2.9 and Scala 2.10*,
and both *Eclipse 3.7 (Indigo) and Eclipse 3.8/4.2 (Juno)*, through different update sites.

## Eclipse 3.7 (Indigo)

### Requirements
{% include requirements-indigo.txt %}

#### For Scala 2.9.x

{% assign divId = 'download-29-indigo' %}
{% assign downloadUrl = 'http://download.scala-ide.org/sdk/helium/e37/scala29/stable' %}

{% include download-box.txt %}

## Eclipse 3.8/4.2 (Juno)

**Support for Eclipse 3.8/4.2 is experimental in this release.**

### Requirements
{% include requirements-juno.txt %}

#### For Scala 2.9.x

{% assign divId = 'download-29-juno' %}
{% assign downloadUrl = 'http://download.scala-ide.org/sdk/helium/e38/scala29/stable' %}

{% include download-box.txt %}

# 2.0.0 Release

The 2.0.0 release is the last supporting Scala 2.8, and it’s only available for Eclipse
3.6 (Helios) or Eclipse 3.7 (Indigo). If you want to use the Scala IDE with Scala 2.9 or
Scala 2.10, we recommend you to use the [3.0.0 release](#300_release)

### Requirements
* [JDK 5][jdk5] or [JDK 6][jdk6] (JDK 7 can be used [with some caveats][ide-java7]).

* Eclipse, including the JDT. "Eclipse Classic" is sufficient, but [any Eclipse package can be used][eclipse-package-to-use].

	* Both [Eclipse 3.6 (Helios)][eclipse-helios] and [Eclipse 3.7 (Indigo)][eclipse-indigo] are supported.

[jdk5]: http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase5-419410.html
[jdk6]: http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase6-419409.html
[ide-java7]: /blog/java-7.html
[eclipse-package-to-use]: http://scala-ide.org/docs/current-user-doc/faq/index.html#what-eclipse-package-should-i-use
[eclipse-helios]: http://www.eclipse.org/downloads/packages/release/helios/sr2
[eclipse-indigo]: http://www.eclipse.org/downloads/packages/release/indigo/sr2

#### For Scala 2.8.x

{% assign divId = 'download-28' %}
{% assign downloadUrl = 'http://download.scala-ide.org/releases-28/stable' %}

{% include download-box.txt %}
