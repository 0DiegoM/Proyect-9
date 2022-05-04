
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "druke.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ['family','Juan','Paco','Mau','Susana'];
var i = 0;          

function update()
{
     i++;
     var numbers_of_fam_in_array = 4;
     if(i > numbers_of_fam_in_array) {
i = 0;
     }  
        var update_image = images[i];
        var update_name = names[i];
     document.getElementById('family_member_image').src = update_image; 
     document.getElementById('family_member_name').innerHTML = update_name;
}

