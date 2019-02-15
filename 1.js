function getfile(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open('GET',file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send(null);

}

getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	language(data.language);

});
 
 var left=document.querySelector(".left");
 function profile(e){
 	var img=document.createElement("img");
 	img.src=e.img;
 	left.appendChild(img);
 	var h2=document.createElement("h2");
 	h2.textContent=e.name;
 	left.appendChild(h2);
 	var h2=document.createElement("h2");
 	h2.textContent=e.rollno;
 	left.appendChild(h2);
 	var h2=document.createElement("h2");
 	h2.textContent=e.place;
 	left.appendChild(h2);
 	var h2=document.createElement("h2");
 	h2.textContent=e.des;
 	left.appendChild(h2);

 }

 var right=document.querySelector(".right");
 function career(e){
  	var h1=document.createElement("h1");
 	h1.innerHTML="RESUME BUILDING";
  	right.appendChild(h1);
  	var e1=document.createElement("h2");
  	e1.textContent="career objective";
  	right.appendChild(e1);
  	var hr=document.createElement("hr");
  	right.appendChild(hr);
  	var p=document.createElement("p");
  	p.textContent=e.info;
  	right.appendChild(p);


  }
  function education(e){
  	var ww=document.createElement("h2");
  	ww.innerHTML="Education details";
  	right.appendChild(ww);
  	var ww1=document.createElement("hr");
  	right.appendChild(ww1);
  	var table=document.createElement("table");
  	table.border="1";
  	var tr1="<tr><td>s.no</td><td>degree</td><td>institution</td><td>Per</td><td>yop</td></tr>";
  	var tr2="";
  	for(i=0;i<e.length;i++)
  	{
  		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td></tr>";
  	}
  	table.innerHTML=tr1+tr2;
  	right.appendChild(table);

  }
  function language(e){
 	var h2=document.createElement("h2");
  	ee.textContent="known languages";
  	right.appendChild(ee);
 	var tt=document.createElement("hr");
  	right.append(tt);
 	var ul=document.createElement("ul");
 	right.appendChild(ul);
  	for(i=0;i<e.length;i++)
 	{
  		var li=document.createElement("li");
  		li.textContent=e[i].lang;
  		ul.appendChild(li);
 	}
 	right.appendChild(ul);
 }
// 	xhr.onreadystatechange=function(){
// 		if (xhr.readyState===4 && xhr.status=="200"){

// 			callback(xhr.responseText);
// 			console.log("hello");

// 		}
// 	}
// 	xhr.send(null);

// }

// getfile("dynamic.json",function(text){
// 	var data=JSON.parse(text);
// 	console.log(data);
// });*/*/*/*/*/*/