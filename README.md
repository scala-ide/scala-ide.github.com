# Scala IDE website

The website is rendered by github.

## Testing

To test the website locally, use [jekyll](http://jekyllrb.com/) v1.0.2

To start the server locally, with automatic refresh on file modification:

```
jekyll serve --baseurl ""
```

## Prepare Release Notes

Generally, we want to include information about which new features exist, how many bugfixes are there and how many commits were contributed by whom.

The stats about the number of bugfixes can be found on Assembla. We need to download a list of tickets that were closed after the day of the last release. Make sure that the data export includes the `AssignedTo` and the `Status` field. After downloading the data, it can be analyzed with the following Scala program, which shows the author together with the count of rows where they are mentioned:

```scala
object Stats extends App {

  val src = io.Source.fromFile("/path/to/fixed-tickets.csv").mkString

  val (header, data) = {
    val d = src.split("\n").map(_.split(","))
    (d.head, d.tail)
  }

  val ass = for (i <- 0 until header.size)
    yield header(i) -> (for (j <- 0 until data.size) yield data(j)(i))

  // "assigned_to_name" is the name of the datafield of the "AssignedTo" column
  val assignees = ass.find { case (field, _) => field == "assigned_to_name" }.get._2

  val names = assignees.groupBy(identity).map {
    case (name, ns) => name -> ns.size
  }

  val sortedNames = names.toList.sortBy(-_._2)

  println("Tickets fixed:")
  sortedNames foreach {
    case (name, nr) =>
      println(s"    $nr\t${if (name.isEmpty) "(unassigned)" else name}")
  }
}
```

This program is not perfect, it assumes that the CSV file doesn't include commas in its data. If you see inconsistencies in the calculated output, its likely that such a comma exist. Either remove it manually from the CSV file or update the parsing to handle CSV correctly.

The stats about the number of contributed commits can be calculated with:

```
git shortlog -sn --no-merges <prev-release>..<current-release>
```

Unfortunately, the section about new features can not be automatically generated, but the changelog can, which helps in getting an overview about all changes. In the Scala IDE main repo, there is a script:

```
./GenChangeLog.bash <prev-release> <current-release>
```
