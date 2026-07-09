const products = [

{
    id:1,
    name:"Anime Mage",
    price:337500,
    oldPrice:450000,
    image:"https://t4.ftcdn.net/jpg/03/50/11/79/360_F_350117912_FLYQkeDzhwB55wMSRb8nPMWzIZuvtJhz.jpg",
    description:"High Quality Anime Figure made from premium material."
},
{
    id: 2,
    name: "Lamborghini Huracán EVO",
    price: 195750,
    oldPrice: 261000,
    image: "./image-car/image1.jpg",
    description: "High-performance Italian supercar with a naturally aspirated V10 engine, premium interior, and advanced driving technology."
},
{
    id: 3,
    name: "Bugatti Bolide",
    price: 3525000,
    oldPrice: 4700000,
    image: "https://blogs.gomechanic.com/wp-content/uploads/2024/11/fastest_web_absolut.jpg",
    description: "The Bugatti Bolide is an ultra-exclusive track-only hypercar powered by an 8.0L quad-turbocharged W16 engine producing 1,600 PS. Built with lightweight carbon fiber, it delivers extreme performance, advanced aerodynamics, and breathtaking speed."
},
{
    id: 4,
    name: "Hennessey Venom F5",
    price: 1575000,
    oldPrice: 2100000,
    image: "https://www.borderlesscar.com/wp-content/uploads/2025/11/Hennessey-Venom-F5-1024x529.jpg",
    description: "The Hennessey Venom F5 is an American hypercar powered by a 6.6L twin-turbocharged V8 engine producing 1,817 horsepower. Built with a lightweight carbon-fiber chassis, it offers breathtaking acceleration, cutting-edge aerodynamics, and a top speed exceeding 300 mph."
},
{
    id: 5,
    name: "Rimac Nevera",
    price: 1650000,
    oldPrice: 2200000,
    image: "./image-car/image4.webp",
    description: "The Rimac Nevera is an all-electric Croatian hypercar powered by four electric motors producing 1,914 horsepower. It features a carbon-fiber monocoque chassis, advanced torque vectoring, breathtaking acceleration, and a top speed of 258 mph (412 km/h)."
},
{
    id: 6,
    name: "McLaren 720S",
    price: 232500,
    oldPrice: 310000,
    image: "./image-car/image6.jpg",
    description: "The McLaren 720S is a British supercar powered by a 4.0-liter twin-turbocharged V8 engine producing 710 horsepower. It features a lightweight carbon-fiber Monocage II chassis, exceptional aerodynamics, lightning-fast acceleration from 0–60 mph in 2.8 seconds, and a top speed of 212 mph (341 km/h)."
},
{
    id: 7,
    name: "Koenigsegg Jesko",
    price: 2250000,
    oldPrice: 3000000,
    image: "./image-car/image7.jpg",
    description: "The Koenigsegg Jesko is a Swedish hypercar powered by a 5.0-liter twin-turbocharged V8 engine producing up to 1,600 horsepower on E85 fuel. It features an ultra-light carbon-fiber monocoque, advanced active aerodynamics, a revolutionary 9-speed Light Speed Transmission (LST), and a top speed exceeding 300 mph, making it one of the fastest production cars ever built."
},
{
    id: 8,
    name: "Koenigsegg Jesko Absolut",
    price: 2550000,
    oldPrice: 3400000,
    image: "./image-car/image8.jpg",
    description: "The Koenigsegg Jesko Absolut is a Swedish hypercar engineered for ultimate top-speed performance. Powered by a 5.0-liter twin-turbocharged V8 producing up to 1,600 horsepower on E85 fuel, it features a lightweight carbon-fiber monocoque, the revolutionary 9-speed Light Speed Transmission (LST), optimized low-drag aerodynamics, and a theoretical top speed exceeding 330 mph, making it one of the fastest production cars ever created."
},
{
    id: 9,
    name: "McLaren Artura",
    price: 190575,
    oldPrice: 254100,
    image: "./image-car/image9.jpg",
    description: "The McLaren Artura is a British hybrid supercar powered by a 3.0-liter twin-turbocharged V6 engine combined with an electric motor producing 671 horsepower. It features a lightweight carbon-fiber chassis, advanced hybrid technology, rapid acceleration, and a top speed of 205 mph (330 km/h)."
},

{
    id: 10,
    name: "McLaren Artura Special Edition",
    price: 206250,
    oldPrice: 275000,
    image: "./image-car/image10.jpg",
    description: "The McLaren Artura Special Edition combines advanced hybrid performance with exclusive styling. Powered by a twin-turbocharged V6 hybrid powertrain, it delivers impressive acceleration, lightweight construction, aerodynamic design, and premium craftsmanship for a unique driving experience."
},

{
    id: 11,
    name: "Alpine Alpenglow Concept",
    price: 900000,
    oldPrice: 1200000,
    image: "./image-car/image11.jpg",
    description: "The Alpine Alpenglow Concept is a futuristic French hypercar concept designed with hydrogen-powered technology. It features extreme aerodynamic styling, lightweight construction, racing-inspired performance, and represents the future vision of high-performance sustainable sports cars."
},

{
    id: 12,
    name: "Praga Bohema",
    price: 975000,
    oldPrice: 1300000,
    image: "./image-car/image12.jpg",
    description: "The Praga Bohema is a Czech lightweight hypercar powered by a twin-turbocharged V6 engine producing around 700 horsepower. It features a carbon-fiber body, advanced aerodynamics, track-focused handling, and a road-legal racing design."
},

{
    id: 13,
    name: "Ferrari F80",
    price: 2925000,
    oldPrice: 3900000,
    image: "./image-car/image13.jpg",
    description: "The Ferrari F80 is a next-generation Italian hypercar inspired by Formula 1 technology. It features a hybrid powertrain, advanced aerodynamics, carbon-fiber construction, extreme performance, and cutting-edge Ferrari engineering."
},

{
    id: 14,
    name: "Ferrari F80",
    price: 3075000,
    oldPrice: 4100000,
    image: "./image-car/image14.jpeg",
    description: "The Ferrari F80 represents Ferrari's future vision of ultimate performance. With advanced hybrid technology, aggressive aerodynamic design, and motorsport-inspired engineering, it delivers exceptional speed and driving dynamics."
},

{
    id: 15,
    name: "Hennessey Venom F5 Stealth Series",
    price: 1875000,
    oldPrice: 2500000,
    image: "./image-car/image15.jpg",
    description: "The Hennessey Venom F5 Stealth Series is an American hypercar powered by a 6.6-liter twin-turbocharged V8 engine producing over 1,800 horsepower. It features carbon-fiber construction, extreme aerodynamics, and is engineered for record-breaking speed."
},

{
    id: 16,
    name: "Hennessey Venom F5",
    price: 1575000,
    oldPrice: 2100000,
    image: "./image-car/image16.jpg",
    description: "The Hennessey Venom F5 is an American hypercar built for extreme performance. Powered by a twin-turbocharged V8 engine producing 1,817 horsepower, it features a lightweight carbon-fiber chassis, advanced aerodynamics, and a goal of exceeding 300 mph."
},
{
    id: 17,
    name: "Hennessey Venom F5",
    price: 1575000,
    oldPrice: 2100000,
    image: "./image-car/image17.jpg",
    description: "The Hennessey Venom F5 is an American hypercar powered by a 6.6-liter twin-turbocharged V8 engine producing 1,817 horsepower. It features a lightweight carbon-fiber chassis, advanced aerodynamics, extreme acceleration, and is designed to achieve speeds above 300 mph."
},

{
    id: 18,
    name: "Hennessey Venom F5 Special Edition",
    price: 2100000,
    oldPrice: 2800000,
    image: "./image-car/image18.avif",
    description: "The Hennessey Venom F5 Special Edition is an exclusive American hypercar focused on maximum performance and aerodynamic efficiency. With a powerful twin-turbo V8 engine, carbon-fiber construction, and advanced engineering, it delivers world-class speed and track capability."
},
{
    id: 19,
    name: "Luxury Sports Car",
    price: 637500,
    oldPrice: 850000,
    image: "./image-car/image19.jpg",
    description: "A premium luxury sports car featuring an elegant aerodynamic design, advanced engineering, high-performance capability, and modern styling. Built for drivers who want a combination of speed, comfort, and exclusive design."
},
{
    id: 20,
    name: "Hennessey Venom F5",
    price: 1650000,
    oldPrice: 2200000,
    image: "./image-car/image20.jpg",
    description: "The Hennessey Venom F5 is an American hypercar designed for extreme speed and performance. It is powered by a 6.6-liter twin-turbocharged V8 engine producing 1,817 horsepower, featuring a lightweight carbon-fiber chassis, advanced aerodynamics, and a goal of achieving speeds above 300 mph."
},
{
    id: 21,
    name: "Praga Bohema",
    price: 975000,
    oldPrice: 1300000,
    image: "./image-car/image21.jpg",
    description: "The Praga Bohema is a Czech lightweight hypercar built for both road and track performance. It is powered by a twin-turbocharged V6 engine producing around 700 horsepower, featuring a carbon-fiber body, advanced aerodynamics, racing-inspired design, and exceptional handling."
},
{
    id: 22,
    name: "Hennessey Venom F5 Revolution",
    price: 2025000,
    oldPrice: 2700000,
    image: "./image-car/image22.jpg",
    description: "The Hennessey Venom F5 Revolution is a track-focused American hypercar powered by a 6.6-liter twin-turbocharged V8 engine producing 1,817 horsepower. It features extreme aerodynamics, lightweight carbon-fiber construction, race-inspired suspension, and advanced performance engineering."
},
{
    id: 23,
    name: "Bugatti Chiron Super Sport",
    price: 3000000,
    oldPrice: 4000000,
    image: "./image-car/image23.jpg",
    description: "The Bugatti Chiron Super Sport is a French hypercar powered by an 8.0-liter quad-turbo W16 engine producing 1,578 horsepower. It combines luxury craftsmanship, aerodynamic efficiency, extreme acceleration, and a top speed of over 440 km/h."
},
{
    id: 24,
    name: "Koenigsegg Gemera",
    price: 1725000,
    oldPrice: 2300000,
    image: "./image-car/image24.jpg",
    description: "The Koenigsegg Gemera is a Swedish four-seat hypercar featuring advanced hybrid technology. It combines a twin-turbocharged engine with electric motors producing over 1,700 horsepower, offering extreme performance with luxury and practicality."
}


];