export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashbord",
        icon: "cil-speedometer"
      },
      {
        _name: "CSidebarNavItem",
        name: "Projets",
        to: "/projets",
        icon: "cil-folder"
      },
      {
        _name: "CSidebarNavItem",
        name: "Widgets",
        to: "/widgets",
        icon: "cil-calculator"
      },

      {
        _name: "CSidebarNavDivider",
        _class: "m-2"
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Extras"]
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Pages",
        route: "/pages",
        icon: "cil-star",
        items: [
          {
            name: "Login",
            to: "/pages/login"
          },
          {
            name: "Register",
            to: "/pages/register"
          },
          {
            name: "Error 404",
            to: "/pages/404"
          },
          {
            name: "Error 500",
            to: "/pages/500"
          }
        ]
      }
    ]
  }
];
