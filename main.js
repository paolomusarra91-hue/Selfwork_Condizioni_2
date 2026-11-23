let temperatura = -20;

if (temperatura < 20 && temperatura >= 0) {
    console.log("non ci sono più le mezze stagioni");
    
} else if (temperatura >= 20 && temperatura < 30) {
    console.log("mi dia una peroni sudata");
    
} else if (temperatura < 0 && temperatura >= -10) {
    console.log("non è tanto il freddo quanto l’umidità");
    
} else if (temperatura < -10) {
    console.log("copriti…ancora ti raffreddi");
    
} else {console.log("lu mare, lu sole, lu ientu");
}


switch (true) {
    case temperatura < 20 && temperatura >= 0 :
        console.log("non ci sono più le mezze stagioni");
        
        break;

    case temperatura >= 20 && temperatura < 30 :
        console.log("mi dia una peroni sudata");

        break;

    case temperatura < 0 && temperatura >= -10 :
        console.log("non è tanto il freddo quanto l’umidità");

        break;

    case temperatura < -10 :
        console.log("copriti…ancora ti raffreddi");

        break;
            
    default:
        console.log("lu mare, lu sole, lu ientu");
        
        break;
}