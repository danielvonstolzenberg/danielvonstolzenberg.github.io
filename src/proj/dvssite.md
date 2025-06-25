---
title: "Github Pages - danielvonstolzenberg.github.io"
date: 2025-03-25
author: "Josh"
---

The site you're currently viewing is made using [Elventy](https://www.11ty.dev/), a simple, open source static site generator available through node.js.
It's published using Github Pages. You can view the repository with the site's source code [here](https://github.com/danielvonstolzenberg/danielvonstolzenberg.github.io).
<br>  
After installing Eleventy into my site folder, I set up the .eleventy.js file:
<br>
![](/assets/img/dvssite/eleventyjs.png
)
And this is what the directories look like:  
<br>
![](/assets/img/dvssite/directories.png
)
The first in the chain for the site are the templates in the _includes folder. Base.liquid is the base template for all other templates and for the index.html file.
<br>
![](/assets/img/dvssite/baseliquid.png
)
We then have more templates that are used. The art.liquid file is the template for individual .md files in the art folder.
<br>
![](/assets/img/dvssite/artliquid.png
)
Then within the art folder we reference this template with art.json.
<br>
~[](/assets/img/dvssite/artjson.png
)
Now any .md file placed into the art folder will be under the "art" tag and have the art.liquid layout.
<br>
We also have a a layout for the library:
<br>
![](/assets/img/dvssite/libliquid.png
)
Using liquid we can format the document to automatically input the title, date and author which is at the top of the .md file.
<br>
![](/assets/img/dvssite/artmd.png
)
Then comes the homepage, index.html. This also uses liquid formatting to automatically display the art from the art folder, articles from the library folder...
<br>
![](/assets/img/dvssite/indexhtml.png
)
Now any new .md files added to the folders are automatically added to the homepage, as well as a seperate page for them with the template described in their folder. This makes updating the site intuitive and simple.
This is then built into the build folder when running npm start.
<br>
Lastly I upload this to Github Pages, which uses Github Actions to build. This is configured in /.github/workflows/build.yml.
<br>
![](/assets/img/dvssite/buildyml.png
)
This pushes the origin to main, then it uses node to build the site to the gh-pages branch, with ./build as the published directory which is seen when viewing danielvonstolzenberg.github.io. It uses a secret deploy token provided by github.

Then after authenticating github via an SSH key, I can push using Github Desktop or the VSCode Github extension.

This is then built and deployed on Github Actions.
<br>
![](/assets/img/dvssite/buildeleventy.png
)
![](/assets/img/dvssite/deploy.png
)