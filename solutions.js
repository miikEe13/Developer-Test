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


