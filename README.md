## Northcoders News

This is a front-end project that connects with a back-end api created with react, html, css. This is fully functional CRUD app, that is responsive and interactive.

## Deployment

Install Netlify's CLI

```
npm install netlify-cli -g
```
### Deploy a Draft Version

`netlify deploy`

- Authorise Netlify with GitHub, following the prompts in the browser.
- Select `Create & configure a new site`.
- Provide your choice of site name.
- Select your personal account.
- Provide a deploy path. This needs to point to your build directory and should be `./build`.

Your draft version should now be deployed on a url, e.g. `https://5c13ab16055b9be1725868e6--your-site-name.netlify.com`.
Test it out, make sure that everything is working as expected.

### Deploy a Production Version

`netlify deploy --prod`
Specify your build path again.
This will deploy the site to your actual url: `https://your-site-name.netlify.com`.


## Built With

* [React](https://reactjs.org/)
* HTML
* CSS
