var library = [ 
    {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true
  },
    {author: 'Steve jobs', title: 'Walter Isaacson', readingStatus: true},
  {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}               
                 ];
  async function PrintOf(){
    for (let counter=0; counter<3;counter++){
      var authorname=library[counter].author;
       var tittlename=library[counter].title;
        var Readingstatus=library[counter].readingStatus;
      console.log(authorname+" , "+tittlename+" , "+Readingstatus);
    }
  }
  PrintOf();



Output:

Bill Gates , The Road Ahead , true
Steve jobs , Walter Isaacson , true
Suzanne Collins , Mockingjay: The Final Book of The Hunger Games , false
