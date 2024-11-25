/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 
*/

var maxArea = function (container) {
  let max_area = 0, height = 0, width = 0;
  for(let i = 0; i < container.length; i++){
    for(let j = 1; j < container.length; j++){
       let current_max_area = 0;
       height = Math.min(container[i], container[j]);
       width =(j-i);
       current_max_area = height * width;
       max_area =  Math.max(current_max_area, max_area)
    }
  }
return max_area
};


var maxArea = function (container) {
  let max_area = 0, height = 0, width = 0;
  let head  = 0, tail = container.length-1;

  while(head < tail){
    let current_max_area = 0;
     height = Math.min(container[head], container[tail]);
     width =  tail-head;
     current_max_area  = height * width;
     max_area = Math.max(current_max_area, max_area)
     if(container[head] < container[tail]){
      head++
     }else{
      tail--
     }
  }
 return max_area
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))