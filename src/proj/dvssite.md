---
title: "Github Pages - danielvonstolzenberg.github.io"
date: 2025-03-25
author: "Josh"
---

<br><br>
<section id="projectarticle">
<p>The site you're currently viewing is made using <a href="https://www.11ty.dev/">Eleventy</a>, a simple, open source static site generator available through node.js.</p>
<p>It's published using Github Pages. You can view the repository with the site's source code <a href="https://github.com/danielvonstolzenberg/danielvonstolzenberg.github.io">here</a>.</p>
<p>After installing Eleventy into my site folder, I set up the .eleventy.js file.</p>
<img src="/assets/img/dvssite/eleventyjs.png" />
<p>And this is what the directories look like:</p>
<img src="/assets/img/dvssite/directories.png" />
<p>The first in the chain for the site are the templates in the _includes folder. Base.liquid is the base template for all other templates and for the index.html file.</p>
<img src="/assets/img/dvssite/baseliquid.png" />
<p>We then have more templates that are used. The art.liquid file is the template for individual .md files in the art folder.</p>
<img src="/assets/img/dvssite/artliquid.png" />
<p>Then within the art folder we reference this template with art.json.</p>
<img src="/assets/img/dvssite/artjson.png" />
<p>Now any .md file placed into the art folder will be under the "art" tag and have the art.liquid layout.</p>
<p>We also have a a layout for the library:</p>
<img src="/assets/img/dvssite/libliquid.png" />
<p>Using liquid we can format the document to automatically input the title, date and author which is at the top of the .md file.</p>
<img src="/assets/img/dvssite/artmd.png" />
<p>Then comes the homepage, index.html. This also uses liquid formatting to automatically display the art from the art folder, articles from the library folder...</p>
<img src="/assets/img/dvssite/indexhtml.png" />
<p>Now any new .md files added to the folders are automatically added to the homepage, as well as a seperate page for them with the template described in their folder. This makes updating the site intuitive and simple.</p>
<p>This is then built into the build folder when running npm start.</p>
<p>Lastly I upload this to Github Pages, which uses Github Actions to build. This is configured in /.github/workflows/build.yml.</p>
<img src="/assets/img/dvssite/buildyml.png" />
<p>This pushes the origin to main, then it uses node to build the site to the gh-pages branch, with ./build as the published directory which is seen when viewing danielvonstolzenberg.github.io. It uses a secret deploy token provided by github.</p>
<p>Then after authenticating github via an SSH key, I can push using Github Desktop or the VSCode Github extension.</p>
<p>This is then built and deployed on Github Actions.</p>
<img src="/assets/img/dvssite/build eleventy.png" />
<img src="/assets/img/dvssite/deploy.png" />
</section>
<br><br>