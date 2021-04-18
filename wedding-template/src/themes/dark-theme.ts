import {Theme, createMuiTheme} from '@material-ui/core/styles';

const BarnettFont = {
  fontFamily: 'Barnett',
  fontWeight: 'normal',
  fontStyle: 'normal',
  src: `url('../css/fonts/Barnett/Barnett.eot') format('embedded-opentype'),  url('../css/fonts/Barnett/Barnett.otf')  format('opentype'),
       url('../css/fonts/Barnett/Barnett.woff') format('woff'), url('../css/fonts/Barnett/Barnett.ttf')  format('truetype'), url('../css/fonts/Barnett/Barnett.svg#Barnett') format('svg');
  `,
};

const BodoniFont = {
  fontFamily: 'Bodoni',
  fontWeight: 'normal',
  fontStyle: 'normal',
  src: `url('../css/fonts/Bodoni72Book/BodoniModa72Book.eot') format('embedded-opentype'),  url('../css/fonts/Bodoni72Book/BodoniModa72Book.otf')  format('opentype'),
  url('../css/fonts/Bodoni72Book/BodoniModa72Book.woff') format('woff'), url('../css/fonts/Bodoni72Book/BodoniModa72Book.ttf')  format('truetype'), url('../css/fonts/Bodoni72Book/BodoniModa72Book.svg#BodoniModa72Book') format('svg');
`,
};

export const darkTheme: Theme = createMuiTheme({
  palette:{

    primary:{
      light:'#d1c4e9',
      main: '#5e35b1',//'#512da8', 8cc5a2, 91addb, 8257c1
      dark:'#311b92',
      contrastText:'white',
      //light, dark, contastText
    },
    secondary:{
      light:'#ede7f6',
      main:'#d1c4e9', //#7c4dff, #b388ff
      dark:'#b39ddb',
    }
  },
  typography:{
    //fontFamily: 'BarnettFont',
    h1:{
      fontFamily: 'Barnett !important',
      fontSize:210,
      color: "#e1d9fc", //color:"#8f2cb3",
      textAlign:"center",
      padding:10,
      width:"100%",
    },
    h2:{
      fontFamily: 'Bodoni !important',
      fontSize: 65,
      fontWeight:"bold",
      color: "#4d0074",
      textTransform:"uppercase",
    },
    h3:{
      fontFamily: 'Bodoni !important',
      fontSize: 40,
      fontWeight:"bold",
      textTransform:"uppercase",
      color: "#4d0074",
    },
    h4:{
      fontFamily: 'Bodoni !important',
      fontSize: 20,
      fontWeight:"bold",
      textTransform:"uppercase",
      color: "#4d0074",
    },
    h5:{
      textTransform:'none',
      fontFamily: 'Barnett !important',
      fontSize:70,
      color: "#4d0074",
      lineHeight: 1,
    },
  },
  overrides:{
    MuiCssBaseline:{
      '@global':{
        '@font-face':[BarnettFont, BodoniFont],
      },
    },
  },
});