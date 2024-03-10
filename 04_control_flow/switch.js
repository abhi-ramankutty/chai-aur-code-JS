const month = 3

switch (month) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case "3":
        console.log('Mar');
        break;
    case 4:
        console.log('April');
        break;

    default:
        console.log('Anything beyond April')
        break;
}
/**
 * NOTES:
 * 
 * The check that happens is a "case" is strict check (===), i.e. 3 and "3" returns a false.  
 * 
 * It is important to put break statement in every case,
 * If any case gets matched and there is no break statement, then all subsequent cases will be executed EXCEPT default case
 */