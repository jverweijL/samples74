Objective is to display search results always in the same sequence irrespective of the search key word
how can we set ordering or ranking to achieve this request?
eg: search results to show in the following order
webcontent
document
users
etc..
While searching only title

---
Solution 1:
you could apply a custom filter, with a large boost value, to each entryClassName field.
Like
Web Content > boost 1000
Documents > boost 500
User > boost 100
