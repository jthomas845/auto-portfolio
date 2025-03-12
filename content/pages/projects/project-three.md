---
type: ProjectLayout
title: SailBot
slug: project-three
colors: colors-a
date: '2021-09-01'
client: WPI
description: >-
  The goal of this project was to improve upon prior iterations of SailBot,
  WPI's autonomous robotic sailboat. This was accomplished by improving the
  mechanical, electrical, and software systems in place, plus adding new
  systems. Our overall objective for this iteration is to increase the rigidity
  and reliability of the vehicle.
featuredImage:
  type: ImageBlock
  url: /images/sailbo0t good.jpg
  altText: Project thumbnail image
media:
  type: ImageBlock
  url: /images/sailbo0t cropped.png
  altText: Project image
bottomSections:
  - type: MediaGallerySection
    title: Gallery
    subtitle: ''
    images:
      - type: ImageBlock
        url: /images/YOLO IMG IMG_4405.JPG
        altText: Image two
        caption: >-
          Test Results from early version of the Computer Vision system (only
          works with still images)
        elementId: ''
      - type: ImageBlock
        url: /images/a false positive.png
        altText: Image one
        caption: A  false positive (red Coca Cola can)
        elementId: ''
      - type: ImageBlock
        url: /images/YOLO IMG (final system) IMG_4467.JPG
        altText: Image three
        caption: >-
          Test Results from the final version of the Computer Vision system
          (works with video feed, triangulates distance of buoy)
        elementId: ''
      - type: ImageBlock
        url: /images/sailbo0t good.jpg
        altText: Image four
        caption: Full Sailboat
        elementId: ''
    colors: colors-d
    spacing: 16
    columns: 2
    aspectRatio: '1:1'
    showCaption: true
    enableHover: false
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
endDate: '2022-06-28'
metaTitle: Sailbot
socialImage: /images/sailbo0t cropped.png
---
The goal of this project was to improve upon the 5 prior iterations of SailBot, the autonomous robotic sailboat maintained by WPI. This was accomplished by improving the mechanical, electrical, and software systems already in place, as well as adding new systems. Our overall objective for this iteration is to increase the rigidity and reliability of the vehicle.

The system improvements were influenced by the International Robotics Sailing Regatta (IRSR) rules, to ensure that the vessel would be a
formidable competitor in the SailBot regatta hosted in June of 2022.

I worked on this in a team of eight engineers. Our goal was to improve these systems in order to complete the following IRSR events:

• Remote-controlled fleet race

• Autonomous endurance/long distance event

• Collision avoidance (computer vision, autonomous)

• Precision navigation (GPS positioning, computer vision)

• Station keeping

• Object search and location (computer vission, autonomous)

At the end of this project, we had successfully built and installed a new rigid wingsail, restored electrical systems in the hull (including bluetooth comms and a magnetic ON/OFF switch), re-geared and tested the ballast assembly, written and tested our autonomous sailing algorithms, and trained a YOLOv4 computer vision system for finding buoys and other boats.

Full Report: <https://digital.wpi.edu/pdfviewer/cv43p1245>

GitHub: <https://github.com/wpisailbot/sailbot21-22>
