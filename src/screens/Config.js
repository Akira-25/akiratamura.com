export default function CONFIG() {
  return ({
    HomeDrawer: {
      path: 'home',
      screens: {
        HomeScreen: 'home',
      },
    },
    //
    AboutDrawer: {
      path: 'about',
      screens: {
        AboutScreen: 'about',
      },
    },
    AppsDrawer: {
      path: 'apps',
      screens: {
        AppsScreen: 'apps',
      },
    },
    // リンクを残したい画面
    StackSimpleNotes: 'simplenotes',
    SimpleNotes: 'home',
    PrivacyPolicy: 'privacypolicy',
  });
}

// queryParams
