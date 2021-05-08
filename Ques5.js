var array = [
  {“id” : 4, “name” : “abc”},
  {“id” : 10, “name” : “ab2”},
  {“id” : 5, “name” : “abc3”},
  {“id” : 6, “name” : “abc5”}
];    

function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
    
array.sort(GetSortOrder("id"));   

console.log(array);    
