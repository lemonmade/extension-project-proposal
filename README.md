# How I imagine this repo would be created

> In these examples, uncommented text is what the developer types/ selects,
> commented text is what the CLI outputs

Start with creating a "project" (technically, I prefer the name "workspace" as a name for the monorepo, but unfortunately tools like Yarn have made that confusing by calling the individual parts of the monorepo "workspaces"):

```sh
shopify create project

# What do you want to name your Shopify app project? This name is
# only for you to identify this project, it will never be shown to
# merchants.

shopify-starter-project

# ✔︎ Created your new Shopify app project in `./shopify-starter-project`
#
# Would you like to connect your Shopify partner account? You’ll need
# a partner account to publish your apps and extensions, but you can
# develop locally and connect your account later if you prefer. If you
# choose to connect now and you don’t already have a partner account,
# we’ll help you create one.
#
# > Connect now
# > Connect later

✔︎ Connect later

# You’re ready to start working on your new Shopify app project!
# Run `cd shopify-starter-project` to see your new project. There won’t
# be much there yet, but you can use the `shopify create` command
# to get started with one of Shopify’s development frameworks:
#
# * `shopify create argo-extension` will create an Argo extension that lets
#   you render natively into Shopify’s admin and checkout
# * `shopify create script` will create a Shopify Script that lets you
#   customize Shopify’s business logic
# * `shopify create app` will create a web application that loads into
#   Shopify’s admin
```

When you want to connect to your partner account to that new project, or you have an existing project you want to connect:

```sh
shopify connect

# In a moment, we’ll open a browser window, and you’ll be asked to authenticate
# into Shopify’s partner dashboard. If you don’t already have an account,
# you’ll need to create one before you can publish your applications and
# extensions.

# NOTE TO READER: open browser, go through oauth flow, CLI does the device
# flow, we get a token we save somewhere locally

# ✔︎ Your Partner account has been connected
#
# From now on, we’ll use your development shop (`https://dev-shop.myshopify.io`)
# for local development. You’ll also be able to push new versions of your
# applications and extensions by running the `shopify publish` command.
```

To start building an Argo extension:

```sh
shopify create argo-extension

# What do you want to name your extension? You can change this later.

my-extension

# Where do you want your new extension to run?
# > Admin
# > Checkout

✔︎ Checkout

# What extension points will your extension support? If you’re not sure,
# pick “Custom feature” for now, which will let merchants choose the position
# of your extension in their checkout.
# [ ] Custom feature (`Checkout::Feature::Render`)
# [ ] Fixed to the top of the checkout (`Checkout::Page::RenderBefore`)
# [ ] Fixed to the bottom of the checkout (`Checkout::Page::RenderAfter`)
# [ ] Before contact information (`Checkout::ContactInformation::RenderBefore`)
# [ ] After contact information (`Checkout::ContactInformation::RenderAfter`)
# ...

[x] Feature (`Checkout::Feature::Render`)

# ✔︎ Created your new extension in `./extensions/my-extension`
# ✔︎ Installed dependencies
#
# Your new `my-extension` extension is ready for you! Next up, run 
# `shopify serve` to start a local development environment and see your extension
# in a real checkout.

shopify serve

# Serving 1 Argo checkout extension, `my-extension`, on
# `https://extensions.shopify-local.dev`. You can see your extension
# in a real checkout by visiting
# `https://dev-shop.myshopify.io/checkouts/1/argo-connect?url=https://extensions.shopify-local.dev`.
# Any changes you make to your extension will be applied automatically.
#
# NOTE TO READER: for workspaces with >1 thing that needs to be served,
# you'd see some output for each of them. If the workspace isn’t connected,
# we could just use some shared Shopify-owned shop for the sample checkout.
```
