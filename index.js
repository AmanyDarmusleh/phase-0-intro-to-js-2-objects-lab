// Write your solution in this file!
const employee={
    name:"Amany",
    streetAddress:"xstreet",
};


function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }


const newEmployee = nondestructivelyUpdateObject(
   employee,
    "name",
    "mona",
    )
    
    function destructivelyUpdateObject(obj, key, value) {
        obj[key] = value; 
      
        return obj;
      }

      const newNewEmployee = destructivelyUpdateObject(employee, "streetAddress", "streetY");

       delete newNewEmployee.name; 

   