Trying to do some "xml-style" structure view 


< App >

    < Header />                             <-- Just Menu
    
    < RandomPlanet >
         < RandomPlanetCard >
            < RandompPlanetItem />          <-- List of data about planet
         </ RandomPlanetCard >
         < RandomPlanetError />             <-- Image and error message (static) 
         < Preloading />                    <-- Single preloader
    </ RandomPlanet >
     
    < MainSection >
            <Lists />
            <ItemInfo> 
                <ListItemMissing /> : < ListItemInfo />
            < ItemInfo />
            < ErrorButton />
    < MainSection />
</ App >