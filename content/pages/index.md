---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Jarius Thomas
    subtitle: >-
      Software Developer += Robotics Engineer += Digital Artist += Consultant +=
      Instructor
    styles:
      self:
        height: auto
        width: full
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-20
          - pb-10
          - pl-6
          - pr-6
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: center
        fontWeight: 500
      subtitle:
        textAlign: center
        fontWeight: 400
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
    text: ''
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
        altText: See all projects
    showDate: true
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
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
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: 'Projects from Work, Personal, and Academia'
    title: Projects
  - type: FeaturedProjectsSection
    subtitle: Work Experience c. 2019 - 2025
    actions:
      - type: Link
        label: See all projects
        url: /projects
    projects:
      - content/pages/projects/sapient-long.md
      - content/pages/projects/sapient-intern.md
      - content/pages/projects/kidztopros.md
      - content/pages/projects/cultureplay.md
      - content/pages/projects/tfo.md
      - content/pages/projects/lowes.md
    colors: colors-f
    variant: variant-d
    elementId: ''
    showDate: true
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
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
          - pt-24
          - pb-24
@@ -127,224 +64,14 @@ sections:
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    title: Work
  - type: FeaturedItemsSection
    title: ''
    items:
      - type: FeaturedItem
        title: About Me
        subtitle: ''
        text: >
          Some of my favorite programming languages are Python, Java, and
          JavaScript.
          Some topics I really care about include Web Development, Machine
          Learning, Computer Vision, Unmanned Robotics and Industrial Robotics.
          I grew up with a teacher and an engineer as parents; funny enough, the
          jobs I've worked over my career have primarily been as an engineer or
          as a teacher.
        actions:
          - type: Button
            label: ''
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: About This Webpage
        subtitle: ''
        text: >
          I’ve built and shared this website to introduce myself and open up my
          network to new opportunities.
          You can explore the work I’ve done in the past few years, and connect
          with me using the contact resources at the bottom.
          **Tech Stack** of this webpage inlcldues: Node.js, Netlify, GitHub
        actions:
          - type: Button
            label: ''
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: About My Education
        subtitle: ''
        text: |
          Worcester Polytechnic Institute, Class of 2022
          Bach. of Science in Computer Science and Robotics Engineering
          Lambda Chi Alpha Fraternity -- Secretary, Recruitment Committee
        featuredImage:
          type: ImageBlock
          url: /images/gompei in da sweater.jpg
          altText: Item image
          caption: Caption of the image
          elementId: ''
        actions:
          - type: Button
            label: ''
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
    actions: []
    colors: colors-f
    columns: 3
    spacingX: 51
    spacingY: 8
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeaturedPostsSection
    elementId: ''
    colors: colors-f
    variant: variant-d
    subtitle: Featured Posts
    showFeaturedImage: false
    actions:
      - type: Link
        label: See all posts
        url: /blog
    posts:
      - content/pages/blog/post-seven.md
      - content/pages/blog/post-one.md
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Got an interesting project? Tell me more...\U0001F4AC"
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
          width: 1/2
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: updatesConsent
          label: Sign me up to recieve updates
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
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
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
addTitleSuffix: true
