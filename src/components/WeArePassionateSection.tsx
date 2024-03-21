import React from 'react';


const NewSection = () => {
  return (
   
        <section
        className="text-center w-full relative overflow-hidden flex items-center justify-center"
        style={{ background: '#15253E', height: '503px' }}
      >
      {/* Text Container */}
      <div className="flex-1 px-4">
        <div style={{ color: 'white', fontSize: 56, fontWeight: '700' }}>Vi är</div>
        <div style={{ color: '#33ABBD', fontSize: 56, fontWeight: '700' }}>passionerade</div>
        <div style={{ width: '100%', color: 'white', fontSize: 20, fontWeight: '400' }}>
          Vi är passionerade – det ligger i vårt DNA.<br/>
          Vi är nyfikna på alla våra uppdragsgivares olika branscher, men också på de möjligheter vi med teknikens hjälp kan skapa tillsammans.<br/><br/>
          Vi är alltid lojala mot uppgiften, drar oss inte för att utmana det förväntade och släpper inte greppet förrän vi levererat en lösning vi alla kan vara stolta över
        </div>
      </div>
      
      {/* Image Container */}
      <div className="flex-1">
        <img src="public/images/imageDaniel.jpeg" alt="Beskrivande text" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  );
};

export default NewSection;
