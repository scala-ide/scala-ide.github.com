---
layout: blog
title: Eclipse command line installation
disqus: true
author: Iulian Dragos

---

When working on the Scala IDE I often need to install and uninstall the Scala plugin. Sometimes I need to use the Scala trunk version, other times I need to reproduce a bug in an older version, or simply I need to change to the next nightly. Although I have several Eclipse installations, I still need to tinker with them. 

Doing it using the UI is tedious, and requires two restarts: one when you uninstall the feature, and another one when you (re-)install the new one. On top of it, it requires clicking around -- how many times did I click Cancel instead of Continue, when faced with the *unsigned* warning? -- and in the end it can take several minutes.

## The Eclipse director application

Few people know that Eclipse can be [controlled from the command line](http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/guide/p2_director.html). Features and bundles can be installed or uninstalled without firing up the UI, saving precious minutes. We have added a customized [script](https://github.com/scala-ide/scala-ide/blob/master/eclipse-director.sh) in the Scala IDE [repository](https://github.com/scala-ide/scala-ide). Here's a taste of it:

    $ eclipse-director.sh uninstall
    Eclipse installation dir is /Applications/eclipse-helios-210
	Unnstalling..
	Uninstalling org.scala-ide.sdt.feature.feature.group 2.1.0.nightly-2_10-201201110534-4c40dde.
	!SESSION 2012-02-10 11:18:07.453
	   [..]
	Operation completed in 12919 ms.

By default, this installs the latest nightly build of the Helium builds, for the specified Scala version(2.9.2-SNAPSHOT or trunk). You can install a different version using `--branch`, or even install from a local repository (directory on disk) using `install-local`.

	$ eclipse-director.sh --eclipse-dir /Applications/eclipse-helios-210 install 2.9.2-SNAPSHOT
	Eclipse installation dir is /Applications/eclipse-helios-210
	Installing 2.9.2-SNAPSHOT..
	  [..]
	Installing org.scala-ide.sdt.feature.feature.group 2.1.0.nightly-2_09-201202091714-4ffdd09.
	Operation completed in 46198 ms.

Yo can specify the location of your eclipse installation directory using `--eclipse-dir`. 