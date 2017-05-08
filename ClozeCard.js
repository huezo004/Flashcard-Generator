

function ClozeCard(text, cloze){

	if(cloze===""){
		console.log("Partial text needed ")
	}

   if( text.includes(cloze)) { 
 
	 if(this instanceof ClozeCard){

      	 this.fullText= text; 
       	 this.cloze= cloze; 
	   	 this.partial=text.replace(cloze, "...") 	
	   	}
	else {return new ClozeCard(text, cloze); }
	}
	else {
		console.log("Partial text needed! "); 
	}

}

module.exports= ClozeCard;    


