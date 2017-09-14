/*
* Task 1 
*
* Well for this task
*
*
*/
function repeat(element)
{
    (result = Array(4).join("," + element).split(',')).shift()
    return result;
}

//if you want select the "N" times to repeat use

function repeatTimes(element, times)
{
	(result = Array(times+1).join("," + element).split(',')).shift()
	return result;
}


/*
*
* Task 2
*
*/

function reformat(str) {
    var preformat = str.toLowerCase().replace(/[aeiou]/ig,'');
    var final_format = preformat.charAt(0).toUpperCase() + preformat.slice(1);
	return final_format;
}