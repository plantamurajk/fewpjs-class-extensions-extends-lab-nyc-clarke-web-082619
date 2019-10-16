// Your code here


class Polygon {
    constructor(sidesArray){
        this.sidesArray = sidesArray;
    }


    get countSides(){
        return this.sidesArray.length;
    }

    get perimeter(){
        return this.sidesArray.reduce((sum=0, num) => {
            return sum + num
        })
    }

}


class Triangle extends Polygon {

    get isValid(){
        let maxSide = Math.max(...this.sidesArray);
        let validSideLengths = (maxSide < (this.perimeter - maxSide));
        return ((this.countSides == 3) && validSideLengths)
    }
}

class Square extends Polygon{

    get area(){
        if (this.isValid){
         return (this.sidesArray[0] ** 2)
        }
    }


    get isValid(){
        let maxSide = Math.max(...this.sidesArray); 
        let minSide = Math.min(...this.sidesArray); 

        return ((this.countSides == 4) && (maxSide == minSide))
    }
}