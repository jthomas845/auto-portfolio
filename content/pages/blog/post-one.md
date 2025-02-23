---
type: PostLayout
title: "How I started a website\U0001F680"
slug: post-one
colors: colors-a
date: '2025-02-07'
author: content/data/team/doris-soto.json
excerpt: >-
  I've wanted to start a webpage to share my portfolio and experiences, but how
  to build and deploy it?
bottomSections:
  - elementId: ''
    type: RecentPostsSection
    colors: colors-f
    variant: variant-d
    subtitle: Recent posts
    showDate: true
    showAuthor: false
    showExcerpt: true
    recentCount: 2
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: center
    showFeaturedImage: true
    showReadMoreLink: true
  - type: ContactSection
    backgroundSize: full
    title: Stay up-to-date with my words ✍️
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: updatesConsent
          label: Sign me up to recieve my words
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
media:
  type: ImageBlock
  url: /images/post-1.jpg
  altText: altText of the image
  caption: Caption of the image
  elementId: ''
featuredImage:
  type: ImageBlock
  url: /images/post-1.jpg
  altText: altText of the image
  caption: Caption of the image
  elementId: ''
backgroundImage:
  type: BackgroundImage
  url: /images/dark conc final.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
metaTitle: blog-howistartedwebsite
---
I've long wanted to start a webpage to share my portfolio and experiences, but how to build and deploy it?

I did some research (was initially considering AWS Free Tier for deployment, for example), and along the way I found a Reddit thread where someone recommended Netlify for hosting content and deploying their own website. There were HEAVY upvotes on that comment. I had never heard of the service, so I gave it a deeper dive. After making a test account and sifting their products, I determined that Netlify would let me

*   launch quickly

*   manage content (jobs, pages, images) within a CMS with minimal learning curve

*   sync all content into GitHub, letting me showcase JavaScript/TS/React/Next.js experience outside of a corporate client

and with this, the decision was easy! I set up Netlify, filled the CMS with my work and projects, customized the content (and added some new components on top of the template), and cloned the repo to my local machine for easy future updates.

Now here we are!
