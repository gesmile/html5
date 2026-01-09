# almost minimal HTML5

This is a private learning repository for a simple static HTML5 page.   
It's meant as an easy accessible semantic web document for learning and experimenting purpose.

This **almost minimal HTML5** document has two faces.

* One visual, browser-based human readable content, starting with the `index.html` file or at [tmp.gedankenfalle.de/html5/](https://tmp.gedankenfalle.de/html5/)
* One parser-based, which lets machines read through the _eyes_ of different libraries 'data' from inside the document.

## Learning Aims

* modern HTML5, CSS and JavaScript Design (not yet)
* playing with SVG, canvas and other graphical techniques (not yet)
* exploring microdata and semantic advantages
* receiving and serving feeds (not yet)
* multimedia and game experience (not yet)

## Deeper Aims

* provide a default web-page for self-published information
* understanding the techniques to use them wisely

## Dive deeper

Get the source via `git clone https://github.com/gesmile/html5.git`, look, play, learn, use and improve.   
Feedback to improve the project is welcome.

## To Dos

* The design with hgroup(h1/h2 + p) is outdated and needs to be rebuilt, like done in example.html Section 3
* Add clean, valid and meaningful microdata (RDF) and JSON-LD to the documents as well as make these ids available (comming soon)
* Add license information ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)) in structural data concepts (REL: ccREL + schema.org).
* Responsive menu with 'closed button' when displayed on cell phones.
* Back-to-top menu following these style guides: https://www.nngroup.com/articles/back-to-top/
* Responsive menu with 'closed button' when displayed on cell phones.
* Define the semantic meaning of a couple used inline tag elements. Then implementing these strict over all documents to have an additional data layer.


# Personal Information

After starting with `HTML 3.2` in the last century, I became increasingly dissatisfied with `HTML 4.x` and `XHTML` during the browser wars. I stepped away from web development and shifted my focus to networking — particularly remote access, firewalls, and AAA/PKI.

In recent years, my interest has returned to information management and to exploring the web as more than just a presentation layer. Throughout this time, I remained loosely connected to web technologies through my interest in web-based content and infrastructure management systems, as well as the use of various RESTful APIs.

## Disclaimer

The information in this repository has been prepared with care, but no guarantee is given regarding its accuracy or completeness. Use it at your own risk.

# Data

## Public data

Part of the aims is, do provide semantic and machine readable data next to the web presentation layer.

This data should be made public:

```yaml

---
Thing
├── Person (real or fictional)
│     └── subjectOf → WebPage
├── CreativeWork
│     ├── author → Person
│     ├── publisher → Person
│     ├── character → Person
│     └── subjectOf → WebPage
└── WebPage
      └── mainEntity → Thing

```

## Result Query --selector "main data"

If you have [curl]("https://curl.se/") and [JustHTML](https://github.com/EmilStenstrom/justhtml) installed or similar tools, you can easy extract data from a web document. 

This example command: 

`curl -s https://tmp.gedankenfalle.de/html5/example.html | justhtml - --selector "main data" --format text | tr '[:upper:]' '[:lower:]'` 

should return:
 

```text

introduction
significance
relationships
topic
scope
what you really want to say
main argument
point of view
opposing views and counterarguments
criticism
risks
consideration of both sides
bringing together
new, expanded standpoint
every detour teaches you the way
attention is a shy guest, earned, not given
brevity is the soul of wit
quality over quantity.
summary
clearly state the result
outlook and your recommendation

```
