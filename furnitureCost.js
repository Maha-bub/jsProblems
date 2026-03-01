/**
 * one peace table cost = 1500 tk
 * one peace chair cost = 1000 tk
 * king size bed cost = 2000 tk
 * */
 function furnitureCost(chairQty,tableQty,bedQty){
    const perCair = 1500;
    const perTable = 1000;
    const perBed = 2000;
      

    const totalChairCost = chairQty*perCair
    const totalTableCost = tableQty*perTable
    const totalBedCost = bedQty*perBed

    const totalFurniturCost = totalChairCost+totalTableCost+totalBedCost;

    return totalFurniturCost;
 }

 const AllFurnitureCost = furnitureCost(6,2,1);
 console.log(AllFurnitureCost);
