// Export all routes that should be in the side menu
import React from "react"
import HomeIcon from "@mui/icons-material/Dashboard"
import SettingsIcon from "@mui/icons-material/Settings"
import ListIcon from "@mui/icons-material/List"

class MenuPath {
  constructor(title, icon, route, pageParams = {}, alias = null) {
    this.title = title
    this.icon = icon
    this.route = route
    this.params = pageParams
    this.alias = alias || title.replace(" ", "_").toLowerCase()
  }
}

export const DashboardMenus = [
  new MenuPath("Dahboard", <HomeIcon />, "/user/dashboard"),
  new MenuPath("Settings", <SettingsIcon />, "/user/settings"),
  new MenuPath("Orders", <ListIcon />, "/user/orders")
]
