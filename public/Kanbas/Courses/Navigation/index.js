function CourseNavigation(location) {
  const links = [
    {
      name: "Home",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Modules",
      url: "#",
    },
    {
      name: "Piazza",
      url: "#",
    },
    {
      name: "Zoom",
      url: "#",
    },
    {
      name: "Assignments",
      url: "/Kanbas/Courses/Assignments/screen.html",
    },
    {
      name: "Grades",
      url: "/Kanbas/Courses/Grades/screen.html",
    },
    {
      name: "YouTube",
      url: "#",
    },
    {
      name: "People",
      url: "#",
    },
    {
      name: "Panapto Video",
      url: "#",
    },
    {
      name: "Disussions",
      url: "#",
    },
    {
      name: "Announcments",
      url: "#",
    },
    {
      name: "Pages",
      url: "#",
    },
    {
      name: "Files",
      url: "#",
    },
    {
      name: "Rubrics",
      url: "#",
    },
    {
      name: "Outcomes",
      url: "#",
    },
    {
      name: "Collaborations",
      url: "#",
    },
    {
      name: "Syllabus",
      url: "#",
    },
    {
      name: "Settings",
      url: "#",
    },
  ];
  //   const location = "Home";
  document.write(`
    <ul style="background-color:lightgray; list-style-type: none; margin:0px; padding:0px">
      ${links
      .map(
        (link) =>
          `<li style="padding:10px; ${location === link.name ? "border-left: 3px solid green;" : ""
          }"><a href="${link.url}"> ${link.name}</a></li>`
      )
      .join("")}
    </ul>
  `);
}