---
title: "SQL & Python - simple book manufacturer database filled with scraped data"
date: 2025-04-24
author: "Josh"
---
<br><br>
<section id="projectarticle">
<p>As a starting project to learn SQL, I created a database based off a diagram given to me by Alan. I started by creating the Delivery.., Logistics.. and Document.. tables, connected with foreign keys, then decided to create more connecting tables to fill the database with, starting by webscraping a book store website designed for scraping found <a href="https://books.toscrape.com/">here</a>.</p>
<img src="/assets/img/sqlpython/diagram.png" />
<p>Using this python script I scraped 10 000 books - their names, prices, ratings, availability and a link to their page - all to CSV files which can be imported in to SQL using BULK INSERT.</p>
<img src="/assets/img/sqlpython/scraper.png" />
<p>I then used python to fill temporary tables with random data - driver names, adressess, business names, warehouses, distribution centers... Then using this data I randomly created associated foreign keys.</p>
<p>For example, this script randomly selects dates, route ids and driver ids from the database to fill a temporary logistics route schedule table.</p>
<img src="/assets/img/sqlpython/faker.png" />
<p>I also used more complicated scripts to fill in columns that should be mathematically sound, such as making sure the quantity in item boxes match the overall ordered quantity of the delivery.</p>
<img src="/assets/img/sqlpython/generateboxes.png" />
</section>
<br><br>