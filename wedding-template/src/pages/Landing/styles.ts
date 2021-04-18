import { makeStyles, Theme } from "@material-ui/core";
import { style, media } from 'typestyle';

export const LandingPageStyles = makeStyles((theme: Theme) => ({
    root:{
        width:"100%",
        height:"100%",
        backgroundImage:'url(' + require('./purpCust2.png') + ')',
        //background: "rgb(126,81,190)",
        background: "linear-gradient(90deg, rgba(126,81,190,1) 0%, rgba(212,203,246,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        //backgroundColor: "#caa6d4",
    },
    mainMessage:{
        paddingLeft:80, 
    },
    subscription:{
        position:'absolute', //comment out for smaller devices
        bottom:'8%',
        right:'8%',
        //height:'100%',
    },
    saveHeading:{
        position:'absolute', //comment out for smaller devices
        top:'2%',
        left:'1%',
    }
}));

export const mainMessageMobileViews = style(
    media({ minWidth: 0, maxWidth: 820},{
      paddingLeft:'unset',
    }),  
  );

export const imgMobileViews = style(
    media({ minWidth: 0, maxWidth: 344}, { 
        top:'unset',  
        left:'unset', 
        position:'unset', 
        maxWidth:190,
    }),
    media({ minWidth: 345, maxWidth: 360 }, { 
        top:'unset',  
        left:'unset', 
        position:'unset', 
        maxWidth:230,
    }),
    media({ minWidth: 361, maxWidth: 375 }, { 
        maxWidth:200,
        //display:'flex', 
        top:'unset',  
        left:'unset', 
        position:'unset', 
    }),
    media({ minWidth: 376, maxWidth: 415 }, { 
        maxWidth:270,
        //display:'flex', 
        top:'unset',  
        left:'unset', 
        position:'unset', 
     }),
    media({ minWidth: 416, maxWidth: 799 }, { 
        maxWidth:350,
       // display:'flex', 
        top:'unset',  
        left:'unset', 
        position:'unset', 
      }),
      media({ minWidth: 800, maxWidth: 900 }, { 
        maxWidth:450,
       // display:'flex', 
        top:'unset',  
        left:'unset', 
        position:'unset', 
      }),
      media({ minWidth: 901, maxWidth: 1199 }, { 
        maxWidth:400,
        paddingBottom:10
      }),
      media({ minWidth: 1200, maxWidth: 1350 }, { 
        maxWidth:500,
        paddingBottom:10
      }),
      media({ minWidth: 1350, maxWidth: 1430, minHeight:520, maxHeight: 630}, { 
        maxWidth:400,
        paddingBottom:10
      }),
  );

export const subscriptionMobileViews = style(
    media({ minWidth: 0, maxWidth: 360 }, { 
        bottom:'unset',
        right:'unset',
        position:'unset',
        backgroundColor:'rgba(209, 196, 233, .3)',
        borderRadius: '30px',
        width:'80%'
    }),
    media({ minWidth: 361, maxWidth: 375 }, { 
        bottom:'unset',
        right:'unset',
        position:'unset',
        backgroundColor:'rgba(209, 196, 233, .3)',
        borderRadius: '30px',
    }),
    media({ minWidth: 376, maxWidth: 415 }, { 
        bottom:'unset',
        right:'unset',
        position:'unset',
        backgroundColor:'rgba(209, 196, 233, .3)',
        borderRadius: '30px',
     }),
    media({ minWidth: 416, maxWidth: 900 }, { 
        bottom:'unset',
        right:'unset',
        position:'unset',
        backgroundColor:'rgba(209, 196, 233, .3)',
        borderRadius: '30px',
      }),
      media({ minWidth: 901, maxWidth: 1330 }, {
        bottom:'6%',
        right:'6%',
       }),
  );
  
export const mainMobileViews = style(
  media({ minWidth: 361, maxWidth: 820},{
    height:'unset',
    paddingTop:50,
  }),  
  media({ minWidth: 0, maxWidth: 360},{
    height:'unset',
   //paddingTop:70,
  }), 
);


export const MainMessageStyles = makeStyles((theme: Theme) => ({
    root:{
        //margin:"auto",
        width:"100%",
        //height:770,

    },
    saveTheDateHeading:{
        lineHeight:.65,
        fontFamily:'Barnett !important'
    //     background: "-webkit-linear-gradient(45deg, rgba(253,249,255,1) 0%, rgba(143,44,179,1) 100%)",
    //     WebkitBackgroundClip: "text",
    //     WebkitTextFillColor: "transparent",
    },
    supportingText:{
        //color: "#4d0074",
        textAlign:"center",
        padding:10,
        paddingTop:30,
    },
    head2:{
      paddingTop:'unset',
    },
}));

export const supportingTextViews = style(
    media({ minWidth: 0, maxWidth: 900},{
        padding:0,
    }),  
  );

export const head2MobileViews = style(
    media({minWidth: 0, maxWidth: 415}, {
        fontSize:50,
    }),
);
export const head3MobileViews = style(
    media({minWidth: 0, maxWidth: 415}, {
        fontSize:25,
    }),
);
export const head4MobileViews = style(
    media({minWidth: 0, maxWidth: 415}, {
        fontSize:17,
    }),
);
export const head5MobileViews = style(
    media({minWidth: 0, maxWidth: 415}, {
        paddingTop:5,
        fontSize:45,
    }),
);
  