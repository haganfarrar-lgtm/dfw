export interface City {
  slug: string;
  name: string;
  county: string;
  distance: number;
  population: string;
  description: string;
  neighborhoods?: string[];
}

export const cities: City[] = [
  // Top Priority Cities
  { slug: 'colleyville', name: 'Colleyville', county: 'Tarrant', distance: 22, population: '27,000+', description: 'An affluent city known for its large lots, mature trees, and homeowners who take pride in their outdoor spaces.', neighborhoods: ['Montclair Parc', 'Pleasant Run', 'Lakewood Estates', 'Colleyville Heights'] },
  { slug: 'grapevine', name: 'Grapevine', county: 'Tarrant', distance: 21, population: '54,000+', description: 'A historic city with charming character and diverse landscaping needs from historic homes to modern developments near Grapevine Lake.', neighborhoods: ['Lakeside', 'Stone Bridge Oaks', 'Grapevine Lake Estates', 'Silver Lake Estates'] },
  { slug: 'mansfield', name: 'Mansfield', county: 'Tarrant', distance: 0, population: '73,000+', description: 'A thriving community with beautiful residential properties and a strong demand for professional landscaping services.', neighborhoods: ['Walnut Creek', 'Country Club', 'Sugar Creek', 'Creekside'] },
  { slug: 'dallas', name: 'Dallas', county: 'Dallas', distance: 25, population: '1,300,000+', description: 'Major city with endless opportunities for modern, traditional, and sustainable landscape designs.', neighborhoods: ['Oak Cliff', 'Lake Highlands', 'Preston Hollow', 'Lakewood', 'Uptown'] },
  { slug: 'fort-worth', name: 'Fort Worth', county: 'Tarrant', distance: 18, population: '935,000+', description: 'A major metropolitan area with diverse landscaping needs from urban properties to sprawling estates.', neighborhoods: ['Westover Hills', 'Rivercrest', 'Tanglewood', 'Mira Vista', 'Montserrat'] },
  
  // Key DFW Cities (in between)
  { slug: 'southlake', name: 'Southlake', county: 'Tarrant', distance: 24, population: '31,000+', description: 'Affluent community with top-rated schools and luxury estates requiring premium landscape maintenance.', neighborhoods: ['Timarron', 'Shady Oaks', 'Estes Park', 'Southlake Town Square'] },
  { slug: 'arlington', name: 'Arlington', county: 'Tarrant', distance: 7, population: '398,000+', description: 'Home to major sports venues and diverse residential areas requiring professional landscaping.', neighborhoods: ['Viridian', 'Woodland West', 'Interlochen', 'Dalworthington Gardens'] },
  { slug: 'grand-prairie', name: 'Grand Prairie', county: 'Dallas', distance: 9, population: '196,000+', description: 'A growing city with diverse communities and new developments.', neighborhoods: ['Lakeside', 'Great Southwest', 'Mira Lagos'] },
  { slug: 'irving', name: 'Irving', county: 'Dallas', distance: 20, population: '256,000+', description: 'A diverse city near DFW Airport with Las Colinas business district.', neighborhoods: ['Las Colinas', 'Valley Ranch', 'Hackberry Creek'] },
  { slug: 'keller', name: 'Keller', county: 'Tarrant', distance: 20, population: '50,000+', description: 'A thriving community with excellent schools and beautiful family homes.', neighborhoods: ['Hidden Lakes', 'Marshall Ridge', 'Woodland Hills'] },
  { slug: 'bedford', name: 'Bedford', county: 'Tarrant', distance: 16, population: '50,000+', description: 'Well-established community in the mid-cities area.', neighborhoods: ['Meadow Creek Estates', 'Central Park'] },
  { slug: 'euless', name: 'Euless', county: 'Tarrant', distance: 15, population: '60,000+', description: 'Central location in the DFW metroplex with established neighborhoods.', neighborhoods: ['Bear Creek', 'Texas Star'] },
  { slug: 'hurst', name: 'Hurst', county: 'Tarrant', distance: 17, population: '40,000+', description: 'Family-friendly city in mid-cities area near major shopping.', neighborhoods: ['Cimarron Park', 'Brookhollow'] },
  { slug: 'north-richland-hills', name: 'North Richland Hills', county: 'Tarrant', distance: 19, population: '70,000+', description: 'Large suburban community with excellent parks and trails.', neighborhoods: ['Meadow Lakes', 'North Park', 'Iron Horse'] },
  
  // Surrounding Areas
  { slug: 'burleson', name: 'Burleson', county: 'Johnson', distance: 8, population: '51,000+', description: 'A friendly community with small-town charm south of Fort Worth.', neighborhoods: ['Creekside', 'Hidden Creek'] },
  { slug: 'midlothian', name: 'Midlothian', county: 'Ellis', distance: 12, population: '35,000+', description: 'A rapidly growing community known as the Cement City.', neighborhoods: ['Midlothian Meadows', 'Westchester'] },
  { slug: 'cedar-hill', name: 'Cedar Hill', county: 'Dallas', distance: 10, population: '48,000+', description: 'Known for its scenic hillside views and Joe Pool Lake access.', neighborhoods: ['High Pointe', 'Penn Farm'] },
  { slug: 'desoto', name: 'DeSoto', county: 'Dallas', distance: 11, population: '55,000+', description: 'A thriving community in the Best Southwest area.', neighborhoods: ['Hampton Place', 'Westmoreland Estates'] },
  { slug: 'duncanville', name: 'Duncanville', county: 'Dallas', distance: 13, population: '39,000+', description: 'City of Champions, known for its community spirit.', neighborhoods: ['Merrifield', 'Country Brook'] },
  { slug: 'coppell', name: 'Coppell', county: 'Dallas', distance: 23, population: '42,000+', description: 'Well-established community with mature landscaping near DFW Airport.', neighborhoods: ['Riverchase', 'Northlake Woodlands'] },
  { slug: 'lewisville', name: 'Lewisville', county: 'Denton', distance: 30, population: '111,000+', description: 'Growing city with diverse neighborhoods near Lake Lewisville.', neighborhoods: ['Castle Hills', 'Valley Vista'] },
  { slug: 'flower-mound', name: 'Flower Mound', county: 'Denton', distance: 28, population: '79,000+', description: 'Family-friendly community with excellent schools and natural beauty.', neighborhoods: ['Bridlewood', 'Wellington'] },
  { slug: 'plano', name: 'Plano', county: 'Collin', distance: 33, population: '287,000+', description: 'Major city with established neighborhoods and corporate headquarters.', neighborhoods: ['Willow Bend', 'Kings Ridge'] },
  { slug: 'frisco', name: 'Frisco', county: 'Collin', distance: 35, population: '220,000+', description: 'One of the fastest-growing cities in America with modern developments.', neighborhoods: ['Starwood', 'Newman Village'] },
  
  // Extended DFW
  { slug: 'lancaster', name: 'Lancaster', county: 'Dallas', distance: 16, population: '41,000+', description: 'A historic city with modern growth.', neighborhoods: ['Pleasant Run Farms', 'Ten Mile Creek'] },
  { slug: 'waxahachie', name: 'Waxahachie', county: 'Ellis', distance: 20, population: '41,000+', description: 'Known for its Victorian architecture and Gingerbread Trail.', neighborhoods: ['Rockett', 'Greathouse'] },
  { slug: 'red-oak', name: 'Red Oak', county: 'Ellis', distance: 15, population: '13,000+', description: 'A small city with friendly atmosphere.', neighborhoods: ['Red Oak Creek', 'Ovilla Oaks'] },
  { slug: 'ennis', name: 'Ennis', county: 'Ellis', distance: 28, population: '20,000+', description: 'Known as the Bluebonnet City of Texas.', neighborhoods: ['Ennis Meadows', 'South Main'] },
  { slug: 'cleburne', name: 'Cleburne', county: 'Johnson', distance: 22, population: '31,000+', description: 'A charming city with historic downtown and Lake Pat Cleburne.', neighborhoods: ['The Meadows', 'Oak Crest'] },
  { slug: 'weatherford', name: 'Weatherford', county: 'Parker', distance: 42, population: '32,000+', description: 'Historic community west of Fort Worth, Peach Capital of Texas.', neighborhoods: ['Clear Fork', 'Oak Hollow'] },
  { slug: 'denton', name: 'Denton', county: 'Denton', distance: 35, population: '148,000+', description: 'College town with vibrant culture and music scene.', neighborhoods: ['Pecan Creek', 'Robson Ranch'] },
  { slug: 'mckinney', name: 'McKinney', county: 'Collin', distance: 40, population: '199,000+', description: 'Named Best Place to Live in America with historic downtown.', neighborhoods: ['Adriatica', 'Stonebridge Ranch'] },
  { slug: 'allen', name: 'Allen', county: 'Collin', distance: 37, population: '105,000+', description: 'Fast-growing community with amenities and shopping.', neighborhoods: ['Watters Creek', 'Twin Creeks'] },
  { slug: 'richardson', name: 'Richardson', county: 'Dallas', distance: 30, population: '120,000+', description: 'Technology hub with strong economy and established homes.', neighborhoods: ['Canyon Creek', 'Heights'] },
  { slug: 'garland', name: 'Garland', county: 'Dallas', distance: 28, population: '240,000+', description: 'Major city in northeast Dallas County near Lake Ray Hubbard.', neighborhoods: ['Firewheel', 'Duck Creek'] },
  { slug: 'mesquite', name: 'Mesquite', county: 'Dallas', distance: 26, population: '150,000+', description: 'Diverse community with family atmosphere and Rodeo.', neighborhoods: ['Meadowbrook', 'Sunnyvale'] },
  { slug: 'rowlett', name: 'Rowlett', county: 'Dallas', distance: 32, population: '66,000+', description: 'Growing lakeside community on Lake Ray Hubbard.', neighborhoods: ['Pecan Grove', 'Springfield'] },
  { slug: 'rockwall', name: 'Rockwall', county: 'Rockwall', distance: 36, population: '47,000+', description: 'Lakeside city with charm and growth east of Dallas.', neighborhoods: ['The Shores', 'Chandlers Landing'] },
  { slug: 'the-colony', name: 'The Colony', county: 'Denton', distance: 32, population: '45,000+', description: 'Lakeside community with recreation and Grandscape.', neighborhoods: ['The Tribute', 'Stewart Peninsula'] },
  { slug: 'highland-village', name: 'Highland Village', county: 'Denton', distance: 29, population: '16,000+', description: 'Picturesque city near Lewisville Lake with upscale homes.', neighborhoods: ['The Shores', 'Highland Meadows'] },
  { slug: 'farmers-branch', name: 'Farmers Branch', county: 'Dallas', distance: 24, population: '36,000+', description: 'City in a Park with established community near Dallas.', neighborhoods: ['Bent Tree', 'Rawhide'] },
  { slug: 'carrollton', name: 'Carrollton', county: 'Denton', distance: 27, population: '139,000+', description: 'Large suburban city centrally located.', neighborhoods: ['Homestead', 'Oak Hills'] },
  { slug: 'wylie', name: 'Wylie', county: 'Collin', distance: 38, population: '57,000+', description: 'Growing community with small-town feel between the lakes.', neighborhoods: ['Waterstone Estates', 'Woodbridge'] },
  { slug: 'crowley', name: 'Crowley', county: 'Tarrant', distance: 11, population: '16,000+', description: 'Growing community in southern Tarrant County.', neighborhoods: ['Eagle Ranch', 'Remington Park'] },
  { slug: 'kennedale', name: 'Kennedale', county: 'Tarrant', distance: 6, population: '8,500+', description: 'Small city with friendly atmosphere near Arlington.', neighborhoods: ['Kennedale Ridge', 'Briar Meadow'] },
];

export const getCityBySlug = (slug: string) => cities.find(c => c.slug === slug);
export const getAllCitySlugs = () => cities.map(c => c.slug);
export const getNearbyCities = (citySlug: string, limit = 6) => {
  const current = getCityBySlug(citySlug);
  if (!current) return cities.slice(0, limit);
  return cities.filter(c => c.slug !== citySlug).sort((a, b) => a.distance - b.distance).slice(0, limit);
};
