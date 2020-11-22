function findMenu(path) {
  var menu = ''
  for (menuItem of menuItems) {
    if (path === menuItem.path) {
      menu = path
      if (menu !== '') break
    } else {
      for (submenuItem in menuItem.submenuItems) {
        if (path === submenuItem.path) {
          menu = path
          if (menu !== '') break
        }
      }
    }
  }
  return menu
}
