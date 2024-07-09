const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  let splitAge = ages.slice(2);
  let restAge = !splitAge;
  console.log(splitAge);  
  console.log(restAge);

    // const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
    // console.log(totalYears);


// const ageSum = ages.reduce((total, age) => total += age, 0);
// console.log(ageSum);

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

    // const exampleAlgo = ages
    // .map(age => age * 2)
    // .map(age => age - 2)
    // .map(age => age + age)
    // .filter(age => age <= 200);

    // console.log(exampleAlgo);

    // const sortCompanies =  companies.sort((a , b) => (a.start < b.start) ? 1 : -1);
    // console.log(sortCompanies);

    // const oldToYoung = ages.sort((a, b) => (a > b) ? 1 : -1);
    // console.log(oldToYoung);

    // const sortAges = ages.sort((a ,b) => a - b);
    // console.log(sortAges);

// Sqrt ages
  // const sqAge = ages.map(ages => Math.sqrt(ages));
  // console.log(sqAge);


//array of company names using map
// const nameArr = companies.map(company => `${company.name} ${company.start} - ${company.end}`); 
// console.log(nameArr);

//companies >=10yrs
  // let decadeOld = companies.filter(company => ((company.end - company.start) >= 10))  ;
  // console.log(decadeOld);

  // let retailCompany = companies.filter(company => (company.category == "Retail"));
  // console.log(retailCompany);

  // let eightiesCompany = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
  // console.log(eightiesCompany); 


  // canDrink = []
  // canDrink = ages.filter(age => (age >= 21));
  // console.log(canDrink);

  // for (i = 0; i < ages.length; i++) {
  //   if (ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  // console.log(canDrink);


  // let mainDemo = []

  // for (i = 0; i < ages.length; i++) {
  //   if (ages[i] >= 20 && ages[i] <= 60) {
  //     mainDemo.push(ages[i]);
  //   }
  // }
  // console.log(mainDemo);

  // let mainDemoTwo = ages.filter(age => (age >= 20 && age <= 60));
  // console.log(mainDemoTwo)
  // let techCompany = companies.filter(company => (company.category == "Technology"));
  
  // console.log(techCompany);

// Companies last >= 10 yrs
  // const decadeOld = companies.filter (company => (company.end - company.start >= 10));
  // console.log(decadeOld);

  // const TwentyThirty = ages.filter (ages => (ages >= 20 && ages <=40));
  // console.log(TwentyThirty);

// for (let i = 0; i < companies.length; i++) {
//    console.log(companies[i]);
// };

// companies.forEach(function(company){
//     console.log(company);
// })

// let canDrink = []; 

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

// const canDrink = ages.filter(ages => ages >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(companies => companies.category === 'Retail');
// console.log(retailCompanies);

// const startYear = companies.filter(companies => (companies.start >= 1980 && companies.start <= 1989));
// console.log(startYear);