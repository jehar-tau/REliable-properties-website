export const towers = [
  "Future Towers","Aspire Towers","Adreno Towers","Ascent Towers",
  "Metro Towers","Trendy Towers","Neo Towers","Gateway Towers"
];

export const properties = [
  { id:1, slug:"3bhk-future-towers-amanora", title:"3 BHK Fully Furnished Apartment", tower:"Future Towers", purpose:"Sale", price:"₹1.85 Cr", priceValue:18500000, status:"Available", bhk:3, baths:3, area:"1,650 sq.ft.", furnishing:"Fully Furnished", floor:"18th Floor", totalFloors:22, parking:"2 Covered", facing:"East", featured:true, images:6 },
  { id:2, slug:"2bhk-aspire-towers-amanora", title:"2 BHK Semi Furnished Apartment", tower:"Aspire Towers", purpose:"Rent", price:"₹32,000/month", priceValue:32000, status:"Available", bhk:2, baths:2, area:"1,120 sq.ft.", furnishing:"Semi Furnished", floor:"9th Floor", totalFloors:18, parking:"1 Covered", facing:"North", featured:true, images:5 },
  { id:3, slug:"4bhk-villa-gateway-towers-amanora", title:"4 BHK Independent Villa", tower:"Gateway Towers", purpose:"Sale", price:"₹3.2 Cr", priceValue:32000000, status:"Available", bhk:4, baths:4, area:"2,800 sq.ft.", furnishing:"Unfurnished", floor:"Ground+1", totalFloors:2, parking:"3 Open", facing:"South-East", featured:true, images:7 },
  { id:4, slug:"1bhk-studio-neo-towers-amanora", title:"1 BHK Studio Apartment", tower:"Neo Towers", purpose:"Rent", price:"₹22,000/month", priceValue:22000, status:"Available", bhk:1, baths:1, area:"620 sq.ft.", furnishing:"Semi Furnished", floor:"4th Floor", totalFloors:16, parking:"1 Open", facing:"West", featured:false, images:4 },
  { id:5, slug:"2bhk-adreno-towers-amanora", title:"2 BHK Unfurnished Apartment", tower:"Adreno Towers", purpose:"Sale", price:"₹1.1 Cr", priceValue:11000000, status:"Available", bhk:2, baths:2, area:"980 sq.ft.", furnishing:"Unfurnished", floor:"6th Floor", totalFloors:20, parking:"1 Covered", facing:"North-East", featured:true, images:5 },
  { id:6, slug:"3bhk-ascent-towers-amanora", title:"3 BHK Fully Furnished Apartment", tower:"Ascent Towers", purpose:"Rent", price:"₹48,000/month", priceValue:48000, status:"Available", bhk:3, baths:3, area:"1,580 sq.ft.", furnishing:"Fully Furnished", floor:"14th Floor", totalFloors:19, parking:"2 Covered", facing:"East", featured:true, images:6 },
  { id:7, slug:"3bhk-metro-towers-amanora", title:"3 BHK Semi Furnished Apartment", tower:"Metro Towers", purpose:"Sale", price:"₹1.65 Cr", priceValue:16500000, status:"Sold", bhk:3, baths:2, area:"1,490 sq.ft.", furnishing:"Semi Furnished", floor:"11th Floor", totalFloors:18, parking:"1 Covered", facing:"South", featured:false, images:5 },
  { id:8, slug:"2bhk-trendy-towers-amanora", title:"2 BHK Fully Furnished Apartment", tower:"Trendy Towers", purpose:"Rent", price:"₹35,000/month", priceValue:35000, status:"Rented", bhk:2, baths:2, area:"1,050 sq.ft.", furnishing:"Fully Furnished", floor:"7th Floor", totalFloors:15, parking:"1 Covered", facing:"West", featured:false, images:4 },
  { id:9, slug:"4bhk-penthouse-future-towers-amanora", title:"4 BHK Penthouse", tower:"Future Towers", purpose:"Sale", price:"₹4.5 Cr", priceValue:45000000, status:"Available", bhk:4, baths:4, area:"3,100 sq.ft.", furnishing:"Fully Furnished", floor:"24th Floor", totalFloors:24, parking:"3 Covered", facing:"East", featured:true, images:8 },
  { id:10, slug:"1bhk-aspire-towers-amanora", title:"1 BHK Apartment", tower:"Aspire Towers", purpose:"Rent", price:"₹18,000/month", priceValue:18000, status:"Available", bhk:1, baths:1, area:"580 sq.ft.", furnishing:"Semi Furnished", floor:"3rd Floor", totalFloors:18, parking:"1 Open", facing:"North", featured:false, images:4 }
];

export const testimonials = [
  { name:"Rahul & Priya", tower:"Future Towers", text:"Shyam helped us find the right apartment and made the entire process effortless." },
  { name:"Anjali Deshmukh", tower:"Aspire Towers", text:"Honest advice from day one. We never felt pushed into a decision." },
  { name:"Vikram Singh", tower:"Metro Towers", text:"Sold our flat within three weeks at a fair price. Very smooth experience." },
  { name:"Neha & Amit", tower:"Ascent Towers", text:"Shyam understood exactly what we needed and showed us only relevant options." },
  { name:"Suresh Patil", tower:"Gateway Towers", text:"Fifteen years of knowing Amanora shows in every conversation with him." },
  { name:"Priyanka R.", tower:"Neo Towers", text:"Renting through Reliable Properties was quick, transparent and stress-free." }
];

export const services = [
  { name:"Painting", desc:"Painting and wall finishing" },
  { name:"Deep Cleaning", desc:"Home deep-cleaning services" },
  { name:"Electrician", desc:"Electrical installation and repairs" },
  { name:"Plumbing", desc:"Plumbing and maintenance" },
  { name:"Mesh Installation", desc:"Window and balcony mesh solutions" },
  { name:"Furniture", desc:"Furniture sourcing and custom furniture" },
  { name:"Interior Design", desc:"In-house interior design services" },
  { name:"Architecture", desc:"Architectural consultation" },
  { name:"Laundry", desc:"Laundry and dry-cleaning assistance" },
  { name:"Packers & Movers", desc:"Relocation assistance" },
  { name:"Home Loan Assistance", desc:"Support for eligible property buyers" },
  { name:"Other Home Services", desc:"Additional trusted vendor services" }
];

export function waMessage(text){
  return "https://wa.me/919890982473?text=" + encodeURIComponent(text);
}
