/*
const commonData = function(){
    const gridData = [
        {name:'김인철',age:41,team:'os',soju:2}
        ,{name:'김소연',age:27,team:'os',soju:2}
        ,{name:'김은호',age:37,team:'os',soju:1}
    ];

    const gridHeader = [
        '이름','나이','주량'
    ];

    return{
        gridData:gridData
        ,gridHeader:gridHeader
    }
}
*/
const commonData = {
    gridData : [
        {id:1,name:'김인철',age:41,team:'os',soju:2}
        ,{id:2,name:'김소연',age:27,team:'os',soju:2}
        ,{id:3,name:'김은호',age:37,team:'os',soju:1}
    ]
    , gridHeader : [
        {label:'이름',field:'name',type:'String',sortable: false}
        ,{label:'나이',field:'age',type:'number'}        
        ,{label:'주량',field:'soju',type:'number'}        
        
    ]
}
export default commonData;
