## Northcoders News

NC News is a Reddit style news aggregation application.

This repository is for the front end of the application. In order to see the deployed version please click this [link](https://react-nc-news.netlify.com). To view the backend repo click this [link](https://github.com/trozay/nc-news-be/) or to see the hosted version of the [backend](https://new-nc-app.herokuapp.com/api).

Within the frontend, you can view the numerous pages NC-NEWS has to offer, if you are logged in you can comment and like articles, you can like individual comments, and you can delete your own comments and articles.

## Prerequisites
- @reach/router v1.2
- axios v0.1,
- bootstrap v4.3
- react v16.8
- react-dom v16.8
- react-scripts v3
- react-spinners v0.5

## As A user:
You will be able to log in to the web app. From here you can access a list of articles that are currently available, see who authored the article, when it was created and how many votes and comments the article has. Articles can be clicked on to see it's main body, and all of the comments associated. You can vote and down vote articles and comments. If you have logged in as a user (not guest), you can comment on articles and delete your comments. You can view users profile pages and see a list of the artiles that belong to them.

Being able to comment requires you to log in with a legitimate user: try using 'jessjelly'.

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
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Axios](https://www.npmjs.com/package/axios)

## Author

Thomas Robinson
