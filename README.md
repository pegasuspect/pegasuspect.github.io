# How to Make Your Own Website for Free
[![View an example one-pager.](img/website-screenshot.png)](https://www.osmansekerlen.com/)

## How to create your website for free

  1. [Install Jekyll.](https://jekyllrb.com/docs/installation/)
  3. Place your photo in `/img/profile.png`
  4. (Optional) Update the favicon `/img/icon.png`
  5. Edit `_config.yml` to give your name, email address, social media contacts, etc. You can also update the color scheme.
  6. `_includes` folder is basically content part of your pages. 
    - You can edit content in `/_includes/about_me.html` and `/_includes/interests.html`
  7. `_layouts` is where you keeep the repeating parts of your pages like the template or the html wrapper.
    - You can also edit this part to use different javascript libraries or frameworks.
    - You can redesign this in React even!
  8. Buy a domain name from [GoDaddy](https://www.godaddy.com/) or [NameCheap](https://www.namecheap.com/)
  9. Follow [this guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) to use a custom domain for your free github website.
    - Put your domain into [CNAME file.](./CNAME) starting with www.
    - You might also want to contact you domain provider about the `dig` command.
    - After DNS settings are done with your domain provider, [build your website](https://jekyllrb.com/docs/step-by-step/01-setup/#build) and upload your code to github.
    - Ask all your questions in the [Issues Tab](https://github.com/pegasuspect/pegasuspect.github.io/issues)
