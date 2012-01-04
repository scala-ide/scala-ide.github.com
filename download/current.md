---
layout: current-download
title: Download the 2.0.0 Release of the Scala IDE for Eclipse
---

If you are new to Eclipse or Scala, watch the "Getting Started with the Scala IDE" above. This screencast will guide you through the installation of the Scala IDE for Eclipse, and you will also learn how to create and run your first Scala project.
If you already know Eclipse and you want to find out more about features available in the Scala IDE for Eclipse, make sure not to miss the [Scala IDE Features Overview]({{ site.baseurl }}/index.html), on the front page. A complete list of features is available in the expandable menu on the [front page]({{ site.baseurl }}/index.html#features).

## Improved in This Release
{% include current-download-features.txt %}

## Update Site

The final 2.0.0 release of the Scala IDE for Eclipse is available for both Scala 2.8 and Scala 2.9, through two distinct plugins (the packaged Scala version is the only difference existing between the two plugins).

Currently, it is not possible to install both plugins within the same Eclipse installation. You need to decide what version of Scala you want to be using and then choose the appropriate update site. 

### For Scala 2.9.x
{% include current-download-box-2-9.txt %}

### For Scala 2.8.x
{% include current-download-box-2-8.txt%}

## Requirements

* [JDK 5](http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase5-419410.html) or [JDK 6](http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase6-419409.html) (there have been issues reported when using Eclipse and Java 7).

* Eclipse, including the JDT. Either the “Classic” or “Eclipse for Java Developers” is sufficient.
	* Scala IDE is officially supporting [Eclipse 3.6.2 (Helios)](http://www.eclipse.org/downloads/packages/release/helios/sr2).
	* Scala IDE can be installed on Eclipse 3.7 (Indigo), but not all features are working perfectly. [Read more...](http://scala-ide.org/docs/user/gettingstarted.html)