interface Address {
    street: string;  
    city: string;
    state: string;  
    zipCode: string;
    country: string;
  }
  
  interface PhoneNumber {
    type: 'home' | 'work';  
    number: string;   
  }
  
  interface Education {
    degree: string;
    major: string;
    university: string;  
    year: number | string;  
  }
  
  interface EmploymentHistory {
    company: string;  
    position: string;  
    startDate: string; 
    endDate: string | null;
  }

  export interface UserDetailsTypes {
    firstName: string;  
    lastName: string;   
    age: number | string;      
    email: string;    
    address: Address; 
    phoneNumbers: PhoneNumber[];   
    hobbies: string[];             
    education: Education[];        
    employmentHistory: EmploymentHistory[];  
  }