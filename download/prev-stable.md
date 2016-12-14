---
layout: current-download
title: Older releases of the Scala IDE for Eclipse
---

# 4.4.1 Release for Scala 2.11.8

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][441_2118_zip].

# 4.4.0 Release for Scala 2.11.8

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][440_2118_zip].

# 4.3.0 Release for Scala 2.11.7

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][430_2117_zip].

# 4.2.0 Release for Scala 2.11.7

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][420_2117_zip].

# 4.1.1 Release for Scala 2.11.7

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][411_2117_zip].

# 4.1.0 Release for Scala 2.11.7

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][410_2117_zip].

# 4.1.0 Release for Scala 2.11.6

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][410_2116_zip].

# 4.0.0 Release for Scala 2.11.6

This release is only available for Eclipse 4.x and can be retrieved as [zipfile][400_2116_zip].

# 3.0.3 / 3.0.4 Release

The 3.0.3 release is the third maintenance release of the 3.0 version. It is available
for Scala 2.10, on Eclipse 3.8/4.2/4.3 (Juno & Kepler). The 3.0.4 release provides the same features as 3.0.3, but the code was updated to support Scala
2.11. See the [Changelog][clog] for a complete list of changes.

### Eclipse 3.8-4.3 (Juno and Kepler)

#### For Scala 2.11.2

{% assign divId = 'download-211-juno' %}
{% assign downloadUrl = 'http://download.scala-ide.org/sdk/helium/e38/scala211/stable' %}

{% include download-box.txt %}

#### For Scala 2.10.4

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
[clog]: http://scala-ide.org/docs/changelog.html
[400_2116_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site_assembly-20150305-1905.zip
[410_2116_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site_assembly-20150525-1654.zip
[410_2117_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site_assembly-20150709-0701.zip
[411_2117_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site_assembly-20150729-0028.zip
[420_2117_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site_assembly-20150928-2314.zip
[430_2117_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site_assembly-20151202-0007.zip
[440_2118_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/base-20160401-1237.zip
[441_2118_zip]: http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/base-20160504-1321.zip

#### For Scala 2.8.x

{% assign divId = 'download-28' %}
{% assign downloadUrl = 'http://download.scala-ide.org/releases-28/stable' %}

{% include download-box.txt %}
