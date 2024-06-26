# **naswawilantama.com**

---

**_naswawilantama.com_** is a personal portfolio website, It will contain personal information, technical skills, some finished projects and contacts, built using **HTML, CSS and Javascript.**

It will consist of several pages:

1. Home
2. About
3. Projects
4. Contact

This project was designed on Figma, click the link below to look into the design.

[naswawilantama.com](https://www.figma.com/design/rIp4mfha1he0Hxnji9hrCJ/naswawilantama.com?node-id=0-1&t=ujBG9MAMByB0FfbL-1)

## How to run this project

1. clone the repository

```
https://github.com/Endabelyu/naswawilantama.com.git
```

1. install package from package.json

```
npm install
```

## **Progress Bearmentor #4**

- Day 1

1. Introduction with mentor and other mentee.

- Day 2
  1. Learning about design,
  2. UI(CLI, GUI, CLI, VUIs, AR/VR),
  3. aspects of design (color, type space, icon),
  4. steps to build design (sketch, wireframe, mockup),
  5. UI/UX,
  6. design tool [Figma](https://www.figma.com).
- Day 3
  1. Learning about variant operating systems,
  2. code editors with several types,
  3. naming conventions,
  4. markdown,
  5. how to build markdown in our projects.
- Day 4

  1. Learning about the terminal,
  2. command in terminals,
  3. step by step to using terminals with CLI,
  4. What is GIT,
  5. how to use GIT,
  6. Implementation in simple projects.

  try to do CRUD (Create, Read, Update, Delete) terminal:

  1. Create directory
     ![Create Dir](assets/images/terminal-create.png)
  1. Read directory
     ![Read Dir](assets/images/terminal-read.png)
  1. Go to the directory
     ![ Go to Dir](assets/images/read-terminal-2.png)
  1. Rename directory
     ![Rename Dir](assets/images/rename-terminal.png)
  1. Delete directory
     ![Delete Dir](assets/images/delete-terminal.png)

- Day 5
  1. learning about HTML,
  2. tag-tag html,
  3. semantic element html,
  4. learning about hosting website
- Day 6
  1. learning about CSS,
  2. implementation bout some CSS properties
  3. implementation bout grid and layout

##### Try some vanilla CSS for styling in navbar

```css
/* flex */
#navbar {
  display: flex;
  justify-content: space-between;
}

#navbar > nav {
  width: 30rem;
}

#navbar > nav > ul {
  display: flex;
  gap: 1rem;
  padding: 0;
  list-style: none;
}

#navbar > nav > ul > li {
  padding: 0 0.25rem 0 0.25rem;
  border-radius: 0.25rem;
}

#navbar > nav > ul > li:hover {
  background-color: #ffd399;
}

#navbar > nav > ul > li > a {
  color: #a11b1b;
  font-weight: 600;
}
```

```css
/* grid */

#navbar {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}

#navbar > nav {
  width: 30rem;
}
#navbar > nav > ul {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

#navbar > nav > ul > li {
  padding: 0 0.25rem 0 0.25rem;
  border-radius: 0.25rem;
  text-align: center;
}

#navbar > nav > ul > li:hover {
  background-color: #ffd399;
}

#navbar > nav > ul > li > a {
  color: #a11b1b;
  font-weight: 600;
}
```
