const themes = {
  Age: {
    name: 'Age',
    route: '/age',
    subThemes: {
      'Median Age': {
        name: 'Median Age',
        route: '/age/median',
      },
      'Percentage of people between 0-19 years of age': {
        name: 'Percentage of people between 0-19 years of age',
        route: '/age/0-19',
      },
      'Percentage of people between 20-59 years of age': {
        name: 'Percentage of people between 20-59 years of age',
        route: '/age/20-59',
      },
      'Percentage of people more than 60 years of age': {
        name: '60+',
        route: '/age/60+',
      },
    },
  },
  Education: {
    name: 'Education',
    route: '/education',
    subThemes: {
      'Percentage of people with some form of education': {
        name: 'Percentage of people with some form of education',
        route: '/education/literate',
      },
      'Percentage of people with at most primary education': {
        name: 'Percentage of people with at most primary education',
        route: '/education/primary',
      },
    },
  },
};

export default themes;
