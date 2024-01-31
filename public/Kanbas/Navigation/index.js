function MainNavigation(location) {
    const links = [
      {
        name: "Account",
        url: "/Kanbas/Account/Profile/screen.html",
      },
      {
        name: "Dashboard",
        url: "#",
      },
      {
        name: "Courses",
        url: "/Kanbas/Courses/Home/screen.html",
      },
      {
        name: "Calendar",
        url: "#",
      },
      {
        name: "Inbox",
        url: "#",
      },
      {
        name: "History",
        url: "#",
      },
      {
        name: "Studio",
        url: "#",
      },
      {
        name: "Commons",
        url: "#",
      },
      {
        name: "Help",
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