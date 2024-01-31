function AccountNavigation(location) {
    const links = [
      {
        name: "Notifications",
        url: "#",
      },
      {
        name: "Profile",
        url: "/Kanbas/Account/Profile/screen.html",
      },
      {
        name: "Files",
        url: "#",
      },
      {
        name: "Settings",
        url: "#",
      },
      {
        name: "ePortfolios",
        url: "#",
      },
      {
        name: "Shared Content",
        url: "#",
      },
      {
        name: "The Hub",
        url: "#",
      },
      {
        name: "Qwickly Course Tools",
        url: "#",
      },
      {
        name: "Global Announcements",
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