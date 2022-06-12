//Q1. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.

var list = ['geek','geekster', 'geeky'];
for(var i=0;i<list.length;i++){
    if(list[i]=='geekster')
    {
        var index = list.findIndex(rank => rank === 'geekster');
        console.log(index);    
    }
        
}



