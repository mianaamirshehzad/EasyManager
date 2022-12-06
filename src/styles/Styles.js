import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    loginImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10

    }, 
    signupImage: {
        flex: 1,
        alignSelf: 'center',
    },
    passwordImage : {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10
    },
    button: {
        backgroundColor: '#4b4df8',
        width: '25%',
        // height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, 
        alignSelf:'center',
        padding: 10,
        margin: 10,    
    }, 
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    }, 
    input :{
        flex: 1,
        paddingLeft: 0,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: 'black',
    }, 
    icon: {
        width: 25,
        height: 25,
    },
    inputViewContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        margin: 5,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 3,
        color: '#4b4df8',
        textShadowColor: 'black',
    },
    bottomText: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 3,
        color: '#4b4df8',
        textShadowColor: 'black',
    },  
    orSignup : {
        fontSize: 20
    },
    header: {
        color: '#4b4df8'
    },
    orSignupImage: {
        padding: 15,
        margin: 10,
        width: 70,
        height: 70,
    },
    textUnderTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 3,
        color: 'white',
        textShadowColor: 'black',
    },
    titleTextDashboard: {
        fontSize: 30, 
        color: 'white', 
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textDashboard: {
        fontSize: 20,
        justifyContent: 'space-evenly',
        // color: 'red'
    },
    topDashboard: {
        backgroundColor: '#4b4df8',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        margin: 5
    },
    expenseContainder: {
        backgroundColor: '#d3d3d3',
        width: '80%',
        padding: 15,
        margin: 5,
        justifyContent: 'center',
    },
    expenseViewContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        margin: 10,
        borderRadius: 20,
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    expenseView : {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
    }, 
    sentEmail: {
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
      
});

export default styles;