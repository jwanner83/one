![one](docs/assets/lead.png)

# one

headless cms for next.js based on supabase for developers.

### disclaimer

`one` is in early and active development and currently **not** functional. all the `@one` packages are not published on 
any npm registry and are only available through `pnpm workspace` in the `test/playground` next.js test workspace.

as soon as there is a functional release candidate, a pre-release will be created and the packages will be published. 
soon after that, a small but sweet documentation will follow. (hopefully)

### description

`one` works as a cms wich you wrap around your existing or new next.js page and get functionalities like editing
content and adding pages and posts and many more.

it is **not** a wordpress like solution with a one click installer. the installation requires a developer know react 
and next.js.

### use case

this tool was created because i was tired of using wordpress. i wanted to develop webpages
with modern tools and languages like react with next.js and a backend solution like supabase, without the need of 
writing php. i want to be able to use all the advantages (mostly speed) of the new tools without any sacrifice.  

as well, i was tired of having two separate frontends - one for administrating content and one to display it. i want to 
be able to see, how my page looks as soon as i write content. i dont want to have a preview, i want the real deal as 
i'm writing.

one big advantage of `one` is as well the customization possibilities. you have full control over your next.js 
application without **_any_** limitations. if you want a page with a custom application on it, you can do so like you 
would if you build a page with next.js.

### usage

visit the `test/playground` next.js project to see, how `one` is integrated into a next.js page. you'll see, that its 
really easy and straight forward. 
