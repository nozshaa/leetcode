/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(array, idx=null) {
    	if(idx === null) {
		idx = array.length - 1;
	}
	if(idx < 0) {
		return [[]];
	}
	//1: idx = 2 =>ele=3 powerset(array,1)
	//2: idx=1 =>ele=2 powerset(array,0)
	//3: idx=0 => ele=1 powerset(array,-1) = [[]] => length=1 =>for(i=0to<1)
	//subsets1 = [[],[1]]
	//2: ele=2 ,powerset = [[],[1]] => length=2 => for(i=0to<2) => subsets=
	// [2],[1,2]] return [[],[1],[2],[1,2]]
	//3: ele=3, powerset = return [[],[1],[2],[1,2]] => length=4
	// for(i=0to<4) [3],[1,3],[2,3],[1,2,3] => return 
	//[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
	
	const ele = array[idx];
	const subsets1 = subsets(array, idx - 1);
	const length = subsets1.length;
	for(let i = 0; i < length; i++){
		const currentSubset = subsets1[i];
		subsets1.push(currentSubset.concat(ele));
	}
	return subsets1;
};