
const value=document.forms['myform'].querySelector("input");

const a=document.querySelector("#bk1 h3"); // getting first div value
const b=document.querySelector("#bk2 h3");// getting second div value
const c=document.querySelector("#bk3 h3");// getting third div value
const d=document.querySelector("#bk4 h3");// getting fourth div value
const ee=document.querySelector("#bk5 h3");// getting fifth div value
const f=document.querySelector("#bk6 h3");// getting sixth div value

value.addEventListener('input',function(e)
{


const all=document.querySelectorAll(".same");
Array.from(all).forEach(function(item)

{	
	if(e.target.value.length!=0)
	{
		a.innerHTML=e.target.value*110.95+"<br> <h1>PKR</h1>";;
		b.innerHTML=e.target.value*0.82+"<br> <h1>EUR</h1>";
		c.innerHTML=e.target.value*110.87+"<br> <h1>JPY</h1>";
		d.innerHTML=e.target.value*63.89+"<br> <h1>INR</h1>";;
		ee.innerHTML=e.target.value*3.75 +"<br> <h1>SR</h1>";
		f.innerHTML=e.target.value*6.42  +"<br> <h1>YUAN</h1>";
		
	
	item.style.paddingBottom="150px";
	item.style.visibility="visible";
	}

	else
	{
		a.innerHTML="";
		b.innerHTML="";
		c.innerHTML="";
		d.innerHTML="";
		ee.innerHTML="";
		f.innerHTML="";
	item.style.paddingBottom="0px";
	
	
	}

});

});

// adding a focus event on input field.

value.addEventListener('focus',function(e)
{

e.target.style.border="1px solid #606060";
});

// adding a blur event on input field.

value.addEventListener('blur',function(e)
{
e.target.style.border="none";

});