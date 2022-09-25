

/**
 *  @description: 验证数值范围
 */
const testNumber = (num,min,max) => {
	if(!isNaN(num)){
		if(num > max || num < min){
			return false
		}else{
			return true
		}
	}else{
		return false
	}
}
export {imgurl,translateFilter,testNumber}