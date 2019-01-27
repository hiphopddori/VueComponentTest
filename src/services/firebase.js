import Firebase from 'firebase'

var config = {
    apiKey:'AIzaSyCXUmlwBgxlrIsirTeElLyO_yHFqCbs3y8'
    ,authDomain:'ddoripwa.firebaseapp.com'
    ,databaseURL:'https://ddoripwa.firebaseio.com'
    ,storageBucket:'ddoripwa.appspot.com'
    ,messagingSdederId:'             '  //초기화 코드

}

let app = Firebase.initializeApp(config)

export const fb = app.database();